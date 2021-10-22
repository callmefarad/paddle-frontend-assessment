import React from "react";
import Header from "../Header/Header";
import Introduction from "../Introduction/Introduction"
import { Wrapper } from "./HomepageStyle";

const Homepage = () => {
  return (
    <Wrapper>
          <Header/>
          <Introduction/>
    </Wrapper>
  );
};

export default Homepage;
