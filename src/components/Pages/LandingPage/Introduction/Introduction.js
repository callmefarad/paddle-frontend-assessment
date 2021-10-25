import React from "react";
import {
  Wrapper,
  IntroInfo,
  InfoText,
  InfoImage,
  IntroUsers,
  Text1,
  Text2,
  Text3,
  GetStarted,
  ItemUsers,
  Circle,
  Figure,
  Item,
  Line,
  Text,
} from "./IntroductionStyle";
import SampleImage from "../../../assets/images/web-developer1.png";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillHddStackFill } from "react-icons/bs";

const Introduction = () => {
  return (
    <Wrapper>
      <IntroInfo>
        <InfoText>
          <Text1>we are everything we aspire to be</Text1>
          <Text2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
            turpis eget ipsum malesuada dignissim
          </Text2>
          <Text3>
            <GetStarted>get started</GetStarted>
          </Text3>
        </InfoText>
        <InfoImage>
          <img
            src={SampleImage}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            alt="info image"
          />
        </InfoImage>
      </IntroInfo>
      <IntroUsers>
        <ItemUsers>
          <Circle>
            <BsFillPersonFill style={{ fill: "#BA55D3" }} size={24} />
          </Circle>
          <Text>
            <Figure>90+</Figure>
            <Item>users</Item>
          </Text>
        </ItemUsers>
        <Line></Line>
        <ItemUsers>
          <Circle>
            <BsFillGeoAltFill style={{ fill: "#BA55D3" }} size={24} />
          </Circle>
          <Text>
            <Figure>30+</Figure>
            <Item>locations</Item>
          </Text>
        </ItemUsers>
        <Line></Line>
        <ItemUsers>
          <Circle>
            <BsFillHddStackFill style={{ fill: "#BA55D3" }} size={24} />
          </Circle>
          <Text>
            <Figure>50+</Figure>
            <Item>servers</Item>
          </Text>
        </ItemUsers>
      </IntroUsers>
    </Wrapper>
  );
};

export default Introduction;
