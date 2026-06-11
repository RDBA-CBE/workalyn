import React from 'react';
import ContactPage from '../../components/ContactPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Workalyn | Get in Touch for Workspace Solutions',
  description: 'Connect with Workalyn to learn more about our workspace solutions, amenities, and business services. Contact our team to find the right workspace for your needs.',
  alternates: {
    canonical: "https://www.workalyn.com/contact",
  },
};

export default function ContactPageRoute() {
  return <ContactPage />;
}
