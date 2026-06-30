export type Category = "Painting" | "Digital" | "Mixed Media";

export type Artwork = {
  slug: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  available: boolean;
  edition?: string;
};

// Artwork lives in /public/artwork. Placeholders echo each piece's palette;
// drop the real photo in at the same path (e.g. /artwork/static-bloom.jpg) and
// update the `image` field's extension to swap it in.
// BASE_PATH prefixes raw <img> srcs so they resolve under GitHub Pages' /Titan path.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const img = (slug: string) => `${BASE_PATH}/artwork/${slug}.svg`;

export const artworks: Artwork[] = [
  {
    slug: "static-bloom",
    title: "Static Bloom",
    artist: "Titan",
    year: 2025,
    medium: "Mixed media on canvas",
    dimensions: "110 × 100 cm",
    price: 1850,
    category: "Mixed Media",
    image: img("static-bloom"),
    description:
      "A spectral figure surfaces from a chromatic undergrowth of pink, ochre and acid green. Built up in dense, restless layers, Static Bloom holds the moment a form half-emerges from noise — present and dissolving at once.",
    available: true,
  },
  {
    slug: "revenant",
    title: "Revenant",
    artist: "Titan",
    year: 2025,
    medium: "Oil and acrylic on board",
    dimensions: "60 × 60 cm",
    price: 1450,
    category: "Painting",
    image: img("revenant"),
    description:
      "A face caught mid-dissolve, rendered in bruised greens and cold blue shadow. Revenant stares back from somewhere between portrait and apparition — a likeness remembered rather than seen.",
    available: true,
  },
  {
    slug: "chlorophyll-fracture",
    title: "Chlorophyll Fracture",
    artist: "Titan",
    year: 2025,
    medium: "Archival pigment print",
    dimensions: "70 × 70 cm",
    price: 720,
    category: "Digital",
    image: img("chlorophyll-fracture"),
    description:
      "Shards of marbled green erupt across a field of pure acid chartreuse. Sharp, synthetic and loud, Chlorophyll Fracture is digital painting at full volume.",
    available: true,
    edition: "Edition of 20",
  },
  {
    slug: "permafrost",
    title: "Permafrost",
    artist: "Titan",
    year: 2025,
    medium: "Archival pigment print",
    dimensions: "60 × 75 cm",
    price: 760,
    category: "Digital",
    image: img("permafrost"),
    description:
      "A face suspended in ice, features blurred beneath frost and dark sediment. Permafrost is cold, quiet and claustrophobic — a portrait held in suspension.",
    available: true,
    edition: "Edition of 15",
  },
  {
    slug: "emerald-veil",
    title: "Emerald Veil",
    artist: "Titan",
    year: 2025,
    medium: "Oil on canvas",
    dimensions: "130 × 90 cm",
    price: 2200,
    category: "Painting",
    image: img("emerald-veil"),
    description:
      "Heavy folds of emerald fall like stage curtains while a lone figure ascends toward a small red aperture of light. Emerald Veil is the largest work in the collection — theatrical, hushed and strange.",
    available: true,
  },
  {
    slug: "ignition",
    title: "Ignition",
    artist: "Titan",
    year: 2025,
    medium: "Mixed media on panel",
    dimensions: "90 × 90 cm",
    price: 1680,
    category: "Mixed Media",
    image: img("ignition"),
    description:
      "A vortex of magenta and violet spirals around a single red flame and a watching eye. Ignition is pure centrifugal energy — colour pulled into a burning core.",
    available: true,
  },
  {
    slug: "porcelain",
    title: "Porcelain",
    artist: "Titan",
    year: 2025,
    medium: "Digital painting, archival print",
    dimensions: "60 × 60 cm",
    price: 690,
    category: "Digital",
    image: img("porcelain"),
    description:
      "A pale, doll-like visage framed by ornate green and gold filigree, eyes heavy with kohl. Porcelain pushes beauty toward the uncanny — decorative, fragile and a little haunted.",
    available: true,
    edition: "Edition of 25",
  },
  {
    slug: "gnash",
    title: "Gnash",
    artist: "Titan",
    year: 2025,
    medium: "Acrylic and ink on board",
    dimensions: "70 × 80 cm",
    price: 1320,
    category: "Painting",
    image: img("gnash"),
    description:
      "Teeth bared from a speckled dark of teal and violet, Gnash is the rawest work here — a grimace caught at the edge of a scream, equal parts grotesque and alive.",
    available: false,
  },
  {
    slug: "idol",
    title: "Idol",
    artist: "Titan",
    year: 2025,
    medium: "Mixed media on canvas",
    dimensions: "80 × 80 cm",
    price: 1540,
    category: "Mixed Media",
    image: img("idol"),
    description:
      "A weathered, symmetrical mask gazes out with turquoise eyes from cracked earth tones. Idol feels excavated rather than painted — a relic of some invented mythology.",
    available: true,
  },
  {
    slug: "augur",
    title: "Augur",
    artist: "Titan",
    year: 2025,
    medium: "Ink and acrylic on canvas",
    dimensions: "100 × 100 cm",
    price: 1760,
    category: "Painting",
    image: img("augur"),
    description:
      "Two calligraphic forms — part bird, part smoke — circle one another across a field of olive and bone. Augur is gestural and fluid, an omen read in a single sweep of the hand.",
    available: true,
  },
];

export function getArtwork(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export const categories = [
  "All",
  "Painting",
  "Digital",
  "Mixed Media",
] as const;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
