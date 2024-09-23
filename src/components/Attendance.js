// import React, { useState } from 'react';
// import './styles.css'


// const Attendance = () => {
//   const students = JSON.parse(localStorage.getItem('students')) || [];
//   const [attendance, setAttendance] = useState({});

//   const handleAttendanceChange = (e, index) => {
//     setAttendance({ ...attendance, [index]: e.target.value });
//   };

//   const handleSubmit = () => {
//     localStorage.setItem('attendance', JSON.stringify(attendance));
//     alert('Attendance saved successfully');
//   };

//   return (
//     <div className="attendance-container">
//       <h2>Mark Attendance</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Attendance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.length > 0 ? (
//             students.map((student, index) => (
//               <tr key={index}>
//                 <td>{student.name}</td>
//                 <td>
//                   <select onChange={(e) => handleAttendanceChange(e, index)}>
//                     <option value="present">Present</option>
//                     <option value="absent">Absent</option>
//                   </select>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2">No students available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       <button onClick={handleSubmit}>Save Attendance</button>
//     </div>
//   );
// };

// export default Attendance;

import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import toast, { Toaster } from 'react-hot-toast';

const Attendance = () => {
  // Load students from localStorage, and include attendance property if it's missing
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem('students'))?.map(student => ({
      ...student,
      attendance: student.attendance || 'present', // Add default attendance if not already set
    })) || []
  );

  // Function to handle attendance change
  const handleAttendanceChange = (e, index) => {
    const updatedStudents = [...students];
    updatedStudents[index].attendance = e.target.value; // Update the specific student's attendance
    setStudents(updatedStudents);
  };

  // Function to handle the submission of attendance
  const handleSubmit = () => {
    localStorage.setItem('students', JSON.stringify(students)); // Save updated students list with attendance
    toast.success('Attendance saved successfully');
  };

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <InputLabel id={`attendance-label-${index}`}>Attendance</InputLabel>
                      <Select
                        labelId={`attendance-label-${index}`}
                        id={`attendance-select-${index}`}
                        value={student.attendance} // Get the attendance from student object
                        label="Attendance"
                        onChange={(e) => handleAttendanceChange(e, index)}
                      >
                        <MenuItem value="present">Present</MenuItem>
                        <MenuItem value="absent">Absent</MenuItem>
                      </Select>
                    </FormControl>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No students available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Save Attendance
        </Button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Attendance;

