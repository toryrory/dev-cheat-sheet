import { Item, ItemLink, WebsiteImg, TitleContainer, TextContainer, ItemTitle, PublicationTime, ItemDesc } from "./WebsitesItem.styled"

export default function WebsitesItem({ time, title, description, img, url }) {

    return (
        <>
            <Item >
                <ItemLink href={url} target="_blank">
                    <WebsiteImg src={img} alt="website preview image" />
                    <TextContainer>
                        <TitleContainer>
                            <ItemTitle>{title}</ItemTitle>
                            <PublicationTime><time>{time}</time></PublicationTime>
                        </TitleContainer>
                        <ItemDesc>{description}</ItemDesc>
                    </TextContainer>
                </ItemLink>
            </Item>
        </>
    )
}
