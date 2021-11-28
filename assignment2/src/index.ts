let sum = (a: string, b: string, c?: string) => {
  return `${a} ${b} ${c}`;
};

console.log(sum("hello", "hi"));

interface Iperson {
  firstName: string;
  lastName: string;
  greet: () => string;
}
var customer: IPerson = {
  firstName: "Jerry",
  lastName: "Bholu",
  greet: function () {
    return "Hi there";
  }
};

console.log(customer.firstName);
console.log(customer.lastname);
