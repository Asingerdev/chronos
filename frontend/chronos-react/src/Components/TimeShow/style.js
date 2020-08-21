import style from 'styled-components'

export const ShowDiv = style.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  
  vertical-align: middle;

  div {
    flex: 33%;
    padding: 0 4px;
  }

  p {
    font-size: 12px;
  }
`;

export const Image = style.img`
  margin-top: 0px;
  vertical-align: middle;
  max-height: 500px;
  max-width: 400px;  
  border: 6px solid black;
`;