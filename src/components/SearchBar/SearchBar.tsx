import { SearchModal, SearchContainer, SearchInput, BtnClose, BtnSearch, FormBox, Form } from "./SearchBar.styled";
import { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import SearchResultsList from "../SearchResultsList/SearchResultsList";

interface BtnProps {
    closeSearch: (event: React.MouseEvent<HTMLButtonElement>) => void,
    open: boolean,
}

export default function SearchBar({ open, closeSearch }: BtnProps) {
    const [searchData, setSearchData] = useState("");

    /* Hide/show body scroll on modal open/close  */
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [open])

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchData(value);
    }

    // React.MouseEvent<HTMLButtonElement, MouseEvent>
    return (
        <SearchModal open={open}>
            <SearchContainer>
                <FormBox>
                    <Form >
                        <SearchInput type="text" placeholder="Search results..." name="globalSearch" onChange={handleInputChange} value={searchData} />
                        <BtnSearch><IoSearchOutline style={{ width: " 30px", height: "30px", color: "#7A59A1" }} /></BtnSearch>
                    </Form>
                    <BtnClose type="button" onClick={closeSearch}><RxCross1 style={{ width: " 40px", height: "40px", color: "#7A59A1" }} /></BtnClose>
                </FormBox>
                <SearchResultsList searchData={searchData} />
            </SearchContainer>
        </SearchModal>

    )
}

