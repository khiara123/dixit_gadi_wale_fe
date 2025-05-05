import React, {useEffect, useState} from 'react'
import { Outlet, Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import util from '../../util/utils';
import Seo from '../../shared/Seo';
const RootBlog = () => {
    const { pathname } = useLocation();
    const [path, setPath] = useState("");

    useEffect (() => {
    const lastSegment = pathname.split("/").pop();
     setPath(util.capitalize(lastSegment))
    }, [pathname]) 
  return (
  <>
       <Seo
        title="About Dixit Gadiwale - Trusted Vehicle Rental Service in Mathura and Virndavan"
        description="Dixit Gadiwale has been providing vehicle rentals in Mathura for 5+ years. Learn more about our story and team."
        url="https://www.dixitgadiwale.com/blog"
        image="https://dixitgadiwale.com/img//img/bike_rent_mathura.webp"
      />
       <div className="container-fluid bg-breadcrumb">
          <div
            className="container text-center py-5"
            style={{ maxWidth: "900px" }}
          >
            <h4
              className="text-white display-4 mb-4 wow fadeInDown"
              data-wow-delay="0.1s"
            >
              Our Blog & News
            </h4>
            <ol
              className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link>Pages</Link>
              </li>
              <li className="breadcrumb-item active text-primary">{path}</li>
            </ol>
          </div>
        </div>
   <Outlet>
   </Outlet>
   
  
  </>
  )
}

export default RootBlog