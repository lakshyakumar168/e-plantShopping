import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Your home for beautiful plants</p>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
