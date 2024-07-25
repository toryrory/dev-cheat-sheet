import { Link } from "react-router-dom";
import { Container } from "../../../styles/CommonStyles.styled";

export default function Header() {

  return (
      <div className="Header">
          <Container>
              <nav className="HeaderNav">
                  <div className="NavLogo"><Link to="/"><img src="./../../../../public/icons/SVG/archive1.svg" alt="logo" /></Link></div>
                  <ul className="NavList">
                      <li className="NavItem"><Link to="/about">About</Link></li>
                    <li className="NavItem"><Link to="/contacts"> Contacts</Link></li>
                  </ul>
              </nav>  
          </Container>
    </div>
  )
}
