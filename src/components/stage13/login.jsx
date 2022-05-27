import React, { useState } from 'react';
import person from './assets/person.svg'
import { signInWithPopup, getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from './config/firebase';
import { useNavigate } from 'react-router-dom';


function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function SignUp(e) {
		e.preventDefault();

		const auth = getAuth();

	createUserWithEmailAndPassword(auth, email, password)
	  .then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
			console.log(user);
			navigate('/admin');
		})
	  .catch((error) => {
		console.log(error)
	  });
	}
	const navigate = useNavigate();
	const SignInWithGoogleFunc = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then((res) => {
				console.log(res);
				navigate('/admin');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className='login'>
        <div className='login_form signup_form'>
            <h3>Sign Up</h3>
            <form>
                <div className='form_input'>
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='Email' />
                </div>
                <div className='form_input'>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Password' />
                </div>
                <div className='form_input'>
                    <input type="password" placeholder='Confirm password' />
                </div>
                    <input onClick={(e) => SignUp(e)} type="submit" value="Sign Up" />
            </form>
			<small style={{display: 'block', marginLeft:'150px'}}>OR</small>
				<input type='submit' onClick={(e) => SignInWithGoogleFunc(e)} value="Sign In with Google" />
        </div>
        <img src={person} alt="signup" />
    </div>
	);
}

export default Login;
