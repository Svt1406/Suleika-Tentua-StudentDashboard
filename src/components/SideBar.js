import "../styles/Sidebar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../Utils";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { IconContext } from "react-icons";

const SideBar = () => {
  const students = data.studentNames;
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#e9c7b9", cursor: "pointer" }}>
      <div className="navbar">
        <Link key="#" to="#" className="menu-bars">
          <FaIcons.FaBars className="FaBars" onClick={showSidebar} />
        </Link>
        <div className="header">
          <h2>Student Dashboard</h2>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li key="home" className="nav-text">
            <Link to="/">
              <AiIcons.AiFillHome />
              <span>Home</span>
            </Link>
          </li>
          {students.map((item, index) => {
            return (
              <li key={index} className="nav-text">
                <Link
                  to={{
                    pathname: `/${item}`,
                    state: { studentname: `${item}` },
                  }}
                >
                  <BsIcons.BsPeopleCircle />
                  <span>{item}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default SideBar;
