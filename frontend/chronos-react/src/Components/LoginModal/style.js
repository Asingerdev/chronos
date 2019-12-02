import style from 'styled-components'

export const Modal = style.div`
    section {
        position: fixed;
        background: white;
        width: 60%;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-animation: animatezoom 0.6s;
        animation: animatezoom 0.6s;
        border: solid 2px lightgray;
    }

    @-webkit-keyframes animatezoom {
        from {
            -webkit-transform: scale(0)
        }
        to {
            -webkit-transform: scale(1)
        }
    }

    @keyframes animatezoom {
        from {
            transform: scale(0)
        }
        to {
            trasnsform: scale(1)
        }
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

    ul {
        display: grid;
    }

    ul > * {
        grid-column-start: 1;
        grid-row-start: 1;
        justify-self: center;
    }

    ul > *: last-child {
        justify-self: right;
    }

    li {
        display: inline-block;
        margin: 1px;
        padding: 5px;
    }

    #close {
        position: absolute;
        cursor: pointer;
        top: -40px;
        right: 32px;
        width: 22px;
        height: 22px;
        opacity: 0.3;
        &:hover {
            opacity: 1;
        }
        &:before, :after {
            position: absolute;
            left: 15px;
            content: ' ';
            height: 33px;
            width: 2px;
            background-color: #333;
        }
        &:before {
            transform: rotate(45deg);
        }
        &:after {
            transform: rotate(-45deg);
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
        flex-wrap: wrap;
        padding: 10px;
    }

    #submit {
        font-size: 20px;
        opacity: .8;
        margin: 5px 10px 0 10px;
        display: flex;
        justify-content: center;
        cursor: pointer;
        background: darkblue;
        width: 40%;
        text-align: center;
        border-radius: 5px;
        text-align: center;
        height: 30px;
        &:hover {
            opacity: 1;
        }
    }

    p {
        color: white;
        display: flex;
    }

    h2 {
        color: red;
        display: flex;
        align-content: center;


    }


`