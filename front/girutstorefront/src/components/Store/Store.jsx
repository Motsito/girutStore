import React from "react";
import "./Store.scss";
import Filters from "./Filters/Filters";
import RenderProducts from "./RenderProducts/RenderProducts";
import data from "../../helper/data.json";

export default function Store() {
  return (
    <div className="storeArea">
      <div>
        <Filters />
      </div>
      <div>
        <RenderProducts data={data} />
      </div>
    </div>
  );
}
