import style from 'styled-components';


// main is "nav-header"
// div is "nav-left"
// article is "nav-center"
// section is "nav-right"

const NavStyle = style.nav`

  position: fixed;
  border-bottom: 1px solid black;
  width: 100%;
  top: 0;
  background-color: white;


  main {
    max-width: 75%;
    margin: 0 auto;
    display: flex;
    padding: 15px;
  }

  img {
    width: 20px;
  }
  
  div {
    margin-top: 5.0rem;
    width: 33.333%;
    text-align: left;
  }
  
  article {
    width: 33.333%;
    text-align: center;
    font-size: 28px;
    margin-left: 16.5%;
    border-top: 2px solid grey;
    border-bottom: 2px solid grey;
     &:hover {
      color: grey;
    }
    

    @media (max-width: 500px) {
      font-size: 14px;
      
      margin-top: 4%;
      margin-right: 4%;
      margin-left: 12.5%;
    }

    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 4%;
      margin-right: 5%;
    }
  }

  section {
    margin-top: 5.0rem;
    width: 60%;
    text-align: right; 
  }



`

export default NavStyle;
