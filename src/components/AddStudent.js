// import { Button, Grid2, TextField } from '@mui/material';
// import React, { useState } from 'react';

// const AddStudent = () => {
//   const initialStudentState = {
//     name: '',
//     degree: '',
//     year: '',
//     gender: '',
//     fatherName: '',
//     motherName: '',
//     native: '',
//     contact: '',
//     fatherContact: '',
//     email: ''
//   };

//   const [student, setStudent] = useState(initialStudentState);

//   const handleChange = (e) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const students = JSON.parse(localStorage.getItem('students')) || [];
//     localStorage.setItem('students', JSON.stringify([...students, student]));
//     alert('Student added successfully');
//     // Reset the form after submission
//     setStudent(initialStudentState);
//   };

//   return (
//     <div className="add-student-container">
//       <h2>Add New Student</h2>
//       <form onSubmit={handleSubmit}>
// <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//       <Grid2 size={3}>
//         <TextField 
//         id="outlined-basic" 
//         label="Student Name" 
//         variant="outlined"
//           placeholder="Student Name" 
//           value={student.name} 
//           onChange={handleChange} 
//           required 
//         />
//         {/* </Grid2>
//         <Grid2 size={3}> */}
       
//         </Grid2>
//         <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Year"  variant="outlined" 
//           placeholder="Year" 
//           value={student.year} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Grid2 size={3}>
       
//         <TextField id="outlined-basic" label="Gender"  variant="outlined"
//           placeholder="Gender" 
//           value={student.gender} 
//           onChange={handleChange} 
//           required 
//         />
           
//            </Grid2>
//            <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Father Name"  variant="outlined"
//           placeholder="Father Name" 
//           value={student.fatherName} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Mother Name" variant="outlined" 
//           placeholder="Mother Name" 
//           value={student.motherName} 
//           onChange={handleChange} 
//           required 
//         />
           
//            </Grid2>
//            <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Native" variant="outlined" 
//           placeholder="Native" 
//           value={student.native} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Contact" variant="outlined" 
//           placeholder="Contact" 
//           value={student.contact} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Father Contact" variant="outlined" 
//           placeholder="Father Contact" 
//           value={student.fatherContact} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Grid2 size={3}>
//         <TextField id="outlined-basic" label="Email" variant="outlined" 
//           placeholder="Email" 
//           value={student.email} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Grid2 size={3}>
//          <TextField id="outlined-basic" 
//         label="Degree" 
//         variant="outlined"  
//           placeholder="Degree" 
//           value={student.degree} 
//           onChange={handleChange} 
//           required 
//         />
//         </Grid2>
//         <Button variant="contained" color="success">
//   Submit
// </Button>
//         </Grid2>
        
//       </form>
//     </div>
//   );
// };

// export default AddStudent;


import { Button, Grid2, TextField } from '@mui/material';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
    toast.success('Student added successfully');
    console.log(student,"student")
    setStudent(initialStudentState); // Reset the form after submission
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="name"  // Add name attribute
              label="Student Name" 
              variant="outlined"
              placeholder="Student Name" 
              value={student.name} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="year"  // Add name attribute
              label="Year"  
              variant="outlined" 
              placeholder="Year" 
              value={student.year} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="gender"  // Add name attribute
              label="Gender"  
              variant="outlined"
              placeholder="Gender" 
              value={student.gender} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="fatherName"  // Add name attribute
              label="Father Name"  
              variant="outlined"
              placeholder="Father Name" 
              value={student.fatherName} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="motherName"  // Add name attribute
              label="Mother Name" 
              variant="outlined" 
              placeholder="Mother Name" 
              value={student.motherName} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="native"  // Add name attribute
              label="Native" 
              variant="outlined" 
              placeholder="Native" 
              value={student.native} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="contact"  // Add name attribute
              label="Contact" 
              variant="outlined" 
              placeholder="Contact" 
              value={student.contact} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="fatherContact"  // Add name attribute
              label="Father Contact" 
              variant="outlined" 
              placeholder="Father Contact" 
              value={student.fatherContact} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="email"  // Add name attribute
              label="Email" 
              variant="outlined" 
              placeholder="Email" 
              value={student.email} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          <Grid2 xs={3}>
            <TextField 
              id="outlined-basic" 
              name="degree"  // Add name attribute
              label="Degree" 
              variant="outlined"  
              placeholder="Degree" 
              value={student.degree} 
              onChange={handleChange} 
              required 
            />
          </Grid2>

          {/* <Grid2 xs={3}> */}
            <Button type="submit" variant="contained" color="success">
              Submit
            </Button>
          {/* </Grid2> */}
        </Grid2>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default AddStudent;

