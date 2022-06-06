import React from "react";
import { Col, Row } from "reactstrap";
import './custom.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DashModal from "./DashModal";
import './custom.css';
import UploadDoc from "./UploadDoc";
import SamplePdf from "./SamplePdf";
import GenrateReffral from "./GenrateReffral";





export default class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
        <>
        <div  className="dashboard_admin">
      <Row>
        <Col lg={12}>
          <Row>
            <Col md={6}> 
              <h1> Dashboard</h1>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={4}>
                  <span>
                  <GenrateReffral/>
                  </span>
                </Col>
                <Col md={4}>
                  <span>
                  <SamplePdf/></span>
                </Col>
                <Col md={4}>
                <div className="btn_general">
                 <Button className="upbtn"><UploadDoc/></Button>
                 </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <hr/>
        <Col lg={12}>
           
        </Col>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
           uyh
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
             </Row>
      </div>
     
      </>
    );
  }
}
