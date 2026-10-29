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
  nav: [
    { label: "Services", url: "/#services" },
    { label: "Pricing", url: "/#packages" },
    { label: "Results", url: "/#results" },
    { label: "Gallery", url: "/gallery/" },
    { label: "FAQs", url: "/#faq" },
    { label: "Contact", url: "/contact/" },
  ],
};
