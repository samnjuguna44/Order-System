/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Descriptions, Avatar, Spin } from "antd";
import { getCustomers } from "../../API";
import UserMap from "../UserMap";

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

const UserDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<Customer | null>(null);

  useEffect(() => {
    setLoading(true);
    getCustomers().then((res) => {
      const foundUser = res.users.find(
        (customer) => customer.id === parseInt(userId, 10)
      );
      setUser(foundUser);
      setLoading(false);
    });
  }, [userId]);

  if (loading) {
    return <Spin />;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <Descriptions title="User Details" bordered>
        <Descriptions.Item label="ID">{user.id}</Descriptions.Item>
        <Descriptions.Item label="Photo">
          <Avatar src={user.image} />
        </Descriptions.Item>
        <Descriptions.Item label="Gender">{user.gender}</Descriptions.Item>
        <Descriptions.Item label="First Name">
          {user.firstName}
        </Descriptions.Item>
        <Descriptions.Item label="Last Name">{user.lastName}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
        <Descriptions.Item label="Address">
          {user.address.address}, {user.address.city}
        </Descriptions.Item>
      </Descriptions>
      {/* UserMap component with the user's address */}
      <UserMap address={user.address} />
    </div>
  );
};

export default UserDetails;
