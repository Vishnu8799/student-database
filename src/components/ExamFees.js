// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
// import { Toaster, toast } from 'react-hot-toast';

// const ExamFees = () => {
//   const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);
//   const [isEditing, setIsEditing] = useState(null);
//   const [amount, setAmount] = useState(JSON.parse(localStorage.getItem('examfees')) || {}); // Load examfees from localStorage
//   const [editedStudent, setEditedStudent] = useState({
//     name: '',
//     degree: '',
//     amount: '',
//     contact: '',
//     email: ''
//   });

//   const handleDelete = (index) => {
//     const updatedStudents = students.filter((_, i) => i !== index);
//     setStudents(updatedStudents);
//     localStorage.setItem('students', JSON.stringify(updatedStudents));
//   };

//   const handleexamfee = (e, index) => {
//     setAmount({ ...amount, [index]: e.target.value });
//   };

//   const handleEdit = (index) => {
//     setIsEditing(index);
//     setEditedStudent(students[index]); // Pre-fill the form with the current student data
//   };

//   const handleEditChange = (e) => {
//     setEditedStudent({ ...editedStudent, [e.target.name]: e.target.value });
//   };



// const handleSaveEdit = (index) => {
//     const updatedStudents = students.map((student, i) =>
//       i === index ? { ...editedStudent, amount: amount[index] || student.amount } : student
//     );
  
//     setStudents(updatedStudents);
//     localStorage.setItem('students', JSON.stringify(updatedStudents)); // Save students with updated amount
//     setIsEditing(null); // Exit edit mode
//   };

// //   const handleSubmit = (index) => {
// //     const updatedFees = { ...amount };
// //     localStorage.setItem('examfees', JSON.stringify(updatedFees)); // Save the amount to localStorage
// //     toast.success('Amount paid successfully!');
// //   };
// const handleSubmit = (index) => {
//     // Get the current student and add the amount to their data
//     const updatedStudents = students.map((student, i) => {
//       if (i === index) {
//         return { ...student, amount: amount[index] }; // Update the student's amount
//       }
//       return student;
//     });
  
//     setStudents(updatedStudents); // Update the students state
//     localStorage.setItem('students', JSON.stringify(updatedStudents)); // Save the updated students list to localStorage
    
//     const updatedFees = { ...amount };
//     localStorage.setItem('examfees', JSON.stringify(updatedFees)); // Save the individual fees in localStorage
  
//     toast.success('Amount paid successfully!');
//   };
  

//   return (
//     <div className="attendance-container">
//       <h2>Exam Fees Paid</h2>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="student table">
//           <TableHead>
//             <TableRow>
//               <TableCell style={{ fontWeight: 'bold' }}>Student Name</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Degree</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Contact</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
//               <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {students.length > 0 ? (
//               students.map((student, index) => (
//                 <TableRow key={index}>
//                   {isEditing === index ? (
//                     <>
//                       <TableCell>
//                         <TextField
//                           variant="outlined"
//                           name="name"
//                           value={editedStudent.name}
//                           onChange={handleEditChange}
//                           fullWidth
//                         />
//                       </TableCell>
//                       <TableCell>
//                         <TextField
//                           variant="outlined"
//                           name="degree"
//                           value={editedStudent.degree}
//                           onChange={handleEditChange}
//                           fullWidth
//                         />
//                       </TableCell>

//                       <TableCell>
//                         <TextField
//                           variant="outlined"
//                           name="contact"
//                           value={editedStudent.contact}
//                           onChange={handleEditChange}
//                           fullWidth
//                         />
//                       </TableCell>
//                       <TableCell>
//                         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//                           <InputLabel id={`attendance-label-${index}`}>Amount</InputLabel>
//                           <Select
//                             labelId={`attendance-label-${index}`}
//                             id={`attendance-select-${index}`}
//                             value={amount[index] || ''} // Show the saved amount in the input
//                             label="Examfees"
//                             onChange={(e) => handleexamfee(e, index)}
//                           >
//                             <MenuItem value="1000">Rs 1000</MenuItem>
//                             <MenuItem value="1500">Rs 1500</MenuItem>
//                             <MenuItem value="2000">Rs 2000</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </TableCell>
//                       <TableCell>
//                         <div style={{ display: 'flex', gap: '10px' }}>
//                           <Button
//                             onClick={() => handleSaveEdit(index)}
//                             variant="outlined"
//                             color="success"
//                           >
//                             Submit
//                           </Button>
//                           <Button
//                             onClick={() => setIsEditing(null)}
//                             variant="outlined"
//                             color="error"
//                           >
//                             Cancel
//                           </Button>
//                         </div>
//                       </TableCell>
//                     </>
//                   ) : (
//                     <>
//                       <TableCell>{student.name}</TableCell>
//                       <TableCell>{student.degree}</TableCell>

//                       <TableCell>{student.contact}</TableCell>
//                       <TableCell>
//                         <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//                           <InputLabel id={`attendance-label-${index}`}>Amount</InputLabel>
//                           <Select
//                             labelId={`attendance-label-${index}`}
//                             id={`attendance-select-${index}`}
//                             value={amount[index] || ''} // Show the saved amount if already paid
//                             label="Examfees"
//                             onChange={(e) => handleexamfee(e, index)}
//                             disabled={isEditing !== index} // Disable if not in edit mode
//                           >
//                             <MenuItem value="1000">Rs 1000</MenuItem>
//                             <MenuItem value="1500">Rs 1500</MenuItem>
//                             <MenuItem value="2000">Rs 2000</MenuItem>
//                           </Select>
//                         </FormControl>
//                       </TableCell>
//                       <TableCell>
//                         <Button onClick={() => handleSubmit(index)} variant="outlined" color="primary">
//                           Pay
//                         </Button>
//                         <Button onClick={() => handleEdit(index)} variant="outlined" color="primary" style={{ marginLeft: '10px' }}>
//                           Edit
//                         </Button>
//                       </TableCell>
//                     </>
//                   )}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={7} align="center">
//                   No students available
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Toaster position="top-center" reverseOrder={false} />
//     </div>
//   );
// };

// export default ExamFees;
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
import { Toaster, toast } from 'react-hot-toast';

const ExamFees = () => {
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem('students')) || []);
  const [isEditing, setIsEditing] = useState(null);
  const [amount, setAmount] = useState(JSON.parse(localStorage.getItem('examfees')) || {});
  const [disabledAmount, setDisabledAmount] = useState(JSON.parse(localStorage.getItem('disabledAmount')) || {}); // State to handle disabled fields

  const [editedStudent, setEditedStudent] = useState({
    name: '',
    degree: '',
    amount: '',
    contact: '',
    email: ''
  });

  const handleExamFeeChange = (e, index) => {
    setAmount({ ...amount, [index]: e.target.value });
  };

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditedStudent({ ...students[index], amount: amount[index] || '' });
    setDisabledAmount({ ...disabledAmount, [index]: false }); // Enable amount field during edit
  };

  const handleSaveEdit = (index) => {
    const updatedStudents = students.map((student, i) =>
      i === index ? { ...editedStudent, amount: amount[index] || student.amount } : student
    );

    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents)); // Save updated students list with amount
    localStorage.setItem('examfees', JSON.stringify(amount)); // Save updated amount to localStorage
    setIsEditing(null);
    toast.success('Student updated successfully!');
  };

  const handleSubmit = (index) => {
    const updatedStudents = students.map((student, i) => {
      if (i === index) {
        return { ...student, amount: amount[index] }; // Add the amount to the student object
      }
      return student;
    });

    setStudents(updatedStudents); // Update students state with new amount
    localStorage.setItem('students', JSON.stringify(updatedStudents)); // Persist updated students list

    const updatedFees = { ...amount };
    localStorage.setItem('examfees', JSON.stringify(updatedFees)); // Save the individual exam fees
    setDisabledAmount({ ...disabledAmount, [index]: true }); // Disable the select after payment
    localStorage.setItem('disabledAmount', JSON.stringify({ ...disabledAmount, [index]: true })); // Persist disabled state

    toast.success('Amount paid successfully!');
  };

  return (
    <div className="attendance-container">
      <h2>Exam Fees Paid</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="student table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>Student Name</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Degree</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Contact</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Amount</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <TableRow key={index}>
                  {isEditing === index ? (
                    <>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          name="name"
                          value={editedStudent.name}
                          onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          name="degree"
                          value={editedStudent.degree}
                          onChange={(e) => setEditedStudent({ ...editedStudent, degree: e.target.value })}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          variant="outlined"
                          name="contact"
                          value={editedStudent.contact}
                          onChange={(e) => setEditedStudent({ ...editedStudent, contact: e.target.value })}
                          fullWidth
                        />
                      </TableCell>
                      <TableCell>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id={`attendance-label-${index}`}>Amount</InputLabel>
                          <Select
                            labelId={`attendance-label-${index}`}
                            id={`attendance-select-${index}`}
                            value={amount[index] || ''}
                            label="Examfees"
                            onChange={(e) => handleExamFeeChange(e, index)}
                          >
                            <MenuItem value="1000">Rs 1000</MenuItem>
                            <MenuItem value="1500">Rs 1500</MenuItem>
                            <MenuItem value="2000">Rs 2000</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <Button onClick={() => handleSaveEdit(index)} variant="outlined" color="success">
                            Submit
                          </Button>
                          <Button onClick={() => setIsEditing(null)} variant="outlined" color="error">
                            Cancel
                          </Button>
                        </div>
                      </TableCell>
                    </>
                  ) : (
                    <>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.degree}</TableCell>
                      <TableCell>{student.contact}</TableCell>
                      <TableCell>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id={`attendance-label-${index}`}>Amount</InputLabel>
                          <Select
                            labelId={`attendance-label-${index}`}
                            id={`attendance-select-${index}`}
                            value={amount[index] || ''}
                            label="Examfees"
                            onChange={(e) => handleExamFeeChange(e, index)}
                            disabled={disabledAmount[index]} // Disable the select if amount is already paid
                          >
                            <MenuItem value="1000">Rs 1000</MenuItem>
                            <MenuItem value="1500">Rs 1500</MenuItem>
                            <MenuItem value="2000">Rs 2000</MenuItem>
                          </Select>
                        </FormControl>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleSubmit(index)} variant="outlined" color="primary">
                          Pay
                        </Button>
                        <Button onClick={() => handleEdit(index)} variant="outlined" color="primary" style={{ marginLeft: '10px' }}>
                          Edit
                        </Button>
                      </TableCell>
                    </>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No students available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ExamFees;

