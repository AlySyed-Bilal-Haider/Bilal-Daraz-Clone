import React from "react";

import Slider from "./slider/Slider";
import DarazMall from "./DarazMall/DarazMall";
import Categories from "./Categories/Categories";
import FlashSale from "./FlashSale/FlashSale";
import JustForYou from "./JustForYou/JustForYou";

export default function HomeScreen({dataOfResult}) {

  return (
    <div>
      
      <Slider />
      <FlashSale dataOfResult={dataOfResult}  />
      <DarazMall />
      <Categories />
      <JustForYou />
    </div>
  );
}
