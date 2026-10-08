interface Order {
  id: string;
  price: number;
  status: string;
}

interface User {
  id: number;
  name: string;
  age: number;
}

interface OrderResponse {
  items: Order[];
  meta: {
    page: number;
    perPage: number;
    totalItems: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

interface UserResponse {
  items: User[];
  meta: {
    page: number;
    perPage: number;
    totalItems: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

interface APIResponse<T> {
  items: T[];
  meta: {
    page: number;
    perPage: number;
    totalItems: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

const { items }: APIResponse<Order> = {
  items: [
    {
      id: "3710b07c-db4c-4355-a768-16b57ba29581",
      price: 100,
      status: "Active",
    },
  ],
  meta: {
    page: 1,
    perPage: 20,
    totalItems: 1,
    hasNext: false,
    hasPrevious: false,
  },
};

items.map((order) => order.price);

const userResponse: APIResponse<User> = {
  items: [
    {
      id: 1,
      name: "Dave",
      age: 20,
    },
  ],
  meta: {
    page: 1,
    perPage: 20,
    totalItems: 1,
    hasNext: false,
    hasPrevious: false,
  },
};

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const res1 = getFirstElement<number>([1, 2, 3, 4, 5]);
const res2 = getFirstElement<string>(["a", "b", "c", "d"]);
const res3 = getFirstElement<{ name: string }>([
  { name: "Dave" },
  { name: "Mary" },
]);
