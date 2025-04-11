import { useEffect, useState } from "react";

export const useClientLayout = () => {
  const [deviceType, setDeviceType] = useState<string>("desktop");

  useEffect(() => {
    const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = navigator.userAgent.includes("Android");

    if (isIos) {
      setDeviceType("ios");
    } else if (isAndroid) {
      setDeviceType("android");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  return {
    deviceType,
  };
};
