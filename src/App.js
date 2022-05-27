import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/stage13/navbar';
import Products from './components/stage13/products';
import Home from './components/stage13/home';
import ProductDetails from './components/stage13/productDetails';
import NotFound from './components/stage13/notFound';
// import Posts from './components/stage13/posts';
import Login from './components/stage13/login'

const App = () => {
	return (
		<div>
			<NavBar />
			<div className='content'>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/products" element={<Products isCustomLayout={true} />} />
					<Route path='/login' element={<Login/>}/>

					
					<Route path='/products/:id' element={<ProductDetails />} />
					<Route path="*" element={<Navigate to={'/'} replace/> }/>
					<Route path='*' element={<NotFound/>}/>
				</Routes>
			</div>
		</div>
	);
}
export default App;
