import { Summary, Details, SummaryText, NavigationBox, NavItem, NavLink } from "./NavBar.styled";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { categoryNames } from "../../../data/categories";

export default function SideBar() {
  return (
        <Details>
          <Summary>
            <MdOutlineKeyboardArrowRight style={{ width: "25px", height: "25px" }} />
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