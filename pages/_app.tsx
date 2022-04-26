import type { AppProps } from 'next/app'
import { createGlobalStyle } from "styled-components";
import { Colors } from "../colors/colors"

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    padding-top: 20px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: auto;
    background-color: ${Colors.Background};
    
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
