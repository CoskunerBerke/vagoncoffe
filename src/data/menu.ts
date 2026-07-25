export type MenuItem = {
  id: string;
  slug: string;
  name: string;
  description?: string;
  category: 'coffee' | 'food' | 'desserts' | 'drinks';
  subcategory?: string;
  price?: number;
  image: string;
  ingredients?: string[];
  allergens?: string[];
  available: boolean;
  featured: boolean;
  verified: boolean;
  updatedAt?: string;
};

export const menuItems: MenuItem[] = [
  // COFFEE SECTION (Monkey Express Coffee)
  {
    id: "monkey-espresso",
    slug: "monkey-express-espresso",
    name: "Monkey Express Espresso",
    category: "coffee",
    subcategory: "Espresso",
    image: "/menu/coffee/monkey-express-coffee.jpg",
    available: true,
    featured: false,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "monkey-filter",
    slug: "monkey-express-filtre-kahve",
    name: "Monkey Express Filtre Kahve",
    category: "coffee",
    subcategory: "Filtre Kahve",
    image: "/menu/coffee/monkey-express-coffee.jpg",
    available: true,
    featured: true,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "monkey-latte",
    slug: "monkey-express-latte",
    name: "Monkey Express Latte",
    category: "coffee",
    subcategory: "Sütlü Kahveler",
    image: "/menu/coffee/monkey-express-coffee.jpg",
    available: true,
    featured: true,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "monkey-cappuccino",
    slug: "monkey-express-cappuccino",
    name: "Monkey Express Cappuccino",
    category: "coffee",
    subcategory: "Sütlü Kahveler",
    image: "/menu/coffee/monkey-express-coffee.jpg",
    available: true,
    featured: false,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "monkey-coldbrew",
    slug: "monkey-express-cold-brew",
    name: "Monkey Express Cold Brew",
    category: "coffee",
    subcategory: "Soğuk Kahveler",
    image: "/menu/coffee/monkey-express-coffee.jpg",
    available: true,
    featured: true,
    verified: true,
    updatedAt: "2026-07-25"
  },

  // FOOD SECTION (Mom'y Burgers & Sokak Lezzetleri)
  {
    id: "momy-burger",
    slug: "momy-burger",
    name: "Mom'y Burger",
    category: "food",
    subcategory: "Burgers",
    image: "/menu/food/momy-burger.jpg",
    available: true,
    featured: true,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "momy-cheeseburger",
    slug: "momy-cheeseburger",
    name: "Mom'y Cheeseburger",
    category: "food",
    subcategory: "Burgers",
    image: "/menu/food/momy-burger.jpg",
    available: true,
    featured: false,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "patates-kizartmasi",
    slug: "patates-kizartmasi",
    name: "Patates Kızartması",
    category: "food",
    subcategory: "Sokak Lezzetleri",
    image: "/menu/food/patates-kizartmasi.jpg",
    available: true,
    featured: true,
    verified: true,
    updatedAt: "2026-07-25"
  },
  {
    id: "sosisli-sandvic",
    slug: "sosisli-sandvic",
    name: "Sosisli Sandviç",
    category: "food",
    subcategory: "Sokak Lezzetleri",
    image: "/menu/food/patates-kizartmasi.jpg", // Fallback to french fries or general food image
    available: true,
    featured: false,
    verified: true,
    updatedAt: "2026-07-25"
  }
];
