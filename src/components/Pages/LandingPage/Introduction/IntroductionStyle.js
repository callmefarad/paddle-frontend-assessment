import styled from "styled-components";
import SampleImage from "../../../assets/images/web-developer1.png";

export const Wrapper = styled.div`
  /* background-color: black; */
  color: white;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80%;

  @media (max-width: 425px) {
  }
`;
export const IntroInfo = styled.div`
  /* background-color: tomato; */
  display: flex;
  justify-content: space-around;

  @media (max-width: 1024px) {
    gap: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    gap: 65px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const InfoText = styled.div`
  /* background-color: green; */
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 120px;
  gap: 20px;

  @media (max-width: 425px) {
    padding-top: 60px;
    gap: 10px;
    width: 100%;
  }
`;
export const Text1 = styled.div`
  text-transform: capitalize;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
  color: #0b132a;
  text-shadow: 0px 2px 4px #ba55d3;

  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;
export const Text2 = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;

  @media (max-width: 1024px) {
    font-size: 15px;
    line-height: 20px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;
export const Text3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 60px;
  background: #ba55d3;
  border-radius: 4px;
  box-shadow: rgba(186, 85, 211, 0.35) 0px 25px 54px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 200px;
    height: 50px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 50px;
  }
`;
export const GetStarted = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  text-transform: Capitalize;

  @media (max-width: 768px) {
  }
`;
export const InfoImage = styled.div`
  /* background-image: url(${SampleImage}); */
  /* background-color: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const IntroUsers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  /* background-color: tomato; */
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 58.55px;
  margin-bottom: 43.55px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 68px 100px -70px;

  /* @media (max-width: 1024px) {
    width: 
  } */

  @media (max-width: 425px) {
    flex-direction: column;
    height: 300px;
    
  }
`;
export const ItemUsers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    width: 100%;
    justify-content: center;
  }
`;
export const Circle = styled.div`
  height: 55px;
  width: 55px;
  background-color: rgba(186, 85, 211, 0.25);
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    /* background-color: blue; */
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  /* background-color: brown; */
`;
export const Figure = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #0b132a;
`;

export const Item = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #4f5665;
`;
export const Line = styled.div`
  width: 0px;
  height: 125.57px;
  border: 2px solid #eeeff2;
`;
