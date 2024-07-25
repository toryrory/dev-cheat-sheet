import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Category from "./pages/Category/Category";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/about" element={<About/>} />
         <Route path="/category" element={<Category/>} />{/* category id need to show on click */}
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}



export default App
