import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../UI/Logo/Logo";
import "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
    let attachedClass = ['SideDrawer', "Close"];
    if(props.open){
        attachedClass = ['SideDrawer', 'Open'];
    }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClass.join(' ')}>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
