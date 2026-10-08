interface Order {
  id: string;
  price: number;
  status: string;
}

function getOrders(): Promise<Order[]> {
  return new Promise((resolve) => {
    resolve([
      {
        id: "3710b07c-db4c-4355-a768-16b57ba29581",
        price: 100,
        status: "Active",
      },
      {
        id: "1ca4da90-1c4f-4988-886f-e2be00c643d8",
        price: 200,
        status: "Declined",
      },
    ]);
  });
}

getOrders().then((orders) =>
  console.log(orders.filter((order) => order.status === "Active")),
);
