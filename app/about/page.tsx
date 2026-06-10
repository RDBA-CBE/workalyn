import React from 'react';
import AboutPage from '../../components/AboutPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Workalyn',
  description: 'Learn about Workalyn — our story, mission, and the people behind our premium co-working community built to inspire productivity and collaboration.',
};

export default function AboutPageRoute() {
  return <AboutPage />;
}
