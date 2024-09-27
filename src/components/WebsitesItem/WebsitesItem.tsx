import { Item, ItemLink, WebsiteImg, TitleContainer, TextContainer, ItemTitle, PublicationTime, ItemDesc, DescBox } from "./WebsitesItem.styled";
import { OpenDescArrow } from "../NavArrow/NavArrow.styled";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { useState } from "react";

export default function WebsitesItem({ time, title, description, img, url }) {
    const [openDesc, setOpenDesc] = useState(false);
    // узнать кол-во строк или символов в дескрипшене, если больше какого то числа то делать кнопку раскрытия описания
    //  Для того чтобы проверить умещается ли контекст в своем контейнере, можно использовать очень простую функцию overflow , которая вернет false ,

    const handleOpenDesc = (e) => {
        e.stopPropagation();
        setOpenDesc(prevState => !prevState)
        
    }
    console.log(title + description.length);
    

    return (
        <>
            <Item >
                <ItemLink href={url} target="_blank">
                    <WebsiteImg src={img} alt="website preview image" />
                    <TextContainer>
                        <TitleContainer >
                            <ItemTitle>{title}</ItemTitle>
                            <PublicationTime><time>{time}</time></PublicationTime>
                        </TitleContainer>
                        <DescBox $openDesc={openDesc}>
                            <ItemDesc $openDesc={openDesc}>{description}</ItemDesc>
                        </DescBox>
                      
                    </TextContainer>
                </ItemLink>
                {description.length > 150 && <OpenDescArrow  >
                    <MdOutlineUnfoldMore onClick={handleOpenDesc} />
                </OpenDescArrow>}
            </Item>
        </>
    )
}
