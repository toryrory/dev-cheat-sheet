import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const Item = styled.li`
list-style: none;
background-color: ${baseTheme.color.cardBg};

border-radius: 5%;
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);

@media (min-width: 768px) {
    width: 350px;
}
@media (min-width: 1024px) {
    width: 290px;
}

transition: all 200ms linear; 

&:hover {
   
    @media (min-width: 1024px) {
       transform: scale(1.1); 
       box-shadow: 0px 1px 19px 10px rgba(48,24,86,0.75);
    }
}
`
export const ItemLink = styled.a`

`
export const WebsiteImg = styled.img`
max-width: 100%;
border-top-left-radius: 5%;
border-top-right-radius: 5%;

`
export const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
`
export const TextContainer = styled.div`
padding: 15px;
border-radius:0 0 10%;
`
export const ItemTitle = styled.h2`
font-size: 16px;

`
export const PublicationTime = styled.p`
font-size: 12px;
color: ${baseTheme.color.textTime};

`
export const ItemDesc = styled.p`
font-size: 14px;
color: ${baseTheme.color.text}
`