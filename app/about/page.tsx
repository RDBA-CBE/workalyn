import React from 'react';
import AboutPage from '../../components/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Workalyn | Trusted Workspace & Business Solutions Partner',
  description: 'Discover the story behind Workalyn, our values, and how we support businesses with modern workspace solutions designed for productivity and growth.',
  alternates: {
    canonical: "https://www.workalyn.com/about",
  },
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
