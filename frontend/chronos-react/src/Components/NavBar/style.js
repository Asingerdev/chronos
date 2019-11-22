import style from 'styled-components';


// main is "nav-header"
// div is "nav-left"
// article is "nav-center"
// section is "nav-right"

export const NavStyle = style.nav`

  position: fixed;
  border-bottom: 1px solid black;
  width: 100%;
  top: 0;
  background-color: white;

  text-decoration: none;
  font-family: sans-serif;
  margin-left: 0%;
  text-transform: uppercase;  
  color: black;

  
  main {
    max-width: 75%;
    margin: 0 auto;
    display: flex;
    padding: 15px;
  }
  
  div {
    width: 33.333%;
    text-align: left;
  }
  
  article {
    width: 33.333%;
    text-align: center;
  }

  section {
    width: 60%;
    text-align: right; 
  }


`