import { Brain, Lightbulb, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: "AI Consulting",
    description: "Our expert team works closely with clients to identify high-impact AI use cases, recommend suitable technologies, and select the right tools to achieve their goals.",
    icon: Lightbulb,
  },
  {
    title: "Implementation",
    description: "We take a hands-on approach to develop and deploy custom AI solutions tailored to each client's unique needs and requirements.",
    icon: Cog,
  },
  {
    title: "Third-Party Solutions",
    description: "Find and integrate the best AI tools on the market with our comprehensive third-party solutions service, ensuring seamless support for your specific needs.",
    icon: Brain,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Guiding Your AI Journey
            </h2>
            <p className="text-xl text-gray-600">
              With expertise across all stages of AI adoption, we help organizations
              achieve smarter, data-driven success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-indigo-200 mb-8">
              Let's work together to unlock your organization's full potential
              through innovative AI solutions.
            </p>
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}