import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import Product from "./models/product.model.js";

// Load env variables
dotenv.config({ path: path.resolve(".env") });

// Your product data
const products = [
  {
    name: "Nike Air Max 270",
    description: "Lightweight sneakers with Max Air cushioning for all-day comfort.",
    price: 8999,
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2375666/2024/12/23/484d33a4-2c05-4a41-8d5b-6e92452341521734932934207-Nike-Men-Black-Air-Max-270-Sneakers-8891734932933910-1.jpg",
    category: "shoes",
    isFeatured: true,
  },
  {
    name: "Nike Air Force 1 '07",
    description: "Classic basketball sneakers with timeless style and durable leather.",
    price: 7499,
    image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/27578492/2024/2/14/f60a3083-8c7a-4d73-b318-5f76c1f9767d1707891826893NikeAirForce107LXMensShoes1.jpg",
    category: "shoes",
    isFeatured: true,
  },
  {
    name: "Nike Revolution 6",
    description: "Breathable running shoes designed for everyday comfort and flexibility.",
    price: 4299,
    image: "https://cdn-images.farfetch-contents.com/18/86/30/10/18863010_40911161_322.jpg",
    category: "shoes",
    isFeatured: false,
  },
  {
    name: "Nike Pegasus 40",
    description: "Premium running shoes offering responsive cushioning and support.",
    price: 10999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSttNDOZQEzqR3c0NaO2oBxhTJ4HZNpGb5iUg&s",
    category: "shoes",
    isFeatured: true,
  },
  {
    name: "Nike Dunk Low Retro",
    description: "Retro basketball sneakers with stylish colorways for casual wear.",
    price: 8999,
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/14528176/2024/2/14/4f37c906-ac35-4f0d-96d7-bda5cd72c8f51707885563000-Nike-Men-White--Black-Dunk-Low-Retro-Colourblocked-Leather-P-7.jpg",
    category: "shoes",
    isFeatured: false,
  },
  {
    name: "Nike ZoomX Vaporfly Next%",
    description: "High-performance marathon shoes designed for speed and efficiency.",
    price: 18999,
    image: "https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/3b4dedd5-fa80-4253-8cb1-4041c81e26dd/nike-zoomx-vaporfly-next-4-and-nike-zoomx-streakfly-2-a-look-at-the-innovation-behind-the-brand-s-latest-racing-shoes.jpg",
    category: "shoes",
    isFeatured: true,
  },
  {
    name: "Nike Blazer Mid '77",
    description: "Vintage-inspired sneakers with a durable leather upper and retro vibe.",
    price: 7999,
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/shoe/k/s/p/-original-imah4syxr2rhqjrf.jpeg?q=90&crop=false",
    category: "shoes",
    isFeatured: false,
  },
  {
    name: "Nike Phantom GX Elite",
    description: "Football boots engineered for precision and agility on the field.",
    price: 15999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWW-0oMl0875sZx5qUA-GlohkEf5ir5SWtfg&s",
    category: "shoes",
    isFeatured: true,
  },
  {
    name: "Nike Metcon 9",
    description: "Training shoes designed for weightlifting, HIIT, and gym workouts.",
    price: 9999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTZwPstw5Db5WloWn7SPbPo0xVCUN7PPQ1A&s",
    category: "shoes",
    isFeatured: false,
  },
  {
    name: "Nike Court Vision Low",
    description: "Basketball-inspired lifestyle shoes with a sleek, modern design.",
    price: 6499,
    image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2024/OCTOBER/4/qBmACo2N_82efd517263544c6afd4740ff9f60b56.jpg",
    category: "shoes",
    isFeatured: false,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    await Product.deleteMany();
    console.log("🗑️ Old products removed");

    await Product.insertMany(products);
    console.log("🌱 Products seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedProducts();
