"use-client";

import logo from "../../public/logo2.png";
import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSquareCaretDown,
//   faSquareXmark,
//   faHouse,
//   faBarsProgress,
//   faAt,
// } from "@fortawesome/free-solid-svg-icons";

// const MENU = <FontAwesomeIcon icon={faSquareCaretDown} />;
// const XMARK = <FontAwesomeIcon icon={faSquareXmark} />;
// const HOME = <FontAwesomeIcon icon={faHouse} />;
// const PROJECTS = <FontAwesomeIcon icon={faBarsProgress} />;
// const CONTACT = <FontAwesomeIcon icon={faAt} />;

const Navbar = ({ mobile }) => {

  //when user scrolls navbar should hide with this but it's not working

  // let navStyle = {top: 0}
  // const hideNavbar = () => {
  //   let prevScrollPos = window.scrollY;
  //   const scrollPos = window.scrollY;
  //   //console.log(Math.round(scrollPos) + " " + Math.round(prevScrollPos));

  //   if (scrollPos > prevScrollPos) {
  //     navStyle = {
  //       top: "-100px",
  //     };
  //   } else {
  //     navStyle = {
  //       top: 0,
  //     };
  //   }
  //   prevScrollPos = scrollPos;
  // };

  //window.addEventListener("scroll", hideNavbar);

  return (
    <div className="navbar">
      <Link
        className="logo"
      
       
      >
        {/* <img src={logo} alt="logo" /> */}
      </Link>
      {mobile ? (
        <i className="menu-icon">
          {clicked ? "XMARK" : "MENU"}
        </i>
      ) : null}
      <ul
        className={
          mobile
            ? `${clicked ? "nav-links-mob active" : "nav-links-mob"}`
            : "nav-links"
        }
       
      >
        <Link className={`link`} title="Home page">
           Home
        </Link>
        <Link className={`link`} title="Projects page">
         Projects
        </Link>
        <Link className={`link`}  title="Contact page">
          Contact
        </Link>
        {mobile && clicked ? (
          <h4 className="developer-text">Developed By JakChi</h4>
        ) : null}
      </ul>
    </div>
  );
};

export default Navbar;
