import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Inventory from "../../pages/Inventory";
import Orders from "../../pages/Orders";
import Customers from "../../pages/Customers";
import UserDetails from "../UserDetails";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/user/:userId" element={<UserDetails />} />
    </Routes>
  );
}

export default AppRoutes;
