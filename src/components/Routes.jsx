import React from "react";
import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/"
        element={
          <>
            <Home />
          </>
        }
      />
      <Route
        path="/orders"
        element={
          <>
            <ProductDetail />
            <ProductDetail />
          </>
        }
      />
      <Route
        path="/products"
        element={
          <>
            <ProductList />
          </>
        }
      />
    </ReactRouterRoutes>
  );
};

export default Routes;
