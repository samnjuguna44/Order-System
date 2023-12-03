/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Typography, Space, Table, InputNumber } from "antd";
import { getOrders } from "../../API";


interface Order {
  [x: string]: any;
  id: number;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  total: number;
  deliveryLocation: string;
  name: string;
}

function Orders() {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Order[]>([]);
  const [totalFilter, setTotalFilter] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      const updatedDataSource = res.products.map((order) => ({
        ...order,
        deliveryLocation: getDeliveryLocation(order.id),
        name: getProductName(order.id),
      }));
      setDataSource(updatedDataSource);
      setLoading(false);
    });
  }, []);

  const handleTotalFilter = (value: number) => {
    setTotalFilter(value);
  };

  const filteredDataSource = totalFilter
    ? dataSource.filter((order) => order.total === totalFilter)
    : dataSource;

  const getDeliveryLocation = (productId: number): string => {
    const addresses = [
      "150 Carter Street, Manchester",
      "150 Carter Street, Manchester",
      "150 Carter Street, Manchester",
      "150 Carter Street, Manchester",
      "150 Carter Street, Manchester",
    ];
    const index = (productId - 1) % addresses.length;
    return addresses[index];
  };

  const getProductName = (productId: number): string => {
    const names = [
      "Marcus Big",
      "Dwight Wade",
      "Marion Helsing",
      "Lionel Goat",
      "Samantha Young",
    ];
    const index = (productId - 1) % names.length;
    return names[index];
  };

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Product Id",
            dataIndex: "id",
            sorter: (record1, record2) => record1.id - record2.id,
          },
          {
            title: "Name",
            dataIndex: "name",
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
            filterDropdown: () => (
              <div style={{ padding: 8 }}>
                <InputNumber
                  placeholder="Enter total"
                  style={{ width: 120 }}
                  onChange={handleTotalFilter}
                  value={totalFilter}
                />
              </div>
            ),
            filterIcon: () => (
              <span role="img" aria-label="filter">
                🔍
              </span>
            ),
            onFilter: (value, record) => record.total === value,
          },
          {
            title: "Delivery Location",
            dataIndex: "deliveryLocation",
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

export default Orders;
