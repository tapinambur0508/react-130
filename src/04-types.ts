/**
 * - Union
 * - Літеральні типи ("small", "medium", "large", "extralarge")
 */

{
  let var1: number | string | boolean = 10;
  var1 = "Hello";
  var1 = false;

  var1 = undefined;
  var1 = null;
  var1 = {
    name: "Dave",
  };

  if (typeof var1 === "string") {
    var1.toUpperCase();
  }

  let arr1: (string | number)[] = [0, "a", "b", 10, 8, "c", "d"];
  // let arr1: Array<string | number> = [0, "a", "b", 10, 8, "c", "d"];
}

{
  let var1: "success" = "success";
  var1 = "failed";

  let var2: 10 = 10;
  var2 = 15;

  let var3: false = false;

  type Size = "extra_small" | "small" | "medium" | "large" | "extra_large";

  type Product = {
    title: string;
    price: number;
    size: Size;
  };

  let product1: Product = {
    title: "Jeans",
    price: 100,
    size: "large",
  };

  product1.size = "medium";

  interface ExtendedProduct extends Product {
    quantity: number;
  }

  const extendedProduct1: ExtendedProduct = {
    title: "Jeans",
    price: 100,
    size: "large",
    quantity: 1,
  };
}
