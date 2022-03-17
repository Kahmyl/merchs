import styled from 'styled-components';
import { useContext } from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 10px 20px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 18px 20px;
    }
  }
`;

const RightNav = ({ open }) => {
  // const user = useContext(UserContext);

  const Logout = () => {
    fetch("/api/logout", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
    .then((response) => {
      Router.reload()
    })
  }

    return (
      <Ul open={open}>
        <li><Link href="/admin"><a>Home</a></Link></li>
        <li><Link href="admin/products"><a>Products</a></Link></li>
        <li><Link href="admin/categories"><a>Categories</a></Link></li>
        <li><Link href="/admin/login"><a>Sign In</a></Link></li>
        <li><Link href="/admin/register"><a> Sign Up </a></Link></li>
      </Ul>
    );
}

export default RightNav