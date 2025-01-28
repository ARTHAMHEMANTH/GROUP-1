// document.getElementID():

// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

// let div = document.getElementById("text");
// // div.innerHTML = "<h1>Header</h1>"
// div.innerHTML = "<h1>Header</h1>"
// console.log(div);

//!
// let ele =  document.getElementsByClassName("test");
// console.log(ele);
// console.log(Array.isArray(ele));
// // ele[0].style.backgroundColor="yellow"
// // syntax : [...variable]

// let x = [...ele];
// console.log(x , Array.isArray(x));
// x.map((element)=>{
//     // console.log(elemant);
//     element.style.backgroundColor='teal';
// })

//query selector
// let ele = document.querySelector(".test");
// console.log(ele);

// let ele = document.querySelectorAll(".test");
// [...ele].map(element=>{
//     console.log(element.innerText);
// })

// ! events

// let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     console.log("button clicked");
// })

//!
let bgColor = document.querySelectorAll(".bgColor");
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor=element.innerText;
    });
        element.addEventListener("mouseleave",()=>{
            element.style.backgroundColor="transparent";
        
    })
})



