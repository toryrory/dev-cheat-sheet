import styled from "styled-components";
import { Link } from "react-router-dom";
import { baseTheme } from "../../../styles/theme";

export const Summary = styled.summary`
display: flex;
align-items: center;
  list-style-type: none;
  font-size: 16px;
`
export const Details = styled.details`
position: relative;
  padding: 10px 0;
  border-bottom: 1px solid ${baseTheme.color.borderSection};
`
export const SummaryText = styled.p`
font-weight: 700;
color: ${baseTheme.color.title};
`
export const NavigationBox = styled.div`
  position: absolute;
  top: 46px;

  width: 100%;
  height: 50vh;
  padding: clamp(15px, 0.67rem + 1.34vw, 30px);
  background-color: #ece7f1;
overflow: auto;

box-shadow: 0px 5px 12px -6px rgba(0,0,0,0.75);
  border-bottom: 1px solid ${baseTheme.color.borderSection};
`

export const NavItem = styled.li`
display: flex;
padding: 5px 0 5px 10px;
&:not(:last-child) {
  margin-bottom: 5px;
} 
`
export const NavLink = styled(Link)`
flex-grow: 1;
  font-size: 18px;
  color: ${baseTheme.color.text};
`