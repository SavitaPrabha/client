import axios from 'axios';
import React, { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import {Link} from 'react-router-dom';
import SendOtp from './SendOtp';
function Otp() {
    const emailRef = useRef();
    const [otpForm, showForm] = useState(true)
    const sendOtp =async () =>{
        try{
            let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/checkemail"
            let option ={
                method:"POST",
                url:url,
                data:{email:emailRef.current.value}
            }
         
        let response = await axios(option)
        let record = response.data;
        if(record.statusText == 'Success'){
            toast.success("record.message");
           showForm(false);
        }else{
            toast.error(record.message);
        }
        
    } 
    catch(e){
        toast.error('something went wrong!');
    }
    }
  return (
    <div className='container abc'>
        <div className='row login'>
            <div className='col-md-2' >
            </div>
            <div className='col-md-6'>
                  {/* <ToastContainer/>  */}
                <h3 className=''></h3><br/>
                {otpForm ? <form autoComplete='off' id='otpForm' method='post'>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='email'
                    className='form-control'
                    name="email"
                    ref={emailRef}
                    autoComplete="off"/>
                </div>
                <div>
                
                <a href='/SendOtp'> <button type='button' className='btn btn-primary' onClick={sendOtp}>Login</button><br/></a>
                    <a href='/UserLogin'>Register here</a>
                    </div>
                    </form>
                    :<h1>hey</h1>
                    }
               
            </div>
        </div>
    </div>
  )
}

export default Otp;
//  import React, { Component } from "react";
//  import { Navigate } from 'react-router-dom';
//  class Otp extends Component {
//    constructor(props) {
//      super(props);
//      this.state = {
//        otp: ""
//      };
//      this.onchange = this.onchange.bind(this);
//    }
//    onchange(e) {
//      this.setState({ [e.target.name]: e.target.value });
//    }
//    performVerify = async event => {
//      event.preventDefault();

//      var data = {
//        emailid: this.props.email,
//        otp: this.state.registrationotp
//      };
//      const options = {
//        method: "POST",
//        headers: {
//          "Content-Type": "application/json",
//          Accept: "application/json"
//        },
//        body: JSON.stringify(data)
//      };
//      const url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/checkemail";
//      try {
//        const response = await fetch(url, options);
//        const result = await response.json();
//        console.log(result);
//        if (result.data === "verified") {
//          return <Navigate to="/dashboard/" />;
//        }
//      } catch (error) {
//        console.error(error);
//      }
//    };

//    render() {
//      return (
//        <div>
//          <input
//            type="text"
//            name="otp"
//            placeholder="enter otp"
//            onChange={this.onchange}
//          />
//          <br />
//          <button type="submit" onClick={event => this.performVerify(event)}>
//            Submit
//          </button>
//          <hr />
//        </div>
//      );
//    }
//  }
//  export default Otp;
