import React from "react";
import { NativeBaseProvider } from "native-base";
import NewsScreen from "./app/screens/Feeds";
import { Center } from "native-base";
import Login from "./app/screens/Login";
import SingUp from "./app/screens/SingUp";
import Campaigns from "./app/screens/Campaigns";
import DefScreen from "./app/screens/DefScreen";
import CampaignDetails from "./app/screens/CampaignDetails";


export default function App() {
  return (
    <NativeBaseProvider>
      <CampaignDetails />
    </NativeBaseProvider>
  );
}

