import { Navigation } from "@shopify/polaris";
import { HomeMinor, OrdersMinor, ProductsMinor } from "@shopify/polaris-icons";
import React from "react";
import { useLocation } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: "Home",
  },
  {
    path: "/orders",
    element: "Orders",
  },
  {
    path: "/products",
    element: "Products",
  },
];
const NavigationMarkup = () => {
  const location = useLocation();
  return (
      <Navigation location={location.pathname}> 
        <Navigation.Section
          items={[
            {
              url: routes[0].path,
              label: routes[0].element,
              icon: HomeMinor,
              selected: location.pathname === "/",
            },
            {
              url: routes[1].path,
              excludePaths: ["/"],
              label: [routes[1].element],
              icon: OrdersMinor,
              badge: "15",
              selected: location.pathname === "/orders",
            },
            {
              url: routes[2].path,
              excludePaths: ["/"],
              label: routes[2].element,
              icon: ProductsMinor,
              selected: location.pathname === "/products",
            },
          ]}
        />
      </Navigation>
  );
};

export default NavigationMarkup;
