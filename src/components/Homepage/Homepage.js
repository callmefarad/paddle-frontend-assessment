import React from "react";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction"
import Features from "../Features/Features"
import Plan from "../Plans/Plans"
import { Wrapper } from "./HomepageStyle";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <Introduction />
      <Features />
      <Plan />
    </Wrapper>
  );
};

export default Homepage;
