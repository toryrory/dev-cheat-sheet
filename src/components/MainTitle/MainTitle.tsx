import { Title } from "./MainTitle.styled";

export default function MainTitle({category}) {

  return (
      <Title>Websites related to {category.toUpperCase()} category</Title>
  )
}
