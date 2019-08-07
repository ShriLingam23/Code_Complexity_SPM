import React from 'react';

import './Assets/css/Home.css';
import './Assets/css/LogoGather.css';
import 'bootstrap/dist/css/bootstrap.css';

// import LogoGather from './components/Home/LogoGatherer';
import TinyEditor from './components/Home/TinyEditor';
// import FilePicker from './components/Home/FilePicker';
import FilePondUploader from './components/Home/FilePondUploader';
import Footer from './components/Home/Footer';

function App() {
  return (
    <div className="App" >
      {/* <LogoGather> */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="page-caption">
                <h1 className="page-title">Code Complexity Measeurer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </LogoGather> */}
      {/* <!-- /.page-header-->
      <!-- news --> */}
      <div className="card-section">
        <div className="container">
          <div className="card-block bg-white mb30">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {/* <!-- section-title --> */}
                <div className="section-title mb-0">
                  <h2>All about Hike. We share our knowledge on blog</h2>
                  <p>Our approach is very simple: we define your problem and give the best solution. </p>
                  <FilePondUploader/>
                  <hr/>
                  <h4>File Picker Option</h4>
                  <TinyEditor/>
                  {/* <hr/> */}
                  {/* <h4>File Picker Option</h4> */}
                  {/* <FilePicker /> */}
                </div>
                {/* <!-- /.section-title --> */}
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <Footer/>
      </div>
    </div>
     
    
  );
}

export default App;
