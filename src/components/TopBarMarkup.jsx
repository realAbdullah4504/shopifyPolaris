import { TopBar, ActionList, Icon, Frame, Text } from "@shopify/polaris";
import { ArrowLeftMinor, QuestionMarkMajor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function TopBarMarkup({ onNavigationToggle }) {
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value: string) => {
    setSearchValue(value);

    setIsSearchActive(value.length > 0);
  }, []);

  // const [nav, setNav] = useState(false);
  // const handleNavigationToggle = useCallback(() => {
  //   setNav(!nav);
  // }, []);

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Back to Shopify", icon: ArrowLeftMinor }],
        },
        {
          items: [{ content: "Community forums" }],
        },
      ]}
      name="Dharma"
      detail="Jaded Pixel"
      initials="D"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center", onAction: () => navigate("/") },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={QuestionMarkMajor} />
          <Text as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: "Community forums" }],
        },
      ]}
    />
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={onNavigationToggle}
    ></TopBar>
  );
}

export default TopBarMarkup;
