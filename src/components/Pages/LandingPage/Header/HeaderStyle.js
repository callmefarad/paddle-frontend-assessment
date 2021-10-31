import styled from "styled-components";

export const Wrapper = styled.div`
  // margin-top: 46px;
  background-color: #ffffff; 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100vw;
  position: fixed;
  z-index: 999;
`;
export const Container = styled.div`
  background-color: inherit;
  // background-color: black;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px){
    background: #EED4F4;
    // display: none;
  }
`;
export const MenuCover = styled.div`
  @media screen and (max-width: 768px){
    // background-color: green;
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999
  }
`;
export const Brand = styled.div`
  /* background-color: black; */
  font-family: Ranchers;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 37px;
  color: #ba55d3;
  text-transform: uppercase;
  cursor: pointer;
`;
export const BuggerMenu = styled.div`
display: none;

@media screen and (max-width: 768px){
  display: flex;
  position: absolute;
  font-size: 30px;
  top: 35px;
  right:30px;
  color: #3D5A80;
  cursor: pointer;
  // background-color: blue;
}
`;
export const PageLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #4f5665;
  text-transform: capitalize;
  gap: 66px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  @media screen and (max-width: 768px){
    width: 100%;
    height: 70vh;
    // height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: #EFD7F5;
    color: #3D5A80;
    font-weight: bold;
    padding: 110px 0px;
    gap: 0px;
    top: 0;
    left: ${({open})=>(open ? 0 : "-100%")};
    transition: all 0.5s ease;
  }
`;
export const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px){
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    width: 90vw;

    &:hover{
      background-color:#e5ceeb;
      width: 90vw;
      border: none;
      border-radius: 4px;
      color: #ffffff;
      transition: all 0.5s ease;
    }
  }
`;
export const NavLink = styled.div`
  cursor: pointer;
`;

export const Access = styled.div`
  // background-color: grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  text-transform: capitalize;
  font-weight: bold;

  @media screen and (max-width: 768px){
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
  }
`;
export const SignIn = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #0b132a;
  white-space: nowrap;
  cursor: pointer;

  @media screen and (max-width: 768px){
    &:hover{
      border: none;
      color: #ba55d3;
      transition: all 0.5s ease;
    }
  }
`;
export const SignUpContainer = styled.div`
  display: flex;
  height: 45px;
  width: 150px;
  border: 4px solid #ba55d3;
  box-sizing: border-box;
  border-radius: 4px;
  // padding-top: 13px;
  // padding-bottom: 13px;
  // padding-left: 45px;
  // padding-right: 45px;
  white-space: nowrap;
  cursor: pointer;

  @media screen and (max-width: 768px){
    &:hover{
      border: none;
      background-color: #ba55d3;
      transition: all 0.5s ease;
      border: 2px solid #ffffff;
    }
  }
`;
export const SignUp = styled.div`
// background-color: blue;
display: flex;
  font-family: Rubik;
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  color: #ba55d3;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;


  @media screen and (max-width: 768px){
    &:hover{
      color: #ffffff;
    }
  }
`;
// const PageLinks = styled.div``;
