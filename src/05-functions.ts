/**
 * - Типізація функцій
 * - Типізація аргументів
 * - Тип значення, яке повертає функція
 * - Опціональні параметри
 */

function sum(a: number, b: number): number {
  return a + b;
}

sum(10, 5);
// sum("a", "b");
// sum(false, undefined);

function greeting(name?: string): string {
  if (name === undefined) {
    return "Hello, stranger";
  }

  return `Hello, ${name}`;
}

greeting();
greeting("Dave");
greeting(10);
greeting(undefined);

function calculateTotalPrice(price: number, tax: number = 0.2) {
  return price + price * tax;
}

calculateTotalPrice(100);
calculateTotalPrice(100, 0.3);

interface Cat {
  name: string;
  age: number;
  // meow(): void;
  // eat(food: string): string;
  meow: () => void;
  eat: (food: string) => void;
}

const cat1: Cat = {
  name: "Whiskers",
  age: 5,
  meow() {
    console.log("Meow");
  },
  eat: (food) => {
    return `Nyam, Nyam, ${food}`;
  },
};

const result = cat1.eat("apple");
