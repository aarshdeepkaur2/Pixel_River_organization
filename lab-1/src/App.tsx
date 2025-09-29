import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import EmployeeList from "./components/employeelist/EmployeeList";
import OrganizationList from "./components/organization/organizationList";
import Header from "./components/header/Header";
import { NotFound } from "./components/Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "employees",
        element: <EmployeeList />,
      },
      {
        path: "organization",
        element: <OrganizationList />,
      },
     
    ],
  },
     {
        path: "*", 
        element: < NotFound />,
     }
    ]);
 

function App() {
  return <RouterProvider router={router} />;
}

export default App;
