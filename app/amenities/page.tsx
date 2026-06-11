import React from 'react';
import AmenitiesPage from '../../components/AmenitiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amenities Designed for Productivity & Comfort | Workalyn',
  description: 'Explore premium amenities that support productivity, collaboration, and business success, including modern facilities, essential services, and workplace conveniences.',
  alternates: {
    canonical: "https://www.workalyn.com/amenities",
  },
};

export default function GalleryPage() {
  return <AmenitiesPage />;
}
