import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

import auth from '../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if(user){
        navigate('/home')
    
    }

    if(error){
        <p className='text-danger'>Error : {error?.message}</p>
    }

    return (
        <div>
            <button onClick={()=> signInWithGoogle()} className='btn btn-primary mb-4 p-2'>Continue with Google</button>
           
        </div>
    );
};

export default SocialLogin;