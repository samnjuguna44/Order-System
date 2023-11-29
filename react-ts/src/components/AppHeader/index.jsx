import { Image, Typography, Space, Badge } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import Logo from "../../assets/logo.png";

function AppHeader() {
  return (
    <div className="AppHeader">
      <Image width={80} src={Logo}></Image>
      <Typography.Title>Order Management System</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}

export default AppHeader;
