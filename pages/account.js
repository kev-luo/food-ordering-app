import React from "react";

import { useAuthContext } from "../context/AuthContext";
import { useOrders } from "../utils/useOrders";
import { Container } from "../styles/Global";
import { Table } from "../styles/Account";
import OrderDetails from "../components/account/orderDetails";

export default function Account() {
  const { user } = useAuthContext();
  const { orders, loading } = useOrders(user);
  return (
    <Container>
      <h2>Order History</h2>
      <Table>
        <tr>
          <th style={{width: "25%"}}>Order Date</th>
          <th style={{width: "25%"}}>Amount Paid</th>
          <th style={{width: "20%"}}>Delivery Address</th>
          <th style={{width: "30%"}}>Details</th>
        </tr>

        {loading && (
          <tr>
            <td>Loading orders...</td>
          </tr>
        )}
        {orders.map((order) => {
          return (
            <tr key={order._id}>
              <td>{new Date(order.createdAt).toLocaleDateString("en-EN")}</td>
              <td>${(Number(order.amount) / 100).toFixed(2)}</td>
              <td>{order.address}</td>
              <td><OrderDetails order={order}/></td>
            </tr>
          );
        })}
      </Table>
    </Container>
  );
}
