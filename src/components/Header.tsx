'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MagnifyingGlassIcon, 
  GlobeAltIcon, 
  Bars3Icon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '@/types';

const navigation: NavItem[] = [
  { label: 'Machine Learning' },
  { 
    label: 'ML Concepts', 
    isDropdown: true,
    children: [
      { label: 'Supervised Learning' },
      { label: 'Unsupervised Learning' },
      { label: 'Neural Networks' },
      { label: 'Deep Learning' },
    ]
  },
  { label: 'Foundational Courses', href: '/foundational-courses' },
  { label: 'Advanced Courses', href: '/advanced-courses' },
  { 
    label: 'Guides', 
    isDropdown: true,
    children: [
      { label: 'Getting Started' },
      { label: 'Best Practices' },
      { label: 'Troubleshooting' },
    ]
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side navigation */}
          <div className="flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.isDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon className="h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                        >
                          {item.children?.map((child) => (
                            <div
                              key={child.label}
                              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                            >
                              {child.label}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side navigation */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
              <MagnifyingGlassIcon className="h-5 w-5" />
              <span>Search</span>
            </button>
            
            <button className="flex items-center space-x-2 text-sm text-gray-700 hover:text-primary-600 transition-colors">
              <GlobeAltIcon className="h-5 w-5" />
              <span>English</span>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.label}>
                  <div className="text-sm font-medium text-gray-700 py-2">
                    {item.label}
                  </div>
                  {item.children && (
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <div
                          key={child.label}
                          className="text-sm text-gray-600 py-1"
                        >
                          {child.label}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
