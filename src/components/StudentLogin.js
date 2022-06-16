
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UserLogin from '../../components/UserLogin';
import Otp from './Otp';
import UserReg from '../../components/UserReg';

class StudentLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  

  render() {
    return (
      <div>
        <span  onClick={this.toggle}>Login/Register</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Registration</ModalHeader>
          <ModalBody>
          
          
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default StudentLogin;