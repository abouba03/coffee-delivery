import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
        
        --base-input: #E6E5E5;
        --base-title: #272221;
        --base-subtle: #403937;
        --base-text: #574F4D;
        --base-label: #8D8686;
        --base-hover: #D7D5D5;
        --base-button: #E6E5E5;
        --base-card: #F3F2F2;
        --background: #FAFAFA;
        --yellow-dark: #C47F17;
        --yellow: #DBAC2C;
        --yellow-liht: #F1E9C9;
        --purple-dark: #4B2995;
        --purple: #8047F8;
        --purple-light: #EBE5F9;

    }



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
        color: var(--base-title);
        font-weight: 600;
    }
    p{
        color: var(--base-text);
    }
    
    button {
        cursor: pointer;
    }
    
    [disable] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    body {
        
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`
