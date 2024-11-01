import React, { useContext } from "react";
import { dataContext } from "../../Pages/Context";

const AddtoCart = () => {
  const { cart, getTotalPrice, removeFromCart, clearCart } =
    useContext(dataContext);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sebetim</h1>
      {cart.length === 0 ? (
        <p>Sebetinizde mehsul yoxdu.</p>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
                <span>{product.name}</span> - <span>{product.price} AZN</span>
                <button onClick={() => removeFromCart(product.id)}>
                  mehsulu sil
                </button>
              </li>
            ))}
          </ul>
          <h2>Toplam: {getTotalPrice()} AZN</h2>
          <button onClick={clearCart}>Sebeti Temizle</button>
        </>
      )}
    </div>
  );
};

export default AddtoCart;
