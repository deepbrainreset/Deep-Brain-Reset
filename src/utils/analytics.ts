// Utility for tracking analytics events cleanly without throwing errors or blocking execution

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (typeof window !== "undefined") {
    try {
      if ((window as any).gtag) {
        (window as any).gtag("event", eventName, eventParams);
      } else if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: eventName,
          ...eventParams,
        });
      } else {
        if (process.env.NODE_ENV !== "production") {
          console.log(`[Analytics Event]: ${eventName}`, eventParams || {});
        }
      }
    } catch (e) {
      // Ignore analytics logging errors gracefully
    }
  }
}
