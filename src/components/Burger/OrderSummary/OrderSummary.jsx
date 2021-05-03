import React, {useEffect} from "react";
import Button from "../../UI/Button/Button";
import './OrderSummary.css'

const OrderSummary = (props) => {
  useEffect(()=>{
    console.log("Order Summary is updating")
  })
  
  const ingredients = Object.keys(props.ingredientsList).map((igKey) => {
    if(props.ingredientsList[igKey] > 0){
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {props.ingredientsList[igKey]}
        </li>
      );
    }
  });
  return (
    <>
      <h2>Your Order</h2>
      <p className="question">A delicious burger ocntains:</p>
      <ul>{ingredients}</ul>
      <p className="price">Total price: <strong>{props.price.toFixed(2)}$</strong></p>
      <p className="question">Do you want to buy this tasty burger?</p>
      <div className="ButtonContainer">
        <Button class="Cancel" clicked={props.purchasedCancel}>
          NO
        </Button>
        <Button class="Success" clicked={props.purchaseSuccess}>
          YES
        </Button>
      </div>
    </>
  );
};

export default OrderSummary;
