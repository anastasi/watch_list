import React from "react";
import ProductList from "./components/ProductList";
import Header from "./common/Header";
import Footer from "./common/Footer";

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Footer/>
    </div>
  );
}

export default App;
