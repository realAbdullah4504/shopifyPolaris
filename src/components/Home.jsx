import { Page, Toast } from "@shopify/polaris";
import React from "react";
import SimpleIndexTableExample from "./Table";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Page
      primaryAction={{ content: "View on your store", disabled: true }}
      title="Home"
      secondaryActions={[{ content: "Duplicate" }]}
      backAction={{ content: "Back", onAction: () => navigate(-1) }}
    >
      <SimpleIndexTableExample />
    </Page>
  );
};

export default Home;
