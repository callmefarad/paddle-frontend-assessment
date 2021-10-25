import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: grey; */
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
`;
export const GetStartedIntro = styled.div`
  /* background-color: green; */
  text-transform: capitalize;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
  text-align: center;
  color: #0b132a;
  width: 370.41px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 45%;
    line-height: 40px;
  }
  @media screen and (max-width: 425px) {
    font-size: 25px;
    width: 60%;
    line-height: 40px;
  }
`;
export const GetStartedDesc = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #4f5665;
  width: 400px;

  @media screen and (max-width: 1024px) {
    width: 350px;
  }
`;
export const GetStartedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 266.81px;
  height: 67.5px;
  background: #ba55d3;
  border-radius: 4px;
  box-shadow: rgba(186, 85, 211, 0.35) 0px 35px 44px;
  cursor: pointer;
  margin-top: 20px;
`;
export const StartToday = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  text-transform: capitalize;
`;
export const GetStartedSponsors = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 36.43px;
  margin-bottom: 50px;
  width: 1200px;

  @media screen and (max-width: 1024px) {
    img {
      width: 800px;
    }
    width: 100%;
    /* background-color: aqua; */
  }

  @media screen and (max-width: 768px) {
    img {
      width: 600px;
    }
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    img {
      width: 320px;
    }
    width: 100%;
  }

  @media screen and (max-width: 425px) {
    img {
      width: 280px;
    }
    width: 100%;
  }

  @media screen and (max-width: 320px) {
    img {
      width: 230px;
    }
    width: 100%;
  }
`;
// export const GetStartedSponsors = styled.div``;
// // export const Wrapper = styled.div``;
