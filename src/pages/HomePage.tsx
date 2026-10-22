import React from 'react';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { Process } from '../sections/Process';
import { Routes } from '../sections/Routes';
import { Benefits } from '../sections/Benefits';
import { ContactCTA } from '../sections/ContactCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Process />
      <Routes />
      <Benefits />
      <ContactCTA />
    </div>
  );
};
