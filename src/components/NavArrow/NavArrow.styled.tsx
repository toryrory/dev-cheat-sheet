import styled from "styled-components";
import { IconContext } from "react-icons";
import { baseTheme, scaleDescArrow } from "../../styles/theme";


interface ProviderProps {
    className?: string,
    children: JSX.Element,
}

const Provider = ({ className, children }: ProviderProps) =>
    <IconContext.Provider value={{ className }} >{children}</IconContext.Provider>


export const StyledArrow = styled(Provider)`
    width: 25px;
    height: 25px;
    color: ${baseTheme.color.title};
`

export const OpenDescArrow = styled(Provider)`
cursor: pointer;
position: absolute;
z-index: 9;
bottom: 10px;
right: 0;

width: 30px;
height: 30px;
color: ${baseTheme.color.title};
transition: transform 500ms ease-out;

&:hover {
    animation: 1000ms ${scaleDescArrow} ease-out;
}
`