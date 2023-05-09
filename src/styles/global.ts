import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: "baloo 2", cursive;
        font-weight: 600;
    }

    body {
        
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`