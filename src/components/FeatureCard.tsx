import { ComponentType } from 'react';

interface FeatureCardProps {
  icon: ComponentType<{ className?: string }>;
  text: string;
  color: string;
}

export function FeatureCard({ icon: Icon, text, color }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${color}`}>
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-sm font-medium text-gray-700">{text}</p>
    </div>
  );
}
