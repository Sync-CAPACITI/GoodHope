import React from "react";
import "../../css/ParentDash.css";
import SpecialNeedsForm from "./AddChild";
import AppointmentForm from "../components/common/hero/Appointments";

// function ParentDashboard() {
//   return (
//     <div classNameName="HealthCare">
//       <div id="main-wrapper">
//         <div className="nav-header">
//           <a href="index.html" className="brand-logo">
//             <svg
//               className="logo-abbr"
//               width="53"
//               height="53"
//               viewBox="0 0 53 53"
//             >
//               <path
//                 className="svg-logo-primary-path"
//                 d="M48.3418 41.8457H41.0957C36.8148 41.8457 33.332 38.3629 33.332 34.082C33.332 29.8011 36.8148 26.3184 41.0957 26.3184H48.3418V19.2275C48.3418 16.9408 46.4879 15.0869 44.2012 15.0869H4.14062C1.85386 15.0869 0 16.9408 0 19.2275V48.8594C0 51.1462 1.85386 53 4.14062 53H44.2012C46.4879 53 48.3418 51.1462 48.3418 48.8594V41.8457Z"
//                 fill="#5BCFC5"
//               />
//               <path
//                 className="svg-logo-primary-path"
//                 d="M51.4473 29.4238H41.0957C38.5272 29.4238 36.4375 31.5135 36.4375 34.082C36.4375 36.6506 38.5272 38.7402 41.0957 38.7402H51.4473C52.3034 38.7402 53 38.0437 53 37.1875V30.9766C53 30.1204 52.3034 29.4238 51.4473 29.4238ZM41.0957 35.6348C40.2382 35.6348 39.543 34.9396 39.543 34.082C39.543 33.2245 40.2382 32.5293 41.0957 32.5293C41.9532 32.5293 42.6484 33.2245 42.6484 34.082C42.6484 34.9396 41.9532 35.6348 41.0957 35.6348Z"
//                 fill="#5BCFC5"
//               />
//             </svg>

//             <p
//               className="brand-title"
//               width="124px"
//               height="33px"
//               style={{ fontSize: "25px" }}
//             >
//               My Dashboard
//             </p>
//           </a>
//           <div className="nav-control">
//             <div className="hamburger">
//               <span className="line"></span>
//               <span className="line"></span>
//               <span className="line"></span>
//             </div>
//           </div>
//         </div>

//         <div className="header">
//           <div className="header-content">
//             <nav className="navbar navbar-expand">
//               <div className="collapse navbar-collapse justify-content-between">
//                 <div className="header-left">
//                   <div className="dashboard_bar">Dashboard</div>
//                 </div>
//                 <ul className="navbar-nav header-right">
//                   <li className="nav-item">
//                     <div className="input-group search-area">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Search here..."
//                       />
//                       <span className="input-group-text">
//                         <a href="javascript:void(0)">
//                           <i className="flaticon-381-search-2"></i>
//                         </a>
//                       </span>
//                     </div>
//                   </li>

//                   <li className="nav-item dropdown notification_dropdown">
//                     <a
//                       className="nav-link  ai-icon"
//                       href="javascript:void(0);"
//                       role="button"
//                       data-bs-toggle="dropdown"
//                     >
//                       <svg
//                         width="28"
//                         height="28"
//                         viewBox="0 0 28 28"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           fill-rule="evenodd"
//                           clip-rule="evenodd"
//                           d="M12.638 4.9936V2.3C12.638 1.5824 13.2484 1 14.0006 1C14.7513 1 15.3631 1.5824 15.3631 2.3V4.9936C17.3879 5.2718 19.2805 6.1688 20.7438 7.565C22.5329 9.2719 23.5384 11.5872 23.5384 14V18.8932L24.6408 20.9966C25.1681 22.0041 25.1122 23.2001 24.4909 24.1582C23.8709 25.1163 22.774 25.7 21.5941 25.7H15.3631C15.3631 26.4176 14.7513 27 14.0006 27C13.2484 27 12.638 26.4176 12.638 25.7H6.40705C5.22571 25.7 4.12888 25.1163 3.50892 24.1582C2.88759 23.2001 2.83172 22.0041 3.36039 20.9966L4.46268 18.8932V14C4.46268 11.5872 5.46691 9.2719 7.25594 7.565C8.72068 6.1688 10.6119 5.2718 12.638 4.9936ZM14.0006 7.5C12.1924 7.5 10.4607 8.1851 9.18259 9.4045C7.90452 10.6226 7.18779 12.2762 7.18779 14V19.2C7.18779 19.4015 7.13739 19.6004 7.04337 19.7811C7.04337 19.7811 6.43703 20.9381 5.79662 22.1588C5.69171 22.3603 5.70261 22.6008 5.82661 22.7919C5.9506 22.983 6.16996 23.1 6.40705 23.1H21.5941C21.8298 23.1 22.0492 22.983 22.1732 22.7919C22.2972 22.6008 22.3081 22.3603 22.2031 22.1588C21.5627 20.9381 20.9564 19.7811 20.9564 19.7811C20.8624 19.6004 20.8133 19.4015 20.8133 19.2V14C20.8133 12.2762 20.0953 10.6226 18.8172 9.4045C17.5391 8.1851 15.8073 7.5 14.0006 7.5Z"
//                           fill="#4f7086"
//                         />
//                       </svg>
//                       <span className="badge light text-white bg-primary rounded-circle">
//                         12
//                       </span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//           </div>
//         </div>

//         <div className="dlabnav">
//           <div className="dlabnav-scroll">
//             <ul className="metismenu" id="menu">
//               <li className="dropdown header-profile">
//                 <a
//                   className="nav-link"
//                   href="/profile.html"
//                   role="button"
//                   onClick={(e) => {
//                     e.preventDefault();
//                   }}
//                 >
//                   <img src="assets/images/ion/man (1).png" width="20" alt="" />
//                   <div className="header-info ms-3">
//                     <span className="font-w600 ">
//                       Hi,<b>AC</b>
//                     </span>
//                     <small className="text-end font-w400">xyz@gmail.com</small>
//                   </div>
//                 </a>
//               </li>
//               <li>
//                 <a href="index.html.html" aria-expanded="false">
//                   <i className="flaticon-025-dashboard"></i>
//                   <span className="nav-text">Dashboard</span>
//                 </a>
//               </li>

//               <li>
//                 <a href="javascript:void()" aria-expanded="false">
//                   <i className="flaticon-050-info"></i>
//                   <span className="nav-text">Sessions</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="javascript:void()" aria-expanded="false">
//                   <i className="flaticon-050-info"></i>
//                   <span className="nav-text">Events</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="javascript:void()" aria-expanded="false">
//                   <i className="flaticon-050-info"></i>
//                   <span className="nav-text">Appointments</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="javascript:void()" aria-expanded="false">
//                   <i className="flaticon-050-info"></i>
//                   <span className="nav-text">Feed Back</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="javascript:void()" aria-expanded="false">
//                   <i className="flaticon-022-copy"></i>
//                   <span className="nav-text">Signing Out</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


function ParentDashboard() {
  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="brand-logo">EduCare Finder</div>
        <nav>
          <ul>
            <li>🏠 Dashboard</li>
            <li>🔍 Search Schools</li>
            <li>📅 Appointments</li>
            <li>💬 Messages</li>
            <li>⭐ Reviews</li>
            <li>📢 Events</li>
            <li>⚙️ Settings</li>
            <li>🚪 Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome, Parent!</h1>
          <div className="user-profile">👤 Profile</div>
        </header>

        <section className="dashboard-overview">
          <div className="overview-card">📅 Upcoming Appointments: 2</div>
          <div className="overview-card">🏫 Schools Followed: 5</div>
          <div className="overview-card">📢 Events Attending: 3</div>
        </section>

        <section className="dashboard-content">
          <div className="appointments">
            <h2>Manage Appointments</h2>
            <button>Schedule New</button>
            <ul>
              <li>Greenwood Special School - March 15, 2025</li>
              <li>Sunrise Academy - March 20, 2025</li>
            </ul>
          </div>

          <div className="reviews">
            <h2>Recent Reviews</h2>
            <p>🌟 "Greenwood Special School provides great therapy support."</p>
            <p>🌟 "Sunrise Academy has a wonderful inclusive environment!"</p>
          </div>
        </section>
        {/* <SpecialNeedsForm/> */}
        <AppointmentForm/>
      </main>
    </div>
  );
}



export default ParentDashboard;
