import React, { useState, useContext } from "react";
import all_products from "../assets/all_products.json";
import { useNavigate } from "react-router-dom";
import Item from "../Components/Item/Item";
import { dataContext } from "../Pages/Context";

const DisplayProducts = () => {
  //   const displayProducts = all_products.products.slice(0, 4);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const { products } = useContext(dataContext);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className="container">
      <h1
        style={{
          fontSize: "32px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        RELATED PRODUCTS
      </h1>
      <div className="general-products" style={{ marginBottom: "40px" }}>
        {currentProducts.map((item, i) => {
          return (
            <div
              key={item.id}
              onClick={() => navigate(`/about/${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <Item
                key={item.id}
                name={item.name}
                image={require(`../assets/${item.image}`)}
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
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            style={{
              margin: "0 5px",
              padding: "5px 10px",
              backgroundColor: number === currentPage ? "#333" : "#fff",
              color: number === currentPage ? "#fff" : "#333",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {number}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            style={{
              margin: "0 5px",
              padding: "8px 16px",
              backgroundColor: "#b88e2f",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "Poppins,sans-serif",
            }}
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
