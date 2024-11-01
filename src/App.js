// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Navbar from "./Components/Navbar/Navbar.jsx";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={Navbar}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//     </Route>
//   )
// );

// function App() {
//   return (

//     <RouterProvider router={router}>
//     <div className="App">
//       <Navbar />
//       {/* Other components or routes */}
//     </div>
//   </RouterProvider>
//   );
// }

// export default App;
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import {CartProvider} from "./Pages/Context"
// import AddtoCart from "./Components/AddtoCart/AddtoCart"

function App() {
  const [menu, setMenu] = useState("/");
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar menu={menu} setMenu={setMenu}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/:id" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/addtocart" element={<AddtoCart />} /> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
