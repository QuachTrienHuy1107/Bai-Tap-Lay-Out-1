import React, { Component } from "react";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Header from "./Header";
import ProductList from "./ProductList";
import Content from "./Content";

export default class BaiTapLayOut extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
