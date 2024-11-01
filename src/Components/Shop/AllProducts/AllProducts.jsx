import React, { useState } from "react";
import { MdOutlineFilterCenterFocus } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import "./AllProducts.css";
import all_products from "../../../assets/all_products.json";
import { useNavigate } from "react-router-dom";
import Item from "../../Item/Item";
const AllProducts = () => {
  const [filterCount, setFilterCount] = useState(8);
  const navigate = useNavigate();
  const filteredProducts = all_products.products.slice(0, filterCount);
  return (
    <div>
        <div className="filter-content">
          <div className="first-filter">
            <h4>Filter</h4>
            <MdOutlineFilterCenterFocus />
            <CiViewList />
            <p className="filter-text">Showing 1-8 of 24 results</p>
          </div>
          <div className="second-filter">
            <p className="filter-text">Show</p>
            <input
              className="filter-numb"
              type="number"
              id="filter"
              value={filterCount}
              onChange={(e) => setFilterCount(Number(e.target.value))}
              min="1"
              max={all_products.products.length}
            />
            <p className="filter-text">Short by</p>
            <p className="filter-default">Default</p>
          </div>
        </div>
        {/* <label htmlFor="filter">Göstəriləcək Kart Sayı:</label>
        <input
          type="number"
          id="filter"
          value={filterCount}
          onChange={(e) => setFilterCount(Number(e.target.value))}
          min="1"
          max={all_products.products.length}
        /> */}
    
      <div className="container">
        <div className="general-products">
          {filteredProducts.map((item, i) => {
            return (
              <div
                key={i}
                onClick={() => navigate(`/about/${item.id}`)}
                style={{ cursor: "pointer" }}
              >
                <Item
                  key={item.id}
                  name={item.name}
                  image={require(`../../../assets/${item.image}`)}
                  detail={item.detail}
                  newPrice={item.newPrice}
                  oldPrice={item.oldPrice}
                  percent={item.percent}
                  color={item.colors}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
