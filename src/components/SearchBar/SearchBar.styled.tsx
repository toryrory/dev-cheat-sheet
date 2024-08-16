import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

interface Props {
   open: boolean,
}

export const SearchModal = styled.div <Props>`
position: fixed;
  width: 100%;
  height: 100%;
  right: ${props => props.open ? "0" : "-100%"};
  top: 0;
  z-index: 1;
  padding: 20px 0;
  /* background: ${baseTheme.color.body}; */
  background: linear-gradient(135deg, #E9E1FF, #CDB6FF, #B59EFF);
  transition: right 700ms 300ms;
`
export const FormBox = styled.div`
display: flex;
justify-content: center;
align-items: center; 
`
export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
 width: 90%;
   padding: 8px 10px;
   border-radius: 15px;
   background-color: ${baseTheme.color.searchBg};
   border: 2px solid ${baseTheme.color.borderBtn};
`
export const SearchInput = styled.input`
flex-grow: 1;
height: 30px;
color: ${baseTheme.color.text};

`
export const BtnSearch = styled.button`
  
`
export const BtnClose = styled.button`
   margin-left: 5px;
`
export const SearchContainer = styled.div`
   width: 100%;
    padding: 0 clamp(10px, 0.268rem + 1.79vw, 30px);
    margin: 0 auto;
`