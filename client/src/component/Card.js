import React from 'react';

const Card = ({ item }) => {
	return (
		<div className='w-44  lg:w-64 rounded overflow-hidden shadow-lg flex flex-col align-center mb-8 mt-10'>
			<img className='w-full h-64 ' src={item.img} alt='' />

			<i className='font-bold lg:text-white   text-center'>
				{item.title}
			</i>
			<p className='font-bold text-center '> $ {item.price}</p>

			<div className='justify-center flex'>
				<button class='bg-black text-center  hover:bg-gray-900  text-white font-bold py-2 px-4 justify-center flex rounded w-32'>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Card;
