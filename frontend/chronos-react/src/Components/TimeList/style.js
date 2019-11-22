import style from 'styled-components'

const Column = style.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  div {
    flex: 50%;
    padding: 0 4px;
    max-width: 400px;
    height: auto;
  }

  h2 {
    background-color: black;
    color: white; 
  }

  img {
    margin-top: 8px;
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
  }
`;

export default Column
