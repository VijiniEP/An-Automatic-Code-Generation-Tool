import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginRegisterForm = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState({
        error: null,
        success: null,
    });

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/register');
    };

    const navigateRegister = () => {
        navigate('/');
    };

    const navigateResetPassword = () => {
        navigate('/reset password');
    };

    const handleChangeEmail = (e) =>{
        setMessage({
            success: null,
            error: null,
        });
        setEmail(e.target.value);
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // if (emailRegex.test(enteredEmail)) {
        //     setEmail(enteredEmail);
        // }
    };

    const handlePasswordChange = (e) => {
        setMessage({
            success: null,
            error: null,
        });
        setPassword(e.target.value);
    }

    const handleSubmit = async () => {
        const auth = getAuth(app);
        if(props.title === 'Login') {
            try {
                const response = await signInWithEmailAndPassword(auth, email, password);
                console.log(response);
                if(response.operationType === 'signIn') {
                    localStorage.setItem("accessToken", response.user.accessToken);
                    navigate('/home')
                }
            } catch (error) {
                setMessage({
                    ...message,
                    error: error.message || 'Something went wrong, try again!.',
                    success: null,
                });
            }
        } else if (props.title === 'Register') {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);;
                if(userCredential.user) {
                    setMessage({
                        ...message,
                        error: null,
                        success: `${email} registered successfully. Please use login page to login!.`,
                    });
                }
            } catch (error) {
                setMessage({
                    ...message,
                    error: error.message || 'Something went wrong, try again!.',
                    success: null,
                });
            }
        } else if (props.title === 'Reset Password') {
            try {

            } catch (error) {

            }
        }
    };

    return (
        <div className='flex form-container '>
            <div className='form-head'>{props.title}</div>
            <label className='flex flex-col form-label'>
                Email
                <input
                    value={email}
                    onChange={handleChangeEmail}
                    type='email'
                    className='form-input'
                    placeholder='Enter valid email here...'
                />
            </label>
            <label className={`${props.title === 'Reset Password' ? 'hidden' : ''} flex flex-col form-label`}>
                Password
                <input
                    value={password}
                    onChange={handlePasswordChange}
                    type='password'
                    className='form-input'
                    placeholder='Enter password here...'
                />
            </label>
            {message.success &&  (
                <p className="text-yellow-500 mt-2">{'**'} {message.success}</p>
            )}
            {message.error && (
                <p className="text-red-500 mt-2">{'**'} {message.error}</p>
            )}
            <button 
                onClick={handleSubmit}
                className='form-button'
            >
                {props.title}
            </button>
            {props.title === 'Login' ? (
                <>
                <div className='form-text pt-3'>
                    <span className='underline text-blue-500 cursor-pointer' onClick={navigateResetPassword}>
                        Forgot password
                    </span> ?
                </div>
                <div className='form-text'>Don't have an account ? {}
                    <span className='underline text-blue-500 cursor-pointer' onClick={navigateLogin}>
                        {props.title === 'Login' ? 'Register' : 'Login'}
                    </span>
                </div>
                </>
            ) : (
                <div className='form-text pt-3'>{props.title === 'Register' ? `Already have an account ? ${""}` : `Remember Password ? ${""}`}
                    <span className='underline text-blue-500 pointer' onClick={navigateRegister}>
                        {props.title === 'Login' ? 'Register' : 'Login'}
                    </span>
                </div>
            )}     
        </div>
    )
}

export default LoginRegisterForm