import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";

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
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 45px;
height: 45px;
border-radius: 50%;
background-color: ${baseTheme.color.buttonBg};
color: ${baseTheme.color.buttonText};

&:hover {
background-color: ${baseTheme.color.buttonBgHover};
border: 2px solid ${baseTheme.color.buttonBorderHover};
}
`
export const BtnBorder = styled.div`
position: relative;

display: flex;
align-items: center;
justify-content: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-image: linear-gradient(to bottom right , #eeeeee,  #222323);
 
  &:hover {
     top: 3px;
  }
`

export const LogoImg = styled.img`
width:60px;
height:60px;  
`

