import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

	const logoStyle = {
		padding: "20px",
		border: "none",
		height: "50px",
		width: "50px",
		borderRadius: "50%",
		marginRight: "200px",
		background: "linear-gradient(90deg, #5F72FF 0%, #73D6F1 100%)"
	}

	return (
		<ul className='navBar'>
			<li>
				<Link to='/'><div style={logoStyle} ></div></Link>
			</li>
			<div className='links'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/products'>Products</Link>
				</li>
				<li>
					<Link to='/posts/2018/06'>Posts</Link>
				</li>
				<li>
					<Link id="login" to='/signup'>Login</Link>
				</li>
			</div>
		</ul>
	);
};

export default NavBar;
