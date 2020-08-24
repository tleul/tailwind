import React from 'react';

const Navbar = () => {
	return (
		<div className='h-20 w-auto bg-black m-2 flex '>
			<img
				width='100'
				height='100'
				className='border-solid border-4 border-black rounded-sm'
				src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/fashion-logo-design-768x532.jpg'
				alt=''
			/>

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
	);
};

export default Navbar;
