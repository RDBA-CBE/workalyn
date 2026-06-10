import React from 'react';
import Locations from '../../components/Locations';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Locations | Workalyn',
  description: 'Find a Workalyn co-working space near you. Discover our strategically located workspaces designed for maximum accessibility and convenience.',
};

export default function LocationsPage() {
  return <Locations />;
}
