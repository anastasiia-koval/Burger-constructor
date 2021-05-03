import React from "react";
import Ingridients from "./Ingridients/Ingridients";
import "./Burger.css";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingridients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className="LabelAdd">Please start adding ingredients!</p>
    );
  }
  console.log(transformedIngredients);
  return (
    <div className="ContainerBurger">
      <div className="Burger">
        <Ingridients type="bread-top" />
        {transformedIngredients}
        <Ingridients type="bread-bottom" />
      </div>
    </div>
  );
};

export default Burger;
