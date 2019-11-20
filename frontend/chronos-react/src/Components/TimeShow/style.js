import style from 'styled-components'

export const ShowDiv = style.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  div {
    flex: 50%;
    padding: 0 4px;
  }
`;

export const Image = style.img`
  margin-top: 8px;
  vertical-align: middle;  

`;