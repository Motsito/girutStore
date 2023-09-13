import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Store.scss";
// import ProductPage from "./ProductPage/ProductPage";
import Filters from "./Filters/Filters";
import RenderProducts from "./RenderProducts/RenderProducts";

export default function Store() {
  const [nameFilter, setNameFilter] = useState("");
  const [radioValue, setRadioValue] = useState("name");
  const [priceRange, setPriceRange] = useState([100, 20000]);
  const [starsRange, setStarsRange] = useState([0, 5]);

  const filterProps = {
    nameFilter,
    setNameFilter,
    radioValue,
    setRadioValue,
    priceRange,
    setPriceRange,
    starsRange,
    setStarsRange,
  };

  const [page, setPage] = useState(1);
  const [url, setUrl] = useState("http://localhost:5000/api/products");

  const [listOfProducts, setListOfProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const response = await axios.get(url);
        setListOfProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getProductList();
  }, [url]);

  useEffect(() => {
    let nameFilterText = "";
    let radioFilterText = "";
    let pageFilterText = "";
    let priceRangeFilterText = "";
    let starsRangeFilterText = "";

    //namefilter
    if (nameFilter !== "") {
      nameFilterText = `&name=${nameFilter}`;
    } else {
      nameFilterText = "";
    }

    //pagination
    if (page !== 1) {
      pageFilterText = "page=2";
      console.log("page is 2");
    } else {
      pageFilterText = "page=1";
    }

    radioFilterText = `&sort=${radioValue}`;
    priceRangeFilterText = `price<${priceRange[1]},price>${priceRange[0]}`;
    starsRangeFilterText = `rating<${starsRange[1]},rating>${starsRange[0]}`;

    let newURL = `http://localhost:5000/api/products/?numericFilters=${starsRangeFilterText},${priceRangeFilterText}${radioFilterText}${nameFilterText}&${pageFilterText}`;

    setUrl(newURL);
  }, [nameFilter, radioValue, priceRange, starsRange, page]);

  return (
    <div className="storeArea">
      <div>
        <Filters {...filterProps} />
      </div>

      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <RenderProducts listOfProducts={listOfProducts} />
        )}
      </div>

      <div className="pagination">
        <button onClick={() => setPage(1)}>1</button>

        <button onClick={() => setPage(2)}>2</button>
      </div>
    </div>
  );
}
