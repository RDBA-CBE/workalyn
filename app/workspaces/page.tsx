import React from 'react';
import SolutionsPage from '../../components/SolutionsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Workspace Solutions for Business Growth | Workalyn',
  description: 'Discover modern workspaces tailored for businesses and teams. Enhance productivity, collaboration, and operational efficiency with Workalyn.',
  alternates: {
    canonical: "https://www.workalyn.com/workspaces",
  },
};

export default function WorkspacesPage() {
  return <SolutionsPage />;
}
