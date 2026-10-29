// Homepage content. Edit packages, FAQs, services and local pages here.
export default {
  hero: {
    eyebrow: "Boulder County auto detailing",
    heading: "Clean. Glossy. Protected.",
    copy: "Premium detailing for Boulder and Longmont vehicles.",
    images: ["hero-2.png", "hero-1.png", "hero-3.png"],
  },
  quickAnswer:
    "Flatirons Auto Spa is a Longmont-based premium auto detailing studio serving Boulder County with hand washing, wax sealants, paint polishing, steam interior cleaning, leather care, ceramic coatings, and vehicle protection packages for sedans and SUVs.",
  about: {
    eyebrow: "Who we are",
    heading: "Affordable, professional car detailing with a high-end finish.",
    copy: "Whether you drive a daily commuter, a family SUV, or a vehicle you love keeping showroom-ready, Flatirons Auto Spa brings a meticulous process to every surface. The team uses professional-grade products, proven detailing techniques, and a customer-first approach that fits your schedule.",
    image: "about.png",
    imageAlt: "Flatirons Auto Spa professional detail work",
    stat: { value: "20+ years", label: "of detail-focused care" },
    checklist: [
      "Comprehensive interior and exterior detailing",
      "Eco-conscious cleaning products and safe techniques",
      "Flexible packages for every vehicle type and budget",
      "Quick turnaround with detail-level craftsmanship",
    ],
  },
  services: {
    eyebrow: "Our services",
    heading: "Protection, gloss, and deep-clean comfort in one studio.",
    intro:
      "These service clusters are written for both people and answer engines: clear names, direct outcomes, and local search language that matches what Boulder County drivers actually ask for.",
    cards: [
      {
        title: "Exterior Detailing",
        text: "Hand wash, wheel and tire care, wax sealant, polishing, and paint-safe finishing to remove road film and restore shine.",
        image: "car-detailing.png",
        alt: "Exterior car detailing and paint gloss finish",
        url: "/exterior-detailing/",
        linkLabel: "Explore exterior detailing",
      },
      {
        title: "Interior Detailing",
        text: "Vacuuming, wipe-downs, steam cleaning, leather care, glass cleaning, and odor-conscious refresh work for a cleaner cabin.",
        image: "car-interior.png",
        alt: "Detailed vehicle interior cleaning",
        url: "/interior-detailing/",
        linkLabel: "Explore interior detailing",
      },
      {
        title: "Ceramic Coating & Sealants",
        text: "Durable protection that adds gloss, helps repel contaminants, and supports easier maintenance after Colorado sun, snow, and road salt.",
        image: "car-wash.png",
        alt: "Vehicle wash and exterior cleaning",
        url: "/ceramic-coating/",
        linkLabel: "Explore ceramic coating",
      },
    ],
    moreLinks: [
      { label: "Paint correction", url: "/paint-correction/" },
      { label: "Maintenance wash", url: "/maintenance-wash/" },
      { label: "Executive detail packages", url: "/executive-detail-packages/" },
    ],
  },
  packages: {
    eyebrow: "Choose your package",
    heading: "Transparent detailing packages for sedans and SUVs.",
    items: [
      {
        tier: "Basic Package",
        name: "Essential Elegance",
        price: 199,
        suvPrice: 249,
        features: [
          "Hand wash and wax sealant",
          "Wheel and tire detail",
          "Interior vacuum and wipe down",
          "Glass cleaning",
        ],
        cta: "Choose Essential",
        schemaId: "essential-elegance",
        schemaDescription:
          "Hand wash, wax sealant, wheel and tire detail, interior vacuum and wipe down, and glass cleaning. SUV pricing starts at $249.",
      },
      {
        tier: "Premium Package",
        name: "Prestige Protection",
        price: 349,
        suvPrice: 399,
        featured: true,
        features: [
          "Everything in Essential Elegance",
          "Polish and premium sealant",
          "Deep interior steam clean",
          "Leather care and UV interior protection",
        ],
        cta: "Choose Prestige",
        schemaId: "prestige-protection",
        schemaDescription:
          "All Essential services plus polishing, premium sealant, deep steam clean, leather care, and UV interior protection. SUV pricing starts at $399.",
      },
      {
        tier: "Expert Package",
        name: "Grand Reserve Executive Spa",
        price: 749,
        suvPrice: 799,
        features: [
          "Everything in Prestige Protection",
          "Ceramic coating",
          "Concierge pickup and dropoff",
          "Hospital grade disinfectant and steam",
        ],
        cta: "Choose Grand Reserve",
        schemaId: "grand-reserve",
        schemaDescription:
          "All Prestige services plus ceramic coating, concierge pickup and dropoff, and hospital grade disinfectant steam treatment. SUV pricing starts at $799.",
      },
    ],
  },
  results: {
    eyebrow: "Why choose us",
    heading: "Simple, effective detailing products. Serious finish quality.",
    copy: "Regular detailing protects paint, preserves interior materials, improves day-to-day comfort, and helps maintain resale value. Flatirons Auto Spa keeps the process polished without making it complicated.",
    images: [
      { file: "cleaning-supplies.jpeg", alt: "Professional auto detailing supplies" },
      { file: "hero-1.png", alt: "Detailed vehicle with polished finish" },
      { file: "hero-3.png", alt: "Premium car detailing result" },
    ],
  },
  local: {
    eyebrow: "Local service areas",
    heading: "Detailing pages built for Boulder County search.",
    intro:
      "Choose the page that matches the service and location you are searching for.",
    cards: [
      {
        title: "Auto detailing Boulder CO",
        text: "Interior, exterior, polishing, and protection for Boulder drivers.",
        url: "/auto-detailing-boulder-co/",
      },
      {
        title: "Auto detailing Longmont CO",
        text: "Premium detailing close to the Flatirons Auto Spa studio.",
        url: "/auto-detailing-longmont-co/",
      },
      {
        title: "Ceramic coating Boulder County",
        text: "Gloss, easier maintenance, and stronger paint protection.",
        url: "/ceramic-coating-boulder-county/",
      },
      {
        title: "Paint correction Longmont",
        text: "Swirl and haze reduction for a cleaner, sharper finish.",
        url: "/paint-correction-longmont/",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    heading: "From consultation to showroom-ready.",
    steps: [
      {
        title: "Free consultation",
        text: "Talk through your vehicle, timeline, finish goals, and the right level of correction or protection.",
      },
      {
        title: "Choose package",
        text: "Pick Essential, Prestige, or Grand Reserve based on vehicle condition and how long you want protection to last.",
      },
      {
        title: "Professional detail",
        text: "The team washes, cleans, polishes, protects, steams, and finishes using vehicle-safe methods.",
      },
      {
        title: "Drive away ready",
        text: "Your vehicle leaves refreshed, protected, and ready for Boulder County roads.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQs",
    heading: "Most popular questions about auto detailing.",
    items: [
      {
        q: "What is included in a basic detail?",
        a: "A basic detail includes a full exterior wash, wheel and tire cleaning, interior vacuum, wipe-down of surfaces, wax sealant, and streak-free glass cleaning.",
      },
      {
        q: "How long does a full detail take?",
        a: "Most full details take between 2 and 4 hours depending on vehicle size, condition, and selected services.",
      },
      {
        q: "Do I need an appointment?",
        a: "Yes. Detailing services require an appointment so the team can reserve enough time and attention for your vehicle.",
      },
      {
        q: "Do you offer mobile detailing?",
        a: "Services are primarily performed at the Longmont location. Mobile detailing may be available upon request.",
      },
      {
        q: "Can polishing remove scratches or paint imperfections?",
        a: "Light scratches, swirls, and oxidation can often be improved through polishing. Deep scratches may require paint correction or touch-up work.",
      },
      {
        q: "How do I schedule a detail?",
        a: "Call Flatirons Auto Spa at (303) 210-7631 to discuss your vehicle and reserve an appointment.",
      },
      {
        q: "How much does auto detailing cost?",
        a: "Packages currently start at $199 for sedans and $249 for SUVs, with premium and executive options available for deeper cleaning, polishing, ceramic protection, and concierge service.",
      },
      {
        q: "How long does ceramic coating last?",
        a: "Ceramic coating longevity depends on prep quality, coating type, storage, washing habits, and Colorado weather exposure. A properly maintained coating can provide durable gloss and easier cleaning for an extended period.",
      },
      {
        q: "Can you remove pet hair from my interior?",
        a: "Yes. Pet hair removal can be included with interior detailing, though heavy embedded hair may require extra time because carpet fibers and cargo areas often hold hair tightly.",
      },
      {
        q: "Can detailing help with odors?",
        a: "Interior detailing and steam cleaning can reduce many odors from food, pets, smoke, moisture, and daily use. Severe odors may require multiple treatments depending on the source.",
      },
      {
        q: "Should I detail my vehicle after winter road salt?",
        a: "Yes. Winter salt, slush, and road film can sit on paint, wheels, jambs, and lower panels. A proper wash and protection service helps clean away buildup and prepare the vehicle for spring.",
      },
      {
        q: "Do you work on luxury, exotic, and classic vehicles?",
        a: "Yes. Flatirons Auto Spa works with premium, classic, and enthusiast vehicles using careful wash methods, appropriate products, and finish-sensitive detailing techniques.",
      },
    ],
  },
  cta: {
    eyebrow: "Ready for a cleaner, glossier vehicle?",
    heading: "Book premium auto detailing near Boulder today.",
  },
};
