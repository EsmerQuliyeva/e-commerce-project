import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { dataContext } from "./CartContext";

const ShowMore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { products } = useContext(dataContext);
  const navigate = useNavigate();

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
    <div>
      <div style={{ padding: "20px" }}>
        <h1>Mehsul Kartlari</h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {currentProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/about/${product.id}`)}
              style={{ cursor: "pointer" }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div style={{ marginTop: "20px" }}>
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
                padding: "5px 10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowMore;
