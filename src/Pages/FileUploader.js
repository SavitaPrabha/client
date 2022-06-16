import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../Pages/custom.css';
class FileUploader extends Component {
  handleFileUpload = event => {
    console.log(event.target.files[0].name);
  };

  render() {
    return (
      <div>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <div className="gen_btn" onClick={() => this.refs.fileInput.click()}>Upload File</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<FileUploader />, rootElement);
export default FileUploader;