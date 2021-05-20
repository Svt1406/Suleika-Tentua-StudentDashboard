import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as s from "./Sidebar.styles";

const Sidebar = (props) => {
  const {
    backgroundImage = "",
    sidebarHeader = {
      fullName: "",
      shortName: "",
    },
    menuItems = [],
    fonts = {
      header: "",
      menu: "",
    },
  } = props;

  // State
  const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
  const [isSidebarOpen, setSidebarState] = useState(true);
  const [header, setHeader] = useState(sidebarHeader.fullName);

  //Effects

  // Update of header state
  useEffect(() => {
    isSidebarOpen
      ? setTimeout(() => setHeader(sidebarHeader.fullName), 200)
      : setHeader(sidebarHeader.shortName);
  }, [isSidebarOpen, sidebarHeader]);

  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  };

  // Update of sidebar state
  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 1280) setSidebarState(false);
      else setSidebarState(true);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [isSidebarOpen]);

  const menuItemsJSX = menuItems.map((item, index) => {
    const isItemSelected = selected === item.name;

    return (
      <Link key={index} to={item.to} style={{ textDecoration: "none" }}>
        <s.MenuItem
          font={fonts.menu}
          selected={isItemSelected}
          onClick={() => handleMenuItemClick(item.name)}
          isSidebarOpen={isSidebarOpen}
        >
          <s.Icon isSidebarOpen={isSidebarOpen} src={item.icon} />
          <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
        </s.MenuItem>
      </Link>
    );
  });

  return (
    <s.SidebarContainer
      backgroundImage={backgroundImage}
      isSidebarOpen={isSidebarOpen}
    >
      <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
      <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
      <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
        <s.Toggler />
      </s.TogglerContainer>
    </s.SidebarContainer>
  );
};

export default Sidebar;
