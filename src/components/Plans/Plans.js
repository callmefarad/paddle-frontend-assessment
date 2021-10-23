import React from "react";
import {
  Wrapper,
  PlanHead,
  PlanBody,
  ChoosePlan,
  PlanDesc,
  PlanPrice1,
  PlanPrice2,
  PlanPrice3,
  PlanImage,
  PlanValues,
  PricePack,
  PricePack2,
  PricePack3,
  ValueOption,
  ValuePackGroup,
  ValuePack,
  Price,
  Currency,
  PriceButton,
  ButtonText,
  PriceButtonActive,
  ButtonTextActive,
} from "./PlanStyle";
import PriceImage from "../assets/images/pricing3.png";
import PriceImage2 from "../assets/images/pricing2.png";
import PriceImage3 from "../assets/images/pricing1.png";
import { BsCheck } from "react-icons/bs";

const Plans = () => {
  return (
    <Wrapper>
      <PlanHead>
        <ChoosePlan>choose your plan</ChoosePlan>
        <PlanDesc>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </PlanDesc>
      </PlanHead>
      <PlanBody>
        <PlanPrice1>
          <PlanImage>
            <img
              src={PriceImage}
              alt="plan image"
              height="207px"
              width="207px"
              objectFit="cover"
            />
          </PlanImage>
          <PlanValues>
            <ValueOption>free plan</ValueOption>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
          </PlanValues>
          <PricePack>
            <Price>
              <Currency>Free</Currency>
            </Price>
            <PriceButton>
              <ButtonText>select</ButtonText>
            </PriceButton>
          </PricePack>
        </PlanPrice1>
        <PlanPrice2>
          <PlanImage>
            <img
              src={PriceImage2}
              alt="plan image"
              height="212px"
              width="207px"
              objectFit="cover"
            />
          </PlanImage>
          <PlanValues>
            <ValueOption>free plan</ValueOption>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
          </PlanValues>
          <PricePack2>
            <Price>
              <Currency>$9 / mon</Currency>
            </Price>
            <PriceButton>
              <ButtonText>select</ButtonText>
            </PriceButton>
          </PricePack2>
        </PlanPrice2>
        <PlanPrice3>
          <PlanImage>
            <img
              src={PriceImage3}
              alt="plan image"
              height="207px"
              width="207px"
              objectFit="cover"
            />
          </PlanImage>
          <PlanValues>
            <ValueOption>free plan</ValueOption>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
            <ValuePackGroup>
              <BsCheck style={{ fill: "#2FAB73" }} size={24} />
              <ValuePack>Mauris sem neque</ValuePack>
            </ValuePackGroup>
          </PlanValues>
          <PricePack3>
            <Price>
              <Currency>$12 / mon</Currency>
            </Price>
            <PriceButtonActive>
              <ButtonTextActive>select</ButtonTextActive>
            </PriceButtonActive>
          </PricePack3>
        </PlanPrice3>
      </PlanBody>
    </Wrapper>
  );
};

export default Plans;
