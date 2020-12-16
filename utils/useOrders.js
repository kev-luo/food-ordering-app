import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const useOrders = (user) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async() => {
      if(user) {
        try {
          setLoading(true);
          const token = Cookies.get("token");
          const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          setOrders(data);
        } catch(err) {
          setOrders([])
        }
        setLoading(false);
      }
    }

    fetchOrders();
  }, [user])

  return {orders, loading};
}