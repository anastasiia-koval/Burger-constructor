import React, { useState } from "react";
import "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import BurgerBuilder from "../BurgerBuilder/BurgerBuilder";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
    const [show, setShow] = useState(false);

    const sideDrawerCloseHandler = (props) => {
        setShow(false);
    }

    const drawerToogleClicked = (prevState) => {
        return setShow(!prevState.setShow);
    }

  return (
    <>
      <Toolbar drawerToogleClicked = {drawerToogleClicked}/>
      <SideDrawer open={show} closed={sideDrawerCloseHandler}/>
      <main>
        {/* {props.children} */}
        <BurgerBuilder></BurgerBuilder>
      </main>
    </>
  );
};
export default Layout;
