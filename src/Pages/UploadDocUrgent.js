import { useRef } from "react";
import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactAvatarEditor from "react-avatar-editor";
import { Row, Input } from "reactstrap";
import "./UploadDoc.css";
import swal from "sweetalert2";
import {
  postSubmitForm,
  postSubmitFormNoAuth,
  postSubmitForm_withformdata,
} from "../FormHelper/Forms_helper";
const UploadDocForm = () => {
  const [document, setdocument] = useState();
  const [date, setdate] = useState();
  const [serviceType, setServiceType] = useState();
  const [additionalinformation, setadditionalinformation] = useState();
  const [uploadedpages, setuploadedpages] = useState();
  const [doc, setdoc] = useState();
  const onPhotoChange = (event) => {
    setSelectedPhoto(event.target.files[0]);
  };
  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };
  const [selectedPhoto, setSelectedPhoto] = useState();

  console.log(serviceType, uploadedpages, document);

  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
  const [rotate] = useState(0);
  const [borderRadius] = useState(0);
  const [scale, setScale] = useState(1);
  const [allowZoomOut] = useState(false);
  const editorRef = useRef();
  const options = [
    
    {
      value: "Editable PDF to Latex",
    },
    {
      value: "Editable WORD to Latex",
    },
    {
      value: "Scanned PDF/IMAGES to Latex",
    },
    {
      value: "Equation (any formate) to Latex",
    },
    {
      value: "Handwritten to Latex",
    },
    
  ];
  function srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  }

  const onFileChange = (event) => {
    setdoc(event.target.files[0]);
  };

 
  const handleValidSubmit = async (e, v) => {
    e.preventDefault();
    let url =
      "https://pqs3b4u48k.execute-api.ap-south-1.amazonaws.com/prod/papers/insert";
    srcToFile(
      editorRef.current.getImageScaledToCanvas().toDataURL("image/png"),
      "new_image.png",
      "image/png"
    ).then(function (file) {
      let formData = new FormData();

      formData.set("name_of_document", document);
      formData.set("service_type", serviceType);
      formData.set("document_type", "Urgent");
      formData.set("tentative_pages", uploadedpages);
      formData.append("document_file", file);
      postSubmitForm_withformdata(url, formData).then((api_response) => {
        if (api_response.status === 1 && api_response.data) {
          showNotification(api_response.message, "Success");
        } else {
          showNotification(api_response.message, "Error");
        }
      });
    });
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
                <ReactAvatarEditor
                  ref={editorRef}
                  scale={parseFloat(scale)}
                  width={100}
                  height={100}
                  position={position}
                  onPositionChange={
                    (position) => {
                      setPosition(position);
                    }
                    //this.handlePositionChange
                  }
                  rotate={rotate}
                  borderRadius={100 / (100 / borderRadius)}
                  image={selectedPhoto && selectedPhoto}
                  className="editor-canvas"
                />
                <br />
                <br />
                <input
                  name="scale"
                  type="range"
                  onChange={handleScale}
                  min={allowZoomOut ? "0.1" : "1"}
                  max="2"
                  step="0.01"
                  defaultValue="1"
                />
                <br />
                <br />
                <Input
                  type="file"
                  id="resume"
                  className="form-control-file"
                  onChange={onPhotoChange}
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
                      type="text"
                      onChange={(e, v) => {
                        setdocument(e.target.value);
                      }}
                      autoComplete="off"
                      name="name_of_document"
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
                      // onChange={(e, v) => {
                      //   setdate(e.target.value);
                      // }}
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
                  <div className="file" id="App">
                    <label>Service Type</label>
                    <select
                      onChange={(e, v) => {
                        setServiceType(e.target.value);
                      }}
                    >
                      {options.map((option) => (
                        <option value={option.value}>{option.value}</option>
                      ))}
                    </select>
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="uploadedpages">{`Uploaded Pages`}</label>
                    <input
                      type="text"
                      onChange={(e, v) => {
                        setuploadedpages(e.target.value);
                      }}
                      autoComplete="off"
                      name="uploadedpages"
                      id="uploadedpages"
                    />
                  </div>
                </span>
              </Col>
              <Col md={6}>
                <span>
                  <div>
                    <label htmlFor="additionalinformation">
                      Additional Information (optional)
                    </label>

                    <input
                      type="text"
                      onChange={(e, v) => {
                        setadditionalinformation(e.target.value);
                      }}
                      autoComplete="off"
                      name="additional_Information"
                      id="additional_Information"
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
      <div></div>
      {/* <p className="login_button">
        Already Registered?<Link to="/UserReg">Login</Link>
      </p> */}
    </>
  );
};

export default UploadDocForm;
