import { Link } from "react-router-dom";
import { Container } from "../../../styles/global";
import { HeaderBase, HeaderFlexBox, LogoImg, HeaderBtnsBox, HeaderBtn, BtnBorder } from "./Header.styled";
import { MdOutlineLightMode } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import SearchBar from "../../SearchBar/SearchBar";
import { useEffect, useState } from "react";

export default function Header() {
    const [openSearch, setOpenSearch] = useState(false);

    const onClickSearch = () => {
        setOpenSearch(prevState => !prevState)
    }

    return (
        <HeaderBase >
            <Container>
                <HeaderFlexBox className="HeaderNav">
                    <div className="NavLogo">
                        <Link to="/">
                            <LogoImg src="./../../../../public/logo4.png" alt="logo" />
                        </Link>
                    </div>
                    <HeaderBtnsBox>
                        <BtnBorder>
                        <HeaderBtn type="button" name="theme"><MdOutlineLightMode style={{ width: " 30px", height: "30px", verticalAlign: "middle" }} /></HeaderBtn></BtnBorder>
                        <BtnBorder><HeaderBtn type="button" name="search" onClick={onClickSearch}><IoSearchOutline style={{ width: " 30px", height: "30px", verticalAlign: "middle" }} /></HeaderBtn></BtnBorder>
                    </HeaderBtnsBox>
                </HeaderFlexBox>
            </Container>
            <SearchBar open={openSearch} closeSearch={onClickSearch} />
        </HeaderBase>
    )
}
