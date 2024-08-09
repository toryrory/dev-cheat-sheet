import { Container } from "../../styles/global";
import { SearchModal } from "./SearchBar.styled";
import { useEffect } from "react";

export default function SearchBar() {

    /* Hide/show body scroll on modal open/close  */
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "unset";
        }
    }, [])

    return (
        <SearchModal>
            <form action="">
                <input type="text" />
            </form>
            <button type="button">cancel</button>
            <div>search results</div>
        </SearchModal>

    )
}

