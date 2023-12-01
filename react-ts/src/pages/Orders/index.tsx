/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Typography, Space, Table } from "antd";
import { getOrders } from "../../API";

interface Order {
  [x: string]: any;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  total: number;
}

function Orders() {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Order[]>([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Product Id",
            dataIndex: "id",
            sorter:(record1, record2) => {
              return record1.id > record2.id
            }
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value: number) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value: number) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
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

export default Orders;
