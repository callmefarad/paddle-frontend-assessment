import React from "react";
import { Wrapper, Container, Brand, PageLinks, Access, About, Faqs, Pricing, Testimonials, SignIn, SignUpContainer, SignUp } from "./HeaderStyle";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Brand>peddle</Brand>
        <PageLinks>
          <About>about</About>
          <Faqs>faqs</Faqs>
          <Pricing>pricing</Pricing>
          <Testimonials>testimonials</Testimonials>
        </PageLinks>
        <Access>
          <SignIn>sign in</SignIn>
          <SignUpContainer>
            <SignUp>sign up</SignUp>
          </SignUpContainer>
        </Access>
      </Container>
    </Wrapper>
  );
};

export default Header;
