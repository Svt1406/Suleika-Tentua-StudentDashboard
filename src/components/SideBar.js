import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Utils";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
//import { SidebarData } from "./SidebarData";
import "../styles/Sidebar.css";
import { IconContext } from "react-icons";

const SideBar = () => {   
  const students = data.studentNames;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#FBD786", cursor: "pointer" }}>
        <div className="navbar">
          <Link key="#" to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li key="home" className="nav-text">
              <Link to="/">
                <AiIcons.AiFillHome />
                <span>Home</span>
              </Link>
            </li>
            {students.map((item, index) => {
              return (
                <li key={index} className="nav-text">
                      <Link to={{
                          pathname: `/Students/${item}`, 
                          state: { studentname: `${item}`}}}>
                    <BsIcons.BsPeopleCircle />
                    <span>{item}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SideBar;
