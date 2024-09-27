import { HiOutlineExternalLink } from "react-icons/hi";
import { Item, ItemContainer, Title, Category } from "./SearchResultsItem.styled";

export default function SearchResultsItem({id, title, category, url}) {
  return (
    // выделять первый результат поиска
    <Item id={id}>
      <a href={url} target="_blank">
        <ItemContainer>
        <div>
            <Title>{title}</Title>
            <Category>{category}</Category>
          </div>
          <HiOutlineExternalLink/>
        </ItemContainer>
      </a>
    </Item>
      /* в результате поиска писать обьязательно категорию айтема, сверху справа? */
  )
}
