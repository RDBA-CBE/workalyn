import React from 'react';
import SolutionsPage from '../../components/SolutionsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Workspaces | Workalyn',
  description: 'Explore Workalyn’s flexible workspace solutions — hot desks, fixed desks, private cabins, and meeting & event suites tailored to every work style.',
};

export default function WorkspacesPage() {
  return <SolutionsPage />;
}
