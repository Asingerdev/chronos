import style from 'styled-components'

export const Modal = style.div`
    display: ${props => props.show ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
   
    section {
        position: fixed;
        text-align: center;
        background: white;
        width: 60%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        margin: 20px 0;
        font-size: 2em;
    }

    form {
        margin: 0 auto;
        padding: 20px;
    }

    label, input {
        flex-basis: 100px;
    }

    label {
        font-size: 1.5em;
    }

    input {
        margin-top: 10px;
        width: 50%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`
