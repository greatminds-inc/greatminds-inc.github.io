import { motion } from 'framer-motion';
import { Brain, Lightbulb, Cog, Puzzle } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Unlock the Full Potential of AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Empowering businesses through specialized AI services in consulting,
            implementation, and third-party solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}