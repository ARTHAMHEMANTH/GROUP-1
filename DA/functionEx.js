//without parameters and arguements
// function demo(){//function declaration
//     console.log("i am a  function");
// }
// demo();
// demo();
// demo();//function calling

//with parameters and arguements
// function add(a,b){
//     // console.log(a);
//     // console.log(b);
//     console.log(a+b);
// }
// add(5,6);
// add(7,7);
// add(9,0);
// function addToCart(){
    
// }

// function isPalindrome(str)
// {
//     for(let i = str.length-1;i>=0;i++){
//         console.log(str[i]);
//     }

// }
// isPalindrome("sir")


// function isPalindrome(str)
// {
//     let revStr = "";
//     for(let i = str.length-1;i>=0;i--){
//         console.log(str[i]);
//         revStr += str[i];

//     }
//     if(str == revStr){
//         console.log("Palindrome");
//     }else{
//         console.log("Not a palindrome");
//     }
// }

// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("telugu");


// function onemoretime(){
//     console.log("not understood tell me one more time");
// }
// onemoretime();


//!anonymous functions
// function(){
//     console.log("Anonymous function");
// }

// let x = function(){
//     console.log("function expression");
// };
// x();
// x();//function can be resusable for many times

//!IIFE
// (
//     function(){
//         console.log("IIFE");

//     }
// )();

//!arrow function
// function demo(){
//     console.log("hello");
// }
// demo();

// concising in arrow function
// let x = ()=>console.log("hello");
// x();

// let x = a=>console.log(a);
// x(1);a+b);
// x(5,6);

//!return -implicit return,explicit return
// function add(a,b){
//     console.log("i am  printing before return keyword");
//     return a+b;//explicit return,return is an end of a statement
//     console.log("i am  printing after return keyword")
// }
// let x = add(4,5);
// console.log(x);

//!higher order function
// function hof(a){
//     return a;
// };
// let x = hof("instagram");
// console.log(x);
// let x = hof(function(){return "this is callback function"});
// console.log(x);

// function add(callback){
//     return callback(4,5);
// };
// let x = add(function(a,b){return a+b});
// console.log(x);

// let users = ["prashanth", "hemanth", "aravind", "surya"];
// // //console.log(users[0]);
// //console.log(users[1]);
// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

//  let x=users.map((user)=>{
//     // console.log(user);
//    return user;
// });
// console.log(x);
// let x = users.forEach((user)=>{
//     return(user);
// });
// console.log(x);
// var a = 10;
// let b = 30;
// function x(){
//     var user = "sharavan";
//     let company = "amazon";
//     console.log(user);
//     console.log(company);
//     console.log(a,b);
// }
// x();

// function x(){
//     var a = 10;
//     let b = 20;
//     console.log(a,b);
//     function y(){
//         let p = "ss";
//         let q = "ff"
//         console.log(p,q);
//     }
// }x();

function x(){
    let a=10;
    const b=20;
    console.log(a,b);
    function y(){
        let p="js";
        var q="react";
        console.log(p,q);
        function z(){
            const username="parish";
            console.log(username);
            console.log(a);
            console.log(q);
        }
        z();
    }
    y();
}
x();
