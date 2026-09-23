import React from 'react';
import Hero from '@/components/landing/Hero'
import Projects from '@/components/landing/Projects'
import Experience from '@/components/landing/Experience';
import Education from '@/components/landing/Education'
import Skills from '@/components/landing/Skills'
import ContactCTA from '@/components/landing/ContactCTA'

export default function Home() {
  return (

    <div className="flex flex-col">
      <Hero/>
      <Projects/>
      <Experience/>
      <Education/>
      <Skills/>
      <ContactCTA/>
    </div>
  );
}
