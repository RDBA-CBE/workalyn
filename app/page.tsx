import React from 'react';
import Homepage from '../components/Homepage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Co-working with Workalyn | workspaces | meeting rooms',
  description: 'Discover flexible workspaces designed for businesses, startups, and growing teams. Work, collaborate, and scale in a professional environment with Workalyn.',
  alternates: {
    canonical: "https://www.workalyn.com/",
  },
};

export default function Page() {
  return <Homepage />;
}
