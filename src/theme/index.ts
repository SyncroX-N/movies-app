// import original module declarations
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";




export const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    height: 100%;
    background-color:#141414;
  }
  
  
`


