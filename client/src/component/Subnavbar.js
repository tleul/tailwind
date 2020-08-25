import React, { useState } from 'react';
import '../App.css';
const Subnavbar = () => {
	const [togglebar, settogglebar] = useState(false);
	return (
		<>
			<div className='h-15 w-auto sticky  mb-5 flex lg:justify-around justify-around lg:justify-around'>
				<div class='text-center py-4  '>
					<div
						class='p-2   bg-indigo-800  items-center text-indigo-100 leading-none rounded-full lg:rounded-full flex lg:inline-flex'
						role='alert'>
						<button
							className='focus:outline-none'
							className='focus:outline-none'>
							<span class='flex   mx-3 text-white rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>
								Fillter
							</span>
							<i class='fas fa-sort-down text-white opacity-75 h-4 w-4'></i>
						</button>
					</div>
				</div>
				<div class='text-center py-4 '>
					<div
						class='p-2 bg-indigo-800  items-center text-indigo-100 leading-none rounded-full lg:rounded-full flex lg:inline-flex'
						role='alert'>
						<button className='focus:outline-none'>
							<span class='flex text-white mx-3 rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>
								Category
							</span>
							<i class='fas fa-sort-down text-center text-white opacity-75 h-4 w-4'></i>
						</button>
					</div>
				</div>

				<div class='text-center py-4  '>
					<div
						class='p-2 bg-indigo-800  items-center text-indigo-100 leading-none rounded-full lg:rounded-full flex lg:inline-flex'
						role='alert'>
						<button className='focus:outline-none'>
							<span class='flex text-white mx-3 rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3'>
								New Products
							</span>

							<i class='fas fa-sort-down text-white opacity-75 h-4 w-4'></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Subnavbar;
