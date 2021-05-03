import React from "react";
import "./BuildControl.css";

const BuildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button onClick={props.added}>+</button>
    <p className="Quantity">{props.quantity}</p>
    <button onClick={props.removed} disabled={props.disabled}>-</button>
    <p className="Price">{props.priceIngredients} $</p>
  </div>
);

export default BuildControl;
