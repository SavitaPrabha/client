import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Popup from './PopUp';


function Footer() {
  return (
    <div className="footer">
    <Row>
    <Col md={6}>
    <button className="btn_admin">
      <Popup/>
    </button>
    </Col>
    <Col md={6}><p> {`DESIGN & DEVELOP BY ONEBIGBIT TECHNOLOGIES PVT LTD.`}</p>
  </Col>
  </Row>
   </div>
  )
}

export default Footer;