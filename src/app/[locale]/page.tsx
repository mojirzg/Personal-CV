import React from 'react';
import { Hero, NavMenu, Portfolio } from '@/components';
import Contact from '@/components/ui/contact/Contact';
import Variants from '@/components/common/nav/NavMenu';

export default function Home() {
  return (
    <>
      <Variants />
      <NavMenu />
      <Hero />
      <Portfolio />
      <Contact />
      <div className="py-10" />
    </>
  );
}
