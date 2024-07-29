import { Container } from "../../../styles/CommonStyles.styled";
import { SideBarBase, Summary } from "./SideBar.styled";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function SideBar() {
  return (
    <SideBarBase>
      <Container>
        <details>
          <Summary> <MdOutlineKeyboardArrowRight style={{ width: "25px", height: "25px" }} /><p>Navigation</p></Summary>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate at, modi illo magni consequatur minus, alias nulla porro fuga voluptates earum eaque ducimus officiis tempore error vero id vitae reiciendis.</p>
        </details>
      </Container>
    </SideBarBase>
  )
}
