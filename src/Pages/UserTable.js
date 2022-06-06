import React from "react";
import { Col, Row } from "reactstrap";
import UploadDoc from "./UploadDoc";

function UserTable() {
  return (
    <div>
     <Row>
    <Col><h1>Dashboard</h1></Col>
    <Col md="auto">
      <span>Generate Referral Code</span>
    </Col>
    <Col xs lg="2">
       </Col>
    <Col xs lg="2">
      <button><UploadDoc/></button>
    </Col>
  </Row>
    </div>
  );
}

export default UserTable;
