import axios from "axios";

interface User {
  id: number;
  name: string;
  age: number;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("http://localhost:8080/api/users");
  const data = (await response.json()) as User[];

  return data;
}

interface Order {
  id: string;
  price: number;
  status: string;
}

async function fetchOrders(): Promise<Order[]> {
  const { data } = await axios.get<Order[]>("http://localhost:8080/api/orders");

  return data;
}
