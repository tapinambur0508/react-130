enum Status {
  Pending = "Pending",
  Approved = "Confirmed",
  Rejected = "Rejected",
  Declined = "Declined",
}

const s1 = Status.Pending;
console.log(s1); // "Pending"

interface Order {
  id: number;
  title: string;
  price: number;
  status: Status;
}

function displayOrder(order: Order) {
  if (order.status === Status.Pending) {
    console.log(`Order ${order.id} is processing`);
  } else if (order.status === Status.Approved) {
    console.log(`Order ${order.id} is approved`);
  }
}

const order1: Order = {
  id: 1,
  title: "T-Shirt",
  price: 150,
  status: Status.Pending,
};

displayOrder(order1);
