import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  label: string;
  key: string;
  icon: React.ReactNode;
}

function SideMenu() {
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      icon: <AppstoreOutlined />,
      key: "/",
    },
    {
      label: "Inventory",
      key: "/inventory",
      icon: <ShopOutlined />,
    },
    {
      label: "Orders",
      key: "/orders",
      icon: <ShoppingCartOutlined />,
    },
    {
      label: "Customers",
      key: "/customers",
      icon: <UserOutlined />,
    },
  ];

  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          // item.key
          navigate(item.key);
        }}
        items={menuItems.map((item) => ({
          label: item.label,
          icon: item.icon,
          key: item.key,
        }))}
      ></Menu>
    </div>
  );
}

export default SideMenu;
