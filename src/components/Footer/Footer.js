import React from "react";
import {
  Wrapper,
  Brand,
  Name,
  Desc,
  Copywrites,
  PageLinks,
  Products,
  Item1,
} from "./FooterStyle";

const Footer = () => {
  return (
    <Wrapper>
      <Brand>
        <Name>Peddle</Name>
        <Desc>
          Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
          egestas ullamcorper. Duis id mauris consequat, ultrices ligula at,
          laoreet mag.
        </Desc>
        <Copywrites>©2020PADDLE</Copywrites>
      </Brand>
      <PageLinks>
        <Products>Product</Products>
        <Item1>Praesent </Item1>
        <Item1> Laoreet</Item1>
        <Item1> Laoreet</Item1>
        <Item1>Server</Item1>
      </PageLinks>
      <PageLinks>
        <Products>Engage</Products>
        <Item1>Mauris </Item1>
        <Item1> Aenean</Item1>
        <Item1> Linsean</Item1>
        <Item1>Lingula</Item1>
      </PageLinks>
      <PageLinks>
        <Products>Earn Money</Products>
        <Item1>Ultrices </Item1>
        <Item1> Fusce</Item1>
      </PageLinks>
    </Wrapper>
  );
};

export default Footer;
