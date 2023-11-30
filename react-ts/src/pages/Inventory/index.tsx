import React, { useEffect, useState } from "react";
import { Typography, Space, Table, Avatar, Rate } from "antd";
import { getInventory } from "../../API";

interface InventoryItem {
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

function Inventory() {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<InventoryItem[]>([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link: string) => <Avatar src={link} />,
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
            title: "Rating",
            dataIndex: "rating",
            render: (rating: number) => <Rate value={rating} allowHalf />,
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },
          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
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

export default Inventory;
