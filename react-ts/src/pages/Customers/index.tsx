/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Typography, Space, Table, Avatar, Select } from "antd";
import { getCustomers } from "../../API";

interface Customer {
  [x: string]: any;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  id: number;
  record: string;
  address: {
    address: string;
    city: string;
  };
}

const { Option } = Select;

function Customers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Customer[]>([]);
  const [genderFilter, setGenderFilter] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  const handleGenderFilter = (value: string) => {
    setGenderFilter(value);
  };

  const filteredDataSource = genderFilter
    ? dataSource.filter((customer) => customer.gender === genderFilter)
    : dataSource;

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
            title: "ID",
            dataIndex: "id",
            sorter: (record1, record2) => {
              return record1.id > record2.id ? 1 : -1;
            },
          },
          {
            title: "Gender",
            dataIndex: "gender",
            filterDropdown: () => (
              <div style={{ padding: 8 }}>
                <Select
                  style={{ width: 120 }}
                  onChange={handleGenderFilter}
                  value={genderFilter}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                </Select>
              </div>
            ),
            filterIcon: () => (
              <span role="img" aria-label="filter">
                🔍
              </span>
            ),
            onFilter: (value, record) => record.gender === value,
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
        dataSource={filteredDataSource}
        pagination={{
          pageSize: 5,
        }}
      />
    </Space>
  );
}

export default Customers;
