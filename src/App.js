import * as React from 'react';
import * as  ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import Root from './components/Root';
import About from './components/About';
import ErrorComponent from './components/ErrorComponent';
import Home from './components/Home';
import  Contact  from './components/Contact';
import Login from './components/Login';
import ProtecteEmployee from './components/employee/employee';
import ProtecteAddEmployee from './components/employee/AddEmployee';
import ProtecteEditEmployee from './components/employee/EditEmployee';
import ProtectedRootEmployee from './components/employee/RootEmployee';
import Service from './components/Service';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorComponent/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "services",
        element: <Service/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: 'employee',
        element: <ProtectedRootEmployee/>,
        children: [
         {
          path: "",
          element: <ProtecteEmployee/>,
         },
          {
          path: "add",
          element:<ProtecteAddEmployee/>
        },
        {
          path: "edit/:id",
          element: <ProtecteEditEmployee />
        }

        ]
      }
    ],
    
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
