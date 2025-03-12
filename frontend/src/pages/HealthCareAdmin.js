import Calendar from '../components/Calendar';
import React, { useEffect } from 'react';

function HealthCare(){
    useEffect(() => {
    // Dynamically add CSS files
    const linkNiceSelect = document.createElement('link');
    linkNiceSelect.rel = 'stylesheet';
    linkNiceSelect.href = '/assets/vendor/jquery-nice-select/css/nice-select.css';
    document.head.appendChild(linkNiceSelect);

    const linkNoUiSlider = document.createElement('link');
    linkNoUiSlider.rel = 'stylesheet';
    linkNoUiSlider.href = '/assets/vendor/nouislider/nouislider.min.css';
    document.head.appendChild(linkNoUiSlider);

    const linkStyle = document.createElement('link');
    linkStyle.rel = 'stylesheet';
    linkStyle.href = '/assets/css/style.css';
    document.head.appendChild(linkStyle);

    // Dynamically add JavaScript files
    const scriptGlobal = document.createElement('script');
    scriptGlobal.src = '/assets/vendor/global/global.min.js';
    document.body.appendChild(scriptGlobal);

    const scriptChart = document.createElement('script');
    scriptChart.src = '/assets/vendor/chart.js/Chart.bundle.min.js';
    document.body.appendChild(scriptChart);

    const scriptNiceSelect = document.createElement('script');
    scriptNiceSelect.src = '/assets/vendor/jquery-nice-select/js/jquery.nice-select.min.js';
    document.body.appendChild(scriptNiceSelect);

    const scriptApexChart = document.createElement('script');
    scriptApexChart.src = '/assets/vendor/apexchart/apexchart.js';
    document.body.appendChild(scriptApexChart);

    const scriptNoUiSlider = document.createElement('script');
    scriptNoUiSlider.src = '/assets/vendor/nouislider/nouislider.min.js';
    document.body.appendChild(scriptNoUiSlider);

    const scriptDlabNavInit = document.createElement('script');
    scriptDlabNavInit.src = '/assets/js/dlabnav-init.js';
    document.body.appendChild(scriptDlabNavInit);

    const scriptDemo = document.createElement('script');
    scriptDemo.src = '/assets/js/demo.js';
    document.body.appendChild(scriptDemo);

    const scriptStyleSwitcher = document.createElement('script');
    scriptStyleSwitcher.src = '/assets/js/styleSwitcher.js';
    document.body.appendChild(scriptStyleSwitcher);

    const scriptCustom = document.createElement('script');
    scriptCustom.src = '/assets/js/custom.min.js';
    document.body.appendChild(scriptCustom);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(linkNiceSelect);
      document.head.removeChild(linkNoUiSlider);
      document.head.removeChild(linkStyle);

      document.body.removeChild(scriptGlobal);
      document.body.removeChild(scriptChart);
      document.body.removeChild(scriptNiceSelect);
      document.body.removeChild(scriptApexChart);
      document.body.removeChild(scriptNoUiSlider);
      document.body.removeChild(scriptDlabNavInit);
      document.body.removeChild(scriptDemo);
      document.body.removeChild(scriptStyleSwitcher);
      document.body.removeChild(scriptCustom);
    };
  }, []);
    return (
        <div classNameName='HealthCare'>

           
    
            <div id="main-wrapper">
    
              
                <div className="nav-header">
                    <a href="index.html" className="brand-logo">
                <svg className="logo-abbr" width="53" height="53" viewBox="0 0 53 53">
                  <path className="svg-logo-primary-path" d="M48.3418 41.8457H41.0957C36.8148 41.8457 33.332 38.3629 33.332 34.082C33.332 29.8011 36.8148 26.3184 41.0957 26.3184H48.3418V19.2275C48.3418 16.9408 46.4879 15.0869 44.2012 15.0869H4.14062C1.85386 15.0869 0 16.9408 0 19.2275V48.8594C0 51.1462 1.85386 53 4.14062 53H44.2012C46.4879 53 48.3418 51.1462 48.3418 48.8594V41.8457Z" fill="#5BCFC5"/>
                  <path className="svg-logo-primary-path" d="M51.4473 29.4238H41.0957C38.5272 29.4238 36.4375 31.5135 36.4375 34.082C36.4375 36.6506 38.5272 38.7402 41.0957 38.7402H51.4473C52.3034 38.7402 53 38.0437 53 37.1875V30.9766C53 30.1204 52.3034 29.4238 51.4473 29.4238ZM41.0957 35.6348C40.2382 35.6348 39.543 34.9396 39.543 34.082C39.543 33.2245 40.2382 32.5293 41.0957 32.5293C41.9532 32.5293 42.6484 33.2245 42.6484 34.082C42.6484 34.9396 41.9532 35.6348 41.0957 35.6348Z" fill="#5BCFC5"/>
                </svg>
                        
                <p className="brand-title" width="124px" height="33px"  style={{fontSize: "25px"}}>HealthCare</p>
                    </a>
                    <div className="nav-control">
                        <div className="hamburger">
                            <span className="line"></span><span className="line"></span><span className="line"></span>
                        </div>
                    </div>
                </div>
              
                <div className="header">
                    <div className="header-content">
                        <nav className="navbar navbar-expand">
                            <div className="collapse navbar-collapse justify-content-between">
                                <div className="header-left">
                      <div className="dashboard_bar">
                                        Dashboard 
                                    </div>
                                </div>
                                <ul className="navbar-nav header-right">
                        <li className="nav-item">
                            <div className="input-group search-area">
                            <input type="text" className="form-control" placeholder="Search here..." />
                            <span className="input-group-text"><a href="javascript:void(0)"><i className="flaticon-381-search-2"></i></a></span>
                            </div>
                        </li>
                 
                         <li className="nav-item dropdown notification_dropdown">
                            <a className="nav-link  ai-icon" href="javascript:void(0);" role="button" data-bs-toggle="dropdown">
                              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.638 4.9936V2.3C12.638 1.5824 13.2484 1 14.0006 1C14.7513 1 15.3631 1.5824 15.3631 2.3V4.9936C17.3879 5.2718 19.2805 6.1688 20.7438 7.565C22.5329 9.2719 23.5384 11.5872 23.5384 14V18.8932L24.6408 20.9966C25.1681 22.0041 25.1122 23.2001 24.4909 24.1582C23.8709 25.1163 22.774 25.7 21.5941 25.7H15.3631C15.3631 26.4176 14.7513 27 14.0006 27C13.2484 27 12.638 26.4176 12.638 25.7H6.40705C5.22571 25.7 4.12888 25.1163 3.50892 24.1582C2.88759 23.2001 2.83172 22.0041 3.36039 20.9966L4.46268 18.8932V14C4.46268 11.5872 5.46691 9.2719 7.25594 7.565C8.72068 6.1688 10.6119 5.2718 12.638 4.9936ZM14.0006 7.5C12.1924 7.5 10.4607 8.1851 9.18259 9.4045C7.90452 10.6226 7.18779 12.2762 7.18779 14V19.2C7.18779 19.4015 7.13739 19.6004 7.04337 19.7811C7.04337 19.7811 6.43703 20.9381 5.79662 22.1588C5.69171 22.3603 5.70261 22.6008 5.82661 22.7919C5.9506 22.983 6.16996 23.1 6.40705 23.1H21.5941C21.8298 23.1 22.0492 22.983 22.1732 22.7919C22.2972 22.6008 22.3081 22.3603 22.2031 22.1588C21.5627 20.9381 20.9564 19.7811 20.9564 19.7811C20.8624 19.6004 20.8133 19.4015 20.8133 19.2V14C20.8133 12.2762 20.0953 10.6226 18.8172 9.4045C17.5391 8.1851 15.8073 7.5 14.0006 7.5Z" fill="#4f7086"/>
                            </svg>
                              <span className="badge light text-white bg-primary rounded-circle">12</span>
                                        </a>
                                      
                                    </li>
                        
                                </ul>
                            </div>
                </nav>
              </div>
            </div>
              
                <div className="dlabnav">
                    <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                  <li className="dropdown header-profile">
                    <a className="nav-link" href="/profile.html"  role="button" onClick={(e) => { e.preventDefault();  }} >
                      <img src="assets/images/ion/man (1).png" width="20" alt=""/>
                      <div className="header-info ms-3">
                        <span className="font-w600 ">Hi,<b>AC</b></span>
                        <small className="text-end font-w400">xyz@gmail.com</small>
                      </div>
                    </a>
                    
                  </li>
                 <li><a href="index.html.html" aria-expanded="false">
                      <i className="flaticon-025-dashboard"></i>
                      <span className="nav-text">Dashboard</span>
                    </a>
                    </li>
                    
                    <li><a href="javascript:void()" aria-expanded="false">
                    <i className="flaticon-050-info"></i>
                      <span className="nav-text">Syncs Panel</span>
                    </a>
                    </li>
                    <li><a href="javascript:void()" aria-expanded="false">
                      <i className="flaticon-022-copy"></i>
                      <span className="nav-text">Signing Out</span>
                    </a>
                    </li>
                </ul>
              </div>
                </div>
               
                <div className="content-body">
                 
              <div className="container-fluid">
                <div className="row invoice-card-row justify-content-center">
                  <div className="col-xl-3 col-xxl-3 col-sm-6">
                    <div className="card bg-success invoice-card">
                      <div className="card-body d-flex">
                        <div className="icon me-3">
                          <svg width="35px" height="34px">
                          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                          d="M32.482,9.730 C31.092,6.789 28.892,4.319 26.120,2.586 C22.265,0.183 17.698,-0.580 13.271,0.442 C8.843,1.458 5.074,4.140 2.668,7.990 C0.255,11.840 -0.509,16.394 0.514,20.822 C1.538,25.244 4.224,29.008 8.072,31.411 C10.785,33.104 13.896,34.000 17.080,34.000 L17.286,34.000 C20.456,33.960 23.541,33.044 26.213,31.358 C26.991,30.866 27.217,29.844 26.725,29.067 C26.234,28.291 25.210,28.065 24.432,28.556 C22.285,29.917 19.799,30.654 17.246,30.687 C14.627,30.720 12.067,29.997 9.834,28.609 C6.730,26.671 4.569,23.644 3.752,20.085 C2.934,16.527 3.546,12.863 5.486,9.763 C9.488,3.370 17.957,1.418 24.359,5.414 C26.592,6.808 28.360,8.793 29.477,11.157 C30.568,13.460 30.993,16.016 30.707,18.539 C30.607,19.448 31.259,20.271 32.177,20.371 C33.087,20.470 33.911,19.820 34.011,18.904 C34.363,15.764 33.832,12.591 32.482,9.730 L32.482,9.730 Z"/>
                          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                          d="M22.593,11.237 L14.575,19.244 L11.604,16.277 C10.952,15.626 9.902,15.626 9.250,16.277 C8.599,16.927 8.599,17.976 9.250,18.627 L13.399,22.770 C13.725,23.095 14.150,23.254 14.575,23.254 C15.001,23.254 15.427,23.095 15.753,22.770 L24.940,13.588 C25.592,12.937 25.592,11.888 24.940,11.237 C24.289,10.593 23.238,10.593 22.593,11.237 L22.593,11.237 Z"/>
                          </svg>
                          
                        </div>
                        <div>
                          <h2 className="text-white invoice-num">983</h2>
                          <span className="text-white fs-18">Review Count</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-3 col-sm-6">
                    <div className="card bg-info invoice-card">
                      <div className="card-body d-flex">
                        <div className="icon me-3">
                          <svg  width="35px" height="34px">
                          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                          d="M33.002,9.728 C31.612,6.787 29.411,4.316 26.638,2.583 C22.781,0.179 18.219,-0.584 13.784,0.438 C9.356,1.454 5.585,4.137 3.178,7.989 C0.764,11.840 -0.000,16.396 1.023,20.825 C2.048,25.247 4.734,29.013 8.584,31.417 C11.297,33.110 14.409,34.006 17.594,34.006 L17.800,34.006 C20.973,33.967 24.058,33.050 26.731,31.363 C27.509,30.872 27.735,29.849 27.243,29.072 C26.751,28.296 25.727,28.070 24.949,28.561 C22.801,29.922 20.314,30.660 17.761,30.693 C15.141,30.726 12.581,30.002 10.346,28.614 C7.241,26.675 5.080,23.647 4.262,20.088 C3.444,16.515 4.056,12.850 5.997,9.748 C10.001,3.353 18.473,1.401 24.876,5.399 C27.110,6.793 28.879,8.779 29.996,11.143 C31.087,13.447 31.513,16.004 31.227,18.527 C31.126,19.437 31.778,20.260 32.696,20.360 C33.607,20.459 34.432,19.809 34.531,18.892 C34.884,15.765 34.352,12.591 33.002,9.728 L33.002,9.728 Z"/>
                          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                          d="M23.380,11.236 C22.728,10.585 21.678,10.585 21.026,11.236 L17.608,14.656 L14.190,11.243 C13.539,10.592 12.488,10.592 11.836,11.243 C11.184,11.893 11.184,12.942 11.836,13.593 L15.254,17.006 L11.836,20.420 C11.184,21.071 11.184,22.120 11.836,22.770 C12.162,23.096 12.588,23.255 13.014,23.255 C13.438,23.255 13.864,23.096 14.190,22.770 L17.608,19.357 L21.026,22.770 C21.352,23.096 21.777,23.255 22.203,23.255 C22.629,23.255 23.054,23.096 23.380,22.770 C24.031,22.120 24.031,21.071 23.380,20.420 L19.962,17.000 L23.380,13.587 C24.031,12.936 24.031,11.887 23.380,11.236 L23.380,11.236 Z"/>
                          </svg>
                          
                        </div>
                        <div>
                          <h2 className="text-white invoice-num">1256</h2>
                          <span className="text-white fs-18">Bookings</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-xxl-3 col-sm-6">
                    <div className="card bg-secondary invoice-card">
                      <div className="card-body d-flex">
                        <div className="icon me-3">
                          <svg  width="33px" height="32px">
                          <path fill-rule="evenodd"  fill="rgb(255, 255, 255)"
                          d="M31.963,30.931 C31.818,31.160 31.609,31.342 31.363,31.455 C31.175,31.538 30.972,31.582 30.767,31.583 C30.429,31.583 30.102,31.463 29.845,31.243 L25.802,27.786 L21.758,31.243 C21.502,31.463 21.175,31.583 20.837,31.583 C20.498,31.583 20.172,31.463 19.915,31.243 L15.872,27.786 L11.829,31.243 C11.622,31.420 11.370,31.534 11.101,31.572 C10.832,31.609 10.558,31.569 10.311,31.455 C10.065,31.342 9.857,31.160 9.710,30.931 C9.565,30.703 9.488,30.437 9.488,30.167 L9.488,17.416 L2.395,17.416 C2.019,17.416 1.658,17.267 1.392,17.001 C1.126,16.736 0.976,16.375 0.976,16.000 L0.976,6.083 C0.976,4.580 1.574,3.139 2.639,2.076 C3.703,1.014 5.146,0.417 6.651,0.417 L26.511,0.417 C28.016,0.417 29.459,1.014 30.524,2.076 C31.588,3.139 32.186,4.580 32.186,6.083 L32.186,30.167 C32.186,30.437 32.109,30.703 31.963,30.931 ZM9.488,6.083 C9.488,5.332 9.189,4.611 8.657,4.080 C8.125,3.548 7.403,3.250 6.651,3.250 C5.898,3.250 5.177,3.548 4.645,4.080 C4.113,4.611 3.814,5.332 3.814,6.083 L3.814,14.583 L9.488,14.583 L9.488,6.083 ZM29.348,6.083 C29.348,5.332 29.050,4.611 28.517,4.080 C27.985,3.548 27.263,3.250 26.511,3.250 L11.559,3.250 C12.059,4.111 12.324,5.088 12.325,6.083 L12.325,27.092 L14.950,24.840 C15.207,24.620 15.534,24.500 15.872,24.500 C16.210,24.500 16.537,24.620 16.794,24.840 L20.837,28.296 L24.880,24.840 C25.137,24.620 25.463,24.500 25.802,24.500 C26.140,24.500 26.467,24.620 26.724,24.840 L29.348,27.092 L29.348,6.083 ZM25.092,20.250 L16.581,20.250 C16.205,20.250 15.844,20.101 15.578,19.835 C15.312,19.569 15.162,19.209 15.162,18.833 C15.162,18.457 15.312,18.097 15.578,17.831 C15.844,17.566 16.205,17.416 16.581,17.416 L25.092,17.416 C25.469,17.416 25.829,17.566 26.096,17.831 C26.362,18.097 26.511,18.457 26.511,18.833 C26.511,19.209 26.362,19.569 26.096,19.835 C25.829,20.101 25.469,20.250 25.092,20.250 ZM25.092,14.583 L16.581,14.583 C16.205,14.583 15.844,14.434 15.578,14.168 C15.312,13.903 15.162,13.542 15.162,13.167 C15.162,12.791 15.312,12.430 15.578,12.165 C15.844,11.899 16.205,11.750 16.581,11.750 L25.092,11.750 C25.469,11.750 25.829,11.899 26.096,12.165 C26.362,12.430 26.511,12.791 26.511,13.167 C26.511,13.542 26.362,13.903 26.096,14.168 C25.829,14.434 25.469,14.583 25.092,14.583 ZM25.092,8.916 L16.581,8.916 C16.205,8.916 15.844,8.767 15.578,8.501 C15.312,8.236 15.162,7.875 15.162,7.500 C15.162,7.124 15.312,6.764 15.578,6.498 C15.844,6.232 16.205,6.083 16.581,6.083 L25.092,6.083 C25.469,6.083 25.829,6.232 26.096,6.498 C26.362,6.764 26.511,7.124 26.511,7.500 C26.511,7.875 26.362,8.236 26.096,8.501 C25.829,8.767 25.469,8.916 25.092,8.916 Z"/>
                          </svg>
                        
                        </div>
                        <div>
                          <h2 className="text-white invoice-num">652</h2>
                          <span className="text-white fs-18">Total Client </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-9 col-xxl-12">
                    <div className="card">
                      <div className="card-body">
                      <Calendar />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xxl-12">
                    <div className="card">
                      <div className="card-header d-block d-sm-flex border-0">
                        <div className="me-3">
                          <h4 className="card-title mb-2">Previous Appointments</h4>
                          <span className="fs-12">These are Appointments history filtered by Month, Week and current Day</span>
                        </div>
                        <div className="card-tabs mt-3 mt-sm-0">
                          <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" data-bs-toggle="tab" href="#monthly" role="tab">Monthly</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#Weekly" role="tab">Weekly</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#Today" role="tab">Today</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body tab-content p-0">
                        <div className="tab-pane active show fade" id="monthly" role="tabpanel">
                          <div className="table-responsive">
                            <table className="table table-responsive-md card-table transactions-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">XYZ Store ID</a></h6>
                                    <span className="fs-14">Cashback</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 4, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-success fs-16 font-w500 text-end d-block">Completed</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-danger tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 19.0125C34.8937 19.6906 35.1836 20.5109 35.8617 20.8391C37.7484 21.7469 39.3453 23.1578 40.4828 24.9242C41.6476 26.7344 42.2656 28.8344 42.2656 31C42.2656 37.2125 37.2125 42.2656 31 42.2656C24.7875 42.2656 19.7344 37.2125 19.7344 31C19.7344 28.8344 20.3523 26.7344 21.5117 24.9187C22.6437 23.1523 24.2461 21.7414 26.1328 20.8336C26.8109 20.5055 27.1008 19.6906 26.7726 19.007C26.4445 18.3289 25.6297 18.0391 24.9461 18.3672C22.6 19.4937 20.6148 21.2437 19.2094 23.4422C17.7656 25.6953 17 28.3094 17 31C17 34.7406 18.4547 38.257 21.1015 40.8984C23.743 43.5453 27.2594 45 31 45C34.7406 45 38.257 43.5453 40.8984 40.8984C43.5453 38.2516 45 34.7406 45 31C45 28.3094 44.2344 25.6953 42.7851 23.4422C41.3742 21.2492 39.389 19.4937 37.0484 18.3672C36.3648 18.0445 35.55 18.3289 35.2219 19.0125Z" fill="#FF2E2E"></path><path d="M36.3211 30.2726C36.589 30.0047 36.7203 29.6547 36.7203 29.3047C36.7203 28.9547 36.589 28.6047 36.3211 28.3367L32.8812 24.8969C32.3781 24.3937 31.7109 24.1203 31.0055 24.1203C30.3 24.1203 29.6273 24.3992 29.1297 24.8969L25.6898 28.3367C25.1539 28.8726 25.1539 29.7367 25.6898 30.2726C26.2258 30.8086 27.0898 30.8086 27.6258 30.2726L29.6437 28.2547L29.6437 36.0258C29.6437 36.7804 30.2562 37.3929 31.0109 37.3929C31.7656 37.3929 32.3781 36.7804 32.3781 36.0258L32.3781 28.2492L34.3961 30.2672C34.9211 30.8031 35.7851 30.8031 36.3211 30.2726Z" fill="#FF2E2E"></path></g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Chef Renata</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 5, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">-$167</span></td>
                                  <td><span className="text-light fs-16 font-w500 text-end d-block">Pending</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Cindy Alexandro</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 5, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-danger fs-16 font-w500 text-end d-block">Canceled</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Paipal</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 4, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-success fs-16 font-w500 text-end d-block">Completed</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-danger tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 19.0125C34.8937 19.6906 35.1836 20.5109 35.8617 20.8391C37.7484 21.7469 39.3453 23.1578 40.4828 24.9242C41.6476 26.7344 42.2656 28.8344 42.2656 31C42.2656 37.2125 37.2125 42.2656 31 42.2656C24.7875 42.2656 19.7344 37.2125 19.7344 31C19.7344 28.8344 20.3523 26.7344 21.5117 24.9187C22.6437 23.1523 24.2461 21.7414 26.1328 20.8336C26.8109 20.5055 27.1008 19.6906 26.7726 19.007C26.4445 18.3289 25.6297 18.0391 24.9461 18.3672C22.6 19.4937 20.6148 21.2437 19.2094 23.4422C17.7656 25.6953 17 28.3094 17 31C17 34.7406 18.4547 38.257 21.1015 40.8984C23.743 43.5453 27.2594 45 31 45C34.7406 45 38.257 43.5453 40.8984 40.8984C43.5453 38.2516 45 34.7406 45 31C45 28.3094 44.2344 25.6953 42.7851 23.4422C41.3742 21.2492 39.389 19.4937 37.0484 18.3672C36.3648 18.0445 35.55 18.3289 35.2219 19.0125Z" fill="#FF2E2E"></path><path d="M36.3211 30.2726C36.589 30.0047 36.7203 29.6547 36.7203 29.3047C36.7203 28.9547 36.589 28.6047 36.3211 28.3367L32.8812 24.8969C32.3781 24.3937 31.7109 24.1203 31.0055 24.1203C30.3 24.1203 29.6273 24.3992 29.1297 24.8969L25.6898 28.3367C25.1539 28.8726 25.1539 29.7367 25.6898 30.2726C26.2258 30.8086 27.0898 30.8086 27.6258 30.2726L29.6437 28.2547L29.6437 36.0258C29.6437 36.7804 30.2562 37.3929 31.0109 37.3929C31.7656 37.3929 32.3781 36.7804 32.3781 36.0258L32.3781 28.2492L34.3961 30.2672C34.9211 30.8031 35.7851 30.8031 36.3211 30.2726Z" fill="#FF2E2E"></path></g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Hawkins Jr.</a></h6>
                                    <span className="fs-14">Cashback</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 4, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-danger fs-16 font-w500 text-end d-block">Canceled</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="tab-pane" id="Weekly" role="tabpanel">
                          <div className="table-responsive">
                            <table className="table table-responsive-md card-table transactions-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">XYZ Store ID</a></h6>
                                    <span className="fs-14">Cashback</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 4, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-success fs-16 font-w500 text-end d-block">Completed</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-danger tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 19.0125C34.8937 19.6906 35.1836 20.5109 35.8617 20.8391C37.7484 21.7469 39.3453 23.1578 40.4828 24.9242C41.6476 26.7344 42.2656 28.8344 42.2656 31C42.2656 37.2125 37.2125 42.2656 31 42.2656C24.7875 42.2656 19.7344 37.2125 19.7344 31C19.7344 28.8344 20.3523 26.7344 21.5117 24.9187C22.6437 23.1523 24.2461 21.7414 26.1328 20.8336C26.8109 20.5055 27.1008 19.6906 26.7726 19.007C26.4445 18.3289 25.6297 18.0391 24.9461 18.3672C22.6 19.4937 20.6148 21.2437 19.2094 23.4422C17.7656 25.6953 17 28.3094 17 31C17 34.7406 18.4547 38.257 21.1015 40.8984C23.743 43.5453 27.2594 45 31 45C34.7406 45 38.257 43.5453 40.8984 40.8984C43.5453 38.2516 45 34.7406 45 31C45 28.3094 44.2344 25.6953 42.7851 23.4422C41.3742 21.2492 39.389 19.4937 37.0484 18.3672C36.3648 18.0445 35.55 18.3289 35.2219 19.0125Z" fill="#FF2E2E"></path><path d="M36.3211 30.2726C36.589 30.0047 36.7203 29.6547 36.7203 29.3047C36.7203 28.9547 36.589 28.6047 36.3211 28.3367L32.8812 24.8969C32.3781 24.3937 31.7109 24.1203 31.0055 24.1203C30.3 24.1203 29.6273 24.3992 29.1297 24.8969L25.6898 28.3367C25.1539 28.8726 25.1539 29.7367 25.6898 30.2726C26.2258 30.8086 27.0898 30.8086 27.6258 30.2726L29.6437 28.2547L29.6437 36.0258C29.6437 36.7804 30.2562 37.3929 31.0109 37.3929C31.7656 37.3929 32.3781 36.7804 32.3781 36.0258L32.3781 28.2492L34.3961 30.2672C34.9211 30.8031 35.7851 30.8031 36.3211 30.2726Z" fill="#FF2E2E"></path></g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Chef Renata</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 5, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">-$167</span></td>
                                  <td><span className="text-light fs-16 font-w500 text-end d-block">Pending</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Cindy Alexandro</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 5, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-danger fs-16 font-w500 text-end d-block">Canceled</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="tab-pane" id="Today" role="tabpanel">
                          <div className="table-responsive">
                            <table className="table table-responsive-md card-table transactions-table">
                              <tbody>
                                <tr>
                                  <td>
                                    <svg className="bgl-danger tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 19.0125C34.8937 19.6906 35.1836 20.5109 35.8617 20.8391C37.7484 21.7469 39.3453 23.1578 40.4828 24.9242C41.6476 26.7344 42.2656 28.8344 42.2656 31C42.2656 37.2125 37.2125 42.2656 31 42.2656C24.7875 42.2656 19.7344 37.2125 19.7344 31C19.7344 28.8344 20.3523 26.7344 21.5117 24.9187C22.6437 23.1523 24.2461 21.7414 26.1328 20.8336C26.8109 20.5055 27.1008 19.6906 26.7726 19.007C26.4445 18.3289 25.6297 18.0391 24.9461 18.3672C22.6 19.4937 20.6148 21.2437 19.2094 23.4422C17.7656 25.6953 17 28.3094 17 31C17 34.7406 18.4547 38.257 21.1015 40.8984C23.743 43.5453 27.2594 45 31 45C34.7406 45 38.257 43.5453 40.8984 40.8984C43.5453 38.2516 45 34.7406 45 31C45 28.3094 44.2344 25.6953 42.7851 23.4422C41.3742 21.2492 39.389 19.4937 37.0484 18.3672C36.3648 18.0445 35.55 18.3289 35.2219 19.0125Z" fill="#FF2E2E"></path><path d="M36.3211 30.2726C36.589 30.0047 36.7203 29.6547 36.7203 29.3047C36.7203 28.9547 36.589 28.6047 36.3211 28.3367L32.8812 24.8969C32.3781 24.3937 31.7109 24.1203 31.0055 24.1203C30.3 24.1203 29.6273 24.3992 29.1297 24.8969L25.6898 28.3367C25.1539 28.8726 25.1539 29.7367 25.6898 30.2726C26.2258 30.8086 27.0898 30.8086 27.6258 30.2726L29.6437 28.2547L29.6437 36.0258C29.6437 36.7804 30.2562 37.3929 31.0109 37.3929C31.7656 37.3929 32.3781 36.7804 32.3781 36.0258L32.3781 28.2492L34.3961 30.2672C34.9211 30.8031 35.7851 30.8031 36.3211 30.2726Z" fill="#FF2E2E"></path></g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Chef Renata</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 5, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">-$167</span></td>
                                  <td><span className="text-light fs-16 font-w500 text-end d-block">Pending</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Cindy Alexandro</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 5, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-danger fs-16 font-w500 text-end d-block">Canceled</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-success tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 42.9875C34.8938 42.3094 35.1836 41.4891 35.8617 41.1609C37.7484 40.2531 39.3453 38.8422 40.4828 37.0758C41.6477 35.2656 42.2656 33.1656 42.2656 31C42.2656 24.7875 37.2125 19.7344 31 19.7344C24.7875 19.7344 19.7344 24.7875 19.7344 31C19.7344 33.1656 20.3523 35.2656 21.5117 37.0813C22.6437 38.8477 24.2461 40.2586 26.1328 41.1664C26.8109 41.4945 27.1008 42.3094 26.7727 42.993C26.4445 43.6711 25.6297 43.9609 24.9461 43.6328C22.6 42.5063 20.6148 40.7563 19.2094 38.5578C17.7656 36.3047 17 33.6906 17 31C17 27.2594 18.4547 23.743 21.1016 21.1016C23.743 18.4547 27.2594 17 31 17C34.7406 17 38.257 18.4547 40.8984 21.1016C43.5453 23.7484 45 27.2594 45 31C45 33.6906 44.2344 36.3047 42.7852 38.5578C41.3742 40.7508 39.3891 42.5063 37.0484 43.6328C36.3648 43.9555 35.55 43.6711 35.2219 42.9875Z" fill="#2BC155"></path><path d="M36.3211 31.7274C36.5891 31.9953 36.7203 32.3453 36.7203 32.6953C36.7203 33.0453 36.5891 33.3953 36.3211 33.6633L32.8812 37.1031C32.3781 37.6063 31.7109 37.8797 31.0055 37.8797C30.3 37.8797 29.6273 37.6008 29.1297 37.1031L25.6898 33.6633C25.1539 33.1274 25.1539 32.2633 25.6898 31.7274C26.2258 31.1914 27.0898 31.1914 27.6258 31.7274L29.6437 33.7453L29.6437 25.9742C29.6437 25.2196 30.2562 24.6071 31.0109 24.6071C31.7656 24.6071 32.3781 25.2196 32.3781 25.9742L32.3781 33.7508L34.3961 31.7328C34.9211 31.1969 35.7852 31.1969 36.3211 31.7274Z" fill="#2BC155"></path>
                                      </g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Paipal</a></h6>
                                    <span className="fs-14">Transfer</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 4, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-success fs-16 font-w500 text-end d-block">Completed</span></td>
                                </tr>
                                <tr>
                                  <td>
                                    <svg className="bgl-danger tr-icon" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g><path d="M35.2219 19.0125C34.8937 19.6906 35.1836 20.5109 35.8617 20.8391C37.7484 21.7469 39.3453 23.1578 40.4828 24.9242C41.6476 26.7344 42.2656 28.8344 42.2656 31C42.2656 37.2125 37.2125 42.2656 31 42.2656C24.7875 42.2656 19.7344 37.2125 19.7344 31C19.7344 28.8344 20.3523 26.7344 21.5117 24.9187C22.6437 23.1523 24.2461 21.7414 26.1328 20.8336C26.8109 20.5055 27.1008 19.6906 26.7726 19.007C26.4445 18.3289 25.6297 18.0391 24.9461 18.3672C22.6 19.4937 20.6148 21.2437 19.2094 23.4422C17.7656 25.6953 17 28.3094 17 31C17 34.7406 18.4547 38.257 21.1015 40.8984C23.743 43.5453 27.2594 45 31 45C34.7406 45 38.257 43.5453 40.8984 40.8984C43.5453 38.2516 45 34.7406 45 31C45 28.3094 44.2344 25.6953 42.7851 23.4422C41.3742 21.2492 39.389 19.4937 37.0484 18.3672C36.3648 18.0445 35.55 18.3289 35.2219 19.0125Z" fill="#FF2E2E"></path><path d="M36.3211 30.2726C36.589 30.0047 36.7203 29.6547 36.7203 29.3047C36.7203 28.9547 36.589 28.6047 36.3211 28.3367L32.8812 24.8969C32.3781 24.3937 31.7109 24.1203 31.0055 24.1203C30.3 24.1203 29.6273 24.3992 29.1297 24.8969L25.6898 28.3367C25.1539 28.8726 25.1539 29.7367 25.6898 30.2726C26.2258 30.8086 27.0898 30.8086 27.6258 30.2726L29.6437 28.2547L29.6437 36.0258C29.6437 36.7804 30.2562 37.3929 31.0109 37.3929C31.7656 37.3929 32.3781 36.7804 32.3781 36.0258L32.3781 28.2492L34.3961 30.2672C34.9211 30.8031 35.7851 30.8031 36.3211 30.2726Z" fill="#FF2E2E"></path></g>
                                    </svg>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 font-w600 mb-0"><a href="javascript:void(0);" className="text-black">Hawkins Jr.</a></h6>
                                    <span className="fs-14">Cashback</span>
                                  </td>
                                  <td>
                                    <h6 className="fs-16 text-black font-w600 mb-0">June 4, 2020</h6>
                                    <span className="fs-14">05:34:45 AM</span>
                                  </td>
                                  <td><span className="fs-16 text-black font-w600">+$5,553</span></td>
                                  <td><span className="text-danger fs-16 font-w500 text-end d-block">Canceled</span></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xxl-12">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card coin-card">
                          <div className="card-body d-sm-flex d-block align-items-center">
                            <span className="coin-icon">
                              <svg width="38" height="41" viewBox="0 0 38 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g><path d="M14.0413 32.5832C15.7416 32.5934 17.4269 32.2659 18.9997 31.6199C20.5708 32.2714 22.2572 32.5991 23.958 32.5832C29.1218 32.5832 33.1663 29.8278 33.1663 26.3088V20.441C33.1663 16.922 29.1218 14.1666 23.958 14.1666C23.7186 14.1666 23.4834 14.1779 23.2497 14.1906V7.55498C23.2497 4.10823 19.2051 1.41656 14.0413 1.41656C8.87759 1.41656 4.83301 4.10823 4.83301 7.55498V26.4448C4.83301 29.8916 8.87759 32.5832 14.0413 32.5832ZM30.333 26.3088C30.333 27.9366 27.715 29.7499 23.958 29.7499C20.201 29.7499 17.583 27.9366 17.583 26.3088V24.9984C19.5015 26.1652 21.7131 26.7604 23.958 26.714C26.203 26.7604 28.4145 26.1652 30.333 24.9984V26.3088ZM23.958 16.9999C27.715 16.9999 30.333 18.8132 30.333 20.441C30.333 22.0687 27.715 23.8807 23.958 23.8807C20.201 23.8807 17.583 22.0673 17.583 20.441C17.583 18.8147 20.201 16.9999 23.958 16.9999ZM14.0413 4.2499C17.7983 4.2499 20.4163 5.9924 20.4163 7.55498C20.4163 9.11757 17.7983 10.8615 14.0413 10.8615C10.2843 10.8615 7.66634 9.11898 7.66634 7.55498C7.66634 5.99098 10.2843 4.2499 14.0413 4.2499ZM7.66634 12.0161C9.59282 13.1601 11.8012 13.7417 14.0413 13.6948C16.2814 13.7417 18.4899 13.1601 20.4163 12.0161V14.6341C18.8724 15.0232 17.4565 15.8078 16.308 16.9107C15.5631 17.0718 14.8034 17.1545 14.0413 17.1572C10.2843 17.1572 7.66634 15.4146 7.66634 13.8521V12.0161ZM7.66634 18.3132C9.59323 19.4561 11.8015 20.0371 14.0413 19.9905C14.2935 19.9905 14.5372 19.9593 14.7851 19.9466C14.764 20.1106 14.7522 20.2756 14.7497 20.441V23.3947C14.5117 23.4089 14.2822 23.4542 14.0413 23.4542C10.2843 23.4542 7.66634 21.7117 7.66634 20.1477V18.3132ZM7.66634 24.6088C9.59282 25.7529 11.8012 26.3344 14.0413 26.2876C14.2793 26.2876 14.5131 26.2692 14.7497 26.2578V26.3088C14.7699 27.5148 15.2334 28.6711 16.0516 29.5572C15.3887 29.6824 14.7159 29.7469 14.0413 29.7499C10.2843 29.7499 7.66634 28.0074 7.66634 26.4448V24.6088Z" fill="#fff"></path></g>
                              </svg>
                            </span>
                            <div>
                              <h3 className="text-white">Get managed by Dompet’s Virtual Assistant</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                              <a className="text-white" href="javascript:void(0);">Learn more </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
      );
}

export default HealthCare
