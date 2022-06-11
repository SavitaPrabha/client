import React from 'react';
import { Table } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <span onClick={this.toggle}>Due</span>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Payment Detail</ModalHeader>
          <ModalBody>
            <Row>
                <Col md={6}>
                    <span>Total Amount $2</span>
                </Col>
                <Col  md={6}>
                    <span>Balance Due$2,100</span>
                </Col>
            </Row>
            <Table bordered>
        <thead>
          <tr>
            <th>Date of Payment</th>
            <th>Remarks</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>21-02-2021</th>
            <td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</td>
            
          </tr>
          <tr>
            <th>21-02-2021</th>
            <td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</td>
            
          </tr>
          <tr>
            <th>21-02-2021</th>
            <td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</td>
            
          </tr>
          <tr>
            <th>21-02-2021</th>
            <td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</td>
            
          </tr>
          <tr>
            <th>21-02-2021</th>
            <td>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</td>
            
          </tr>
        </tbody>
      </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Pay remaining balance</Button>{' '}
           
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Payment;
