// Site-wide settings. Edit business details here and they update on every page.
export default {
  name: "Flatirons Auto Spa",
  url: "https://flatironsautospa.com",
  phone: "(303) 210-7631",
  phoneHref: "tel:+13032107631",
  phoneSchema: "+1-303-210-7631",
  address: {
    street: "3845 Florentine Drive",
    city: "Longmont",
    region: "CO",
    zip: "80503",
  },
  themeColor: "#07111f",
  // Used for social-share previews when a page doesn't set its own ogImage
  defaultOgImage: "/assets/images/hero-2.png",
  logo: "/assets/images/logo.png",
  footerBlurb:
    "Premium, high-end vehicle detailing in Boulder and Longmont with exceptional craftsmanship and a focus on preserving your car's beauty and value.",
  // Optional business facts. Fill these in and they appear in the structured data
  // automatically; leave empty/null and they are omitted (nothing is made up).
  hours: null, // e.g. [{ days: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" }]
  sameAs: [], // Google Business Profile, Yelp, Facebook, Instagram... full URLs
  mapUrl: null, // Google Maps link to the business listing
  geo: null, // { lat: 40.1234, lng: -105.1234 }
  verification: { google: "", bing: "" }, // Search Console / Bing Webmaster meta tokens
  footerLinks: [
    {
      title: "Services",
      links: [
        { label: "Interior detailing", url: "/interior-detailing/" },
        { label: "Exterior detailing", url: "/exterior-detailing/" },
        { label: "Ceramic coating", url: "/ceramic-coating/" },
        { label: "Paint correction", url: "/paint-correction/" },
        { label: "Maintenance wash", url: "/maintenance-wash/" },
        { label: "Executive packages", url: "/executive-detail-packages/" },
      ],
    },
    {
      title: "Service areas",
      links: [
        { label: "Auto detailing Boulder", url: "/auto-detailing-boulder-co/" },
        { label: "Auto detailing Longmont", url: "/auto-detailing-longmont-co/" },
        { label: "Ceramic coating Boulder County", url: "/ceramic-coating-boulder-county/" },
        { label: "Paint correction Longmont", url: "/paint-correction-longmont/" },
      ],
    },
  ],
  nav: [
    { label: "Services", url: "/#services" },
    { label: "Pricing", url: "/#packages" },
    { label: "Results", url: "/#results" },
    { label: "Gallery", url: "/gallery/" },
    { label: "FAQs", url: "/#faq" },
    { label: "Contact", url: "/contact/" },
  ],
};
