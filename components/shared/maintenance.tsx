"use client";

import type React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bell, Clock, Mail, RefreshCw, Send, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

export default function Maintenance() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  // Set isClient to true after component mounts
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

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        let newHours = prev.hours;
        let newMinutes = prev.minutes;
        let newSeconds = prev.seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Here you would typically send this to your API
      console.log("Notification email:", email);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
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

  // Animated title variants
  const titleVariants = {
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

  // Format time with leading zeros
  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
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
          {/* Animated Maintenance Icon */}
          <motion.div
            className="flex items-center justify-center mb-8"
            variants={titleVariants}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="text-gray-100"
              >
                <RefreshCw size={120} strokeWidth={1} />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gradient-to-r from-secondary to-secondary/70 text-transparent bg-clip-text">
                  <RefreshCw
                    size={60}
                    strokeWidth={2}
                    className="text-secondary"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            variants={itemVariants}
          >
            We&apos;re Under Maintenance
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8 max-w-md mx-auto"
            variants={itemVariants}
          >
            Our site is currently undergoing scheduled maintenance to improve
            your experience. We&apos;ll be back online shortly.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div className="mb-8" variants={itemVariants}>
            <p className="text-gray-600 mb-3 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2 text-secondary" />
              Estimated time remaining:
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm text-secondary">
                  {formatTime(timeLeft.hours)}
                </div>
                <span className="text-xs text-gray-500 mt-1">HOURS</span>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm text-secondary">
                  {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-xs text-gray-500 mt-1">MINUTES</span>
              </div>
              <div className="text-2xl font-bold text-gray-400">:</div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold bg-white px-4 py-2 rounded-lg shadow-sm text-secondary">
                  {formatTime(timeLeft.seconds)}
                </div>
                <span className="text-xs text-gray-500 mt-1">SECONDS</span>
              </div>
            </div>
          </motion.div>

          {/* Notification Form */}
          <motion.div className="mb-8 max-w-md mx-auto" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="email"
                placeholder="Get notified when we're back..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-transparent shadow-sm transition-all duration-300 group-hover:shadow-md"
              />
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-secondary text-white rounded-full p-1 hover:bg-secondary/90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600 text-sm mt-2"
              >
                Thanks! We&apos;ll notify you when we&apos;re back online.
              </motion.p>
            )}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            <p className="text-gray-600">Follow us for updates:</p>
            <Link
              href="https://twitter.com/yourusername"
              className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-secondary hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:support@yourcompany.com"
              className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-secondary hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Mail className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 rounded-full text-gray-700 hover:text-secondary hover:border-secondary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={(e) => {
                e.preventDefault();
                window.location.reload();
              }}
            >
              <RefreshCw className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Status Updates */}
          <motion.div
            className="mt-12 bg-white p-6 rounded-xl shadow-sm max-w-md mx-auto"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-bold text-gray-800 mb-3 flex items-center">
              <Bell className="w-4 h-4 mr-2 text-secondary" />
              Status Updates
            </h3>
            <div className="space-y-3 text-left">
              <div className="border-l-2 border-secondary pl-3 py-1">
                <p className="text-sm text-gray-800">
                  Database migration in progress
                </p>
                <p className="text-xs text-gray-500">10 minutes ago</p>
              </div>
              <div className="border-l-2 border-green-500 pl-3 py-1">
                <p className="text-sm text-gray-800">Server backup completed</p>
                <p className="text-xs text-gray-500">25 minutes ago</p>
              </div>
              <div className="border-l-2 border-yellow-500 pl-3 py-1">
                <p className="text-sm text-gray-800">Maintenance started</p>
                <p className="text-xs text-gray-500">45 minutes ago</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
