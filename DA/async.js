// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("success")
// });
// // console.log(p2);
// p2.then((response)=>{
//     console.log("success")
// });

let p3= new Promise((resolve , reject)=>{
    resolve("failure")
});
console.log(p3);
p3.then((response)=>
{
    console.log(response);
}
).catch((error)=>{
    console.log(error);

}).finally(()=>console.log("finally printing the both"))