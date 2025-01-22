// let p1 = new Promise((resolve , reject)=>{});
// console.log(p1);

// let p2 = new Promise((resolve , reject)=>{
//     resolve("success")
// });
// // console.log(p2);
// p2.then((response)=>{
//     console.log("success")
// });

// let p3= new Promise((resolve , reject)=>{
//     resolve("failure")
// });
// console.log(p3);
// p3.then((response)=>
// {
//     console.log(response);
// }
// ).catch((error)=>{
//     console.log(error);

// }).finally(()=>console.log("finally printing the both"))




//! API FETCH 
// function user (){
//     let res = fetch("https://Jsonplaceholder.typicode.com/users");
//     // console.log(res)
//     res
//     .then((response)=>{
//         return response.json().then(data=>{
//             console.log(data);
//         })
//     })
//     .catch(err=>console.log(err))


// }
// user();

function fetchUsers()
{
    let x = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(x);
    x
    .then((response)=>{
        //console.log(response)
        //console.log(response.json());
        return response.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            data.map((user)=>{
                store.innerHTML +=`
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                </tr>
                `
            })
        })
    })
    .catch(err=>console.log(err))

}
fetchUsers();