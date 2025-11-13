import mixpanel from "mixpanel-browser";

const MixPanelId = "b3d82a9de6a52dc136d42a2fb22b2e15"; 

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
