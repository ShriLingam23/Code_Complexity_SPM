import React, { Component } from 'react';
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

// Our app
class FilePondUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files, type 'local' means this is a file
      // that has already been uploaded to the server (see docs)
      files: [
        // {
        //   source: "index.html",
        //   options: {
        //     type: "local"
        //   }
        // }
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
    this.setState({ id: fileId.id })
    console.log(this.state.id)

  }

  render() {
    return (
      <div className="App">
        {/* Pass FilePond properties as attributes */}
        <FilePond
          // ref={ref => (this.pond = ref)}
          // files={this.state.files}
          // allowMultiple={true}
          // maxFiles={3}
          name={"file"}
          server="http://localhost:4000/admin/file/uploadfile"
          onprocessfile={this.handlePondFile.bind(this)}
        // oninit={() => this.handleInit()}
        // onupdatefiles={fileItems => {
        //   // Set currently active file objects to this.state
        //   this.setState({
        //     files: fileItems.map(fileItem => fileItem.file)
        //   });
        // }}
        />
      </div>
    );
  }
}

export default FilePondUploader;