/** @format */

import React from 'react';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import Posts from './posts';
import Users from './users';

const Dashboard = () => {
	return (
		<div>
			<div className='dashboard'>
				<Sidebar />

				<div>
					<Routes>
					<Route path="/admin" element={<Dashboard />}>
						<Route path='users' element={<Users />} />
						<Route path='posts' element={<Posts />} />
					</Route>
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
