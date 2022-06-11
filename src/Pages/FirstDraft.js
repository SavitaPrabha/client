import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormText,
} from "reactstrap";
import SampleDocument from "./SampleDocument";

import "./custom.css";
class FirstDraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false,
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true,
    });
  }

  render() {
    return (
      <div>
        <span onClick={this.toggle}>First Draft</span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>First Draft</ModalHeader>
          <ModalBody>
            <p>
              This is the first page of your completed document. Please provide
              us with a feedback to continue further.
            </p>

            <form>
              <FormGroup>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted"></FormText>
                <Col md={6}>
                  <img
                    className="draft"
                    src="images/pdf_logo.png"
                    onClick={this.toggleNested}
                  />
                </Col>
              </FormGroup>
            </form>

            <Col md={12}>
              <form>
                <FormGroup>
                  <Label for="exampleText"><h5>feedback</h5></Label>
                  <Input type="textarea" name="text" id="exampleText" />
                  <input type="submit" value="Submit" />
                </FormGroup>
              </form>
            </Col>

            <br />
            
           
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
             <ModalHeader toggle={this.toggle}></ModalHeader>
              <ModalBody>
                <SampleDocument />
              </ModalBody>
              
            </Modal>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default FirstDraft;
