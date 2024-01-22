import {
  createBrowserRouter,
} from "react-router-dom";
import NavBar from './components/Navbar.jsx'
import  DashBoard  from "./views/DashBoard.jsx";
import Projects from "./views/Projects.jsx";
import Teams from "./views/Teams.jsx";
import Login from "./views/Login.jsx";
import EditUser from "./views/EditUser.jsx";
import ViewUsers from "./views/ViewUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children:[
      {
        path: '/users',
        element: <ViewUsers />,
      },
      {
        path: '/users/:id',
        element: <EditUser />,
      },
      {
        path: '/users/create',
        element: <EditUser />,
      },
      {
        path: '/dashboard',
        element: <DashBoard />,
      },
      {
        path: '/Teams',
        element: <Teams />,
      },

    ]
  },{
    path: "/login",
    element: <Login />,
  }
]);

export default router;