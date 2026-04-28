import dumbbell from "@/assets/product-dumbbell.jpg";
import treadmill from "@/assets/product-treadmill.jpg";
import barbell from "@/assets/product-barbell.jpg";
import kettlebell from "@/assets/product-kettlebell.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Strength" | "Cardio" | "Accessories";
  rating: number;
  reviews: number;
  image: string;
  specs: { label: string; value: string }[];
  description: string;
};

export const products: Product[] = [
  {
    id: "apex-dumbbell",
    name: "APEX Adjustable Dumbbell",
    tagline: "5–55 lb in one dial.",
    price: 449,
    category: "Strength",
    rating: 4.9,
    reviews: 1284,
    image: dumbbell,
    description:
      "A precision-engineered adjustable dumbbell with a magnetic dial system, knurled steel handle, and aerospace-grade plates. Replace 17 dumbbells with one.",
    specs: [
      { label: "Weight Range", value: "5–55 lb" },
      { label: "Increments", value: "2.5 lb" },
      { label: "Handle", value: "Knurled steel" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
  {
    id: "velocity-treadmill",
    name: "VELOCITY Pro Treadmill",
    tagline: "Studio cardio, redefined.",
    price: 2499,
    category: "Cardio",
    rating: 4.8,
    reviews: 642,
    image: treadmill,
    description:
      "A commercial-grade treadmill with whisper-quiet brushless motor, auto-incline to 15%, and a high-contrast HUD. Built for marathons, tuned for sprints.",
    specs: [
      { label: "Motor", value: "4.0 HP brushless" },
      { label: "Top Speed", value: "14 mph" },
      { label: "Incline", value: "0–15%" },
      { label: "Belt", value: "22\" x 60\"" },
    ],
  },
  {
    id: "forge-barbell",
    name: "FORGE Olympic Barbell",
    tagline: "1500 lb tensile. Zero compromise.",
    price: 389,
    category: "Strength",
    rating: 5.0,
    reviews: 2104,
    image: barbell,
    description:
      "A competition-spec 20kg Olympic barbell with cerakote shaft, dual knurl marks, and bronze bushings. Engineered to outlast you.",
    specs: [
      { label: "Weight", value: "20 kg" },
      { label: "Tensile", value: "215,000 PSI" },
      { label: "Whip", value: "Olympic" },
      { label: "Finish", value: "Cerakote" },
    ],
  },
  {
    id: "iron-kettlebell",
    name: "IRON Competition Kettlebell",
    tagline: "Same shape. Every weight.",
    price: 89,
    category: "Strength",
    rating: 4.7,
    reviews: 873,
    image: kettlebell,
    description:
      "Single-cast steel kettlebell with uniform dimensions across all weights. Color-coded ring. Built for snatches, swings, and Turkish get-ups.",
    specs: [
      { label: "Material", value: "Single-cast steel" },
      { label: "Handle", value: "33mm" },
      { label: "Range", value: "8–48 kg" },
      { label: "Standard", value: "IKF Comp" },
    ],
  },
  {
    id: "apex-mini",
    name: "APEX Compact Dumbbell",
    tagline: "Studio footprint. Pro feel.",
    price: 299,
    category: "Accessories",
    rating: 4.6,
    reviews: 412,
    image: dumbbell,
    description: "A compact version of our flagship dumbbell, built for apartments and home studios.",
    specs: [
      { label: "Weight Range", value: "5–35 lb" },
      { label: "Increments", value: "2.5 lb" },
      { label: "Handle", value: "Knurled steel" },
      { label: "Warranty", value: "5 years" },
    ],
  },
  {
    id: "velocity-bike",
    name: "VELOCITY Spin Bike",
    tagline: "Magnetic resistance. Silent power.",
    price: 1299,
    category: "Cardio",
    rating: 4.8,
    reviews: 521,
    image: treadmill,
    description: "Magnetic resistance, belt drive, and a metric-tracked HUD that makes every watt count.",
    specs: [
      { label: "Resistance", value: "Magnetic, 100 lvls" },
      { label: "Drive", value: "Belt" },
      { label: "Display", value: "HD HUD" },
      { label: "Warranty", value: "10 years" },
    ],
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);