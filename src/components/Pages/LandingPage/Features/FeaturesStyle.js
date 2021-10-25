import styled from "styled-components";


export const Wrapper = styled.div`
/* background-color: gold; */
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 100px;
  width: 80%;
  align-self: center;
  /* gap: 30px; */

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`;
export const FeaturesImage = styled.div`
  width: 65%;
  height: 296%;
  display: flex;
  align-items: center;
  /* background-color: green; */
  align-self: center;

  @media screen and (max-width: 768px) {
  }
`;
export const FeaturesDesc = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* background-color: green; */
  padding-left: 50px;
  padding-right: 50px;
`;
export const FeatureCaption = styled.div`
  /* background-color: green; */
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  color: #0b132a;
  text-transform: capitalize;

  p {
    padding-right: "900px";
  }

  @media screen and (max-width: 1024px) {
    p {
      text-align: center;
    }
    font-size: 35px;
    line-height: 40px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    display: flex;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;
export const FeatureIntro = styled.div`
  margin-top: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
`;
export const FeatureList = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24.45px;
`;
export const Item = styled.div`
display: flex;
align-items: center;
gap: 14.2px;
margin-bottom: 26px;
`;
export const Square = styled.div`
  width: 20px;
  height: 20px;
  background: #ba55d3;
  border-radius: 4px;
`;
export const Text = styled.div``;