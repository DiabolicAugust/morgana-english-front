import React from 'react';
import Dashboard from '../../components/dashboard/dashboard';
import TopicSets from '../../components/topic-sets/topic-sets';
import Ad from '../../components/ad/ad';

export interface MenuItem {
  title: string;
  component: JSX.Element;
}

export const menu: MenuItem[] = [
  {
    title: 'Dashboard',
    component: <Dashboard />,
  },
  {
    title: 'Topic sets',
    component: <TopicSets />,
  },
  {
    title: 'Sentence',
    component: <Dashboard />,
  },
  {
    title: 'Fact',
    component: <Dashboard />,
  },
  {
    title: 'Ad',
    component: <Ad />,
  },
];
