import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../frontend/src/components/Layout/Layout";
import EmployeeList from "../frontend/src/components/Pages/employeelist/EmployeeList";
import OrganizationList from "./src/components/Pages/organization/organizationList";
import Header from "./src/components/header/Header";
import { NotFound } from "./src/components/Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path ="/" element= {<Header />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="organization" element={<OrganizationList />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
