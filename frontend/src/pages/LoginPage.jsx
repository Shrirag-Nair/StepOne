import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  LogIn, 
  Mail, 
  Lock, 
  ArrowRight, 
  Loader, 
  Shield,
  CheckCircle,
  Eye,
  EyeOff
} from "lucide-react";
import { useUserStore } from "../stores/useUserStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { login, loading } = useUserStore();

  // ORIGINAL LOGIC - UNCHANGED
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  // Enhanced validation (visual feedback only)
  const validateForm = () => {
    let isValid = true;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    
    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }
    
    return isValid;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError("");
  };

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        staggerChildren: 0.1 
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02, 
      boxShadow: "0 0 0 3px rgba(16, 185, 129, 0.1)",
      borderColor: "#10B981"
    },
    error: { 
      scale: 1.01, 
      borderColor: "#EF4444",
      boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.1)"
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      y: -2,
      boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
    },
    tap: { scale: 0.95 }
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

  const isFormValid = email && password.length >= 6 && !emailError && !passwordError;

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden
        bg-gradient-to-br from-gray-900/50 via-gray-900/20 to-gray-800/50"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <motion.div
          className="absolute top-1/4 left-10 w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-10"
          animate={{ 
            y: [0, -10, 0], 
            opacity: [0.1, 0.3, 0.1] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div
          className="absolute top-3/4 right-20 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10"
          animate={{ 
            y: [0, 8, 0], 
            opacity: [0.1, 0.25, 0.1] 
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-5"
          animate={{ 
            y: [0, -6, 0], 
            opacity: [0.05, 0.2, 0.05] 
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5 
          }}
        />
        
        {/* Background shimmer */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/2 via-transparent to-cyan-500/2"
          variants={shimmerVariants}
          animate="animate"
        />
      </div>

      {/* Main container */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="sm:mx-auto sm:w-full sm:max-w-md mb-8"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Auth badge */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 
              rounded-2xl mx-auto mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
          >
            <Shield className="h-8 w-8 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2 
            className="mt-6 text-center text-3xl sm:text-4xl font-extrabold 
              bg-gradient-to-r from-emerald-400 via-white to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome Back
          </motion.h2>

          <motion.p 
            className="mt-2 text-center text-sm text-gray-400 max-w-sm mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sign in to your account to continue your shopping journey
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.div
          className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          variants={formVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="relative bg-gradient-to-b from-gray-900/80 to-gray-800/80 backdrop-blur-xl 
              border border-gray-700/50 rounded-3xl p-8 sm:p-10 shadow-2xl hover:shadow-emerald-500/10
              overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r 
              before:from-emerald-400/5 before:to-cyan-400/5 before:opacity-0 
              hover:before:opacity-100 before:transition-opacity before:duration-500"
            whileHover={{ y: -2 }}
          >
            {/* Form header */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 
                backdrop-blur-sm border border-white/20 rounded-2xl mb-4">
                <LogIn className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Sign in to your account</h3>
              <p className="text-sm text-gray-400">Enter your details to access your account</p>
            </motion.div>

            {/* Form */}
            <motion.form 
              onSubmit={handleSubmit} // ORIGINAL LOGIC - UNCHANGED
              className="space-y-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              noValidate
            >
              {/* Email Field */}
              <motion.div 
                className="space-y-2"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="email" className="flex items-center text-sm font-semibold text-gray-300">
                  <Mail className="h-4 w-4 mr-2 text-emerald-400" />
                  Email Address
                  <span className="ml-1 text-red-400">*</span>
                </label>
                
                <div className="relative">
                  <motion.div 
                    className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10"
                    animate={{ 
                      color: emailError ? "#EF4444" : email ? "#10B981" : "#9CA3AF"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-5 w-5 transition-colors duration-300" />
                  </motion.div>
                  
                  <motion.input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`
                      relative w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-sm border-2 rounded-2xl 
                      text-white placeholder-gray-400 font-medium text-lg focus:outline-none 
                      transition-all duration-300 resize-none
                      ${emailError 
                        ? 'border-red-500/50 bg-red-500/5' 
                        : email 
                          ? 'border-emerald-500/50 bg-emerald-500/5' 
                          : 'border-gray-600/50 bg-gray-800/50 hover:border-gray-500/50'
                      }
                    `}
                    variants={inputVariants}
                    whileFocus="focus"
                    animate={emailError ? "error" : email ? "focus" : "rest"}
                    disabled={loading}
                  />
                  
                  {/* Password visibility toggle */}
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>

                  {/* Email character counter */}
                  {email && (
                    <motion.div
                      className="flex justify-between text-xs text-gray-500 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span>{email.length}/50 characters</span>
                      <span className={emailError ? "text-red-400" : "text-emerald-400"}>
                        {emailError ? "Invalid" : "Valid"}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {emailError && (
                    <motion.p
                      className="flex items-center text-sm text-red-400 mt-1 pl-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                      {emailError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Password Field */}
              <motion.div 
                className="space-y-2"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                <label htmlFor="password" className="flex items-center text-sm font-semibold text-gray-300">
                  <Lock className="h-4 w-4 mr-2 text-emerald-400" />
                  Password
                  <span className="ml-1 text-red-400">*</span>
                </label>
                
                <div className="relative">
                  <motion.div 
                    className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10"
                    animate={{ 
                      color: passwordError ? "#EF4444" : password ? "#10B981" : "#9CA3AF"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Lock className="h-5 w-5 transition-colors duration-300" />
                  </motion.div>
                  
                  <motion.input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    className={`
                      relative w-full pl-12 pr-12 py-4 bg-white/5 backdrop-blur-sm border-2 rounded-2xl 
                      text-white placeholder-gray-400 font-medium text-lg focus:outline-none 
                      transition-all duration-300 resize-none
                      ${passwordError 
                        ? 'border-red-500/50 bg-red-500/5' 
                        : password 
                          ? 'border-emerald-500/50 bg-emerald-500/5' 
                          : 'border-gray-600/50 bg-gray-800/50 hover:border-gray-500/50'
                      }
                    `}
                    variants={inputVariants}
                    whileFocus="focus"
                    animate={passwordError ? "error" : password ? "focus" : "rest"}
                    disabled={loading}
                  />
                  
                  {/* Password visibility toggle */}
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>

                  {/* Password strength indicator */}
                  {password && (
                    <motion.div
                      className="flex justify-between text-xs text-gray-500 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <span>{password.length}/20 characters</span>
                      <span className={passwordError ? "text-red-400" : password.length >= 8 ? "text-emerald-400" : "text-yellow-400"}>
                        {passwordError || (password.length >= 8 ? "Strong" : "Medium")}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {passwordError && (
                    <motion.p
                      className="flex items-center text-sm text-red-400 mt-1 pl-1"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 mr-1 flex-shrink-0" />
                      {passwordError}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Submit Button - ORIGINAL LOGIC UNCHANGED */}
              <motion.button
                type="submit"
                className="group relative w-full flex justify-center items-center py-4 px-6 
                  bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700
                  border border-transparent rounded-2xl font-semibold text-lg text-white shadow-lg 
                  hover:shadow-emerald-500/25 focus:outline-none focus:ring-2 focus:ring-emerald-500/50
                  transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent
                  before:opacity-0 before:group-hover:opacity-100 before:transition-opacity before:duration-300"
                onClick={handleSubmit} // ORIGINAL LOGIC - UNCHANGED
                disabled={loading || !isFormValid}
                variants={buttonVariants}
                whileHover={!loading && isFormValid ? "hover" : {}}
                whileTap={!loading && isFormValid ? "tap" : {}}
              >
                <motion.span
                  className="relative z-10 flex items-center space-x-2"
                  animate={loading ? { rotate: 360 } : {}}
                  transition={loading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
                >
                  {loading ? (
                    <>
                      <Loader className="h-5 w-5" aria-hidden="true" />
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                      <span>Sign In</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </motion.span>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  variants={shimmerVariants}
                  animate="animate"
                />
                
                {/* Security badge */}
                {!loading && (
                  <motion.div
                    className="absolute bottom-2 right-2 flex items-center space-x-1 text-xs text-white/80 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Shield className="h-3 w-3" />
                    <span>Secure</span>
                  </motion.div>
                )}
              </motion.button>

              {/* Form progress */}
              <motion.div
                className="flex items-center justify-between text-xs text-gray-500 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-1">
                    <div className={`w-2 h-2 rounded-full ${email ? 'bg-emerald-400' : 'bg-gray-600'}`}></div>
                    <div className={`w-2 h-2 rounded-full ${password ? 'bg-emerald-400' : 'bg-gray-600'}`}></div>
                  </div>
                  <span>{email && password ? `${(email.length + password.length) / 2}% Complete` : "Fill fields to enable"}</span>
                </div>
                <span className={isFormValid ? "text-emerald-400" : "text-gray-500"}>
                  {isFormValid ? "Ready" : "Complete form"}
                </span>
              </motion.div>
            </motion.form>

            {/* Footer */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link 
                  to="/signup" 
                  className="group relative font-medium text-emerald-400 hover:text-emerald-300 
                    transition-all duration-300 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-lg 
                    inline-flex items-center space-x-1"
                >
                  <span>Create Account</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </p>
            </motion.div>

            {/* Success notification placeholder */}
            <AnimatePresence>
              {false && (
                <motion.div
                  className="fixed bottom-4 right-4 bg-emerald-500/95 backdrop-blur-sm border border-emerald-400/50 
                    text-white px-6 py-4 rounded-2xl shadow-2xl z-50 max-w-sm"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Signed In Successfully!</p>
                      <p className="text-sm opacity-90">Redirecting to dashboard...</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-1 h-1 bg-cyan-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginPage;