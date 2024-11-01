import React from "react";
import ShopIntroduction from "../Components/Shop/ShopIntroduction/ShopIntroduction";
import AllProducts from "../Components/Shop/AllProducts/AllProducts";
import Services from "../Components/Shop/Services/Services";
import Footer from "../Components/Footer/Footer";

const Shop = () => {
  return (
    <main>
      {" "}
      <ShopIntroduction />
      <AllProducts />
      <Services />
      <Footer />
    </main>
  );
};

export default Shop;
