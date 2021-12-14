import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

const linkList = [
  {
    link: "/",
    name: "main",
  },
  {
    link: "/movie",
    name: "영화",
  },
  {
    link: "/book",
    name: "책",
  },
];

const Nav = () => {
  let { pathname } = useLocation();
  if (pathname === "/") return <></>;

  return (
    <Container>
      <LinkList>
        {linkList.map(({ link, name }) => (
          <Link to={link} key={link}>
            <LinkItem active={pathname === link}>{name}</LinkItem>
          </Link>
        ))}
      </LinkList>
    </Container>
  );
};

const Container = styled.header`
  height: 50px;
  background: #ffffff;
  width: 100vw;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const LinkList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
`;
const LinkItem = styled.li`
  margin: 0 10px;
  padding: 5px 10px;
  ${({ active }) =>
    active &&
    css`
      background: #000;
      color: #fff;
    `}
`;

export default Nav;
