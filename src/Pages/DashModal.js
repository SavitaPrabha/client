import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DiscountTab from './DiscountTab';

class DashModal extends React.Component {
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
        <span onClick={this.toggle}>Discounts/Referral Codes</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <DiscountTab/>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default DashModal;