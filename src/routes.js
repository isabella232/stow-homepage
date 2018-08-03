import Home from './components/Home';
import GettingStarted from './components/GettingStarted';
import ForDevelopers from './components/ForDevelopers';
import ForUsers from './components/ForUsers';
import ForPotentialPartners from './components/ForPotentialPartners';
import AboutUs from './components/AboutUs';
import LinniaLogo from './images/LinniaLogo';
import React from 'react';

const height = 35;
const width = 35;

const routes = [
  {
    path: '/',
    exact: true,
    title: <LinniaLogo style={{ height, width }} />,
    component: Home,
    logo: true
  },
  {
    title: 'Getting Started',
    path: '/getting-started',
    component: GettingStarted
  },
  {
    title: 'Developers',
    path: '/for-developers',
    component: ForDevelopers
  },
  {
    title: 'Users',
    path: '/for-users',
    component: ForUsers
  },
  {
    title: 'Partners',
    path: '/for-potential-partners',
    component: ForPotentialPartners
  },
  {
    title: 'About Us',
    path: '/about-us',
    component: AboutUs
  }
];

export default routes;
