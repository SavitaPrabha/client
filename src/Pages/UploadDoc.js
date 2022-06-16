import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UploadDocForm from "./UploadDocForm";
import UploadDocUrgent from "./UploadDocUrgent";

class UploadDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      nestedModal1: false,
      closeAll: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleNested1 = this.toggleNested1.bind(this);
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
  toggleNested1() {
    this.setState({
      nestedModal1: !this.state.nestedModal1,
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
        <span onClick={this.toggle}>
          Upload Document
        </span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{`Choose Priority`}</ModalHeader>
          <ModalBody>
            <Row>
              <Col md={6}>
                <Card style={{ width: "14rem",  backgroundColor: 'rgb(220 53 69)' }}>
                  <Card.Body style={{background:"#fff"}}>
                    <Card.Title>Regular</Card.Title>
                    <Card.Text>{`Delivery in 5 - 7 business days.`}</Card.Text>
                    <Button color="secondary" onClick={this.toggleNested}>
                      Select
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card style={{ width: "14rem",  backgroundColor: 'rgb(220 53 69)' }}>
                  <Card.Body  style={{background:"#fff"}}>
                    <Card.Title>{`Urgent`}</Card.Title>
                    <Card.Text>{`Delivery in 2 - 4 business days.`}</Card.Text>
                    <Button color="secondary" onClick={this.toggleNested1}>
                      {`Select`}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              
            </Row>
            <br />
            
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader><h4>{`Upload Document(Regular)`}</h4></ModalHeader>
              <ModalBody><UploadDocForm /></ModalBody>
           
              
            </Modal>
            <Modal
              isOpen={this.state.nestedModal1}
              toggle={this.toggleNested1}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader><h4>{`Upload Document(Urgent)`}</h4></ModalHeader>
              <ModalBody><UploadDocUrgent /></ModalBody>
           
              
            </Modal>
          </ModalBody>
          
        </Modal>
      </div>
    );
  }
}

export default UploadDoc;
