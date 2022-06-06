import React from 'react';
import Uploaddoc from './Uploaddoc';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import './custom.css';

class UploadFiles extends React.Component {
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
        <Button color='success'  onClick={this.toggle}>Upload Document</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h5>choose priority</h5></ModalHeader>
          <ModalBody>
         
       <Row>
             <Col md={6}>
             <h6>Regular</h6>
             <p>Delivery in 5 - 7 business days.</p>
             <Button color="secondary" onClick={this.toggle}><Uploaddoc/></Button>
             </Col>
             <Col md={6}>
                 <h6>Urgent</h6>
                 <p>Delivery in 2 - 4 business days.</p>
                 <Button color="secondary" onClick={this.toggle}><Uploaddoc/></Button>
             </Col>
         </Row> 
        
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}></Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Confirm</Button>
            
          </ModalFooter>
        </Modal>
        
      </div>
    );
  }
}

export default UploadFiles;