import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation";
import Logo from "../../assets/images/logo-01.png";
import CloseIcon from "../../assets/images/close-icon-01.png";
import HamburgerIcon from "../../assets/images/hamburger-icon-01.png";

// Components
import Button from "../button/Button.jsx";
import { screenSize } from "../../utils/screen-size-detection";

const Navigation = () => {
  const [navbarMenuActive, setNavbarMenuActive] = useState(false);
  const { screenWidth } = screenSize();

  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={Logo} />
          <Link to="/" />
        </div>
        <ul className={`navbar__menu ${navbarMenuActive && "active"}`}>
          <li className="navbar__menu__item">
            <Link to="/">Features</Link>
          </li>
          <li className="navbar__menu__item">
            <Link to="/">Benefits</Link>
          </li>
          <li className="navbar__menu__item">
            <Link to="/">Pricing</Link>
          </li>
          <li className="navbar__menu__item">
            <Link to="/">Contact</Link>
          </li>
        </ul>
        {screenWidth > 1200 ? (
          <Button buttonType="pillBtn" />
        ) : (
          <div
            className="navbar__hamburger"
            onClick={() => setNavbarMenuActive(!navbarMenuActive)}
          >
            {!navbarMenuActive ? (
              <img className="navbar__hamburger__icon" src={HamburgerIcon} />
            ) : (
              <img className="navbar__hamburger__icon" src={CloseIcon} />
            )}
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
