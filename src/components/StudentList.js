import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);
  const [isEditing, setIsEditing] = useState(null); // Keeps track of which student is being edited
  const [editedStudent, setEditedStudent] = useState({
    name: '',
    degree: '',
    year: '',
    gender: '',
    contact: '',
    email: ''
  });

  const handleDelete = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditedStudent(students[index]); // Pre-fill the form with the student's current data
  };

  const handleEditChange = (e) => {
    setEditedStudent({ ...editedStudent, [e.target.name]: e.target.value });
  };

  const handleSaveEdit = (index) => {
    const updatedStudents = students.map((student, i) => 
      i === index ? editedStudent : student
    );
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setIsEditing(null); // Exit editing mode
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Degree</th>
            <th>Year</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, index) => (
              <tr key={index}>
                {isEditing === index ? (
                  <>
                    <td><input type="text" name="name" value={editedStudent.name} onChange={handleEditChange} /></td>
                    <td><input type="text" name="degree" value={editedStudent.degree} onChange={handleEditChange} /></td>
                    <td><input type="text" name="year" value={editedStudent.year} onChange={handleEditChange} /></td>
                    <td><input type="text" name="gender" value={editedStudent.gender} onChange={handleEditChange} /></td>
                    <td><input type="text" name="contact" value={editedStudent.contact} onChange={handleEditChange} /></td>
                    <td><input type="email" name="email" value={editedStudent.email} onChange={handleEditChange} /></td>
                    <td>
                      <button onClick={() => handleSaveEdit(index)}>Save</button>
                      <button onClick={() => setIsEditing(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{student.name}</td>
                    <td>{student.degree}</td>
                    <td>{student.year}</td>
                    <td>{student.gender}</td>
                    <td>{student.contact}</td>
                    <td>{student.email}</td>
                    <td>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No students available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
