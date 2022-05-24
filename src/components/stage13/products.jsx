import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import course from './config/db';

const Products = ({ isCustomLayout }) => {
	console.log(isCustomLayout);

	const [courses] = useState(course);

	return (
		<div>
			<h1>Products</h1>
			<div className='products'>
				{courses.map((course) => (
					<div key={course.id}>
						<Link to={`/products/${course.id}`}>
							<div className='product'>
								<img src="" alt="" />
								<p>{course.name}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
