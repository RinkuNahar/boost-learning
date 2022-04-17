import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/home');
    }
    
    return (
        <div className='container register-form w-50'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <br />
                <br />
                <input type="email" name="email" id="" placeholder='Your email' required/>
                <br />
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' required/>
                <br />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already Have an account? <Link to={'/login'} className='text-primary text-decoration-none ' onClick={navigateLogin}>Please LogIn</Link></p>
        </div>
    );
};

export default Register;