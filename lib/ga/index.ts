export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageView = (url: URL) => {
  if (GA_TRACKING_ID != null) {
    window.gtag('config', GA_TRACKING_ID, {
      send_page_view: url,
      cookie_flags: 'SameSite=None;Secure',
      cookie_domain: 'laadan-dict.vercel.app'
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};
