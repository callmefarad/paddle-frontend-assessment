import styled from "styled-components";
import SampleImage from "../assets/images/web-developer1.png";

export const Wrapper = styled.div`
  /* background-color: black; */
  color: white;
  display: flex;
  flex-direction: column;
  align-self: center;
  /* width: 80vw; */
  width: 80%;
`;
export const IntroInfo = styled.div`
  /* background-color: black; */
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const InfoText = styled.div`
  width: 35%;
  height: 508px;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
  gap: 20px;
`;
export const Text1 = styled.div`
  text-transform: capitalize;
  font-size: 40px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 70px;
  color: #0b132a;
  text-shadow: 0px 2px 4px #ba55d3;
`;
export const Text2 = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
`;
export const Text3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 60px;
  top: 476.77px;
  background: #ba55d3;
  border-radius: 4px;
  box-shadow: rgba(186, 85, 211, 0.35) 0px 35px 54px;
  cursor: pointer;
`;
export const GetStarted = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 25px;
  color: #ffffff;
  text-transform: Capitalize;
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
  margin-top: 43.55px;
  margin-bottom: 43.55px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 68px 100px -70px;
`;
export const ItemUsers = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`;
export const Circle = styled.div`
  height: 55px;
  width: 55px;
  background-color: rgba(186, 85, 211, 0.25);
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
