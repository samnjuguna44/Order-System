import { useEffect, useState } from "react";
import { Typography, Space, Table, Avatar } from "antd";
import { getCustomers } from "../../API";

interface Customer {
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    address: string;
    city: string;
  };
}

function Customers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Customer[]>([]);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link: string) => <Avatar src={link} />,
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "Address",
            dataIndex: "address",
            render: (address: { address: string; city: string }) => (
              <span>
                {address.address}, {address.city}
              </span>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}

export default Customers;
