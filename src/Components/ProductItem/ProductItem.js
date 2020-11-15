/**
 *
 * ProductItem
 *
 */
import PropTypes from "prop-types";
import React from "react";
import { Row, Col } from "react-bootstrap";

const ProductItem = (props) => (
  <div>
    {props.products ? (
      <div className="ProductItem">
        {props.products.map((d, i) => (
          <Col xs={6} md={4} lg={3} key={i}>
          <div key={i} className="item small-6 medium-4 large-3">
            <div key={d.activated_at}>
              {
                <img
                  src={d._embedded.images[0].thumbnail}
                  className="thumbnail"
                />
              }
            </div>
            <div key={d.associated_skus}>{d._embedded.brand.name}</div>
            <div key={d.link}>{d.name}</div>
            <div key={d.attributes}>${d.price}</div>
          </div>
          </Col>
        ))}
      </div>
    ) : null}
  </div>
);

ProductItem.propTypes = {
  products: PropTypes.array,
};

export default ProductItem;
