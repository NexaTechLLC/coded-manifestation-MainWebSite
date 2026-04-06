'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Plus, Bell, Sparkles, ArrowRight, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-orange-400" />
          <span className="text-xl font-bold text-white">Coded Manifestation</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="flex items-center gap-2 px-4 py-2 text-gray-100 hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4" />
            Get Started
          </button>
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-white mb-6 text-center">
            Transform Your Mindset with
            <span className="block text-orange-400">Daily Affirmations</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto text-center">
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
      </div>
    </div>

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
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose Coded Manifestation?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-yellow-500" />,
                title: "Daily Affirmations",
                description: "Start your day with powerful, personalized affirmations designed to shift your mindset and attract positive outcomes."
              },
              {
                icon: <Heart className="w-8 h-8 text-pink-500" />,
                title: "Progress Tracking",
                description: "Monitor your journey with detailed insights and celebrate your growth along the way."
              },
              {
                icon: <Bell className="w-8 h-8 text-blue-500" />,
                title: "Smart Reminders",
                description: "Never miss a moment with intelligent notifications that keep you consistent with your practice."
              },
              {
                icon: <Plus className="w-8 h-8 text-green-500" />,
                title: "Custom Programs",
                description: "Choose from specialized programs tailored to your specific goals and aspirations."
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
        </motion.div>
      </section>

      {/* Product Details Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Personal Transformation</h2>
          <h3 className="text-xl font-semibold text-orange-500 mb-8 text-center">CODED MANIFESTATIONS™</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-4xl mx-auto">
            A next-generation personal transformation and spiritual-wellness platform designed to help people consciously reprogram their mindset, emotions, habits, and belief systems—at scale, through technology.
          </p>

          {/* App Interface */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Coded Manifestation App Interface</h4>
            <div className="flex justify-center mb-8">
              <img 
                src="/1.png" 
                alt="Coded Manifestation App Interface" 
                className="rounded-lg shadow-lg max-w-full h-auto"
                style={{ maxHeight: '500px' }}
              />
            </div>
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
                <img 
                  src="/2.png" 
                  alt="App Screen 2" 
                  className="rounded-lg shadow-lg max-w-full"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/3.png" 
                  alt="App Screen 3" 
                  className="rounded-lg shadow-lg max-w-full"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/4.png" 
                  alt="App Screen 4" 
                  className="rounded-lg shadow-lg max-w-full"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>

          {/* Brand Positioning */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Brand Positioning</h4>
            <div className="flex justify-center mb-8">
              <img 
                src="/5.png" 
                alt="Brand Experience" 
                className="rounded-lg shadow-lg max-w-full"
                style={{ maxHeight: '400px' }}
              />
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
                <img 
                  src="/6.png" 
                  alt="App Experience 6" 
                  className="rounded-lg shadow-lg max-w-full"
                  style={{ maxHeight: '400px' }}
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/2 - No Texts.png" 
                  alt="App Experience Clean" 
                  className="rounded-lg shadow-lg max-w-full"
                  style={{ maxHeight: '400px' }}
                />
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
    </div>
  );
}
