import React, {useState} from "react";
import { Wrapper, Container, Brand, PageLinks, Access, NavLink, SignIn, SignUpContainer, SignUp, BuggerMenu, Cover, MenuCover } from "./HeaderStyle";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import {Link as NavLink} from "react-router-dom"

const Header = () => {
  // set state
  const [open, setOpen] = useState(false);
  // toggle the state
  const toggleBugger = ()=> setOpen(!open);
  // return the state back to the initial state
  const closeBugger = ()=> setOpen(false);

  return (
    <Wrapper>
      <Container>
      <MenuCover>
      <Brand>peddle</Brand>
        <BuggerMenu onClick={toggleBugger}>
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </BuggerMenu>
      </MenuCover>
        <PageLinks  open={open} onClick={toggleBugger}>
        <Cover>
          <NavLink to="/homepage" onClick={toggleBugger}>about</NavLink>
        </Cover>
          <Cover>
          <NavLink to="/homepage" onClick={toggleBugger}>faqs</NavLink>
          </Cover>
          <Cover>
          <NavLink to="/homepage" onClick={toggleBugger}>pricing</NavLink>
          </Cover>
          <Cover>
          <NavLink to="/homepage" onClick={toggleBugger}>testimonials</NavLink>
          </Cover>
          <Access>
          <SignIn to="/homepage" onClick={toggleBugger}>sign in</SignIn>
          <SignUpContainer>
            <SignUp to="/homepage" onClick={toggleBugger}>sign up</SignUp>
          </SignUpContainer>
        </Access>
        </PageLinks>
        
      </Container>
    </Wrapper>
  );
};

export default Header;
