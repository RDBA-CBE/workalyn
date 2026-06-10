import React from 'react';
import ContactPage from '../../components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Tour | Workalyn',
  description: 'Book a tour at Workalyn and experience our premium co-working spaces firsthand. Schedule your visit today and find your perfect workspace.',
};

export default function ContactPageRoute() {
  return <ContactPage />;
}