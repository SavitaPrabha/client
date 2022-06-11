import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import store from "store";
import './custom.css';
function Home() {
  useEffect(() => {
    setUser(store.get("user1") ? store.get("user1") : null);
  }, []);

  const [user, setUser] = useState(null);
  return (
    <Row>
      <div className='dashboard'>
        <Col md={6}><img src='images/imgtex.png' /></Col>
        <Col md={6}><h3>{"Section Title"}</h3>
          <h2>
            {`Excepture sint occaecat cupidatat non proident,`}
            <br />
            {`sunt in culpa qui official`}
          </h2>


          {
            !user ? <span className="btn_dashboard">Please login to see your Dashboard</span> : <a href="/UserDashboard" className="btn_dashboard">Dashboard</a>
          }
        </Col>
      </div>
    </Row>
  )
}

export default Home;