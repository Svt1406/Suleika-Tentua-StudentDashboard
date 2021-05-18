import React from "react";
import * as s from "./App.styles";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const backgroundImage = "images/mountain.jpg";
  const sidebarHeader = {
    fullName: "Winc Dashboard",
    shortName: "WD",
  };
  const menuItems = [
    { name: "Home", to: "/home", icon: "/icons/home.svg", subMenuItems: [] },
    {
      name: "Evelyn",
      to: "/Evelyn",
      icon: "/icons/about.svg",
      subMenuItems: [],
    },
    {
      name: "Aranka",
      to: "/Aranka",
      icon: "/icons/about.svg",
      subMenuItems: [],
    },
    {
      name: "Floris",
      to: "/Floris",
      icon: "/icons/about.svg",
      subMenuItems: [],
    },
  ];

 const fonts = {
   header: "Kaushan Script",
   menu: "Poppins",
 };

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
      />
      <MainView />
    </s.App>
  );
};

export default App;
