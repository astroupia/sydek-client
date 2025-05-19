"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track mouse position for interactive background elements
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClient]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Animated number variants
  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  // Calculate transform based on mouse position
  const calculateTransform = (factor = 30) => {
    if (!isClient) return "translate(0px, 0px)";

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (mousePosition.x - centerX) / factor;
    const deltaY = (mousePosition.y - centerY) / factor;

    return `translate(${deltaX}px, ${deltaY}px)`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Interactive background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"
          style={{ transform: calculateTransform(20) }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
          style={{ transform: calculateTransform(40) }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="w-full max-w-3xl mx-auto z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated 404 */}
          <motion.div
            className="flex items-center justify-center mb-8"
            variants={numberVariants}
          >
            <div className="relative">
              <div className="text-[10rem] md:text-[12rem] font-bold text-gray-100 leading-none select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[5rem] md:text-[6rem] font-bold bg-gradient-to-r from-secondary to-secondary/70 text-transparent bg-clip-text leading-none">
                  404
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8 max-w-md mx-auto"
            variants={itemVariants}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </motion.p>

          {/* Search */}
          <motion.div className="mb-8 max-w-md mx-auto" variants={itemVariants}>
            <form onSubmit={handleSearch} className="relative group">
              <input
                type="text"
                placeholder="Search for something..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent shadow-sm transition-all duration-300 group-hover:shadow-md"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full p-1 hover:bg-secondary/90 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </form>
          </motion.div>

          {/* Navigation options */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-secondary hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/company/contact"
              className="flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <span>Contact Support</span>
              <motion.span
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="opacity-0 group-hover:opacity-100"
              >
                <RefreshCw className="w-4 h-4 ml-1" />
              </motion.span>
            </Link>
          </motion.div>

          {/* Random suggestions */}
          <motion.div
            className="mt-12 text-gray-500 text-sm"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>You might want to check out:</p>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {["Products", "Services", "About Us"].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="px-3 py-1 bg-gray-100 rounded-full hover:bg-secondary/10 hover:text-secondary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
