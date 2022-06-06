import React from "react";
import { Row, ToggleButton } from "react-bootstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from "reactstrap";

class ConfigureDelayed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      isToggleOn:true

    };

    this.toggle = this.toggle.bind(this);

    this.handleClick =this.handleClick.bind(this);
  }
  handleClick(){
    //change state
    this.setState(state=>({
        isToggleOn:!state.isToggleOn
    }));
        }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <span onClick={this.toggle}>Configure Delayed</span>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{`Activate/Deactivate delayed`}</ModalHeader>
          <ModalBody>
          <Row>
            <Col md={4}>
            <label className="switch">
             <></>
             <span class="slider"></span>
           </label>
            <div className='ToggleButton'>
                <Button onClick={this.handleClick}>
                {this.state.isToggleOn ? "ON" : "OFF"}
                </Button>
           </div>
           
          </Col>
          <Col md={4}>
          <label for="date">Date until deactive</label>
              <input type="date" class="form-control"
                id="date"
                min=""
                disabled="disabled"
              />
              
          </Col>
          <Col md={4}>
          <label>Time until deactive</label>
          <input type="time"
          class="form-control"
          id="time"
          min="18:43"
          disabled="disabled"/>

          </Col>
          </Row>
          
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Confirm
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ConfigureDelayed;
