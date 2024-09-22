"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./custom-react-tabs.css";

import AboutGeneral from "./AboutGeneral";
import AboutSkills from "./AboutSkills";
import AboutPersonal from "./AboutPersonal";
import AboutCodewars from "./AboutCodewars";

export default function PersonalInfoForSmallScreens() {
  return (
    <div className='lg:hidden'>
      <Tabs>
        <TabList>
          <Tab>General</Tab>
          <Tab>Skills</Tab>
          <Tab>Personal</Tab>
          <Tab>Codewars</Tab>
        </TabList>
        <TabPanel>
          <AboutGeneral addBorder={false} />
        </TabPanel>
        <TabPanel>
          <AboutSkills addBorder={false} />
        </TabPanel>
        <TabPanel>
          <AboutPersonal addBorder={false} />
        </TabPanel>
        <TabPanel>
          <AboutCodewars addBorder={false} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
