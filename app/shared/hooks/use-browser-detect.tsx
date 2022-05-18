import { useEffect, useState } from "react";

export const getNavigator = () => {
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: "IE", version: tem[1] || "" };
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem != null) {
      return { name: "Opera", version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }

  return {
    name: M[0],
    version: M[1],
  };
};

export const searchString = (
  data: { string: string; subString: string; identity: string }[]
) => {
  for (var i = 0; i < data.length; i++) {
    var dataString = data[i].string;
    // this.versionSearchString = data[i].subString;

    if (dataString.indexOf(data[i].subString) !== -1) {
      return data[i].identity;
    }
  }
};

export const dataOs = () => {
  return [
    {
      string: navigator.platform,
      subString: "Win",
      identity: "Windows",
    },
    {
      string: navigator.platform,
      subString: "Mac",
      identity: "macOS",
    },
    {
      string: navigator.userAgent,
      subString: "iPhone",
      identity: "iOS",
    },
    {
      string: navigator.userAgent,
      subString: "iPad",
      identity: "iOS",
    },
    {
      string: navigator.userAgent,
      subString: "iPod",
      identity: "iOS",
    },
    {
      string: navigator.userAgent,
      subString: "Android",
      identity: "Android",
    },
    {
      string: navigator.platform,
      subString: "Linux",
      identity: "Linux",
    },
  ];
};

export type BrowserProps = {
  browserName: string;
  version: string;
  os: string;
  mobile: boolean;
  browser: {
    name: string;
    version: string;
  };
};

export function useBrowserDetect() {
  const [browserDetectState, setBrowserDetectState] = useState<BrowserProps>(
    {} as BrowserProps
  );

  const setBodyClasses = (props: BrowserProps) => {
    const body = document.querySelector("body");
    if (body) {
      document.body.classList.add("browser-" + props.browserName.toLowerCase());
      document.body.classList.add("browser-version-" + props.version);
      document.body.classList.add("mobile-" + props.mobile);
      document.body.classList.add("os-" + props.os.toLowerCase());
    }
  };

  useEffect(() => {
    const browser = getNavigator();
    const browserName = browser.name;
    const version = browser.version;
    const os = searchString(dataOs()) || "Unknown";
    const mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(
      navigator.appVersion
    );
    setBrowserDetectState({
      browser,
      browserName,
      version,
      os,
      mobile,
    });
  }, []);

  return { browserDetectState, helpers: setBodyClasses };
}
