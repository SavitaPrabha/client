import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class GenrateReffral extends React.Component {
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
    copyToClipboard = (e) => {
        
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
      };
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
    <span  onClick={this.toggle}>Generate Referral Code</span>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
      <ModalHeader toggle={this.toggle}>Referral Code</ModalHeader>
      <ModalBody>
      <p>This referral code is unique. Share it with your friends to get discounts!</p>
      <span>MNWYQLN867</span>

        <br/>
        <div>
            <button onClick={this.copyToClipboard}><span>Copy Code</span></button> 
            {this.state.copySuccess}
          </div>
        {/* <Button onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy Code</Button> */}
      </ModalBody>

    </Modal>
  </div>
  );
}
}

export default  GenrateReffral;