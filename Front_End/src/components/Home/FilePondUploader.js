import React, { Component } from 'react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";


class FilePondUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [
      ]
    };
  }

  handleInit() {
    console.log("FilePond instance has initialised", this.pond);
  }

  handlePondFile(error, file) {
    if (error) {
      console.log('Oh no');
      return;
    }
    const fileId = JSON.parse(file.serverId)
    console.log('File added', fileId.id);
    

  }

  render() {
    return (
      <div className="App">
        
        <FilePond
          name={"file"}
          server="http://localhost:4000/admin/file/uploadfile"
          onprocessfile={this.handlePondFile.bind(this)}
        />
      </div>
    );
  }
}

export default FilePondUploader;