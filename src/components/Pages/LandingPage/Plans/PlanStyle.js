import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
  width: 80%;
  align-self: center;
  align-items: center;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 80px;
  }

  @media screen and (max-width: 425px) {
    margin-bottom: 60px;
  }

  @media screen and (max-width: 320px) {
    margin-bottom: 60px;
  }
`;
export const PlanHead = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* background-color: green; */
  width: 555px;
`;
export const ChoosePlan = styled.div`
/* background-color: gold; */
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
  text-align: center;
  color: #0b132a;
  text-transform: capitalize;
  margin-bottom: 20px;
`;
export const PlanDesc = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #4f5665;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    width: 350px;
    align-self: center;
  }
`;
export const PlanBody = styled.div`
/* background-color: gold; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 50px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const PlanPrice1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  width: 330px;
  height: 760px;
  cursor: pointer;

  &:hover {
    border: 2px solid #ba55d3;
  }
`;
export const PlanPrice2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  width: 330px;
  height: 760px;
  cursor: pointer;

  &:hover {
    border: 2px solid #ba55d3;
  }
`;
export const PlanPrice3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: 760px;
  border: 2px solid #ba55d3;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    border: 2px solid #ba55d3;
  }
`;
export const PlanImage = styled.div`
  margin-top: 45.45px;
  margin-bottom: 20.55px;
  margin-left: 58px;
  margin-right: 58px;
  background-color: brown;
  height: 207px;
  width: 207px;
`;
export const PlanValues = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 130px; */
`;
export const ValueOption = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #0b132a;
  text-transform: capitalize;
  margin-bottom: 30px;
`;
export const ValuePackGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 25.61px;
`;
// export const Marked = styled.div``;
export const ValuePack = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 30px;
  color: #4f5665;
`;
export const PricePack = styled.div`
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`;
export const PricePack2 = styled.div`
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 89px;
`;
export const PricePack3 = styled.div`
  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;
export const Price = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
export const Currency = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #0b132a;
  margin-bottom: 20px;
`;
export const PriceButton = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid #ba55d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 177.88px;
  height: 45px;
  cursor: pointer;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ba55d3;
`;

export const PriceButtonActive = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid #ba55d3;
  background-color: #ba55d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 177.88px;
  height: 45px;
  cursor: pointer;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ButtonTextActive = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
