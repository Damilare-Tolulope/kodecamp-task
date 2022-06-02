import Navbar from '../landing/assets/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import person from '../landing/assets/img/assets/person.svg'

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, signInWithGoogle } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch {
            setError('Failed to Log In');
        }
        setLoading(false);
    }

    async function handleGoogleAuth(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signInWithGoogle();
            navigate('/');
        } catch (error) {
            console.log(error);  
            setError('Failed to Log In'); 
        }
    }
    return (
        <>
            <Navbar />
            <div className="mx-auto w-full">
                <div className="container mx-auto flex flex-col md:flex-row h-full w-full ">
                    <div className="md:mt-20 mt-16  grow w-full">
                        <h1 className="text-3xl text-black text-center">
                                Student Login
                        </h1>
                        {
                            error && <p className="text-red-700 text-center text-xl"> { error } </p>
                        }
                        <h2 className='text-center text-gray-500'>
                            Make sure your account is secure
                        </h2>
                        <div className='mt-10 md:mt-4'>
                            <img src={person} alt="" width='500' />
                        </div>
                    </div>
                    <div className="md:mt-52 mt-16  grow w-full ">
                        <form onSubmit={handleSubmit} className='w-5/6 md:w-3/4 mx-auto'>
                            <div className="mb-6">
                                <input
                                ref={emailRef}
                                type="email"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                ref={passwordRef}
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green focus:outline-none"
                                placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <p
                                className="text-black"
                                >Don't have an Account?
                                <span>
                                    <Link to='/signup' className='hover:text-green text-xl font-bold  duration-200 transition ease-in-out'>
                                        Sign Up
                                    </Link>
                                </span>
                                </p>
                            </div>
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:text-green hover:bg-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                disabled={loading}
                            >
                                Log in
                            </button>
                            <button
                                type="submit"
                                className="inline-block mt-3 px-7 py-3 bg-green text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:text-green hover:bg-white hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                disabled={loading}
                                onClick={handleGoogleAuth}
                            >
                                Log in with Google <i className="fa-brands fa-google"></i>
                            </button>
                            </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;