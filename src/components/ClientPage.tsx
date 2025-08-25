'use client';

import { ReactNode } from 'react';

interface ClientPageProps {
  children: ReactNode;
}

export function ClientPage({ children }: ClientPageProps) {
  return <>{children}</>;
}
