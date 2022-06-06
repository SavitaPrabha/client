import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SampleDocument from './SampleDocument';

import './custom.css';
class SamplePdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
        <div>
        <span  onClick={this.toggle}>{`Sample Document`}</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Genral Sample </ModalHeader>
          <ModalBody>
          <p>This is the general sample document. All the margins and font sizes in this document will be used in every other document.</p>
          <img className='pdflogo' src='images/pdf_logo.png' onClick={this.toggleNested}/>
            <br />
            {/* <Button color="success" onClick={this.toggleNested}></Button> */}
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
              
              <ModalBody><SampleDocument/></ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default SamplePdf;