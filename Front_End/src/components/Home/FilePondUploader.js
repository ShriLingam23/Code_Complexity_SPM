import React, { Component } from 'react';
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

import Highlight from 'react-highlight'

import 'highlight.js/styles/github.css'
import TableDisplay from './TableDisplay';

import Pie_Dragable from '../Data_Visualization/Pie_Dragable';
import ReChart_Bar from '../Data_Visualization/ReChart_Bar';


class FilePondUploader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      files: [],
      content: '',
      showVisualData:false,
      formatedContent: '',
      Cs:[],
      Ctc:[],
      Cnc:[],
      Ci:[]

    };

    this.handleFileChoosen = this.handleFileChoosen.bind(this);
    this.showContent = this.showContent.bind(this);
    this.showFormatedContent = this.showFormatedContent.bind(this);
    this.ShowVisual = this.ShowVisual.bind(this);
    this.changeVisual = this.changeVisual.bind(this);
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
    this.setState({
      formatedContent: fileId.content,
      Cs:fileId.cs,
      Ctc:fileId.ctc, 
      Cnc:fileId.cnc, 
      Ci:fileId.ci
    })
    // console.log('File added', fileId.cs, fileId.ctc, fileId.cnc, fileId.ci);


  }

  handleFileChoosen(file) {
    this.fileReader = new FileReader();

    this.fileReader.onload = (e) => {
      const formattedText = this.fileReader.result;

      console.log(formattedText)

      this.setState({
        content: formattedText,
        show: true
      })
    }
    this.fileReader.readAsText(file)


  }

  showContent() {
    if (this.state.content != '') {
      return (
        <div>
          <h4 style={{ marginLeft: '350px' }}>Input File Content</h4>
          <hr className="col mb-3" />
          <Highlight language="java">
            {this.state.content}
          </Highlight>
        </div>
      )
    }
  }

  changeVisual(){
    this.setState({showVisualData:!this.state.showVisualData})
  }

  ShowVisual(){
    if(this.state.showVisualData){
      return(
      <div style={{marginLeft:'-100px'}}>
        {/* <Reversed_BarChart 
          Cs={this.state.Cs}
          Ctc={this.state.Ctc}
          Cnc={this.state.Cnc}
          Ci={this.state.Ci}
        /> */}

        <Pie_Dragable 
          Cs={this.state.Cs}
          Ctc={this.state.Ctc}
          Cnc={this.state.Cnc}
          Ci={this.state.Ci}
        />

        <ReChart_Bar 
          Cs={this.state.Cs}
          Ctc={this.state.Ctc}
          Cnc={this.state.Cnc}
          Ci={this.state.Ci}
        />
      </div>)
    }
  }
 
  showFormatedContent() {
    if (this.state.formatedContent != '') {
      return (
        <div>
          
          <TableDisplay 
            content={this.state.formatedContent} 
            Cs={this.state.Cs}
            Ctc={this.state.Ctc}
            Cnc={this.state.Cnc}
            Ci={this.state.Ci}/>

          {/* <input type="button" className="success" onClick={this.changeVisual} value="Data Visualization" /> */}
          <input 
            type="button" 
            value="Data Visualization" 
            variant="contained" 
            color="secondary" 
            className="btn btn-success" 
            onClick={this.changeVisual}/>
          {this.ShowVisual()}

          <h4 style={{ marginLeft: '350px' }}>Formated File Content</h4>
          <hr className="col mb-3" />
          <Highlight language="java">
            {this.state.formatedContent}
          </Highlight>
        </div>
      )
    }
  }

  clearContent() {
    this.setState({
      content: "",
      formatedContent: "",
      files: []
    })
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
            }, () => {
              if (this.state.files.length > 0)
                this.handleFileChoosen(fileItems[0].file)
            });


          }}
          onremovefile={this.clearContent.bind(this)}
        />

        {this.showContent()}

        {this.showFormatedContent()}
      </div>
    );
  }
}

export default FilePondUploader;