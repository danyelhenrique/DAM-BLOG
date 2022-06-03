import { useEffect, useRef } from "react";

export function useOnceCall(cb: () => void, condition: boolean) {
  const isCalledRef = useRef(false);

  useEffect(() => {
    if (condition && !isCalledRef.current) {
      isCalledRef.current = true;
      cb();
    }
  }, [cb, condition]);
}
