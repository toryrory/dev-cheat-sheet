import { Link } from "react-router-dom";
import { Container } from "../../../styles/CommonStyles.styled";
import { HeaderBase, HeaderFlexBox, LogoImg, HeaderBtnsBox, HeaderBtn } from "./Header.styled";
import { MdOutlineLightMode } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {

    return (
        <HeaderBase >
            <Container>
                <HeaderFlexBox className="HeaderNav">
                    <div className="NavLogo">
                        <Link to="/">
                            <LogoImg src="./../../../../public/logo4.png" alt="logo"/>
                        </Link>
                    </div>
                    <HeaderBtnsBox>
                        <HeaderBtn type="button" ><MdOutlineLightMode style={{width:" 30px", height: "30px"}}/></HeaderBtn>
                        <HeaderBtn type="button" ><IoSearchOutline style={{ width: " 30px", height: "30px" }} /></HeaderBtn>
                    </HeaderBtnsBox>



                </HeaderFlexBox>
            </Container>
        </HeaderBase>
    )
}
