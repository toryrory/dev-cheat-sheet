import { Title } from "./MainTitle.styled";

export default function MainTitle({ text, page }) {

  return (
  <>
      {page === "category" && <Title>{text}</Title>}
      {page === "home" && <Title>{text}</Title>}
    </>
  )
}
