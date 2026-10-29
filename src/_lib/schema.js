// JSON-LD structured data, generated from the data files so prices, FAQs,
// address, hours and gallery images never drift out of sync with the visible page.
//
// - schema.home / schema.gallery / schema.contact: ready-made objects for those pages
// - buildPageSchema(data): used for service/location pages (see pages.11tydata.js)
import site from "../_data/site.js";
import home from "../_data/home.js";
import gallery from "../_data/gallery.js";

const abs = (path) => `${site.url}${path}`;
export const businessId = abs("/#business");

const DEFAULT_AREA = ["Longmont, CO", "Boulder, CO", "Boulder County, CO"];

// The single definition of the business. Optional facts (hours, profile links,
// coordinates, map) are only emitted when filled in in site.js.
function business({ image = site.defaultOgImage, extra = {} } = {}) {
  const node = {
    "@type": "AutoWash",
    "@id": businessId,
    name: site.name,
    url: abs("/"),
    image: abs(image),
    logo: abs(site.logo),
    telephone: site.phoneSchema,
    priceRange: "$199-$799",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      "Boulder, CO",
      "Longmont, CO",
      "Boulder County, CO",
      "Lafayette, CO",
      "Louisville, CO",
    ],
    ...extra,
  };
  if (site.geo) {
    node.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    };
  }
  if (site.hours?.length) {
    node.openingHoursSpecification = site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  if (site.sameAs?.length) node.sameAs = site.sameAs;
  if (site.mapUrl) node.hasMap = site.mapUrl;
  return node;
}

function breadcrumbs(pageUrl, label) {
  return {
    "@type": "BreadcrumbList",
    "@id": abs(`${pageUrl}#breadcrumbs`),
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
      { "@type": "ListItem", position: 2, name: label, item: abs(pageUrl) },
    ],
  };
}

export function buildPageSchema(data) {
  const url = data.page.url;
  return {
    "@context": "https://schema.org",
    "@graph": [
      business(),
      {
        "@type": "Service",
        "@id": abs(`${url}#service`),
        name: data.crumb,
        serviceType: data.crumb,
        description: data.description,
        url: abs(url),
        provider: { "@id": businessId },
        areaServed: data.areaServed || DEFAULT_AREA,
      },
      breadcrumbs(url, data.crumb),
    ],
  };
}

export const pageSchemas = {
  home: {
    "@context": "https://schema.org",
    "@graph": [
      business({
        extra: {
          description:
            "Premium, high-end vehicle detailing in Boulder and Longmont with craftsmanship focused on preserving beauty, gloss, comfort, and value.",
          makesOffer: home.packages.items.map((p) => ({
            "@id": abs(`/#${p.schemaId}`),
          })),
        },
      }),
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
      },
      ...home.packages.items.map((p) => ({
        "@type": "Offer",
        "@id": abs(`/#${p.schemaId}`),
        name: p.name,
        priceCurrency: "USD",
        price: String(p.price),
        description: p.schemaDescription,
        itemOffered: { "@type": "Service", name: p.name },
        seller: { "@id": businessId },
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
    ],
  },

  contact: {
    "@context": "https://schema.org",
    "@graph": [
      business({ image: "/assets/images/hero-1.png" }),
      {
        "@type": "ContactPage",
        "@id": abs("/contact/#webpage"),
        url: abs("/contact/"),
        name: "Contact Flatirons Auto Spa",
        description:
          "Contact Flatirons Auto Spa to schedule premium auto detailing in Longmont and Boulder County.",
        about: { "@id": businessId },
      },
      breadcrumbs("/contact/", "Contact"),
    ],
  },

  gallery: {
    "@context": "https://schema.org",
    "@graph": [
      business(),
      {
        "@type": "ImageGallery",
        "@id": abs("/gallery/#webpage"),
        url: abs("/gallery/"),
        name: "Flatirons Auto Spa Gallery",
        description: "Gallery of premium vehicle images from Flatirons Auto Spa.",
        publisher: { "@id": businessId },
        associatedMedia: gallery.map((g) => ({
          "@type": "ImageObject",
          contentUrl: abs(`/assets/images/${g.file}`),
          caption: g.caption,
          creator: { "@id": businessId },
          creditText: site.name,
        })),
      },
      breadcrumbs("/gallery/", "Gallery"),
    ],
  },
};
