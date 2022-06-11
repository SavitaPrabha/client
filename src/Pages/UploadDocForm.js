//
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import './UploadDoc.css';
import swal from "sweetalert2";
import { postSubmitForm, postSubmitFormNoAuth } from "../FormHelper/Forms_helper"
const UploadDocForm = () => {
  const [document, setdocument] = useState();
  const [date, setdate] = useState();
  const [service, setservice] = useState();
  const [uploadpage, setuploadpage] = useState();
  const [information, setinformation] = useState();
  const [doc, setdoc] = useState();


  const handleValidSubmit = async (e, v) => {
    e.preventDefault()
    let object = {
      name_of_document: document,
      date: date,
      service: service,
      final_pages: uploadpage,
      information: information,
      doc: doc,
    }
    console.log(object);
    let url = "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/students/papers";
    const response = await postSubmitForm(url, object);

    if (response && response.status === 1) {
      showNotification(response.message, "Success");
      console.log(response);
      window.location.reload();

    } else {
      showNotification(response.message, "Error");
    }

  };

  function showNotification(message, type) {
    if (type === "Success") swal.fire(type, message, "success");
    else swal.fire(type, message, "error");
  }



  return (
    <>
      <div className="container multiple_inputs">

        <form action="" onSubmit={(e) => handleValidSubmit(e)}>
          <Row>
            <Col md={12}>
              <span>
                <p>{`Important instructions before uploading`}</p>
                <ul>
                  <li>{`Supported file formats are .jpg / .jpeg / .png / .doc / .docx / .tex / .gif.`}</li>
                  <li>{`In case of an image file, additional typing charges will be applicable.`}</li>
                  <li>{`After uploading, keep an eye on the Dashboard for amount.`}</li>
                  <li>{`If the tentative pages are more than 5, please pay 50% of the total amount for work to begin.`}</li>
                  <li>{`After the work is completed, you’ll be shown only the first page of your document.`}</li>
                  <li>{`In order to receive the entire document on your email, you need to pay the remaining balance.`}</li>


                </ul>
              </span>
            </Col>
            <Row>
              <Col>
                <input
                  type="file"
                  onChange={(e, v) => {
                    setdoc(e.target.value);
                  }}
                  autoComplete="off"
                  name="document"
                  id="document"
                  required="true"
                />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <span>
                  {" "}
                  <div>
                    <label htmlFor="Document">Document Name</label>
                    <input
                      type="document"
                      onChange={(e, v) => {
                        setdocument(e.target.value);
                      }}
                      autoComplete="off"
                      name="document"
                      id="document"
                      required="true"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="date">{`Date of Upload`}</label>
                    <input
                      type="date"
                      onChange={(e, v) => {
                        setdate(e.target.value);
                      }}
                      autoComplete="off"
                      name="date"
                      id="date"
                    />
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="Service">{`Service Type`}</label>
                    <input
                      type="service"
                      onChange={(e, v) => {
                        setservice(e.target.value);
                      }}
                      autoComplete="off"
                      name="service"
                      id="service"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="uploadpage">Upload Pages</label>
                    <input
                      type="uploadpage"
                      onChange={(e, v) => {
                        setuploadpage(e.target.value);
                      }}
                      autoComplete="off"
                      name="uploadpage"
                      id="uploadpage"
                    />
                  </div>
                </span>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <span>
                  <div>
                    <label htmlFor="information">{`Additional Information`}</label>
                    <input
                      type="information"
                      onChange={(e, v) => {
                        setinformation(e.target.value);
                      }}
                      autoComplete="off"
                      name="information"
                      id="information"
                    />
                  </div>
                </span>
              </Col>

            </Row>
          </Row>
          <button type="submit" className="btn btn-warning">
            {`confirm`}
          </button>
        </form>
      </div>
      <div>

      </div>
      {/* <p className="login_button">
        Already Registered?<Link to="/UserReg">Login</Link>
      </p> */}
    </>
  );
};

export default UploadDocForm;
