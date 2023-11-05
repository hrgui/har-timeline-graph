import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import context from "classnames";

const Tabs = ({
  onUpdate,
  selectedKey,
  defaultSelectedKey,
  children,
  navTabsClassName,
  tabsContainerClassName,
  navLinkClassName,
  activeClassName,
}) => {
  const [items, updateItems] = useState([]);

  useEffect(() => {
    const itemsCollection = [];
    React.Children.forEach(children, (element) => {
      if (React.isValidElement(element)) {
        const { name, eventKey: key, children: component } = element.props;
        itemsCollection.push({
          name,
          key,
          component,
        });
      }
    });
    updateItems(itemsCollection);
  }, [children]);

  const [activeTab, updateTab] = useState(
    defaultSelectedKey || (items && items.length ? items[0].key : null)
  );
  const handleUpdate = (key) => {
    updateTab(key);
    if (onUpdate) {
      onUpdate(key);
    }
  };

  const renderItem = () => {
    const selectedTab = items.find(({ key }) => key === (selectedKey || activeTab));
    return selectedTab ? selectedTab.component : null;
  };

  return (
    <>
      <nav
        className={context(
          "flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400",
          navTabsClassName
        )}
      >
        {items.map(({ key: item, name }, index) => (
          <a
            key={item}
            className={context(
              "inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-50",
              navLinkClassName,
              {
                [activeClassName || "bg-pink-600"]: activeTab === item,
              }
            )}
            onClick={() => handleUpdate(item)}
            role="tab"
            tabIndex={index}
          >
            {name}
          </a>
        ))}
      </nav>
      <section className={context(tabsContainerClassName)}>{renderItem()}</section>
    </>
  );
};

Tabs.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  defaultSelectedKey: PropTypes.string,
  navLinkClassName: PropTypes.string,
  navTabsClassName: PropTypes.string,
  onUpdate: PropTypes.func,
  selectedKey: PropTypes.string,
  tabsContainerClassName: PropTypes.string,
};

Tabs.defaultProps = {
  activeClassName: null,
  defaultSelectedKey: null,
  navLinkClassName: null,
  navTabsClassName: null,
  onUpdate: null,
  selectedKey: null,
  tabsContainerClassName: null,
};

export default Tabs;
