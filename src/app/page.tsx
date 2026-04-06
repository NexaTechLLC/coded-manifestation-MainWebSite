'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Plus, Bell, Sparkles, ArrowRight, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url("/1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
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
            <h1 className="text-5xl font-bold text-white mb-6 text-center drop-shadow-lg">
              Transform Your Mindset with
              <span className="block text-orange-400 dark:text-orange-300">Daily Affirmations</span>
            </h1>
            <p className="text-xl text-gray-100 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center drop-shadow-md">
              Cultivate positivity, boost confidence, and create lasting change through the power of daily affirmations.
            </p>
            <button className="bg-orange-500 dark:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 dark:hover:bg-orange-700 transition-colors flex items-center gap-2 mx-auto shadow-lg">
              <Download className="w-5 h-5" />
              Download Now
            </button>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://app.codedmanifestations.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-3 shadow-lg transform hover:scale-105 border border-gray-700"
              >
                <img
                  src="/browser-logo.avif"
                  alt="Browser"
                  className="w-8 h-8 rounded"
                />
                <span className="text-sm">Login to<br />Web APP</span>
              </a>
              <a 
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
              </a>
              <a 
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
              </a>
            </div>
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow"
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Coded Manifestation?</h2>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              >
                {feature.icon}
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
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">App Detailed Information</h2>
          <h3 className="text-xl font-semibold text-orange-500 mb-8 text-center">CODED MANIFESTATIONS™</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            A next-generation personal transformation and spiritual-wellness platform designed to help people consciously reprogram their mindset, emotions, habits, and belief systems—at scale, through technology.
          </p>

          {/* App Interface */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Coded Manifestation App Interface</h4>
          </div>

          {/* Core Description */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                At its core, CODED MANIFESTATIONS™ operates on a simple but powerful premise: what you consistently impress upon subconscious mind shapes identity, behavior, and outcomes. The platform delivers this imprinting through daily "coded" affirmations, guided meditations, therapeutic hypnosis, calming sound frequencies, breathwork sessions, and motivational audio—designed to be consumed in short, repeatable sessions that fit seamlessly into real life. Users don't need hours of practice; consistency is engineered into system.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium Experience</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                CODED MANIFESTATIONS™ is built as a premium subscription platform, with a carefully designed freemium funnel that allows users to experience transformation while clearly showcasing value of paid access. Premium users unlock deeper content, advanced audio experiences, and full access to transformation ecosystem. Subscriptions synchronize seamlessly across devices, reinforcing habit formation and retention.
              </p>
            </div>
          </div>

          {/* Content Library */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Content Library</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              The platform offers a rich, multi-layered content library, including:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Structured affirmation challenges</li>
                  <li>• Deep manifestation codes for mindset rewiring</li>
                  <li>• Guided meditations and therapeutic hypnosis</li>
                  <li>• Life-preserving breathwork sessions</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Healing and soothing sound therapies</li>
                  <li>• Daily motivation and inspirational audio</li>
                  <li>• Faith-based prayers and meditations</li>
                  <li>• Christian hypnosis for faith-based users</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Full year (366 days) of daily Positive Vibes</li>
                  <li>• Daily Bible Verses delivered in-app</li>
                  <li>• Scheduled notifications for consistency</li>
                  <li>• Cross-device synchronization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Experience Transformation</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex justify-center">
                <img src="/2.png" alt="App Screen 2" className="rounded-lg shadow-lg max-w-full" style={{ maxHeight: '400px' }} />
              </div>
              <div className="flex justify-center">
                <img src="/3.png" alt="App Screen 3" className="rounded-lg shadow-lg max-w-full" style={{ maxHeight: '400px' }} />
              </div>
              <div className="flex justify-center">
                <img src="/4.png" alt="App Screen 4" className="rounded-lg shadow-lg max-w-full" style={{ maxHeight: '400px' }} />
              </div>
            </div>
          </div>

          {/* Brand Positioning */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Brand Positioning</h4>
            <div className="flex justify-center mb-8">
              <img src="/5.png" alt="Brand Experience" className="rounded-lg shadow-lg max-w-full" style={{ maxHeight: '400px' }} />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto">
              The brand itself is positioned as premium, transformational, and purpose-driven. It appeals to users who want more than surface-level motivation—people seeking emotional healing, spiritual alignment, mental clarity, and intentional living. At the same time, the platform is modular and extensible, allowing future expansion into AI-powered coaching, personalization, analytics-driven recommendations, enterprise wellness offerings, and strategic partnerships.
            </p>
          </div>

          {/* Final Screens */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Transform Your Life Today</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <img src="/6.png" alt="App Experience 6" className="rounded-lg shadow-lg max-w-full" style={{ maxHeight: '400px' }} />
              </div>
              <div className="flex justify-center">
                <img src="/2 - No Texts.png" alt="App Experience Clean" className="rounded-lg shadow-lg max-w-full" style={{ maxHeight: '400px' }} />
              </div>
            </div>
          </div>

          {/* In Essence */}
          <div className="text-center">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">In Essence</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              In essence, CODED MANIFESTATIONS™ is not just an app—it is a scalable digital infrastructure for human transformation, engineered to turn daily intention into measurable life change, while operating on a business model built for long-term growth, recurring revenue, and global reach.
            </p>
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
            <a
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
            </a>
            <a
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
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-90 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-xl font-semibold text-white">Connect With Us</h3>
            <div className="flex gap-6">
              <a
                href="https://facebook.com/codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full transform transition-all hover:scale-110 shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com/codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full transform transition-all hover:scale-110 shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://tiktok.com/@codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full transform transition-all hover:scale-110 shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg"
                  alt="TikTok"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://youtube.com/codedmanifestation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full transform transition-all hover:scale-110 shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2026 Coded Manifestations&trade; - All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built by Nexatech LLC&trade;
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}