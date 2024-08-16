import styled from "styled-components";
import { IconContext } from "react-icons";
import { baseTheme } from "../../styles/theme";

interface ProviderProps {
    className?: string,
    children: JSX.Element,
}

const Provider = ({ className, children }: ProviderProps) => 
    <IconContext.Provider value={{ className}} >{children}</IconContext.Provider>


export const StyledArrow = styled(Provider)`
    width: 25px;
    height: 25px;
    color: ${baseTheme.color.title};
   
`