import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { StyledArrow } from "./NavArrow.styled";

export default function NavArrow({navOpen}: {navOpen:boolean}) {
  return (
      <StyledArrow>
          {navOpen ? < MdOutlineKeyboardArrowDown/> : < MdOutlineKeyboardArrowRight />}
      </StyledArrow>
  )
}
