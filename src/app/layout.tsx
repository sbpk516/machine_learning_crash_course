import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloProvider } from '@/lib/apollo-provider'
import dynamic from 'next/dynamic'

// Dynamically import Header to avoid SSR issues with framer-motion
const Header = dynamic(() => import('@/components/Header').then(mod => ({ default: mod.Header })), {
  ssr: false,
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Machine Learning Crash Course',
  description: 'Google\'s fast-paced, practical introduction to machine learning, featuring a series of videos, interactive visualizations, and hands-on exercises.',
  keywords: 'machine learning, AI, data science, education, online course',
  authors: [{ name: 'ML Crash Course Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider>
          <div className="min-h-screen bg-white">
            <Header />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ApolloProvider>
      </body>
    </html>
  )
}
