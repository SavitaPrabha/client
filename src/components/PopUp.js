import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap"
import { useNavigate } from 'react-router-dom';
import { postSubmitForm } from "../FormHelper/Forms_helper"
import swal from "sweetalert2";
import store from "store";
import './header.css';
import LoginForm from './LoginForm';
function Popup() {
  //const token = store.get("user") ? store.get("user").user : "";

  // Modal open state
  const [modal, setModal] = React.useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [admin, setadmin] = useState(null);
  const navigate = useNavigate()
  // Toggle for Modal
  const toggle = () => setModal(!modal);
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  useEffect(() => {
    setadmin(store.get("user") ? store.get("user") : null);
  }, []);


  const handleLogout = async (e, v) => {
  //  let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/adminusers/logout";
   // const response = await postSubmitForm(url, null);
    // if (response && response.status === 1) {
     
    // } else {
    //   showNotification(response.message, "Error");
    // }
    store.clearAll();
    navigate("/")
    window.location.reload();

  };
  function showNotification(message, type) {
    if (type === "Success") swal.fire(type, message, "success");
    else swal.fire(type, message, "error");
  }
  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password)
      console.log("logged in");
    setUser({
      name: details.name,
      email: details.email,
    });

  }

  return (
    <div>

      <Button color="danger" onClick={toggle}>{admin ? admin.username : "Admin Login"}</Button>
      {
        admin && admin ?
          <Button className='logout_btn' onClick={() => {handleLogout()}}>Logout</Button> : ""

      }


      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <LoginForm Login={Login} error={error} />
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default Popup;
