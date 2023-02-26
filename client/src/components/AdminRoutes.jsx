import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./adminDashbord/Users";
import Sidebar1 from "./adminDashbord/Sidebar1";
import AddnewUser from "./adminDashbord/AddnewUser";
import Product from "./adminDashbord/Products";
import AddnewProduct from "./adminDashbord/AddnewProducts";
import Dashboard from "./adminDashbord/Dashboard";
import UserEdit from "./adminDashbord/UserEdit";
import Admin from "./adminDashbord/Admin";
import CreateAdminprofile from "../components/adminDashbord/AdminProfile";

const AdminRoutes = () => {
  return (
    <div>
      <Sidebar1>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          {/* user Routes */}
          <Route path="/user" element={<Users />} />
          <Route path="/user/edit/:id" element={<UserEdit />} />
          <Route path="/user/addnew" element={<AddnewUser />} />

          {/* admin routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/edit/:id" element={<UserEdit />} />
          <Route path="/admin/addnew" element={<AddnewUser />} />

          {/* Products Routes */}
          <Route path="/products" element={<Product />} />
          <Route path="/products/addnew" element={<AddnewProduct />} />
          <Route path= "/adminprofile/:id" element={<CreateAdminprofile />} />
        </Routes>
      </Sidebar1>
    </div>
  );
};

export default AdminRoutes;
