// import React, { useState } from 'react';
// import './styles.css'


// const Login = ({ setIsLoggedIn }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (username === 'admin' && password === 'password') {
  //     setIsLoggedIn(true);
  //   } else {
  //     alert('Invalid credentials');
  //   }
  // };

//   return (
//     <div className="login-container">
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './login.css'
const Login = ({setIsLoggedIn}) => {
     const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [emailError, setEmailError] = useState('')
   const [passwordError, setPasswordError] = useState('')
 

  // const navigate = useNavigate()
  // const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setEmailError("")
      setPasswordError("")

    } else {
      
      setEmailError('Invalid credentials');
      setPasswordError('Invalid credentials');
    }
  };

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your email here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          placeholder="Enter your password here"
          value={password}
              onChange={(e) => setPassword(e.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={handleLogin} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login
