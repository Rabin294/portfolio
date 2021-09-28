import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Open Sans Condensed", sans-serif;
        margin: 0;
        padding: 0;
        width: 100%;
        
        // background: linear-gradient(to left, rgb(238, 232, 232),
        // rgb(230, 225, 225) 50%,
        // #eee 75%,
        // rgba(175, 173, 173, 0.315) 15%s
        // );
        @media screen and (max-width:800px){
            padding:10px;

        }
    }

    a {
        text-decoration: none;
        color: black;
    }
    `;
