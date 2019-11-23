import style from 'styled-components'

const Column = style.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  div {
    flex: 50%;
    padding: 0 4px;
    max-width: 200px;
    height: auto;
  }

  h2 {
    background-color: black;
    color: white;
    font-family: 'Libre Baskerville', sans-serif;
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    text-transform: uppercase;
  }

  img {
    vertical-align: middle;

    max-width: 100%;
    max-height: 100%;
  }
`;

export default Column
