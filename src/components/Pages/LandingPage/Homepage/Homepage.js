import React from "react";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction";
import Features from "../Features/Features";
import Plan from "../Plans/Plans";
import GetStarted from "../GetStarted/GetStarted";
import Customer from "../Customers/Customers";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
import { Wrapper } from "./HomepageStyle";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <Introduction />
      <Features />
      <Plan />
      <GetStarted />
      <Customer />
      <Subscribe />
      <Footer />
    </Wrapper>
  );
};

export default Homepage;
