import React from "react";
import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
import OrderSummary from "../../Burger/OrderSummary/OrderSummary";

const Modal = (props) => {
  console.log("Modal renders!!!")
  return (
    <>
      <Backdrop show={props.show} clicked={props.purchasedCancel} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <OrderSummary
            purchasedCancel={props.purchasedCancel}
            purchaseSuccess={props.purchaseSuccess}
            ingredientsList={props.ingredientsList}
            price={props.price}
          />
      </div>
    </>
  );
};

export default React.memo(Modal,(prevProps, newProps) => {
  return newProps.show === prevProps.show
});
