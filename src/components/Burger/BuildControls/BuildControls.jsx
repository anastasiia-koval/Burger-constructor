import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls = (props) => (
  <div className="BuildControls">
    <hr class="Line"></hr>
    <h3>Add your ingridients</h3>
    <div className="ControlContainer">
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            quantity={Object.entries(props.ingredientsList).map(
              ([key, value]) => {
                return key === ctrl.type && value;
              }
            )}
            priceIngredients={Object.entries(props.ingredientsPrice).map(
              ([key, value]) => {
                return key === ctrl.type && value;
              }
            )}
            added={() => props.addIngredient(ctrl.type)}
            removed={() => props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
    </div>
    <hr class="Line2"></hr>
    <div className="PriceContainer">
      <div className="PriceWrapper">
        <p className="TotalPrice">
          Total Price: <strong>{props.price.toFixed(2)}$</strong>
        </p>
        <p className="StartPrice">
          Burger start price: <strong>4.00$</strong>
        </p>
      </div>
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.purchasing}>
        Order
      </button>
    </div>
  </div>
);

export default BuildControls;
