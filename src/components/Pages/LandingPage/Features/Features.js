import React from "react";
import FeatImage from "../../../assets/images/feature.png";
import {
  Wrapper,
  FeaturesImage,
  FeaturesDesc,
  FeatureCaption,
  FeatureIntro,
  FeatureList,
  Item,
  Square,
  Text,
} from "./FeaturesStyle";

const Features = () => {
  return (
    <Wrapper>
      <FeaturesImage>
        <img
          src={FeatImage}
          alt="feature-image"
          style={{
            width: "100%",
            height: "296px",
            objectFit: "contain",
          }}
        />
      </FeaturesImage>
      <FeaturesDesc>
        <FeatureCaption>
          <p>
            features we provide for you
          </p>
        </FeatureCaption>
        <FeatureIntro>
          Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
          eu sem finibus lacinia nec pulvinar.
        </FeatureIntro>
        <FeatureList>
          <Item>
            <Square></Square>
            <Text>Curabitur tempor justo</Text>
          </Item>
          <Item>
            <Square></Square>
            <Text>Curabitur tempor justo</Text>
          </Item>
          <Item>
            <Square></Square>
            <Text>Curabitur tempor justo</Text>
          </Item>
          <Item>
            <Square></Square>
            <Text>Curabitur tempor justo</Text>
          </Item>
        </FeatureList>
      </FeaturesDesc>
    </Wrapper>
  );
};

export default Features;
