import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {

    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [myError, setMyError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();
      const location = useLocation();

      const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, { replace: true });
    }

    const handleSignIn = event =>{
        event.preventDefault();
       setMyError('Your Password is not Correct');
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
      <form onSubmit={handleSignIn} >
      <div>
           <h2 className='title'>Login</h2>
            <div className='input-field'>
                <label htmlFor="email">Email : </label>
                <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
                <br />
            <div className='input-field'>
            <label htmlFor="password">Password : </label>
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
            </div>
            <br />
            <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
            <p>{myError}</p>
            <div>
            <input  className='submit' type="submit" value="LogIn" />
            </div>
           </div>
           <p className='login-p'>
          New to Boost Learner? <Link className='form-link' to={'/signup'}>Create an Account</Link>
         </p>
      </form>

        </div>
    );
};

export default Login;







// import React from 'react';
// import { Button, Form } from 'react-bootstrap';

// const Login = () => {
//     return (
//         <div>
//             <h2 className='text-center'>Please login</h2>
//             <Form className='w-50 mx-auto border p-4'>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                     <Form.Label >Email address</Form.Label>
//                     <Form.Control  type="email" placeholder="Enter email" />
//                     <Form.Text className="text-muted">
//                         We'll never share your email with anyone else.
//                     </Form.Text>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control type="password" placeholder="Password" />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                     <Form.Check type="checkbox" label="Check me out" />
//                 </Form.Group>
//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default Login;