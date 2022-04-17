import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    let errorElement;

    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name});
          alert('Updated profile');
          navigate('/home')
    }

    if(user){
        navigate('/home');
    }

    if(error){
        errorElement = <p className='text-danger'>Error : {error?.message}</p>
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
                {errorElement}
                <input type="submit" className='btn btn-primary' value="Register" />
            </form>
            <p>Already Have an account? <Link to={'/login'} className='text-primary text-decoration-none ' onClick={navigateLogin}>Please LogIn</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;