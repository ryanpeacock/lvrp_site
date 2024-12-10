import { useState, useEffect } from "react";
import "./MobileMenu.css";
import { mobileLinks } from "../../../data/siteData";

export const MobileMenu = ({ isHero = false }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenuToggle = () => {
    setShowMobileMenu(true);
  };
  const hideMenuToggle = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <div
        style={{
          opacity: showMobileMenu ? 0.95 : 0,
          zIndex: showMobileMenu ? 100000 : -2000,
          pointerEvents: showMobileMenu ? "auto" : "none",
        }}
        className="mobile-menu-display"
      >
        <i onClick={hideMenuToggle} className="close-icon fas fa-times"></i>
        <div className="menu-links">
          {mobileLinks.map((item, index) => {
            return (
              <span key={index}>
                <a onClick={hideMenuToggle} href={item.link}>
                  {item.name}
                </a>
              </span>
            );
          })}
        </div>
      </div>
      <div
        onClick={showMenuToggle}
        className={`mobile-menu ${isHero ? "mobile-hero-menu" : ""}`}
      >
        <i className="fas fa-bars"></i>
      </div>
    </>
  );
};
