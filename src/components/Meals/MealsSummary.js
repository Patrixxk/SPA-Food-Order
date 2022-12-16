import React from "react";
import Meals from "./Meals";

import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to YOU</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious luch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
