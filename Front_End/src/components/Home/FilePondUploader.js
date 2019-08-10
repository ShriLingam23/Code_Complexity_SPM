import React, { Component } from 'react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import prettier from 'prettier';
import Highlight from 'react-highlight'

import 'highlight.js/styles/github.css'


class FilePondUploader extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      files: [ ],
      content :'',
      show:false

    };

    this.handleFileChoosen = this.handleFileChoosen.bind(this);
    this.showContent = this.showContent.bind(this);

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

  handleFileChoosen(file){
    this.fileReader = new FileReader();

    this.fileReader.onload = (e) => {
      const formattedText = this.fileReader.result;

      // const formattedText = prettier.format(content, {
      //   parser: "babel",
      //   tabWidth: 2
      // });

      console.log(formattedText)
      
      this.setState({
        content:formattedText,
        show:true
      })
    }
    this.fileReader.readAsText(file)

    
  }

  showContent(){
    if(this.state.show){
      return(
        <div>
          <Highlight language="java">
          {this.state.content}
          </Highlight>
        </div>
      )
    }
  }

  
  render() {
    

    return (
      <div className="App">
        
        <FilePond
          name={"file"}
          files={this.state.files}
          server="http://localhost:4000/admin/file/uploadfile"
          onprocessfile={this.handlePondFile.bind(this)}
          onupdatefiles={fileItems => {
            // Set currently active file objects to this.state
            this.setState({
              files: fileItems.map(fileItem => fileItem.file)
            });

            this.handleFileChoosen(fileItems[0].file)
          }}
        />

        <hr/>
        {this.showContent()}
      </div>
    );
  }
}

export default FilePondUploader;