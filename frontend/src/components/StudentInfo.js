import React, { useState } from 'react';
import '../css/School/StudentInfo.css'; // Importing a CSS file for styling

// Sample data for illustration
const studentData = {
  totalStudents: 500,
  attendanceRate: 95,
  averageGrade: 'B+',
  enrollmentStatus: {
    grade1: 100,
    grade2: 120,
    grade3: 130,
    grade4: 150,
  },
  studentPerformance: {
    math: 'B+',
    english: 'A',
    science: 'B',
    history: 'B-',
  },
  behaviorLogs: [
    { studentId: 1, incident: 'Tardiness', date: '2025-02-10' },
    { studentId: 2, incident: 'Disruptive behavior', date: '2025-03-01' },
  ],
  healthData: [
    { studentId: 1, healthIssue: 'Allergy', lastVisit: '2025-01-15' },
    { studentId: 2, healthIssue: 'Asthma', lastVisit: '2025-02-10' },
  ]
};

function StudentInfo() {
  const [showEnrollmentStatus, setShowEnrollmentStatus] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showBehavior, setShowBehavior] = useState(false);
  const [showHealthData, setShowHealthData] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case 'enrollmentStatus':
        setShowEnrollmentStatus(!showEnrollmentStatus);
        break;
      case 'performance':
        setShowPerformance(!showPerformance);
        break;
      case 'attendance':
        setShowAttendance(!showAttendance);
        break;
      case 'behavior':
        setShowBehavior(!showBehavior);
        break;
      case 'healthData':
        setShowHealthData(!showHealthData);
        break;
      default:
        break;
    }
  };

  return (
    <div className="student-info-container">
      <div className="sidebar">
        <button onClick={() => toggleSection('enrollmentStatus')}>
          {showEnrollmentStatus ? 'Collapse Enrollment Status' : 'Expand Enrollment Status'}
        </button>
        <button onClick={() => toggleSection('performance')}>
          {showPerformance ? 'Collapse Student Performance' : 'Expand Student Performance'}
        </button>
        <button onClick={() => toggleSection('attendance')}>
          {showAttendance ? 'Collapse Attendance Tracker' : 'Expand Attendance Tracker'}
        </button>
        <button onClick={() => toggleSection('behavior')}>
          {showBehavior ? 'Collapse Student Behavior' : 'Expand Student Behavior'}
        </button>
        <button onClick={() => toggleSection('healthData')}>
          {showHealthData ? 'Collapse Student Health Data' : 'Expand Student Health Data'}
        </button>
      </div>

      <div className="content">
        <section>
          <h3>Total Number of Students</h3>
          <p>{studentData.totalStudents}</p>
        </section>

        {showEnrollmentStatus && (
          <section>
            <h3>Student Enrollment</h3>
            <p>Grade 1: {studentData.enrollmentStatus.grade1} students</p>
            <p>Grade 2: {studentData.enrollmentStatus.grade2} students</p>
            <p>Grade 3: {studentData.enrollmentStatus.grade3} students</p>
            <p>Grade 4: {studentData.enrollmentStatus.grade4} students</p>
          </section>
        )}

        {showPerformance && (
          <section>
            <h3>Student Performance</h3>
            <p>Math: {studentData.studentPerformance.math}</p>
            <p>English: {studentData.studentPerformance.english}</p>
            <p>Science: {studentData.studentPerformance.science}</p>
            <p>History: {studentData.studentPerformance.history}</p>
          </section>
        )}

        {showAttendance && (
          <section>
            <h3>Attendance Tracker</h3>
            <p>Attendance Rate: {studentData.attendanceRate}%</p>
            {/* Ideally, you would use a chart here */}
          </section>
        )}

        {showBehavior && (
          <section>
            <h3>Overall Student Behavior</h3>
            <ul>
              {studentData.behaviorLogs.map((log, index) => (
                <li key={index}>
                  Student ID: {log.studentId} - Incident: {log.incident} on {log.date}
                </li>
              ))}
            </ul>
          </section>
        )}

        {showHealthData && (
          <section>
            <h3>Student Health Data</h3>
            <ul>
              {studentData.healthData.map((data, index) => (
                <li key={index}>
                  Student ID: {data.studentId} - Health Issue: {data.healthIssue} (Last visit: {data.lastVisit})
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

export default StudentInfo;
