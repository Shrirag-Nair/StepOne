import { motion } from "framer-motion";
import { Github, Heart, Zap, Sparkles } from "lucide-react";

const Footer = () => {
  // Animation variants
  const footerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.1 
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1 
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }
    },
    hover: { 
      scale: 1.05,
      y: -2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20 
      }
    }
  };

  const shimmerVariants = {
    animate: {
      x: ["-100%", "100%", "-100%"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.footer
      className="relative bg-emerald-950 overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
            <motion.div variants={linkVariants}>
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">StepOne</h3>
              <p className="text-gray-300 text-sm">
                Elevating style with premium footwear and apparel for every occasion.
              </p>
            </motion.div>
            <motion.div variants={linkVariants}>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="/shop" className="hover:text-emerald-400 transition-colors">Shop</a></li>
                <li><a href="/about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                <li><a href="/faq" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </motion.div>
            <motion.div variants={linkVariants}>
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="mailto:support@stepone.com" className="hover:text-emerald-400 transition-colors">support@stepone.com</a></li>
                <li><a href="/social" className="hover:text-emerald-400 transition-colors">Social Media</a></li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mt-12"
            variants={{
              visible: { 
                transition: { 
                  staggerChildren: 0.2, 
                  delayChildren: 0.3 
                }
              }
            }}
          >
            {/* GitHub repo link - THE ONLY FUNCTIONAL ELEMENT */}
            <motion.a
              href="https://github.com/yourusername/your-repo" // Replace with your actual repo URL
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-3 px-6 py-4 
                bg-emerald-800 hover:bg-emerald-700
                border border-emerald-700 text-emerald-300 hover:text-white font-semibold rounded-2xl
                focus:outline-none focus:ring-2 focus:ring-emerald-500/50 
                transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
              variants={linkVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              aria-label="View source code on GitHub"
            >
              <motion.span className="relative z-10 flex items-center space-x-3">
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="hidden sm:inline">View on GitHub</span>
                <span className="sm:hidden">GitHub</span>
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-emerald-800 pt-8 pb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} StepOne. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;