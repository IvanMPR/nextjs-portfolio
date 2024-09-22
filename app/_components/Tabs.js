"use client";

import { Tabs } from "./ui/Tabs";

import AboutCodewars from "./about/AboutCodewars";
import AboutGeneral from "./about/AboutGeneral";
import AboutPersonal from "./about/AboutPersonal";
import AboutSkills from "./about/AboutSkills";

export function TabsDemo() {
  const tabs = [
    {
      title: "General",
      value: "general",
      content: <AboutGeneral addBorder={true} />,
    },
    {
      title: "Skills",
      value: "skills",
      content: <AboutSkills addBorder={true} />,
    },
    {
      title: "Personal & bio",
      value: "personal",
      content: <AboutPersonal addBorder={true} />,
    },
    {
      title: "Codewars",
      value: "codewars",
      content: <AboutCodewars addBorder={true} />,
    },
  ];

  return (
    <div className='hidden h-[20rem] md:h-[40rem] [perspective:1000px] relative lg:flex flex-col max-w-6xl mx-auto w-full items-start justify-start mt-5 mb-10 '>
      <Tabs tabs={tabs} />
    </div>
  );
}
