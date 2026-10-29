// JSON-LD structured data, generated from the data files so prices, FAQs,
// address and gallery images never drift out of sync with the visible page.
import site from "./site.js";
import home from "./home.js";
import gallery from "./gallery.js";

const abs = (path) => `${site.url}${path}`;
const businessId = abs("/#business");

const address = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  postalCode: site.address.zip,
  addressCountry: "US",
};

export default {
  home: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoWash",
        "@id": businessId,
        name: site.name,
        url: abs("/"),
        image: abs(site.defaultOgImage),
        logo: abs(site.logo),
        description:
          "Premium, high-end vehicle detailing in Boulder and Longmont with craftsmanship focused on preserving beauty, gloss, comfort, and value.",
        telephone: site.phoneSchema,
        priceRange: "$199-$799",
        address,
        areaServed: [
          "Boulder, CO",
          "Longmont, CO",
          "Boulder County, CO",
          "Lafayette, CO",
          "Louisville, CO",
        ],
        makesOffer: home.packages.items.map((p) => ({
          "@id": abs(`/#${p.schemaId}`),
        })),
      },
      {
        "@type": "WebSite",
        "@id": abs("/#website"),
        url: abs("/"),
        name: site.name,
        publisher: { "@id": businessId },
      },
      {
        "@type": "WebPage",
        "@id": abs("/#webpage"),
        url: abs("/"),
        name: "Premium Auto Detailing in Boulder and Longmont",
        isPartOf: { "@id": abs("/#website") },
        about: { "@id": businessId },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".hero h1", ".answer-strip", "#faq"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": abs("/#breadcrumbs"),
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
        ],
      },
      ...home.packages.items.map((p) => ({
        "@type": "Offer",
        "@id": abs(`/#${p.schemaId}`),
        name: p.name,
        priceCurrency: "USD",
        price: String(p.price),
        description: p.schemaDescription,
      })),
      {
        "@type": "FAQPage",
        "@id": abs("/#faq-schema"),
        mainEntity: home.faq.items.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        "@id": abs("/#booking-howto"),
        name: "How to schedule auto detailing with Flatirons Auto Spa",
        step: [
          {
            "@type": "HowToStep",
            name: "Free consultation",
            text: "Call to discuss your vehicle, goals, timeline, and current condition.",
          },
          {
            "@type": "HowToStep",
            name: "Choose a package",
            text: "Select Essential Elegance, Prestige Protection, or Grand Reserve Executive Spa.",
          },
          {
            "@type": "HowToStep",
            name: "Arrive or request concierge support",
            text: "Bring your vehicle to the Longmont location or ask about pickup and dropoff availability.",
          },
          {
            "@type": "HowToStep",
            name: "Drive away protected",
            text: "Leave with a clean, glossy, protected vehicle ready for Colorado roads.",
          },
        ],
      },
    ],
  },

  contact: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": abs("/contact/#webpage"),
        url: abs("/contact/"),
        name: "Contact Flatirons Auto Spa",
        description:
          "Contact Flatirons Auto Spa to schedule premium auto detailing in Longmont and Boulder County.",
      },
      {
        "@type": "AutoWash",
        "@id": businessId,
        name: site.name,
        telephone: site.phoneSchema,
        url: abs("/"),
        image: abs("/assets/images/hero-1.png"),
        priceRange: "$199-$799",
        address,
        areaServed: ["Longmont, CO", "Boulder, CO", "Boulder County, CO"],
      },
    ],
  },

  gallery: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        "@id": abs("/gallery/#webpage"),
        url: abs("/gallery/"),
        name: "Flatirons Auto Spa Gallery",
        description:
          "Gallery of premium vehicle images from the Flatirons Auto Spa sample page.",
        publisher: { "@id": businessId },
        associatedMedia: gallery.map((g) => ({
          "@type": "ImageObject",
          contentUrl: abs(`/assets/images/${g.file}`),
          caption: g.caption,
        })),
      },
      {
        "@type": "AutoWash",
        "@id": businessId,
        name: site.name,
        url: abs("/"),
        telephone: site.phoneSchema,
        address,
      },
    ],
  },
};
