import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Roboto Slab', serif;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.SECONDARY_100};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  /* Designing for scroll-bar */
  ::-webkit-scrollbar {
    width: 40px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: none;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.COLORS.PRIMARY_400};
    border-radius: 32px;
    border: 16px solid ${({theme}) => theme.COLORS.BACKGROUND_800};
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${({theme}) => theme.COLORS.PRIMARY_500};
  }
 
  textarea:focus, input:focus{
    outline: none;
}
`;
