/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

interface Student {
  name: string;
  readonly age: number;
  readonly mark: number;
  group: string;
  university: string;
  isOnline: boolean;
  readonly promocode?: string;
}

const student1: Student = {
  name: "Dave",
  age: 20,
  mark: 98,
  group: "6B",
  university: "Neoversity",
  isOnline: false,
  promocode: "PROMO10",
};

const student2: Student = {
  name: "Mary",
  age: 19,
  mark: 100,
  group: "7B",
  university: "Neoversity",
  isOnline: true,
};

student2.mark = 10;
console.log(student2.mark);

student2.promocode?.toUpperCase();
student2.promocode = undefined;
student2.promocode = null;
