import React from "react";
import { Col, Row, Card, CardBody } from "reactstrap";
import ConfigureDelayed from "./ConfigureDelayed";
import DashModal from "./DashModal";
import GenralSetting from "./GenralSetting";
import "./custom.css";
import BootstrapTable from "react-bootstrap-table-next";
import { useState } from "react";
import { useEffect } from "react";
import swal from "sweetalert2";
import { postSubmitForm } from "../FormHelper/Forms_helper";
import { Dropdown, DropdownButton } from "react-bootstrap";
const AdminDashboard = () => {
   
 

  const columns = [
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: "id",
      text: "Doc Id",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "15%" };
      },
      dataField: "name",
      text: "Name of Document",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "15%" };
      },
      dataField: "date",
      text: "Upload Date",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: "name",
      text: "Progress",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: "page",
      text: "Tentative Pages",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: "Pages",
      text: "Final Pages",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: "name",
      text: "Status",
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "15%" };
      },
      dataField: "Pages",
      text: "Payment Info",
    },
  ];
  
  return (
    <>
      <div className="dashboard_admin">
        <Row>
          <Col lg={12}>
            <Row>
              <Col md={6}>
                <h1>Admin Dashboard</h1>
              </Col>
              <Col md={6}>
                <Row>
                <Col md={3}>
                <select className="tablee_filter">
                  <option value='all'></option>
                </select>
                  <DropdownButton id="dropdown-basic-button" title="All Work">
                    <Dropdown.Item href="#/action-1">Urgent Work</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Regular Work
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Delayed Work
                    </Dropdown.Item>
                  </DropdownButton>
                  </Col>
                  <Col md={3}>
                    <span>
                      <DashModal />
                    </span>
                  </Col>
                  <Col md={3}>
                    <span>
                      <ConfigureDelayed />
                    </span>
                  </Col>
                  <Col md={3}>
                    <div className="btn_general">
                      <GenralSetting />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <hr />
          <Col lg={12}>
            <Row className="mt-4">
              <Card>
                <CardBody>
                  <BootstrapTable
                    bootstrap4
                    keyField="_id"
                    data={[]}
                    columns={columns}
                    noDataIndication="No data to display."
                    striped
                    hover
                    condensed
                  />
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default AdminDashboard;
