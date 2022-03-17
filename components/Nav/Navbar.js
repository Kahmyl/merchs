import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { AiOutlineTaobao } from "react-icons/ai";


const Nav = styled.nav`
  width: 100%;
  height: 75px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
`;
const Dvent = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 20px;
  padding-left: 30px;
  .logo {
    padding-right: 5px;
    font-size: 25px;
  }
`;
export const Logo = styled(AiOutlineTaobao)`
  color: crimson;
  padding-left: 5px;
  font-size: 30px;
`;

const Navbar = () => {

  return (
    <Nav>
      <Dvent>
        <Logo />
        Merch
      </Dvent>
      <Burger />
    </Nav>
  );
};



export default Navbar;
