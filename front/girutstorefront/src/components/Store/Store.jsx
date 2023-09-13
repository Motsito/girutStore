import React from "react";
import "./Store.scss";
import ProductPage from "./ProductPage/ProductPage";
// import Filters from "./Filters/Filters";
// import RenderProducts from "./RenderProducts/RenderProducts";
import data from "../../helper/data.json";

export default function Store() {
  return (
    //propper render
    // <div className="storeArea">
    //   <div>
    //     <Filters />
    //   </div>
    //   <div>
    //     <RenderProducts data={data} />
    //   </div>
    // </div>
    <div className="storeArea">
      <ProductPage data={data} />
    </div>
  );
}
