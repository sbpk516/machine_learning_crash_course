import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 py-3">
          {items.map((item, index) => (
            <div key={item.label} className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
              )}
              {item.active ? (
                <span className="text-sm font-medium text-primary-600">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
