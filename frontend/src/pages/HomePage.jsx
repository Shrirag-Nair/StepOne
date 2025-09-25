import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { 
  Sparkles, 
  TrendingUp, 
  Users, 
  Zap,
  ShoppingBag,
  ArrowRight
} from "lucide-react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
  {
    href: "/sports",
    name: "Sports",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/2375666/2024/12/23/484d33a4-2c05-4a41-8d5b-6e92452341521734932934207-Nike-Men-Black-Air-Max-270-Sneakers-8891734932933910-1.jpg",
    type: "Activewear",
    itemsCount: 45,
    rating: 4.8,
    labels: ["Popular", "New"]
  },
  {
    href: "/casual",
    name: "Casual",
    imageUrl:
      "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/27578492/2024/2/14/f60a3083-8c7a-4d73-b318-5f76c1f9767d1707891826893NikeAirForce107LXMensShoes1.jpg",
    type: "Everyday",
    itemsCount: 78,
    rating: 4.7,
    labels: ["Best Seller", "Trending"]
  },
  {
    href: "/running",
    name: "Running",
    imageUrl:
      "https://cdn-images.farfetch-contents.com/18/86/30/10/18863010_40911161_322.jpg",
    type: "Performance",
    itemsCount: 32,
    rating: 4.9,
    labels: ["New Arrival"]
  },
  {
    href: "/football",
    name: "Football",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWW-0oMl0875sZx5qUA-GlohkEf5ir5SWtfg&s",
    type: "Team Sports",
    itemsCount: 28,
    rating: 4.6,
    labels: ["Popular"]
  },
  {
    href: "/training",
    name: "Training",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTZwPstw5Db5WloWn7SPbPo0xVCUN7PPQ1A&s",
    type: "Fitness",
    itemsCount: 56,
    rating: 4.8,
    labels: ["Best Seller", "New"]
  },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	// Animation variants
	const pageVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.7,
				staggerChildren: 0.1,
			},
		},
	};

	const headerVariants = {
		hidden: { opacity: 0, y: -60, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 22,
				delay: 0.2,
			},
		},
	};

	const gridVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 350,
				damping: 25,
				staggerChildren: 0.12,
				delayChildren: 0.5,
			},
		},
	};

	const categoryItemVariants = {
		hidden: {
			opacity: 0,
			y: 40,
			scale: 0.92,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 400,
				damping: 22,
			},
		},
		hover: {
			scale: 1.05,
			y: -10,
			boxShadow: "0 12px 24px rgba(0, 0, 0, 0.25)",
			transition: {
				type: "spring",
				stiffness: 500,
				damping: 20,
			},
		},
	};

	return (
		<motion.div
			className='relative min-h-screen text-white overflow-hidden bg-neutral-950 font-inter'
			variants={pageVariants}
			initial='hidden'
			animate='visible'
			role='main'
			aria-label='E-commerce Home Page'
		>
			{/* Google Fonts */}
			<link
				rel='stylesheet'
				href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap'
			/>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<motion.h1
					className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4 font-playfair'
					variants={headerVariants}
				>
					Explore Our Categories
				</motion.h1>
				<motion.p
					className='text-center text-xl text-gray-300 mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					Discover the latest trends in eco-friendly fashion
				</motion.p>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
					variants={gridVariants}
				>
					{categories.map((category) => (
						<motion.div
							key={category.name}
							variants={categoryItemVariants}
							whileHover='hover'
							className='group relative'
						>
							<CategoryItem category={category} />
						</motion.div>
					))}
				</motion.div>

				<AnimatePresence>
					{!isLoading && products.length > 0 && (
						<motion.section
							className='relative mt-20'
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9 }}
							exit={{ opacity: 0, y: 40 }}
							role='region'
							aria-label='Featured Products Section'
						>
							<motion.h2
								className='text-4xl font-playfair font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-gold-400 bg-clip-text text-transparent'
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5 }}
							>
								Featured Products
							</motion.h2>
							<FeaturedProducts featuredProducts={products} />
						</motion.section>
					)}
				</AnimatePresence>
			</div>
		</motion.div>
	);
};
export default HomePage;