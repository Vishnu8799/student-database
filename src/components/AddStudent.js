import React, { useState } from 'react';

const AddStudent = () => {
  const initialStudentState = {
    name: '',
    degree: '',
    year: '',
    gender: '',
    fatherName: '',
    motherName: '',
    native: '',
    contact: '',
    fatherContact: '',
    email: ''
  };

  const [student, setStudent] = useState(initialStudentState);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];
    localStorage.setItem('students', JSON.stringify([...students, student]));
    alert('Student added successfully');
    // Reset the form after submission
    setStudent(initialStudentState);
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Student Name" 
          value={student.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="degree" 
          placeholder="Degree" 
          value={student.degree} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="year" 
          placeholder="Year" 
          value={student.year} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="gender" 
          placeholder="Gender" 
          value={student.gender} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="fatherName" 
          placeholder="Father Name" 
          value={student.fatherName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="motherName" 
          placeholder="Mother Name" 
          value={student.motherName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="native" 
          placeholder="Native" 
          value={student.native} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="contact" 
          placeholder="Contact" 
          value={student.contact} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="fatherContact" 
          placeholder="Father Contact" 
          value={student.fatherContact} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={student.email} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
