import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginImg from './assets/login.svg'
import { useAuth } from './contexts/AuthContext'


const Login = () => {
    const login = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleFormData = async (e) => {
        e.preventDefault();

        // Prevent submitting empty form
        if(!email || !password) return alert("Please input your credentials")

        try {
            setError('')
            // setLoading(true)
            await login(email, password)
            navigate('/dashboard')
          } catch (error) {
            setError(error.message)
          }
      
        //   setLoading(false)
        
        setEmail("")
        setPassword("")
        setRememberMe(false)
        setShowPassword(false)
    }


  return (
    <div id="login" className='login'>
        <img src={loginImg} alt="login" />
        <div className='login_form'>
            <h3>Login</h3>
            <form onSubmit={handleFormData}>
                <div className='form_input'>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                </div>
                <div className='form_input'>
                    <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type={ showPassword ? "text" : "password"} placeholder='Password' />
                    <i className='togglePassword' onClick={() => setShowPassword(!showPassword)}> { showPassword ? <small>Hide</small> : <small>Show</small> }</i>
                </div>
                <p id="error" style={{ lineHeight: '20px', color: 'red', textAlign: 'left', fontSize: "12px", marginTop: '5px'}}>{ error} </p>
                <div className='remember'>
                    <input checked={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} type="checkbox"/> Remember me
                </div>
                    <input type="submit" value="Login" />
                    <p>Forgot Password?</p>
                <div className='link_to_signup'>
                    <p>Don't have an account? <span><Link to="/signup"> Sign Up</Link></span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login