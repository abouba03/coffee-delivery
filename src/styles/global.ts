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
        --yellow-light: #F1E9C9;
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
        max-width: 1540px;
        margin: 0 auto;
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
    html {
         @media (max-width: 1080px) {
            font-size: 93.75%; // 16 x 0.9375 = 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 16 x 0.875 = 14px
        }
    }

    @keyframes vibrate {
        0% {transform: translate(0);}
        20% {transform: translate(-2px, 2px);}
        40% {transform: translate(-2px, -2px);}
        60% {transform: translate(2px, 2px);}
        80% {transform: translate(2px, -2px);}
        100% {transform: translate(0);}
    }
    @keyframes scale {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slideOut {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes bounce {
  0% { transform: translateY(0); }
  25% { transform: translateY(-10px); }
  50% { transform: translateY(0); }
  75% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(0); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
}
`
