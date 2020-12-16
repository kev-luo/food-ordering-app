import React from "react";

import { useAuthContext } from "../context/AuthContext";
import { useOrders } from "../utils/useOrders";
import { Container } from "../styles/Global";
import { Table } from "../styles/Account";

export default function Account() {
  const { user } = useAuthContext();
  const { orders, loading } = useOrders(user);
  return (
    <Container>
      <h2>Order History</h2>
      <Table>
        <tr>
          <th>Order Date</th>
          <th>Amount Paid</th>
          <th>Delivery Address</th>
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
            </tr>
          );
        })}
      </Table>
    </Container>
  );
}
