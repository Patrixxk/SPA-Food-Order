import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAMount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
