import { Frame, Page, useBreakpoints } from '@shopify/polaris';


import React, { useCallback, useState } from 'react';
import TopBarMarkup from './components/TopBarMarkup';
import NavigationMarkup from './components/NavigationMarkup';
import Routes from './components/Routes';



const logo = {
  topBarSource:
    "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png",
  width: 86,
  url: "/",
  accessibilityLabel: "Shopify",
};
function App() {
  const [nav, setNav] = useState(false);
  const handleNavigationToggle = useCallback(() => {
    setNav(true);
  }, []);

  const { smDown, mdDown, lgDown } = useBreakpoints();
  // console.log(location.pathname);
  return (
    <Frame topBar={<TopBarMarkup onNavigationToggle={handleNavigationToggle} />} logo={logo} showMobileNavigation={nav} navigation={<NavigationMarkup />} onNavigationDismiss={() => setNav(false)}>

      <Routes />
    </Frame>
  );
}

export default App;