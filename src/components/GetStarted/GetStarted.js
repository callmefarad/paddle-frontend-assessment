import React from "react";
import {
  Wrapper,
  GetStartedIntro,
  GetStartedDesc,
    GetStartedButton,
  StartToday,
    GetStartedSponsors,
  
} from "./GetStartedStyle";
import Sponsord from "../assets/images/Sponsored.png"

const GetStarted = () => {
  return (
    <Wrapper>
      <GetStartedIntro>
        <p>get started with paddle today</p>
      </GetStartedIntro>
      <GetStartedDesc>
        Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
        egestas ullamcorper
      </GetStartedDesc>
      <GetStartedButton>
        <StartToday>start today</StartToday>
      </GetStartedButton>
      <GetStartedSponsors>
        <img src={Sponsord} alt="no image" />
      </GetStartedSponsors>
    </Wrapper>
  );
};

export default GetStarted;
