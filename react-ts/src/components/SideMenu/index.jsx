import { Menu } from "antd";
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"

function SideMenu() {
  return (
    <div className="SideMenu">
      <Menu
        onClick={(item) => {
          //item.key
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            key: "/inventory",
            icon: <ShopOutlined />
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
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
