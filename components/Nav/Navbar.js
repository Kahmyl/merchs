import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import { AiOutlineTaobao } from "react-icons/ai";
import { addToCart } from "../../redux/";
import { connect } from "react-redux";

const Nav = styled.nav`
  width: 100%;
  height: 75px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
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

const Navbar = (props) => {
  return (
    <Nav>
      <Dvent>
        <Logo />
        Merch
      </Dvent>
      Cart ({props.cart.length})
      <Burger />
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: () => dispatch(addToCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
