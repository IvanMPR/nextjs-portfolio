"use client";

import { TabsDemo } from "../Tabs";
import PersonalInfoForSmallScreens from "./PersonalInfoForSmallScreens";

export default function AboutClient() {
  return (
    <div className='w-full'>
      <TabsDemo />
      <PersonalInfoForSmallScreens />
    </div>
  );
}
