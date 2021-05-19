import React from "react";
import * as s from "./App.styles";
import { data } from "./Utils";

// Components
import Sidebar from "./components/Sidebar/Sidebar";
import MainView from "./components/MainView/MainView";

const App = () => {
  const backgroundImage = "images/mountain.jpg";
  const sidebarHeader = {
    fullName: "Winc Dashboard",
    shortName: "WD",
  };

  const homeItem = {
    name: "Home", to: "/",
    icon: "/icons/home.svg",
    subMenuItems: []
  };

  const menuItems = data.studentProfiles.map((student) => {
    return {
      name: student.first_name,
      to: `/${student.first_name}`,
      icon: "/icons/about.svg",
    }
  });
  // add the hardcoded home item to the top of the sidebar
  menuItems.unshift(homeItem);

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
