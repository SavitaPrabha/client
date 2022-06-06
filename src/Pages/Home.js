import React from 'react'
import { Col, Row } from 'react-bootstrap';
import './custom.css';
function Home() {
  return (
    <Row>
    <div className='dashboard'>
    <Col md={6}><img src='images/imgtex.png'/></Col>
    <Col md={6}><h3>{"Section Title"}</h3>
            <h2>
              {`Excepture sint occaecat cupidatat non proident,`}
              <br />
              {`sunt in culpa qui official`}
            </h2>
            <a href = "/UserDashboard" className="btn_dashboard">Dashboard</a></Col>
            </div>
  </Row>
  )
}

export default Home;