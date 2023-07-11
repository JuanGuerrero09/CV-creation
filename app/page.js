'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import AddButton from '@/components/AddButton';
import './globals.css';

const sectionMock = [{"title": "PROFILE", "sectionType": "profile"}, {"title": "LANGUAGES", "sectionType": "languages"}, {"title": "SKILLS", "sectionType": "skills"}, {"title": "WORK EXPERIENCE", "sectionType": "work experience"}];

export default function Home() {
  let i = 0;
  const [sections, setSections] = useState(sectionMock);

  const addSection = () => {
    const newSection = 'NEW SECTION';
    setSections(prevSections => [...prevSections, newSection]);
  }
  
  return (
    <>
      <Header
        Name={'Katherin Paola Gómez'}
        Location={'Bucaramanga, Colombia'}
        github={'@kitkathsita'}
        linkedIn={'kitkathsita'}
        email={'katherinpgr@gmail.com'}
        cellphone={'+57 30107995846'}
      />
      {sections.map(section => {
        console.log(section)
        i++;
        return <Section key={i} section={section} />;
      })}
      <AddButton clickFunction={addSection} />
    </>
  );
}

