import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import UserReg from './components/UserReg';
import UserLogin from "./components/UserLogin";
import UploadDoc from "./Pages/UploadDoc";
import AdminDashboard from "./Pages/AdminDashboard";
import UserTable from "./Pages/UserTable";
import SendOtp from "./Pages/FORMS/SendOtp";
import LoginRegisterPage from "./Pages/FORMS/LoginRegisterPage";
import UserDashboard from './Pages/UserDashboard';
import Entry from "./Pages/FORMS/Entry";



function App() {
 const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }

  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    console.log("logged in");
   setUser({
    name: details.name,
    email:details.email
  });

  }
   {
  console.log("details do not match");
  // setError("details do not match")
   }
  
 const Logout = () => {
    setUser({name:"",email:""});
  }
  
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginForm' element={<LoginForm/>}/>
        <Route path='/UserLogin' element={<UserLogin/>}/>
        <Route path='/UserReg' element={<UserReg/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/UploadDoc' element={<UploadDoc/>}/>
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
        <Route path="/UserTable" element={<UserTable/>}/>
        <Route path="/SendOtp" element={<SendOtp/>}/>
        <Route path="/LoginRegisterPage" element={<LoginRegisterPage/>}/>
        <Route path='/UserDashboard' element={<UserDashboard/>}/>
         <Route path="/Entry" element={<Entry/>}/>    
              

      </Routes>
      <Footer/>
    </Router>
    
    <div>
   {(user.email !="")? (
       <div className="welcome">
        <h2>welcome,<span>{user.name}</span></h2>
        <button className="btn" onClick={Logout}>Logout</button>
      </div>
    ):(
      <div/>
    )}
   </div>
   </>
  );
}

export default App;
