import { Summary, Details, SummaryText, NavigationBox, NavItem, NavLink } from "./NavBar.styled";
import { categoryNames } from "../../../data/categories";
import NavArrow from "../../NavArrow/NavArrow";
import { useEffect, useState } from "react";
import { SyntheticEvent } from "react";
import { useParams } from "react-router-dom";

export default function SideBar() {
  const {categoryId} = useParams();
  
  const [navOpen, setNavOpen] = useState(false);

  const openNav = (e: SyntheticEvent) => {
    e.preventDefault();
    setNavOpen(prevState => !prevState)
  }

  useEffect(() => {
    if (navOpen) {
    setNavOpen(false);
  }
  
}, [categoryId])


  return (
    <Details open={navOpen} >
      <Summary onClick={openNav}>
        <NavArrow navOpen={navOpen} />
        <SummaryText>Navigation</SummaryText>
      </Summary>
      <NavigationBox>
        <nav>
          <ul>
            {categoryNames.map((category: string, index: number) =>
              <NavItem key={index}>
                <NavLink to={`/category/${category.toLowerCase()}`}>{category}</NavLink>
              </NavItem>)}
          </ul>
        </nav>
      </NavigationBox>
    </Details>
  )
}