import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";

export default function SharedLayout() {
  return (
        <>
          <Header />
          <SideBar/>
            <div>
                <Outlet />
          </div >
          <Footer/>
        </>
    )
}


   

