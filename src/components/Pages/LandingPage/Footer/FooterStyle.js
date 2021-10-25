import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 200px;
  background-color: #f8f8f8;
  padding-top: 183.22px;
  padding-bottom: 141.71px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;
export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 425px) {
    align-items: center;
  }
`;
export const Name = styled.div`
  font-family: Ranchers;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  color: #ba55d3;
  text-transform: uppercase;
`;
export const Desc = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
  width: 340px;
  margin-bottom: 80px;
  margin-top: 15px;

  @media screen and (max-width: 425px) {
    display: flex;
    text-align: center;
    width: 80%;
  }
`;
export const Copywrites = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #afb5c0;

  @media screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
  }
`;
export const PageLinks = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: center;
`;
export const Products = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  color: #0b132a;
`;
export const Item1 = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #4f5665;
`;
// export const Wrapper = styled.div``;