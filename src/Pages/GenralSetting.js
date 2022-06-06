import React from 'react';
import FileUploader from './FileUploader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './custom.css';
import { Link } from 'react-router-dom';

class GenralSetting extends React.Component {
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
        <Button color='success'  onClick={this.toggle}>Genral Sample</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> <h5 className='genral'>Upload General Sample Document</h5></ModalHeader>
          <ModalBody>
      <Link to='/'>choose file</Link>

       <br/>
      <Link to='/'>No file choose</Link>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}><FileUploader/></Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Confirm</Button>
            
          </ModalFooter>
        </Modal>
        
      </div>
    );
  }
}

export default GenralSetting;