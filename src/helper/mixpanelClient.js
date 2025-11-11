import mixpanel from "mixpanel-browser";

const MixPanelId = "6d9aa12ba10e0a2f0b4f0507ab5da234"; // Same as form

let isInitialized = false;

export const initMixpanel = () => {
  if (isInitialized) return;
  
  mixpanel.init(MixPanelId, {
    debug: true,
    track_pageview: false,
    persistence: "localStorage",
    autocapture: false, // Disable autocapture for cleaner tracking
  });
  
  isInitialized = true;
};

export const trackEvent = (event, properties = {}) => {
  if (typeof window === "undefined") return;

  if (!isInitialized) {
    initMixpanel();
  }

  mixpanel.track(event, properties);
};

export const trackPageView = (properties = {}, options = {}) => {
  if (typeof window === "undefined") return;

  if (!isInitialized) {
    initMixpanel();
  }

  mixpanel.track_pageview(properties, options);
};
