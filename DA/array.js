// const users = ["surya","aravind","hemanth","prashanth"];
// console.log(users);

// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

// users.map((user)=>{
//     return user;
// });
// console.log(users);


// let x=users.map((user)=>{
//     return user;
// });
// console.log(x);

// users.push("siddu")
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift("rohan")
// console.log(users);

// users.shift();
// console.log(users);

// console.log(users.reverse());

// console.log(users.join(" "));

// let x=users.join(" ");
// console.log(x, typeof(x));

// let frontend=["HTML","CSS","JS","REACTJS","ANGULAR"];
// let backend=["nodeJS","ExpressJS","java","Goplang"];
// let db=["MongoDB","Mysql","mariadb"]
// // console.log(frontend);
// // console.log(backend);
// let fullstack = frontend.concat(backend);
// console.log(fullstack);

//!objects
// let userDetails = {
//     name:"surya",
//     age:21,
//     address:{
//         area:"alwal",
//         streetno:"3"
//     }
// };
// console.log(userDetails.address.area);

// let userDetails = {
//     name:"surya",
//     age:21,
//     address:{
//         area:"alwal",
//         street:{
//             streetNo:1,
//             pinCode:435435
//         }
//     }
// };
// console.log(userDetails.address.street.pinCode);

//!create a array of objects
// let user1={
//     name:"surya",
//     city:"hyd"
// }
// let user2={
//     name:"hemanth",
//     city:"kompally"
// }
// let user3={
//     name:"aravind",
//     city:"alwal"
// }
// console.log(user1.name);

// let user={
//     {
//     name:"surya",
//     city:"hyd"
//     },
//     {
//     name:"hemanth",
//     city:"kompally"
//     },
//     {
//     name:"aravind",
//     city:"alwal"
//     }

// };
// users.map((user)=>{
//     console.log(user.name);

// })
let userDetails = {
    name:"hemanth",
    age:22,
    city:"siricilla"
}
console.log(userDetails);
console.log(typeof(userDetails));
console.log(userDetails.name);

let x = JSON.stringify(userDetails);
console.log(x);
console.log(x.name);
console.log(typeof(x));

let y = JSON.parse(x);
console.log(y);




