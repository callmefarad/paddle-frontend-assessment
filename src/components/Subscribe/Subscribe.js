import React from "react";
import {
  Wrapper,
  SubscribeInfo,
  SubscribeButton,
  Caption,
  Description,
} from "./SubscribeStyle";

const Subscribe = () => {
  return (
    <Wrapper>
      <SubscribeInfo>
        <Caption>Subscribe Now for Get Special Features!</Caption>
        <Description>Praesent mollis lobortis nisl nec laoreet.</Description>
      </SubscribeInfo>
      <SubscribeButton>Subscribe Now</SubscribeButton>
    </Wrapper>
  );
};

export default Subscribe;
