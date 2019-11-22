import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`

  text-decoration: none;
  font-family: sans-serif;
  margin-left: 2%;
  padding: 0.48rem;
  text-transform: uppercase;  
  color: black;
  border: 2px outset black;
  
  &:hover {
      color: dodgerblue;
      border: 1px inset black;
  }


`

export default NavLink;