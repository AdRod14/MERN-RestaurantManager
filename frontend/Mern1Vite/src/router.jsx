import {
  createBrowserRouter,
} from "react-router-dom";
import NavBar from './components/navbar.jsx'
import  DashBoard  from "./views/DashBoard.jsx";
import Projects from "./views/Projects.jsx";
import Teams from "./views/Teams.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children:[
      {
        path: '/',
        element: <DashBoard />,
      },
      {
        path: '/projects',
        element: <Signup />,
      },
      {
        path: '/Teams',
        element: <Teams />,
      },

    ]
  },
]);

export default router;