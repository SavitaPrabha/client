import { Col, Placeholder, Row } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DiscountTab = () => (
  <Tabs>
    <TabList>
      <Tab>{`Genral Discount`}</Tab>
      <Tab>{`User Specific Discount`}</Tab>
    </TabList>

    <TabPanel>
      <p>{`Discount Percentage`}</p>
      <label>
        <input type="text" />
      </label>
      <p>{`Default Discount is set to 50%`}</p>
      <p>{`Coupon Code:DXB6T6Z9DX`}</p>
    </TabPanel>
    <TabPanel>
    <Row>
        <Col>
        <p>{`Select User`}</p>
      <label>
        <input type="text" />
      </label>
      </Col>
      <Col>
      <p>{`Percent Discount`}</p>
      <label>
        <input type="text" />
       </label>
        </Col>
    </Row>
      
    </TabPanel>
  </Tabs>
);
export default DiscountTab;