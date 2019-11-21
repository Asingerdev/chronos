import style from 'styled-components'

export const Modal = style.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);

    section {
        position: fixed;
        background: white;
        width: 60%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        margin: 20px 0 5px 0;
        font-size: 2em;
        text-align: center;
            &:hover {
            background-color: red;
        }
    }

    form {
        padding: 20px;
        margin: 0 auto;
    }

    label {
        font-size: 1.5em;
        display: flex;
        margin-top: 10px;
    }

    input {
        margin-top: 10px;
        width: 50%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        font-size: 15px;
    }

    footer {
        display: flex;
        justify-content: center;
        padding: 10px;
    }

    button {
        font-size: 20px;
        opacity: .8;
    }

    #submit {
        display: flex;
        margin-right: 20px;
    }

    #close {
        display: flex;
        margin-left: 10px;
    }
`
