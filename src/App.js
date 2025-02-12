// import React from 'react'

// const App = () => {
//     // let ele = React.createElement("div" , {id:"demo"} ,
//     //     React.createElement("h1" ,null ,"Header"),
//     //     React.createElement("p" ,null, "para")
//     //  )
//     let x =1000;
//   return (
//  <div>
//       <h1>React</h1>
//       <p>Lorem ipsum dolor sit amet.</p>
//       {x}<br/>
//       {100*2}
//  </div>
//   )
// }

// export default App


// class Parent{
//     constructor(name , age){
//         this.name = name;
//         this.age=age;
//     }
// }

// class Child extends Parent{
//     constructor(name , age  ,city){
//         super(name , age);
//         this.city=city;
//     }
// }

// ! class based component
// import React from "react";
// class App extends React.Component{
//     render(){
//         return(
//             <h1>Class Component</h1>
//         )
//     }
// };
// export default App;

// function App(){
//     return(
//         <h1>Function component</h1>
//     )
// }
// export default App;

// ! component composition example
// import Navbar from "./components/Navbar";
// import Main from "./components/Main"
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";
// const App=()=>{
//     return(
//         <div className="app">
//           <Navbar/>
//           <Main></Main>
//           <div className="sidebar">
//             <Sidebar1/>
//             <Sidebar2/>
//           </div>
//           <Footer/>
//         </div>
//     )
// }

// export default App;

// ! props

// import React, { Component } from 'react'
// import CBCPropsex1 from './propsexample/CBCPropsex1';

//  class App extends Component {
//   render() {
//     return (
//       <div>App
//         <hr />

//         <CBCPropsex1 
//         username="Sam"
//         age={25}
//         desig={["developer" , "tester"]}
//         userDetails={{city:"Hyd" , area:"Maisammaguda"}}
//         sendFun={function(){alert("Hi i m from parent component")}}
//         />
//       </div>
//     )
//   }
// }

// export default App;


// ! FBC

// import React from 'react'
// import FBCPropex1 from './propsexample/FBCPropex1'

// const App = () => {
//   return (
//     <div>
//       <FBCPropex1
//       username="Tarun"
//       isLoggedIn ={false}
//       hobbies={["Roaming" , "Watching movies" , "travel" , "studies"]}
//       />
//     </div>
//   )
// }

// export default App

// ! props children example
// import React from 'react'
// import PropsChildrenEx from './propsexample/PropsChildrenEx'
// import ChildProps from './propsexample/ChildProps'

// const App = () => {
//   return (
//     <div>
//       <PropsChildrenEx username="Tarun" company="Meta">
//         <h1>This data is passed as props children</h1>
//         <ChildProps/>
//       </PropsChildrenEx>
//     </div>
//   )
// }

// export default App


// ! props drilling examples

// import React from 'react'
// import Child1 from './propsexample/Child1'

// const App = () => {
//   return (
//     <div className='app'>App
//       <hr />
//       <Child1 university="MRU"/>
//     </div>
//   )
// }

// export default App


// ! state
// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// import FBCStateEx from './stateexamples/FBCStateEx'

// const App = () => {
//   return (
//     <div>
     
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Exuseeffect from './hooks/Exuseeffect'
// import Refexamples from './hooks/Refexamples'

// const App = () => {
//   return (
//     <div>
//       <hr />
//       <Exuseeffect></Exuseeffect>
//       <Refexamples></Refexamples>
//     </div>
//   )
// }
// export default App
import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import ClassRoom from './pages/ClassRoom';
import Assessment from './pages/Assessment';
import Store from './pages/Store';
import Calender from './pages/Calender';
import News from './pages/News';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import MyAccounts from './pages/MyAccounts';
import MySettings from './pages/MySettings';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/classroom' element={<ClassRoom/>}/>
            <Route path='/assessment' element={<Assessment/>}/>
            <Route path='/store' element={<Store/>}/>
            <Route path='/calender' element={<Calender/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/profile' element={<Profile/>}>
                <Route path='myaccount' element={<MyAccounts/>}/>
                <Route path='mysettings' element={<MySettings/>}/>
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App