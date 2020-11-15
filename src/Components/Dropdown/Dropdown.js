/**
 *
 * Dropdown
 *
 */
import PropTypes from "prop-types";
import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const allSortTypes = {
  popularity: "Popularity",
  new: "New Arrivals",
  price_high: "Price High to Low",
  price_low: "Price Low to High",
  brand_asc: "Brand A to Z",
  brand_desc: "Brand Z to A",
};

const DropdownList = (props) => (
  <div>
    <DropdownButton
      id="dropdown-item-button"
      title={allSortTypes[props.sortType] || "Popularity"}
      key={"Info"}
      id={`dropdown-variants-Info`}
      variant={"info"}
    >
      {Object.keys(allSortTypes).map((keyName, i) => {
        if (keyName == props.sortType) {
          return (
            <Dropdown.Item
              key={i}
              as="button"
              onClick={() => props.fetchProducts(keyName, 1)}
              active
            >
              {allSortTypes[keyName]}
            </Dropdown.Item>
          );
        }
        return (
          <Dropdown.Item
            key={i}
            as="button"
            onClick={() => props.fetchProducts(keyName, 1)}
          >
            {allSortTypes[keyName]}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  </div>
);

DropdownList.propTypes = {
  sortType: PropTypes.string,
  fetchProducts: PropTypes.func,
};

export default DropdownList;
