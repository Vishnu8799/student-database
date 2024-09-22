import React, { useState } from 'react';
import './styles.css'


const Attendance = () => {
  const students = JSON.parse(localStorage.getItem('students')) || [];
  const [attendance, setAttendance] = useState({});

  const handleAttendanceChange = (e, index) => {
    setAttendance({ ...attendance, [index]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem('attendance', JSON.stringify(attendance));
    alert('Attendance saved successfully');
  };

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>
                  <select onChange={(e) => handleAttendanceChange(e, index)}>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Save Attendance</button>
    </div>
  );
};

export default Attendance;
