/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

let arr1 = [1, 2, 3, 4, 5];
arr1 = 10;
arr1.push("Hello");

let arr2: string[] = ["a", "b", "c", "d", "e"];
let arr3: Array<string> = ["a", "b", "c", "d", "e"];

const result1 = arr2.map((element) => element.length);

interface Student {
  name: string;
  readonly age: number;
  readonly mark: number;
  group: string;
  university: string;
  isOnline: boolean;
  readonly promocode?: string;
}

const students: Student[] = [
  {
    name: "Dave",
    age: 20,
    mark: 98,
    group: "6B",
    university: "Neoversity",
    isOnline: false,
    promocode: "PROMO10",
  },
  {
    name: "Mary",
    age: 19,
    mark: 100,
    group: "7B",
    university: "Neoversity",
    isOnline: true,
  },
];

const arr4: Array<{
  name: string;
  age: number;
}> = [
  {
    name: "Dave",
    age: 10,
  },
  {
    name: "Mary",
    age: 12,
  },
];
