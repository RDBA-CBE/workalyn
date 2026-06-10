import React from 'react';
import AmenitiesPage from '../../components/AmenitiesPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amenities | Workalyn',
  description: 'Explore Workalyn’s world-class amenities — from the dining lounge and barista-grade coffee to the pod room, curated F&B district, and adjacent premier gym.',
};

export default function GalleryPage() {
  return <AmenitiesPage />;
}
