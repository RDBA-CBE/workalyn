import React from 'react';
import ContactPage from '../../components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Workspace Tour | Visit Workalyn Today',
  description: "Schedule a tour of Workalyn's professional workspaces and amenities. Explore flexible office solutions, meet our team, and find the ideal workspace for your business.",
  alternates: {
    canonical: "https://www.workalyn.com/book-a-tour",
  },
};

export default function ContactPageRoute() {
  return <ContactPage />;
}