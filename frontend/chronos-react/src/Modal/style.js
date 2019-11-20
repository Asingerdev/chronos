import style from 'styled-components'

export const Modal = style.div`
    display: ${props => props.show ? 'block' : 'none'};
    color: pink;
    :hover {
        color: blue;
    }
`