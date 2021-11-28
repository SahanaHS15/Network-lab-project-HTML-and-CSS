const one={
    name:"sahana",
    age:24
};
const two={
    number:109,
    ...one
};
let nan=[1,2,3];
let ter=[4,5,...console.nan,6];
console.log(ter);
console.log(two);
const{name,...rest} = one;
console.log(rest.age);