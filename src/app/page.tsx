import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ClipboardDocumentListIcon,
  ComputerDesktopIcon,
  ClockIcon,
  UserIcon,
  GlobeAltIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { FeatureCard } from '@/components/FeatureCard';

const features = [
  {
    icon: ClipboardDocumentListIcon,
    text: '100+ Exercises',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: ComputerDesktopIcon,
    text: '12 Modules',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: ClockIcon,
    text: '15 Hours',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: UserIcon,
    text: 'Video Explainers',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: GlobeAltIcon,
    text: 'Real-world Examples',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: ChartBarIcon,
    text: 'Interactive Visuals',
    color: 'bg-indigo-100 text-indigo-600'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Secondary Navigation */}
      <Breadcrumb 
        items={[
          { label: 'Home', href: '/', active: true },
          { label: 'Crash Course', href: '/crash-course' }
        ]} 
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Machine Learning Crash Course
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Google's fast-paced, practical introduction to machine learning, featuring a series of videos, 
            interactive visualizations, and hands-on exercises.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <Button href="/crash-course" variant="primary" size="lg">
              Start Crash Course
            </Button>
            <Button href="/modules" variant="secondary" size="lg">
              Browse Course Modules
            </Button>
            <Button href="/prerequisites" variant="secondary" size="lg">
              View Prerequisites
            </Button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    text={feature.text}
                    color={feature.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
