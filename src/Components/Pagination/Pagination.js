/**
 *
 * Pagination
 *
 */
import PropTypes from "prop-types";
import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationElement = (props) => {
  let items = [];
  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => props.fetchProducts(props.sortType, props.page - 1) }
    />
  );
  let startNum = props.page < 5 ? 1 : props.page - 2;
  for (let number = startNum; number <= startNum + 4; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === props.page}
        onClick={() => props.fetchProducts(props.sortType, number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  items.push(
    <Pagination.Next
      key="next"
      onClick={() => props.fetchProducts(props.sortType, props.page + 1)}
    />
  );

  return (
      <Pagination className="Pagination">{items}</Pagination>
  );
};

PaginationElement.propTypes = {
  sortType: PropTypes.string,
  fetchProducts: PropTypes.func,
  page: PropTypes.number,
};

export default PaginationElement;
