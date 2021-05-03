import React from "react";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";

const Toolbar = (props) => (
  <>
    <header className="Toolbar">
      <div className="DrawerToggle" onClick={props.drawerToogleClicked}>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div className="DesctopOnly">
        <Logo />
      </div>
      <nav className="DesctopOnly">
        <NavigationItems />
      </nav>
    </header>
    <hr className="LineNav" />
  </>
);

export default Toolbar;
