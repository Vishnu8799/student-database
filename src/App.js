import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AddStudent from './components/AddStudent';
import StudentList from './components/StudentList';
import Attendance from './components/Attendance';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ExamFees from './components/ExamFees';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Header />}
        <div className="main-content">
          {isLoggedIn && <Sidebar />}
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={isLoggedIn ? <Navigate to="/student-list" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
              />
              {isLoggedIn && (
                <>
                  <Route path="/add-student" element={<AddStudent />} />
                  <Route path="/student-list" element={<StudentList />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/exam-fees" element={<ExamFees />} />
                </>
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
