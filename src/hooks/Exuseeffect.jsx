import React , {useEffect, useState} from 'react'


const Exuseeffect = () => {
    const[users, setUsers] = useState([]);
    console.log(users);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json().then(data=>{
        setUsers(data);
    }))
    .catch(err=>console.log(err))
   },[])
    // useEffect(()=>{
    //     document.title = "MRU"
    //     setTimeout(()=>{
    //         setCount(1000);
    //     },4000)
    // })
  return (
    <div>
    {
        users.map((user , i)=>{
            return(
                <React.Fragment Key={i}>
                <h1>{user.name}</h1>
                <h3>{user.email}</h3>
                </React.Fragment>
            )
        })
    }
    </div>
    //     Exuseeffect
    //     {/* <h1>{count}</h1> */}
    
  )
}

export default Exuseeffect
