import React from 'react';
import ContactPage from '../../components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Workalyn',
  description: 'Get in touch with Workalyn. We’re here to help you find the perfect workspace solution. Reach out to our team today.',
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
