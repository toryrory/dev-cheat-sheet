import styled from "styled-components";
import { baseTheme } from "../../styles/theme";

export const Item = styled.li`
margin-bottom: 10px; 
padding: 10px;

border-radius: 5px;
background-color: ${baseTheme.color.cardBg};

:last-child {
   margin-bottom: 0; 
}
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const Title = styled.p`
    
`;

export const Category = styled.p`
    
`;
