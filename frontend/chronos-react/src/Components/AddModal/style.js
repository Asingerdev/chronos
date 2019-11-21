import style from 'styled-components'

export const Modal = style.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: ease-in 0.2s;

    section {
        position: fixed;
        background: white;
        width: 60%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    header {
        border-bottom: 2px solid lightgray;
        margin: 10px 0;
    }

    h1 {
        font-size: 2em;
        text-align: center;
        margin-bottom: 5px;
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
        margin: 5px 10px 0 10px;
    }

    #submit {
        display: flex;
        justify-content: center;
        background: darkblue;
        width: 40%;
        text-align: center;
        border-radius: 5px;
        text-align: center;
        height: 30px;
    }

    #close {
        display: flex;
        justify-content: center;
        background: darkred;
        width: 40%;
        text-align: center;
        border-radius: 5px;
        text-align: center;
        height: 30px;
    }

    p {
        color: white;
        display: flex;
    }


`
