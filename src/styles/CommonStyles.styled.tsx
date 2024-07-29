import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

/* mobile-first */

export const GlobalStyle = createGlobalStyle`
    body {
background-color: #d3d5f147;
    }
`

export const Container = styled.div`
    padding: 0 10px;
    margin: 0 auto;
    @media (min-width: 992px) {
        padding: 0 30px;
    }
`

