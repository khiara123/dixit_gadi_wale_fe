import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Root() {
  return (
   <>
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer> 
   </>
  )
}

export default Root