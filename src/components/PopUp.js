import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"
import LoginForm from './LoginForm';
function Popup() {
  //const token = store.get("user") ? store.get("user").user : "";

	// Modal open state
	const [modal, setModal] = React.useState(false);
  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");
	// Toggle for Modal
	const toggle = () => setModal(!modal);
  const adminUser={
    email:"admin@admin.com",
    password:"admin123"
  }
  

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
    console.log("logged in");
   setUser({
    name: details.name,
    email:details.email,
  });

  }

	return (
		<div>
		 <Button color="danger"
				 onClick={toggle}>Admin Login</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader
					toggle={toggle}>Login</ModalHeader>
				<ModalBody>
				<LoginForm Login={Login} error={error}/>
				</ModalBody>
				<ModalFooter>

        {(user.email !="")? (
       <div className="welcome">
        <h2>welcome<span>{user.name}</span></h2>
        {/* <button className="btn" onClick={Logout}>Logout</button> */}
      </div>
    ):(
    ""
    )}
			{/* <Button color="primary" onClick={toggle}>Okay</Button> */}
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default Popup;
