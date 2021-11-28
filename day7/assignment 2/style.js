const person = {
    firstName : "sahana",
    lastName: "dimpy",
    height : 5,
    weight: 50,

};
let {height,weight,age=22}=person;
const{firstName:name}=person;
console.log(`${name} ${height} ${weight}  ${age}`);
