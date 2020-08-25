import React, { useState } from 'react';
import '../App.css';
const Navbar = () => {
	const [togglebar, settogglebar] = useState(false);
	return (
		<>
			<div className='h-20 w-auto bg-black ml-2 mr-2 mt-2  flex justify-between '>
				<img
					width='100'
					height='100'
					className='border-solid border-4 border-black rounded-sm'
					src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/fashion-logo-design-768x532.jpg'
					alt=''
				/>{' '}
				<div className='large-navbar hidden sm:flex lg:flex '>
					<a
						href=''
						className='text-white  text-center pt-6 px-10 hover:text-black font-bold hover:bg-white hover:rounded-sm '>
						Home
					</a>
					<a
						href=''
						className='text-white justify-center pt-6 px-10 font-bold hover:text-black font-bold hover:bg-white hover:rounded-sm '>
						About us
					</a>
					<a
						href=''
						className='text-white justify-center pt-6 px-10 font-bold hover:text-black font-bold hover:bg-white hover:rounded-sm'>
						Contact
					</a>
				</div>
				<div className='collapse-navbar flex  justify-center sm:hidden '>
					<button
						onClick={() => settogglebar(!togglebar)}
						className='flex items-center px-3 py-2   rounded text-teal-200 border-white hover:text-white hover:border-white focus:outline-none'>
						<svg
							class='fill-current h-9 w-9 '
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
			</div>

			{togglebar == true && (
				<div className='lg:hidden  flex flex-col ml-2 mr-2  bg-black '>
					<div className='block'>
						<a
							href=''
							className='block text-white float-right pb-5 px-15 hover:text-black font-bold hover:bg-white hover:rounded-sm '>
							Home
						</a>
					</div>
					<div>
						<a
							href=''
							className='block text-white  float-right pb-5 px-10 font-bold hover:text-black font-bold hover:bg-white hover:rounded-sm '>
							About us
						</a>
					</div>
					<div>
						<a
							href=''
							className='block text-white float-right pb-5 px-12 font-bold hover:text-black font-bold hover:bg-white hover:rounded-sm'>
							Contact
						</a>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
