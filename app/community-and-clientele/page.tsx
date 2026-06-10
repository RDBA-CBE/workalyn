import React from 'react';
import CommunitiesPage from '@/components/CommunitiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community & Clientele | Workalyn',
  description: 'Join the Workalyn community — a vibrant network of professionals, entrepreneurs, and creatives thriving in a collaborative and inspiring environment.',
};

export default function GalleryPage() {
  return <CommunitiesPage />;
}
