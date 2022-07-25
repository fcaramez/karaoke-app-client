import { createGlobalStyle } from "styled-components";

const GlobalStyle: any = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Roboto";
    width:390px;
    min-height:100vh;
    text-align: center;
    display:flex;
    flex-flow:column wrap;
    align-items:center;
    justify-content:center;
}

h1{
font-size: 2rem;
font-weight: 1000;
line-height: 3rem;
font-family: "Roboto";
}

a {
    text-decoration: inherit;
    color: inherit;
}

`;

export default GlobalStyle;
