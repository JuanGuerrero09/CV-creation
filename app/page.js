'use client'
import React, { useState } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import './globals.css';
import Info from '../info.json';



const name = Info.name
const lastName = Info.lastName
const location = Info.location
const github = Info.contactInfo.gitHub
const linkedIn = Info.contactInfo.linkedIn
const cellphone = Info.contactInfo.cellPhoneNumber
const email = Info.contactInfo.email
const desc = Info.profileDescription
const languagesSpoken = Info.languages
const skills = Info.skills
const experience = Info.workExperience
const educationDegrees = Info.education

const sectionMock = ["PROFILE", 'WORK EXPERIENCE', 'LANGUAGES', 'EDUCATION'];

export default function Home() {
  let i = 0
  return (
    <>
      <Header Name={name+' '+lastName} Location={location} github={github} linkedIn={linkedIn} email={email} cellphone={cellphone}></Header>
      {
      sectionMock.map(section => {
        return <Section section={section}></Section>
      })
      }
    </>
  )
}

/* export default function Home() {
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
} */

