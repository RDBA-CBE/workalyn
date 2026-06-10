import React from 'react';
import Homepage from '../components/Homepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workalyn | Premium Co-Working Spaces',
  description: 'Workalyn offers premium co-working spaces designed for focused, uninterrupted work. Explore our thoughtfully curated workspaces, amenities, and community.',
};

export default function Page() {
  return <Homepage />;
}
