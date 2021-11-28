interface first {
  name: string;
  age: number;
}

interface second {
  id: number;
  problem: string;
  department: string;
}
interface third extends first, second {}

let person: third = {
  name: "sahana",
  age: 22,
  id: 5733,
  problem: "not raising ticket",
  department: "saftey"
};

console.log(person.name);
console.log(person.age);
console.log(person.id);
console.log(person.problem);
console.log(person.department);
