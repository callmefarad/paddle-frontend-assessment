import styled from "styled-components";

export const Wrapper = styled.div`
  /* background-color: grey; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  align-self: center;
`;
export const TrustedCustomer = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 50px;
  text-align: center;
  color: #0b132a;
  width: 447.81px;
  margin-bottom: 40px;

  @media screen and (max-width: 425px) {
    font-size: 25px;
    line-height: 40px;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const CustomerDesc = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #4f5665;
  width: 555px;

  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* background-color: aqua; */
    gap: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 10px;
    flex-wrap: wrap;
  }
`;
export const CustomerCard = styled.div`
  margin-top: 60px;
  background: #ffffff;
  border: 3px solid #ba55d3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 400px;
  /* height: 230px; */
  padding: 30px;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 10px;
  }
`;
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
`;
export const ImageContainer = styled.div`
  height: 50px;
  width: 50px;
`;
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Name = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #0b132a;
  @media screen and (max-width: 1024px) {
    line-height: 20px;
  }
`;
export const Country = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #4f5665;
`;
export const Rating = styled.div`
  display: flex;
  gap: 11.38px;

  @media screen and (max-width: 1024px) {
    gap: 5px;
  }
`;
export const Number = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
export const CardBody = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  color: #0b132a;
  margin-top: 26.5px;
  margin-bottom: 30px;
`;
export const MoreCustomer = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: right;
  margin-bottom: 65.02px;
  width: inherit;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;
export const Backward = styled.div`
  width: 60px;
  height: 60px;
  border: 3px solid #ba55d3;
  box-sizing: border-box;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Forward = styled.div`
  width: 60px;
  height: 60px;
  background: #ba55d3;
  border: 2px solid #ba55d3;
  box-sizing: border-box;
  box-shadow: 0px 14px 44px rgba(14, 20, 34, 0.08);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
