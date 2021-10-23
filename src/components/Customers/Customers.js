import React from "react";
import {
  Wrapper,
  TrustedCustomer,
  CustomerDesc,
  CustomerCard,
  MoreCustomer,
  CardHeader,
  Container,
  ImageContainer,
  CardInfo,
  Name,
  Country,
  Rating,
  Number,
  CardBody,
  CardWrapper,
  Backward,
  Forward,
} from "./CustomerStyle";
import eclipse from "../assets/images/Ellipse 175.png";
import { MdStar, MdArrowBack, MdArrowForward } from "react-icons/md";

const Customers = () => {
  return (
    <Wrapper>
      <TrustedCustomer>
        <p>Trusted by Thousands of Happy Customer</p>
      </TrustedCustomer>
      <CustomerDesc>
        Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse et
        suscipit est, nec laoreet mi. Nunc pellentesque imperdiet ultricies.{" "}
      </CustomerDesc>
      <CardWrapper>
        <CustomerCard>
          <CardHeader>
            <Container>
              <ImageContainer>
                <img src={eclipse} alt="card image" height="50" width="50" />
              </ImageContainer>
              <CardInfo>
                <Name>viezh robert</Name>
                <Country>warsaw, poland</Country>
              </CardInfo>
            </Container>
            <Rating>
              <Number>4.5</Number>
              <MdStar
                style={{ fill: "#FEA250", alignSelf: "center" }}
                size={20}
              />
            </Rating>
          </CardHeader>
          <CardBody>
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </CardBody>
        </CustomerCard>
        <CustomerCard>
          <CardHeader>
            <Container>
              <ImageContainer>
                <img src={eclipse} alt="card image" height="50" width="50" />
              </ImageContainer>
              <CardInfo>
                <Name>viezh robert</Name>
                <Country>warsaw, poland</Country>
              </CardInfo>
            </Container>
            <Rating>
              <Number>4.5</Number>
              <MdStar
                style={{ fill: "#FEA250", alignSelf: "center" }}
                size={20}
              />
            </Rating>
          </CardHeader>
          <CardBody>
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </CardBody>
        </CustomerCard>

        <CustomerCard>
          <CardHeader>
            <Container>
              <ImageContainer>
                <img src={eclipse} alt="card image" height="50" width="50" />
              </ImageContainer>
              <CardInfo>
                <Name>viezh robert</Name>
                <Country>warsaw, poland</Country>
              </CardInfo>
            </Container>
            <Rating>
              <Number>4.5</Number>
              <MdStar
                style={{ fill: "#FEA250", alignSelf: "center" }}
                size={20}
              />
            </Rating>
          </CardHeader>
          <CardBody>
            “Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor.
            Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce
            arcu ex”
          </CardBody>
        </CustomerCard>
      </CardWrapper>
      <MoreCustomer>
        <Backward>
          <MdArrowBack style={{ fill: "#BA55D3" }} size={32} />
        </Backward>
        <Forward>
          <MdArrowForward
            style={{ fill: "#FFFFFF" }}
            size={32}
          />
        </Forward>
      </MoreCustomer>
    </Wrapper>
  );
};

export default Customers;
