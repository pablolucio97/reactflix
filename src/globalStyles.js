import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins';
    }

    body{
    background: #000;
    overflow-x: hidden;
    }

    h1{
        margin: 8px;
        font-size: 1.8rem;
        color: #ff0000;
    }

    header{
        display: flex;
        justify-content: center;
        width: 100vw;
        background-color: #222;
        padding: 12px;
        margin-bottom: 40px;
        @media(max-width: 720px){
            flex-direction: column;
            align-items: center;
        }
    }

    input{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 400px;
        height: 36px;
        background-color: #333;
        padding: 5px;
        border: none;
        outline: none;
        margin: 10px 20px 10px;
        font-size: 1rem;
        transition: all .3s;
        font-size: .88rem;
        padding: 0 12px;

        &:hover{
            background-color: #111;
            border: 1px solid #ff0000;
            color: #fff;
            
        }

        @media (max-width: 768px) {
            width: 80%;
        }
    }

    strong{
        color: #fff; 
        margin: 40px auto -24px;
    }

    button{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 72px;
    height: 36px;
    background-color: #ff0000;
    padding: 5px;
    border: none;
    outline: none;
    margin: 10px 20px 10px 5px;
    font-size: 1rem;
    transition: all .3s;
    color: #fff;
    cursor: pointer;

    &:disabled{
        opacity: .5;
        cursor: auto;
    }
    }
`

export default GlobalStyle