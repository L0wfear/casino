import React, { useState, MouseEvent } from "react";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import ClassicLogo from "../SvgSprites/ClassicLogo";
import Chevron from "../SvgSprites/Chevron";

const Navbar = () => {
  const [iconActive, seticonActive] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = (e: MouseEvent) => {
    seticonActive(e.currentTarget.id);
  };

  return (
    <nav
      className={`${classes.sidenav} ${isCollapsed ? classes.collapsed : ""}`}
    >
      <div className={classes.sidenav_chevron} onClick={() => setIsCollapsed(!isCollapsed)}>
        <Chevron />
      </div>
      <div
        className={`${classes.item} ${
          iconActive === "1" ? classes.active : ""
        }`}
        id="1"
        onClick={(e) => handleClick(e)}
      >
        <NavLink to="#">
          <div className={classes.item_content}>
            <div className={classes.item_icon}>
              <ClassicLogo />
            </div>
            <div className={classes.item_text}>
              <div className={classes.item_text_top}>
                <span>Profile</span>
              </div>
              <div className={classes.item_text_bottom}>
                <div className={classes.item_text_bottom_content}>На кону</div>
                <div className={classes.item_text_bottom_price}>2562 c</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
      <div
        className={`${classes.item} ${
          iconActive === "2" ? classes.active : ""
        }`}
        id="2"
        onClick={(e) => handleClick(e)}
      >
        <NavLink to="#">
          <div className={classes.item_content}>
            <div className={classes.item_icon}>
              <ClassicLogo />
            </div>
            <div className={classes.item_text}>
              <div className={classes.item_text_top}>
                <span>Profile</span>
              </div>
              <div className={classes.item_text_bottom}>
                <div className={classes.item_text_bottom_content}>На кону</div>
                <div className={classes.item_text_bottom_price}>2562 c</div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
