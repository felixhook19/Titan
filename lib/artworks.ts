export type Artwork = {
  slug: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number;
  category: "Painting" | "Photography" | "Sculpture" | "Print";
  image: string;
  description: string;
  available: boolean;
  edition?: string;
};

// Curated, royalty-free imagery from Unsplash used as stand-ins for the catalogue.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const artworks: Artwork[] = [
  {
    slug: "crimson-tide",
    title: "Crimson Tide",
    artist: "Elena Vasquez",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "120 × 90 cm",
    price: 2400,
    category: "Painting",
    image: u("photo-1541961017774-22349e4a1262"),
    description:
      "A turbulent study of colour and motion, Crimson Tide layers thick impasto strokes of vermilion and deep ochre. The piece captures the restless energy of the sea at dusk, where the horizon dissolves into pure feeling.",
    available: true,
  },
  {
    slug: "quiet-geometry",
    title: "Quiet Geometry",
    artist: "Marcus Bell",
    year: 2024,
    medium: "Acrylic on linen",
    dimensions: "100 × 100 cm",
    price: 1850,
    category: "Painting",
    image: u("photo-1549887534-1541e9326642"),
    description:
      "Hard-edged forms meet soft gradients in this meditation on balance. Quiet Geometry rewards slow looking, its overlapping planes shifting between order and ambiguity.",
    available: true,
  },
  {
    slug: "golden-hour",
    title: "Golden Hour",
    artist: "Aiko Tanaka",
    year: 2022,
    medium: "Archival pigment print",
    dimensions: "70 × 50 cm",
    price: 680,
    category: "Photography",
    image: u("photo-1500530855697-b586d89ba3ee"),
    description:
      "Captured in the final minutes of daylight, Golden Hour distils warmth and stillness into a single frame. Printed on archival cotton rag for collectors.",
    available: true,
    edition: "Edition of 25",
  },
  {
    slug: "fractured-light",
    title: "Fractured Light",
    artist: "Elena Vasquez",
    year: 2023,
    medium: "Mixed media on board",
    dimensions: "80 × 60 cm",
    price: 1320,
    category: "Painting",
    image: u("photo-1502691876148-a84978e59af8"),
    description:
      "Shards of reflective pigment break across a muted field, scattering light as the viewer moves. An intimate, restless work.",
    available: true,
  },
  {
    slug: "monolith",
    title: "Monolith",
    artist: "Sofia Rinaldi",
    year: 2021,
    medium: "Cast bronze",
    dimensions: "45 × 20 × 20 cm",
    price: 3600,
    category: "Sculpture",
    image: u("photo-1554188248-986adbb73be4"),
    description:
      "A solitary bronze form, patinated by hand. Monolith holds weight and silence in equal measure, a quiet anchor for any space.",
    available: true,
    edition: "Edition of 8",
  },
  {
    slug: "wildflower-field",
    title: "Wildflower Field",
    artist: "Aiko Tanaka",
    year: 2024,
    medium: "Archival pigment print",
    dimensions: "90 × 60 cm",
    price: 740,
    category: "Photography",
    image: u("photo-1490750967868-88aa4486c946"),
    description:
      "A sweeping meadow rendered in soft focus, Wildflower Field is a love letter to the fleeting colour of early summer.",
    available: true,
    edition: "Edition of 30",
  },
  {
    slug: "nocturne",
    title: "Nocturne",
    artist: "Marcus Bell",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "110 × 140 cm",
    price: 3100,
    category: "Painting",
    image: u("photo-1543857778-c4a1a3e0b2eb"),
    description:
      "Deep indigos and flecks of silver evoke a city seen from above at night. Nocturne is a large statement work for a feature wall.",
    available: false,
  },
  {
    slug: "paper-garden",
    title: "Paper Garden",
    artist: "Sofia Rinaldi",
    year: 2024,
    medium: "Screenprint on paper",
    dimensions: "50 × 40 cm",
    price: 420,
    category: "Print",
    image: u("photo-1513519245088-0e12902e35ca"),
    description:
      "A delicate botanical screenprint in five hand-pulled layers. Paper Garden brings a quiet brightness to smaller spaces.",
    available: true,
    edition: "Edition of 50",
  },
  {
    slug: "tidal-memory",
    title: "Tidal Memory",
    artist: "Elena Vasquez",
    year: 2022,
    medium: "Acrylic and sand on canvas",
    dimensions: "130 × 95 cm",
    price: 2750,
    category: "Painting",
    image: u("photo-1531913764164-f85c52e6e654"),
    description:
      "Textured with fine sand and washed in cool blues, Tidal Memory recalls the marks left by water on shore — present, then gone.",
    available: true,
  },
];

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export const categories = [
  "All",
  "Painting",
  "Photography",
  "Sculpture",
  "Print",
] as const;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
