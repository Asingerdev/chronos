import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`

  text-decoration: none;
  font-family: sans-serif;
  margin-left: 3%;
  text-transform: uppercase;  
  color: black;
  &:hover {
      color: dodgerblue;
  }


`

export default NavLink;