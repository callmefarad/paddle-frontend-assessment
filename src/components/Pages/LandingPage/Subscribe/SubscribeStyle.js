import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 4200.28px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1140px;
  align-self: center;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 58.5px;
  padding-bottom: 58.5px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 68px 100px -70px;

  @media screen and (max-width: 1024px) {
    top: 5700.28px;
    width: 700px;
  }

  @media screen and (max-width: 768px) {
    top: 6100.28px;
    width: 550px;
    flex-direction: column;
    padding-left: 0px;
    padding-right: 0px;
  }

  @media screen and (max-width: 425px) {
    /* background-color: green; */
    top: 6530.28px;
    width: 320px;
  }

  @media screen and (max-width: 375px) {
    /* background-color: green; */
    top: 6600.28px;
    width: 320px;
  }

  @media screen and (max-width: 320px) {
    /* background-color: green; */
    top: 6830.28px;
    width: 320px;
  }
`;
export const SubscribeInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
  
`;
export const Caption = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: #0b132a;
  width: 371.61px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    font-size: 35px;
    width: 250px;
  }
`;
export const Description = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #4f5665;
  width: 410px;

  @media screen and (max-width: 768px) {
    /* background-color: green; */
    display: flex;
    justify-content: center;
    line-height: 35px;
  }
`;
export const SubscribeButton = styled.div`
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
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
`;