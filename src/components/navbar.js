import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./navbarItems";
import Button from "./button";
import Dropdown from "./dropdown";
import { mathsDropdown,classworkDropdown,ProgrammingLanguageDropdown,othersDropdown} from "./navbarItems"
function Navbar() {
  const [dropdown, setDropdown] = useState(false);
    // const dropdowns=[mathsDropdown,mathsDropdown,classworkDropdown,ProgrammingLanguageDropdown,othersDropdown]
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          COLLEGE
          <Icons.FaTree />
        </Link>
        <ul className="nav-items">
          {navItems.map((item,index) => {
             
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  id={item.id}
                  onMouseEnter={(e) => {setDropdown(true);console.log(e.target)}}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown dropdown={item.dropdown} />}
                </li>
              );
            

         
            // return (
            //   <li key={item.id} className={item.cName}>
            //     <Link to={item.path}>{item.title}</Link>
            //   </li>
            // );
          })}
        </ul>
        <Button />
      </nav>

    </>
  );
}

export default Navbar;