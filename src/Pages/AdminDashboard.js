import React from "react";
import { Col, Row } from "reactstrap";
import ConfigureDelayed from "./ConfigureDelayed";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import DashModal from "./DashModal";
import GenralSetting from "./GenralSetting";
import './custom.css';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";



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
              <h1>Admin Dashboard</h1>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={3}>
                  <Dropdown
                    className="dash_dropdown"
                    onMouseOver={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                    onChange ={(e)=>console.log(e.target.value)}
                  >
                    <DropdownToggle>--select--</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>All work</DropdownItem>
                      <DropdownItem>Regular work</DropdownItem>
                      <DropdownItem>Urgent work</DropdownItem>
                      <DropdownItem>Delayed work</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Col>
                <Col md={3}>
                  <span><DashModal/>
                  </span>
                </Col>
                <Col md={3}>
                  <span><ConfigureDelayed/></span>
                </Col>
                <Col md={3}>
                <div className="btn_general">
                 <GenralSetting/>
                 </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <hr/>
        <Col lg={12}>
        <Row>
          <Col md={2}>Document Id</Col>
          <Col md={2}>Name of Document</Col>
          <Col md={1}>Upload Date</Col>
          <Col md={1}>Progress</Col>
          <Col md={1}>Uploaded Pages</Col>
          <Col md={1}>Tentative Pages</Col>
          <Col md={1}>Final Pages</Col>
          <Col md={1}>Status</Col>
          <Col md={1}>Payment Info</Col>
          
          
        </Row>
           
        </Col>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
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
