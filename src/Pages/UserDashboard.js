import React from "react";
import { Col, Row } from "reactstrap";
import swal from "sweetalert2";
import './custom.css';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Card,
  CardBody,
} from "reactstrap";
import './custom.css';
import UploadDoc from "./UploadDoc";
import SamplePdf from "./SamplePdf";
import GenrateReffral from "./GenrateReffral";
import BootstrapTable from "react-bootstrap-table-next";
import { useState,useEffect } from "react";
import { postSubmitForm } from "../FormHelper/Forms_helper";
import moment from "moment";
import store from 'store';




const UserDashboard = ()=> {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(store.get("user1") ? store.get("user1") : null);
  }, []);
  const [allpapers,setAllPapers]=useState([]);
  useEffect(() => {
    loadALLPapers();
  });
  
  function showNotification(message, type) {
    if (type === "Success") swal.fire(type, message, "success");
    else swal.fire(type, message, "error");
  }

const loadALLPapers = async()=>{


  let url="https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/papers/getbyid";
  let response = await postSubmitForm(url, {email:user.email});
  console.log(user.email);
  if (response && response.status === 1) {
    console.log(response.data);
    // let data=[];
    // if(response.data) 
    // data.push(response.data);
    setAllPapers(response.data)
   } else {
    showNotification(response.message, "Error");
  }
  

};
const columns = [
  
  {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: 'document_id',
     text: 'Doc Id'
    }, 
    {
      headerStyle: (colum, colIndex) => {
        return { width: "15%" };
      },
      dataField: 'name_of_document',
      text: 'Name of Document'
    }, 
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
     dataField: 'createdAt',
      text: 'Upload Date',
     formatter:(cell,row)=>{
      return moment(row.createdAt).format('MM/DD/YYYY')
        
      }
    },
    // {
    //   headerStyle: (colum, colIndex) => {
    //     return { width: "15%" };
    //   },
    //   dataField: 'document_type',
    //   text: 'Document Type'
    // },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "15%" };
      },
      dataField: 'tentative_pages',
      text: 'Tantative Pages'
    },
    // {
    //   headerStyle: (colum, colIndex) => {
    //     return { width: "15%" };
    //   },
    //   dataField: 'service_type',
    //   text: 'Service'
    // },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: 'status',
      text: 'Status'
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: 'final_pages',
      text: 'Final Pages'
    },
   
  
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
    //  formatter:(row,col)=>{
    //   let student="";
    //   row.student_details&& row.student_details.map((item)=>{
    //   student=item.email
    //   });
    //   return student;
    //  },
    dataField:"student_details.email",
     text: "User Email"
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "15%" };
      },
      dataField: '',
      text: 'Payment Info'
    },
    {
      headerStyle: (colum, colIndex) => {
        return { width: "10%" };
      },
      dataField: '',
      text: 'Progress'
    },
    
  
  ];
    return (
      <>
        <div className="dashboard_admin">
          <Row>
            <Col lg={12}>
              <Row>
                <Col md={6}>
                  <h1> Dashboard</h1>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={4}>
                      <span>
                        <GenrateReffral />
                      </span>
                    </Col>
                    <Col md={4}>
                      <span>
                        <SamplePdf /></span>
                    </Col>
                    <Col md={4}>
                      <div className="btn_general">
                        <Button className="upbtn"><UploadDoc /></Button>
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
                      data={allpapers && allpapers}
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
  }
export default UserDashboard;
