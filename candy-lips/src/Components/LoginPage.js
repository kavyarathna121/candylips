import React, { useState } from 'react';
import '../index.css';
// import { useDispatch } from 'react-redux';
// import { loginUser } from './actions/authActions'; // Import your login action here
import { Form, Button } from 'react-bootstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Call your login action here passing username and password
    // dispatch(loginUser({ username, password }));
    console.log("logged in")
  };

  return (
    <div className="loginDiv" style={{backgroundColor: '#00BCD4'}}>
              <Form className="text-center" onSubmit={handleLogin}>
                <h2>Login</h2>
                <Form.Group controlId="formUsername">
                  <Form.Control
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    // style={{ borderBottom: "1px orange;" }}
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    // style={{ borderColor: 'orange', borderRadius: '20px' }}
                  />
                </Form.Group>

                <Button type="submit" className="" style={{ }}>
                  Login
                </Button>
              </Form>
            </div>
  );
};

export default Login;
