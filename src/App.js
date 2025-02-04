// import Navbar from "./Components/Navbar";
// import Main from "./Components/Main";
// // import Sidebar1 from "./Components/Sidebar1";
// import Sidebar2 from "./Components/Sidebar2";
// import Footer from "./Components/Footer";
// // import "./Global.css";

// const App=()=>{
//     return(
//         <div classname="app">
//             <Navbar/>
//             <Main></Main>
//             <div classname="sidebar">
//                 {/* <Sidebar1/> */}
//                 <Sidebar2/>
//             </div>
//             <Footer></Footer>
//         </div>
//     )
// }
// export default App;


import React, { Component } from 'react'
import CBSPropex1 from "./proposexample/CBSPropex1";
//   class APP extends Component {
//     render() {
//         return(
//             <div>APP
//                 <hr />
//                 <CBCProposex1
//                 username = "sam"
//                 age={25}
//                 design={["developer", "tester"]}
//                 userDetails={{city:"Hyd", area : "Maisammaguda"}}
//                 sendFun={function(){alert("hi i am from parent component")}}
//                 />
//             </div>
//         )
//     }
//   }
//   export default APP;
const APP=()=>{
    return(
        <div>
            <CBSPropex1
            username="hemanth"
            isLoggedin={false}
            hobbies={["games","movies","books","study"]}
            />
        </div>
    )
}
export default APP;

