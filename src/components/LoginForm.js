import React,{useState} from 'react'
import {Form,FormGroup,Input,Label} from 'reactstrap';

import "./UserReg.css";
const LoginForm =({Login,error}) =>{
    const [details,setDetails] = useState({name:"",email:"",password:""});
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
  return (
    <div> 
    <div className="App">
    
    <Form className="form" onSubmit={submitHandler}>
    <div className='form-inner'>
    {(error!="") ? (<div className='error'>{error}</div>) : ""}
    {/* <FormGroup className='form-group'>
        <Label for="name">Username</Label>
        <Input
          type="name"
          name=""
          id="name"
          placeholder="name"
          onChange={e=>setDetails({...details,name :e.target.value})} 
          value={details.name}
        />
      </FormGroup> */}
      <FormGroup className='form-group'>
        <Label for="Email">Email</Label>
        <Input
          type="email"
          name="email"
          id="Email"
          placeholder="your email"
          onChange={e=>setDetails({...details,email :e.target.value})} 
          value={details.email}
        />
      </FormGroup>
      <FormGroup className='form-group'>
        <Label for="Password">Password</Label>
        <Input
          type="password"
          name="password"
          id="Password"
          placeholder="password"
          onChange={e=>setDetails({...details,password :e.target.value})} 
          value={details.password}
        />
      </FormGroup>
      <input type ="submit" value="Login"/>
      </div>
   </Form>
</div>
</div>
  )
}

export default LoginForm;