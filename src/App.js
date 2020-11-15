import React, { Component } from "react";
import getProducts from "./Api/Api";
import ProductItem from "./Components/ProductItem";
import Dropdown from "./Components/Dropdown";
import Pagination from "./Components/Pagination";
import "./App.css";
import "./App.scss";
import { Container, Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      info: {},
      products: null,
      sortType: "",
      page: 1,
    };
    this.fetchProducts = this.fetchProducts.bind(this);
  }
  async fetchProducts(sortType, page) {
    //call get products api
    if (page == 0) {
      return;
    }
    const products = await getProducts(
      process.env.API_URL + "&page=" + page + "&sort=" + sortType
    );
    this.setState({
      products: products._embedded.product,
      sortType,
      page,
    });
  }
  async componentDidMount() {
    await this.fetchProducts("popularity", this.state.page);
  }

  render() {
    return (
      <div className="App">
        <Container>
          {
            <Dropdown
              sortType={this.state.sortType}
              fetchProducts={this.fetchProducts}
            />
          }
          {
            <Pagination
              sortType={this.state.sortType}
              fetchProducts={this.fetchProducts}
              page={this.state.page}
            />
          }
          {<ProductItem products={this.state.products} />}
        </Container>
      </div>
    );
  }
}

export default App;
