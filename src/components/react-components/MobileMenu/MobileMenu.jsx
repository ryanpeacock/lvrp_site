import { useState } from "react";
import "./MobileMenu.css";
import { menuLinks } from "../../../data/siteData";
import GiveModal from "../GiveModal/GiveModal";

const MobileMenu = ({ isHero = false }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenuToggle = () => {
    setShowMobileMenu(true);
  };
  const hideMenuToggle = () => {
    setShowMobileMenu(false);
  };

  return (
    <div class="block md:hidden">
      <div
        style={{
          opacity: showMobileMenu ? 0.95 : 0,
          zIndex: showMobileMenu ? 100000 : -2000,
          pointerEvents: showMobileMenu ? "auto" : "none",
        }}
        className="mobile-menu-display"
      >
        <i
          onClick={hideMenuToggle}
          className="close-icon-mobile fas fa-times"
        ></i>
        <div className="menu-links">
          {menuLinks.map((item, index) => {
            if (item.name === "Give") {
              return (
                <span key={23}>
                  <a onClick={(e) => e.preventDefault()} href="#">
                    <GiveModal client:load />
                  </a>
                </span>
              );
            }
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
    </div>
  );
};

export default MobileMenu;
