import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { HeaderNavContainer } from "./SharedLayout.styled";

export default function SharedLayout() {
  return (
    <div>
      <HeaderNavContainer>
          <Header />
        <SideBar />
      </HeaderNavContainer>
            <div>
                <Outlet />
          </div >
          <Footer/>
        </div>
    )
}


   

