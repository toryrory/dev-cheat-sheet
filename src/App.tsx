import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Category from "./pages/Category/Category";
import React from 'react';
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/category/:categoryId" element={<Category />} />{/* category id need to show on click */}
      </Route>
    )
  )

  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  )
}



export default App
