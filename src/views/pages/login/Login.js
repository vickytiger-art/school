// src/views/pages/Login.jsx
import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import './Login.css' // Ensure this path is correct
import BackgroundSlider from './backgroundslider' // Adjust the path based on your project structure
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showInitialBlast, setShowInitialBlast] = useState(true)
  const [formStage, setFormStage] = useState(0) // 0: Hidden, 1: Password, 2: Username, 3: Full Form, 4: Hiding Form
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();
  useEffect(() => {
    const timers = []
    timers.push(setTimeout(() => setFormStage(1), 2000)) // Show password field after 2s
    timers.push(setTimeout(() => setFormStage(2), 4000)) // Show username field after 4s
    timers.push(setTimeout(() => setFormStage(3), 6000)) // Show full form after 6s
    timers.push(setTimeout(() => setShowInitialBlast(false), 7000)) // Hide initial blast after 7s

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const handleLogin = (e) => {
    navigate('/dashboard');
    // e.preventDefault();

    // // Reset previous error message
    // setErrorMessage('');

    // // Make API request to login
    // fetch('http://localhost:5000/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ username, password }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Invalid credentials');
    //     }
    //     return response.text(); // Handle response data (e.g., success message)
    //   })
    //   .then((data) => {
    //     // Trigger login success animation
    //     setLoginSuccess(true);

    //     // Hide the form after triggering the animation
    //     setTimeout(() => setFormStage(4), 500); // Start hiding form after 0.5s
    //     // Reset the login success after showing the message
    //     setTimeout(() => {
    //       navigate('/dashboard');
    //       setLoginSuccess(false);
    //       setFormStage(0); // Reset form stage if needed
    //     }, 5000);
    //   })
    //   .catch((error) => {
    //     setErrorMessage(error.message);
    //   });
  };

  return (
    <div className="login-bg min-vh-100 d-flex flex-row align-items-center">
      {/* Background Image Slider */}
      <BackgroundSlider />

      {/* Initial Blast Effect */}
      {showInitialBlast && <div className="initial-blast"></div>}

      {/* Login Form */}
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard
                className={`p-4 shadow-lg rounded login-card ${formStage === 4 ? 'hide-form' : ''
                  }`}
              >
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1 className="login-title">Welcome</h1>
                    <p className="text-body-secondary login-subtitle">Sign in to your account</p>

                    {/* Password Field */}


                    {/* Username Field */}
                    <CInputGroup className={`mb-3 username-group ${formStage >= 2 ? 'visible' : 'hidden'}`}>
                      <CInputGroupText className="input-icon">
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        className="input-field"
                        value={username} // Bind input value to state
                        onChange={(e) => setUsername(e.target.value)} // Update state on input change
                      />
                    </CInputGroup>

                    {/* Password Field */}
                    <CInputGroup className={`mb-4 password-group ${formStage >= 1 ? 'visible' : 'hidden'}`}>
                      <CInputGroupText className="input-icon">
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="input-field"
                        value={password} // Bind input value to state
                        onChange={(e) => setPassword(e.target.value)} // Update state on input change
                      />
                    </CInputGroup>

                    {errorMessage && <p className="text-danger">{errorMessage}</p>}

                    <CRow>
                      <CCol xs={12}>
                        <CButton color="primary" className="px-4 login-btn" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      {/* <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0 login-link">
                          Forgot password?
                        </CButton>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>

      {/* Success Blast and Welcome Message */}
      {loginSuccess && (
        <>
          <div className="success-blast"></div>
          <div className="welcome-message">Welcome Superstar</div>
        </>
      )}
    </div>
  )
}

export default Login
