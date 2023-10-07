import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import React from 'react'
import Footer from "../Footer/Footer";
export default function Layout() {
  return (
    <>
      <Nav/>
      <Outlet>



      </Outlet>
      <Footer/>
    </>
  )
}
