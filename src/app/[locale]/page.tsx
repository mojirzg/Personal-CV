import React from 'react';
import { HomeInfo, NavMenu, Portfolio } from '@/components';
import Contact from '@/components/ui/contact/Contact';
import Variants from '@/components/common/nav/NavMenu';

export default function Home() {
  return (
    <>
      <Variants />
      <NavMenu />
      <HomeInfo />
      <Portfolio />
      <Contact />
      <div className="py-10" />
    </>
  );
}
