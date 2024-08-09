import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import { baseTheme } from "./theme";

/* mobile-first */

export const GlobalStyle = createGlobalStyle`
    body {
background-color: ${baseTheme.color.body};
    }
    /* Reset and base styles  */
* {
    padding: 0px;
    margin: 0px;
    border: none;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Links */

a,
a:link,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

/* Common */

aside,
nav,
footer,
header,
section,
main {
    display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-size: inherit;
    font-weight: inherit;
}

ul,
ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

img,
svg {
    max-width: 100%;
    height: auto;
}

address {
    font-style: normal;
}

/* Form */

input,
textarea,
button,
select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
}

input::-ms-clear {
    display: none;
}

button,
input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
}

input:focus,
input:active,
button:focus,
button:active {
    outline: none;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

label {
    cursor: pointer;
}

legend {
    display: block;
}
`
export const Container = styled.div`
width: 100%;
    padding: 0 clamp(15px, 0.67rem + 1.34vw, 30px);
    margin: 0 auto;
`

export const ListSection = styled.section`
  padding: 30px 0 40px;
`
