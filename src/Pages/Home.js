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
        <Col md={6} sm={12}><img src='images/imgtex.png' /></Col>
        <Col md={6} sm={12}><h3>{"Section Title"}</h3>
          <h2>
            {`Excepture sint occaecat cupidatat non proident,`}
            <br />
            {`sunt in culpa qui official`}
          </h2>


          { user?
           <a href="/UserDashboard" className="btn_dashboard">Dashboard</a>:
           <a href="/UserDashboard" className="btn_dashboard">Login to see your Dashboard</a>
          }
           <br/>

         
        </Col>
      </div>
    </Row>
  )
}

export default Home;