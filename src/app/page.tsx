'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';
import { Heart, Star, Plus, Bell, Sparkles, ArrowRight, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  const [isPaused, setIsPaused] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative">
        <Image
          src="/1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Navigation */}
        <nav className="relative z-10 flex justify-end items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://app.codedmanifestations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-gray-200 transition-colors bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"
            >
              <ArrowRight className="w-4 h-4" />
              Get Started
            </a>
          </div>
        </nav>
      
        {/* Hero Content */}
        <div className="relative max-w-4xl mx-auto px-6 pt-0 pb-42 flex flex-col justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 bg-opacity-20 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-700/30"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold text-white mb-6 text-center drop-shadow-lg"
            >
              Transform Your Mindset with
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="block text-orange-400 dark:text-orange-300"
              >
                Daily Affirmations
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center drop-shadow-md"
            >
              Cultivate positivity, boost confidence, and create lasting change through the power of daily affirmations.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 dark:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-colors flex items-center gap-2 mx-auto shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Now
            </motion.button>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.3 }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
                href="https://app.codedmanifestations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-3 shadow-lg border border-gray-700"
              >
                <Image
                  src="/browser-logo.avif"
                  alt="Browser"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded"
                />
                <span className="text-sm">Login to<br />Web APP</span>
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 }}
                whileHover={{ scale: 1.08 }}
                href="https://apps.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-105"
              >
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-16 w-auto"
                />
              </motion.a>
              <motion.a 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
                whileHover={{ scale: 1.08 }}
                href="https://play.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform hover:scale-105"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-16 w-auto"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Today's Affirmations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Today {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
            {[
              "I am worthy of all the good things that come into my life.",
              "Every day is a fresh start and a new opportunity.",
              "I trust myself and my ability to make wise decisions.",
              "I am capable of achieving anything I set my mind to."
            ].map((affirmation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)" }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all cursor-pointer"
              >
                <Heart className="w-6 h-6 text-pink-500" />
                <p className="text-gray-800 dark:text-gray-200">{affirmation}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose CODED MANIFESTATIONS™️?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-12 h-12 text-yellow-500 mb-4" />,
                title: "Daily Affirmations",
                description: "Start your day with powerful, personalized affirmations designed to shift your mindset and attract positive outcomes."
              },
              {
                icon: <Heart className="w-12 h-12 text-pink-500 mb-4" />,
                title: "Progress Tracking",
                description: "Monitor your journey with detailed insights and celebrate your growth along the way."
              },
              {
                icon: <Bell className="w-12 h-12 text-blue-500 mb-4" />,
                title: "Smart Reminders",
                description: "Never miss a moment with intelligent notifications that keep you consistent with your practice."
              },
              {
                icon: <Plus className="w-12 h-12 text-green-500 mb-4" />,
                title: "Custom Programs",
                description: "Choose from specialized programs tailored to your specific goals and aspirations."
              },
              {
                icon: <svg className="w-12 h-12 text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                title: "Faith-Based Content",
                description: "Access faith-based prayers, daily Bible verses, and Christian meditations for spiritual alignment and growth."
              },
              {
                icon: <svg className="w-12 h-12 text-cyan-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>,
                title: "Immersive Audio Experience",
                description: "Therapeutic hypnosis, healing sound frequencies, and guided meditations designed for deep transformation."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.2, type: "spring", stiffness: 200 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center"
          >
            App Detailed Information
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl font-semibold text-orange-500 mb-8 text-center"
          >
            CODED MANIFESTATIONS™️
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto"
          >
            A next-generation personal transformation and spiritual-wellness platform designed to help people consciously reprogram their mindset, emotions, habits, and belief systems—at scale, through technology.
          </motion.p>

          {/* App Interface */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">CODED MANIFESTATIONS™️ App Interface</h4>
          </div>

          {/* Core Description */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At its core, CODED MANIFESTATIONS™️ operates on a simple but powerful premise: what you consistently impress upon subconscious mind shapes identity, behavior, and outcomes. The platform delivers this imprinting through daily "coded" affirmations, guided meditations, therapeutic hypnosis, calming sound frequencies, breathwork sessions, and motivational audio—designed to be consumed in short, repeatable sessions that fit seamlessly into real life. Users don't need hours of practice; consistency is engineered into system.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium Experience</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                CODED MANIFESTATIONS™️ is built as a premium subscription platform, with a carefully designed freemium funnel that allows users to experience transformation while clearly showcasing value of paid access. Premium users unlock deeper content, advanced audio experiences, and full access to transformation ecosystem. Subscriptions synchronize seamlessly across devices, reinforcing habit formation and retention.
              </p>
            </motion.div>
          </div>

          {/* Content Library */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h4 
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >Content Library</motion.h4>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The platform offers a rich, multi-layered content library, including:
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                ["Structured affirmation challenges", "Deep manifestation codes for mindset rewiring", "Guided meditations and therapeutic hypnosis", "Life-preserving breathwork sessions"],
                ["Healing and soothing sound therapies", "Daily motivation and inspirational audio", "Faith-based prayers and meditations", "Christian hypnosis for faith-based users"],
                ["Full year (366 days) of daily Positive Vibes", "Daily Bible Verses delivered in-app", "Scheduled notifications for consistency", "Cross-device synchronization"]
              ].map((items, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                >
                  <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                    {items.map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 + i * 0.05 }}
                      >• {item}</motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Screenshots */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Experience Transformation</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.div
                  className="relative rounded-lg shadow-lg overflow-hidden"
                  style={{ maxHeight: '600px', width: '100%', maxWidth: '500px' }}
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/2.png"
                    alt="App Screen 2"
                    width={500}
                    height={650}
                    className="rounded-lg object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div
                  className="relative rounded-lg shadow-lg overflow-hidden"
                  style={{ maxHeight: '600px', width: '100%', maxWidth: '500px' }}
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/3.png"
                    alt="App Screen 3"
                    width={500}
                    height={650}
                    className="rounded-lg object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div
                  className="relative rounded-lg shadow-lg overflow-hidden"
                  style={{ maxHeight: '600px', width: '100%', maxWidth: '500px' }}
                  whileHover={{ scale: 1.08, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/4.png"
                    alt="App Screen 4"
                    width={500}
                    height={650}
                    className="rounded-lg object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Final Screens */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h4 
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >Transform Your Life Today</motion.h4>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative rounded-lg shadow-lg overflow-hidden"
                  style={{ maxHeight: '600px', width: '100%', maxWidth: '500px' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/6.png"
                    alt="App Experience 6"
                    width={500}
                    height={650}
                    className="rounded-lg object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative rounded-lg shadow-lg overflow-hidden"
                  style={{ maxHeight: '600px', width: '100%', maxWidth: '500px' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/4 - No Texts.png"
                    alt="App Experience Clean 4"
                    width={500}
                    height={650}
                    className="rounded-lg object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="relative rounded-lg shadow-lg overflow-hidden"
                  style={{ maxHeight: '600px', width: '100%', maxWidth: '500px' }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/2 - No Texts.png"
                    alt="App Experience Clean"
                    width={500}
                    height={650}
                    className="rounded-lg object-contain w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Video Quotes Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-white mb-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Inspirational Video Quotes
          </motion.h2>
          <motion.p 
            className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Watch powerful motivational videos to fuel your transformation journey
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Believe in Yourself", embed: "https://www.youtube.com/embed/wnHW6o8WMas", author: "Motivational Quotes" },
              { title: "Never Give Up", embed: "https://www.youtube.com/embed/mgmVOuLgFB0", author: "Success Quotes" },
              { title: "The Power of Positive Thinking", embed: "https://www.youtube.com/embed/TxU30JMf8mg", author: "Morning Motivation" }
            ].map((video, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              >
                <div className="aspect-video">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg">{video.title}</h3>
                  <p className="text-gray-400 text-sm">{video.author}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Google Ads Banner - Free Users */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 border-2 border-dashed border-yellow-400 rounded-xl p-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Ad</span>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 mb-3">Advertisement</p>
            {/* Google AdSense Banner - inspirational */}
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4 w-full">
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-1474614683509926"
                data-ad-slot="8662403935"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <Script id="adsbygoogle-push" strategy="afterInteractive">
                {`(adsbygoogle = window.adsbygoogle || []).push({});`}
              </Script>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* News Feeds Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest News & Updates
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "New Meditation Tracks Released", 
                date: "April 2026", 
                excerpt: "Explore our latest collection of guided meditations for stress relief and mindfulness.",
                tag: "New Content",
                fullContent: "We are excited to announce the release of our newest collection of guided meditation tracks, carefully crafted to help you find peace and balance in your daily life. This collection includes over 50 new sessions ranging from 5-minute quick stress relief to deep 30-minute mindfulness journeys. Each track is designed with specific intentions: morning energizers, workday focus enhancers, evening wind-downs, and deep sleep preparation. Our team of certified meditation instructors and sound therapists have collaborated to create immersive audio experiences that combine binaural beats, nature sounds, and soothing vocal guidance. Premium subscribers get immediate access to the entire collection, while free users can enjoy a rotating selection of 5 tracks weekly. Download the latest update to start your journey to inner peace today."
              },
              { 
                title: "Community Milestone: 100K Users", 
                date: "March 2026", 
                excerpt: "We are thrilled to announce that our community has grown to 100,000 active users worldwide!",
                tag: "Community",
                fullContent: "Today marks an incredible milestone for the CODED MANIFESTATIONS™️ family - we have reached 100,000 active users across the globe! This achievement represents more than just a number; it signifies a growing movement of individuals committed to personal transformation and conscious living. Our community spans 45 countries, with users from all walks of life sharing their journey toward mindfulness and manifestation. To celebrate this milestone, we are launching a special Community Spotlight series featuring stories from our members. We have also doubled our support team to ensure every user receives the guidance they need. Thank you for being part of this journey. Together, we are creating ripples of positive change across the world. Here's to the next 100,000!"
              },
              { 
                title: "Featured: Success Stories", 
                date: "March 2026", 
                excerpt: "Read inspiring stories from users who transformed their lives using our platform.",
                tag: "Stories",
                fullContent: "Our Success Stories feature is now live! We have collected incredible testimonials from users who have experienced profound transformations using CODED MANIFESTATIONS™️. Meet Sarah from Toronto, who overcame anxiety and launched her dream business after 90 days of consistent practice. Read about Marcus from London, who used our faith-based content to find spiritual grounding during difficult times. Discover how Jennifer from Sydney manifested her ideal relationship by aligning her daily affirmations with her core values. These stories showcase the real-world impact of intentional mindset work. Each story includes the specific tools and practices used, along with tips you can apply to your own journey. Visit the new Success Stories section in the app to read these inspiring accounts and submit your own story for a chance to be featured and win a year of Premium access!"
              }
            ].map((news, index) => (
              <motion.article
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: expandedCard === index ? 1 : 1.03, y: expandedCard === index ? 0 : -5, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                layout
              >
                <motion.div 
                  className="p-6"
                  layout
                >
                  <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {news.tag}
                  </span>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{news.title}</h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 text-justify"
                    animate={{ 
                      height: expandedCard === index ? "auto" : "3rem",
                      opacity: 1
                    }}
                  >
                    {expandedCard === index ? news.fullContent : news.excerpt}
                  </motion.p>
                  <motion.button 
                    className="mt-4 text-orange-500 font-semibold flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCard(expandedCard === index ? null : index);
                    }}
                  >
                    {expandedCard === index ? "Show Less" : "Read More"} <motion.span animate={{ rotate: expandedCard === index ? 180 : 0 }}>→</motion.span>
                  </motion.button>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Motivational Quotes Carousel */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Motivational Quotes
          </motion.h2>
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-6 cursor-pointer"
              initial={{ x: 0 }}
              animate={isPaused ? { x: 0 } : { x: [0, -1200] }}
              transition={{ 
                x: {
                  repeat: isPaused ? 0 : Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear"
                }
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...[
                { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { quote: "Your limitation—it's only your imagination.", author: "Les Brown" },
                { quote: "Push yourself, because no one else is going to do it for you.", author: "Grant Cardone" },
                { quote: "Great things never come from comfort zones.", author: "Roy T. Bennett" },
                { quote: "Dream it. Wish it. Do it.", author: "Rhonda Byrne" }
              ], ...[
                { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { quote: "Your limitation—it's only your imagination.", author: "Les Brown" },
                { quote: "Push yourself, because no one else is going to do it for you.", author: "Grant Cardone" },
                { quote: "Great things never come from comfort zones.", author: "Roy T. Bennett" },
                { quote: "Dream it. Wish it. Do it.", author: "Rhonda Byrne" }
              ]].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-80 bg-gradient-to-br from-orange-500 to-pink-500 p-6 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-lg font-medium italic mb-4">"{item.quote}"</p>
                  <p className="text-white/80 text-sm">— {item.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Download Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Transform Your Life?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Join thousands of users on their manifestation journey</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.08 }}
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-105"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-20 w-auto"
              />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.08 }}
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-105"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-20 w-auto"
              />
            </motion.a>
          </div>
          
          {/* QR Scan Code */}
          <motion.div
            className="mt-12 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Or scan to download the app</p>
            <motion.div
              className="relative w-64 h-64 rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.1, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Scancode.jpg"
                alt="Scan QR Code to Download App"
                fill
                className="rounded-xl object-cover"
                sizes="256px"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-10 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-semibold text-white">Our Community Channels</h3>
            <div className="flex gap-6">
              <motion.a
                href="https://facebook.com/codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-white p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </motion.a>
              <motion.a
                href="https://instagram.com/codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-white p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </motion.a>
              <motion.a
                href="https://tiktok.com/@codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-white p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
                  alt="TikTok"
                  className="w-8 h-8"
                />
              </motion.a>
              <motion.a
                href="https://youtube.com/codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-white p-4 rounded-full shadow-lg"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt="YouTube"
                  className="w-8 h-8"
                />
              </motion.a>
            </div>
            <div className="flex gap-4 text-sm">
              <a 
                href="https://good2go-5759d.web.app/terms-of-use" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                Terms of Use
              </a>
              <a 
                href="https://good2go-5759d.web.app/privacy-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="https://good2go-5759d.web.app/cookie-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline transition-colors"
              >
                Cookie Policy
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2026 CODED MANIFESTATIONS™️ - All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Designed, Managed and Maintained by NEXATECH®️ LLC™️
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}