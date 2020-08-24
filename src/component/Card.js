import React from 'react';

const Card = () => {
	return (
		<div className='w-64  rounded overflow-hidden shadow-lg flex flex-col align-center mb-10 mt-10'>
			<img
				className='w-full  '
				src='https://images-na.ssl-images-amazon.com/images/I/81HYvz2wC0L._AC_UX522_.jpg'
				alt=''
			/>

			<i className='font-bold   text-center'>Discription</i>
			<p className='font-bold text-center '>200$</p>
			<div className='justify-center flex'>
				<button class='bg-black text-center hover:bg-gray-900  text-white font-bold py-2 px-4 justify-center flex rounded w-32'>
					Add Cart
				</button>
			</div>
		</div>
	);
};

export default Card;
