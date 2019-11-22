import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLink = styled(Link)`

  text-decoration: none;
  font-size: 12px;
  font-family: 'Libre Baskerville' , sans-serif;
  margin-left: 2%;
  padding: 0.5rem 0.33rem 0.5rem 0.33rem;
  text-transform: uppercase;  
  color: black;

  
  
  &:hover {
      color: rgb(179, 40, 17);
      border: 1px inset rgb(179, 40, 17);
  }


`

export default NavLink;