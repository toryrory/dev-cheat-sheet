import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";
// import { IoMdStarOutline } from "react-icons/io";

export const HeaderBase = styled.header`
padding: 10px 0 18px;
border-bottom: 1px solid ${baseTheme.color.borderSection};
`
export const HeaderFlexBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const HeaderBtnsBox = styled.div`
display: flex;
gap: 20px;
align-items: center;
`
export const HeaderBtn = styled.button`
width: 45px;
height: 45px;
padding: 0;
border-radius: 50%;
background-color: ${baseTheme.color.buttonBg};
color: ${baseTheme.color.buttonText};
border: 2px solid ${baseTheme.color.borderBtn};
cursor: pointer;


&:hover {
    background-color: ${baseTheme.color.buttonBgHover};
    border: 2px solid ${baseTheme.color.buttonBorderHover};

}
`

export const LogoImg = styled.img`
width:50px;
height:50px;  
`