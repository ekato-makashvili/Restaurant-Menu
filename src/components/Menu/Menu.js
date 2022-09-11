import React from "react";
import Desserts from "./Desserts";
import Drinks from "./Drinks";
import MainDishes from "./MainDishes";
import MenuTemplate from "./MenuTemplate";
import Salads from "./Salads";
import ToShare from "./ToShare";

const Menu = () => {
  return (
    <div>
      <MenuTemplate label="To Share" image="./ToShare.jpg" />
      <MenuTemplate label="Main Dishes" image="./MainDishes.jpg" />
      <MenuTemplate label="Salads" image="./Salads.jpg" />
      <MenuTemplate label="Baked" image="./Baked.jpg" />
      <MenuTemplate label="Soups" image="./Soups.jpg" />
      <MenuTemplate label="Desserts" image="./Desserts.jpg" />
    </div>
  );
};

export default Menu;
