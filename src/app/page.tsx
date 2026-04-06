'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Plus, Bell, Sparkles, ArrowRight, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-orange-500" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">Coded Manifestation</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your Mindset with
            <span className="block text-orange-500">Daily Affirmations</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Cultivate positivity, boost confidence, and create lasting change through the power of daily affirmations.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Download Now
          </button>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
      </section>

      {/* Today's Affirmations */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Today April 6</h2>
          <div className="space-y-4 max-w-3xl">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Everything You Need</h2>
          <p className="text-gray-600 dark:text-gray-300">Simple, powerful tools to support your journey</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Daily Affirmations",
              description: "Start each day with a fresh, uplifting affirmation tailored to inspire you.",
              color: "text-orange-500"
            },
            {
              icon: Heart,
              title: "Save Favorites",
              description: "Bookmark the affirmations that resonate most with your heart.",
              color: "text-pink-500"
            },
            {
              icon: Plus,
              title: "Create Your Own",
              description: "Write personal affirmations and build your unique collection.",
              color: "text-green-500"
            },
            {
              icon: Bell,
              title: "Daily Reminders",
              description: "Set gentle notifications to keep positivity flowing throughout your day.",
              color: "text-blue-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
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
                className="h-28 w-auto"
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
                className="h-28 w-auto"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
