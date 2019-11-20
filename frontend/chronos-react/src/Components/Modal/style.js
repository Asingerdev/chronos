import style from 'styled-components'

export const Modal = style.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);`


    // &.modal-main {
    //     position: fixed;
    //     background: white;
    //     width: 80%;
    //     height: auto;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    // }
