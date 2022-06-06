//
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import './UploadDoc.css';
const UploadDocForm = () => {
  const [userRegisteration, setUserRegistration] = useState({
    email: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegisteration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegisteration,
      id: new Date().getTime().toString(),
    };
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({
     
      document: "",
      date: "",
      service: "",
      uploadpage: "",
      information:"",
     
    });
  };
  
  return (
    <>
      <div className="container multiple_inputs">
        
        <form action="" onSubmit={handleSubmit}>
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
                    <span>
                        <a href="/">{`choose file`}</a>
                    </span>
                </Col>
                <Col>
                    <span>
                        <a href="/">{`No file chosen `}</a>
                    </span>
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
                      value={userRegisteration.document}
                      onChange={handleInput}
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
                      value={userRegisteration.date}
                      onChange={handleInput}
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
                      value={userRegisteration.service}
                      onChange={handleInput}
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
                      value={userRegisteration.uploadpage}
                      onChange={handleInput}
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
                      value={userRegisteration.information}
                      onChange={handleInput}
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
        {records.map((curElem) => {
          const {
            document,
      date,
      service,
      uploadpage,
      information
          } = curElem;
          return (
            <div className="showDataStyle" key={curElem}>
              <p>{curElem.document}</p>
              <p>{curElem.date}</p>
              <p>{curElem.service}</p>
              <p>{curElem.uploadpage}</p>
              <p>{curElem.information}</p>
            </div>
          );
        })}
      </div>
      {/* <p className="login_button">
        Already Registered?<Link to="/UserReg">Login</Link>
      </p> */}
    </>
  );
};

export default UploadDocForm;
