import React from "react";
import "./Store.scss";
import Filters from "./Filters/Filters";

export default function Store() {
  return (
    <div className="area">
      <div>
        <Filters />
      </div>
      <div>productZone</div>
    </div>
  );
}
