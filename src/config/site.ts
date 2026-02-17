// Site Configuration for Royal Palm Beach Concrete Co.
export const siteConfig = {
  name: "Royal Palm Beach Concrete Co.",
  shortName: "RPB Concrete Co.",
  domain: "royalpalmbeachconcrete.com",
  url: "https://royalpalmbeachconcrete.com",
  phone: "(561) 555-0123",
  phoneRaw: "+15615550123",
  email: "info@royalpalmbeachconcrete.com",
  address: {
    street: "Royal Palm Beach, FL",
    city: "Royal Palm Beach",
    state: "FL",
    stateFullName: "Florida",
    zip: "33411",
    country: "US",
  },
  geo: {
    latitude: 26.7084,
    longitude: -80.2306,
  },
  hours: {
    weekdays: "7:00 AM - 6:00 PM",
    saturday: "8:00 AM - 4:00 PM",
    sunday: "Closed",
    schema: ["Mo-Fr 07:00-18:00", "Sa 08:00-16:00"],
  },
  social: {
    google: "",
    facebook: "",
    instagram: "",
  },
  meta: {
    title: "Royal Palm Beach Concrete Contractors | Driveways & Patios",
    description: "Royal Palm Beach Concrete Co. - Trusted concrete contractors serving Royal Palm Beach, FL. Driveways, patios, slabs, stamped concrete. Call for a free estimate!",
    keywords: "concrete contractors Royal Palm Beach FL, concrete driveway, concrete patio, stamped concrete, Palm Beach County concrete",
  },
  services: [
    {
      name: "Concrete Driveways",
      slug: "concrete-driveways",
      description: "Custom concrete driveway installation and repair. Standard, stamped, and decorative options.",
    },
    {
      name: "Concrete Patios",
      slug: "concrete-patios",
      description: "Beautiful concrete patios for outdoor living. Pool decks, entertainment areas, and more.",
    },
    {
      name: "Concrete Slabs",
      slug: "concrete-slabs",
      description: "Foundation slabs, garage floors, shed pads, and commercial concrete slabs.",
    },
    {
      name: "Stamped Concrete",
      slug: "stamped-concrete",
      description: "Decorative stamped concrete in patterns that mimic stone, brick, tile, and wood.",
    },
  ],
  serviceAreas: [
    { name: "Royal Palm Beach", slug: "royal-palm-beach" },
    { name: "Wellington", slug: "wellington" },
    { name: "West Palm Beach", slug: "west-palm-beach" },
    { name: "Palm Beach Gardens", slug: "palm-beach-gardens" },
    { name: "Lake Worth", slug: "lake-worth" },
    { name: "Greenacres", slug: "greenacres" },
    { name: "Loxahatchee", slug: "loxahatchee" },
    { name: "Jupiter", slug: "jupiter" },
  ],
  county: "Palm Beach County",
};
