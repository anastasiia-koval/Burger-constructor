import React, { useCallback, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import "./BurgerBuilder.css";

const INGREDIENTS_PRICE = {
  salad: 0.2,
  cheese: 0.1,
  bacon: 0.3,
  meat: 0.5,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0,
  });

  const [totalPrice, setTotalPrice] = useState(4);

  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchasable = (ingredientsPurchasable) => {
    const sum = Object.keys(ingredientsPurchasable)
      .map((igKey) => {
        return ingredientsPurchasable[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    setPurchasable(sum > 0);
  };

  const addIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    const updateCount = oldCount + 1;
    const updatedIngredients = { ...ingredients }; //make a copy of state

    updatedIngredients[type] = updateCount;

    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice + priceAddition;

    setIngredients(updatedIngredients);
    setTotalPrice(newPrice);
    updatePurchasable(updatedIngredients);
  };

  const removeIngredientHandler = (type) => {
    const oldCount = ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type] = updateCount;

    //updating total price============
    const priceReduction = INGREDIENTS_PRICE[type];
    const oldPrice = totalPrice;
    const newPrice = oldPrice - priceReduction;

    setIngredients(updatedIngredients);
    setTotalPrice(newPrice);
    updatePurchasable(updatedIngredients);
  };

  const purcahseHandler = () => {
    setPurchasing(true);
  };

  const purchaseCancelHandler = () => {
    setPurchasing(false);
  };

  const purchaseSuccessHandler = () => {
    alert("Your order is submitted!");
  };

  const disabledInfo = { ...ingredients };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    // Wrapper for elements without nay types
    <>
      <div className="BurgerContainer">
        <Modal
          show={purchasing}
          purchasedCancel={purchaseCancelHandler}
          purchaseSuccess={purchaseSuccessHandler}
          ingredientsList={ingredients}
          price={totalPrice}
        >
        </Modal>
        <div className="ContainerForBurgControl">
          <Burger ingredients={ingredients} />
          <BuildControls
            addIngredient={addIngredientHandler}
            removeIngredient={removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={purchasable}
            purchasing={purcahseHandler}
            price={totalPrice}
            ingredientsList={ingredients}
            ingredientsPrice={INGREDIENTS_PRICE}
          />
        </div>
      </div>
    </>
  );
};

export default BurgerBuilder;
