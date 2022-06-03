import type { LinkProps } from "@remix-run/react";
import { Link } from "@remix-run/react";
import React from "react";
import type { getEnv } from "./env.server";

function getRequiredGlobalEnvVar(
  key: keyof ReturnType<typeof getEnv>,
  devValue?: string
) {
  return getRequiredEnvVarFromObj(ENV, key, devValue);
}

function getRequiredServerEnvVar(key: string, devValue?: string) {
  return getRequiredEnvVarFromObj(process.env, key, devValue);
}

function getRequiredEnvVarFromObj(
  obj: Record<string, string | undefined>,
  key: string,
  devValue: string = `${key}-dev-value`
) {
  let value = devValue;
  const envVal = obj[key];
  if (envVal) {
    value = envVal;
  } else if (obj.NODE_ENV === "production") {
    throw new Error(`${key} is a required env variable`);
  }
  return value;
}

const useSSRLayoutEffect =
  typeof window === "undefined" ? () => {} : React.useLayoutEffect;

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const AnchorOrLink = React.forwardRef<
  HTMLAnchorElement,
  AnchorProps & {
    reload?: boolean;
    to?: LinkProps["to"];
    prefetch?: LinkProps["prefetch"];
  }
>(function AnchorOrLink(props, ref) {
  const {
    to,
    href,
    download,
    reload = false,
    prefetch,
    children,
    ...rest
  } = props;
  let toUrl = "";
  let shouldUserRegularAnchor = reload || download;

  if (!shouldUserRegularAnchor && typeof href === "string") {
    shouldUserRegularAnchor = href.includes(":") || href.startsWith("#");
  }

  if (!shouldUserRegularAnchor && typeof to === "string") {
    toUrl = to;
    shouldUserRegularAnchor = to.includes(":");
  }

  if (!shouldUserRegularAnchor && typeof to === "object") {
    toUrl = `${to.pathname ?? ""}${to.hash ? `#${to.hash}` : ""}${
      to.search ? `?${to.search}` : ""
    }`;
    shouldUserRegularAnchor = to.pathname?.includes(":");
  }

  if (shouldUserRegularAnchor) {
    return (
      <a {...rest} download={download} href={href ?? toUrl} ref={ref}>
        {children}
      </a>
    );
  } else {
    return (
      <Link prefetch={prefetch} to={to ?? href ?? ""} {...rest} ref={ref}>
        {children}
      </Link>
    );
  }
});

function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

function removeTrailingSlash(s: string) {
  return s.endsWith("/") ? s.slice(0, -1) : s;
}

function getDisplayUrl(requestInfo?: { origin: string; path: string }) {
  return getUrl(requestInfo).replace(/^https?:\/\//, "");
}

function getUrl(requestInfo?: { origin: string; path: string }) {
  return removeTrailingSlash(
    `${requestInfo?.origin ?? "https://damn.com"}${requestInfo?.path ?? ""}`
  );
}

function toBase64(string: string) {
  if (typeof window === "undefined") {
    return Buffer.from(string).toString("base64");
  } else {
    return window.btoa(string);
  }
}

function debounce<Callback extends (...args: Array<unknown>) => void>(
  fn: Callback,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<Callback>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function useDebounce<Callback extends (...args: Array<unknown>) => unknown>(
  callback: Callback,
  delay: number
) {
  const callbackRef = React.useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return React.useMemo(
    () => debounce((...args) => callbackRef.current(...args), delay),
    [delay]
  );
}

function excludeInternatTags(tags: Array<string>) {
  return tags.filter((tag) => !tag.startsWith("@"));
}

export {
  getRequiredGlobalEnvVar,
  getRequiredServerEnvVar,
  useSSRLayoutEffect,
  useDebounce,
  getRequiredEnvVarFromObj,
  debounce,
  toBase64,
  getDisplayUrl,
  getDomainUrl,
  getUrl,
  removeTrailingSlash,
  excludeInternatTags,
  AnchorOrLink,
};
