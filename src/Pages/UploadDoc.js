import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UploadDocForm from "./UploadDocForm";

class UploadDoc extends React.Component {
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
                <Card style={{ width: "14rem", backgroundColor:'#631120' }}>
                  <Card.Body>

                    <Card.Title>Regular</Card.Title>
                    <Card.Text>{`Delivery in 5 - 7 business days.`}</Card.Text>
                    <Button color="secondary" onClick={this.toggleNested}>
                      Select
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card style={{ width: "14rem",backgroundColor:'#631120' }}>
                  <Card.Body>
                    <Card.Title>{`Urgent`}</Card.Title>
                    <Card.Text>{`Delivery in 2 - 4 business days.`}</Card.Text>
                    <Button color="secondary" onClick={this.toggleNested}>
                      {`Select`}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            {/* <Button color="success" onClick={this.toggleNested}>
              Show Nested Modal
            </Button> */}
            <Modal
              isOpen={this.state.nestedModal}
              toggle={this.toggleNested}
              onClosed={this.state.closeAll ? this.toggle : undefined}
            >
              <ModalHeader><h4>{`Upload Document`}</h4></ModalHeader>
              <ModalBody><UploadDocForm/></ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={this.toggleNested}>
                  Done
                </Button>{" "}
                <Button color="secondary" onClick={this.toggleAll}>
                  All Done
                </Button> */}
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UploadDoc;
