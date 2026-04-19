export const getDeviceOS = () => {
  const ua = navigator.userAgent || navigator.vendor || (window as { opera?: string }).opera;

  // Identify iOS
  if (ua && /iPad|iPhone|iPod/.test(ua) && !(window as { MSStream?: unknown }).MSStream) {
    return "iOS";
  }

  // Identify Android
  if (ua && /android/i.test(ua)) {
    return "Android";
  }

  return "Desktop/Other";
};
