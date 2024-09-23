import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><NavLink to="/add-student">Add Student</NavLink></li>
        <li><NavLink to="/student-list">Student List</NavLink></li>
        <li><NavLink to="/attendance">Attendance</NavLink></li>
        <li><NavLink to="/exam-fees">Exam Fees</NavLink></li>
      </ul>
    </div>
  );
};

export default Sidebar;
