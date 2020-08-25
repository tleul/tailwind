import React from 'react';
import Card from './Card';

const CardList = () => {
	const data = [
		{
			img:
				'https://m.media-amazon.com/images/I/61S5+ZLNayL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '24',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/81m1ruySeHL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '30',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/71Ru746Zf4L._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '35',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/71LvZuLxMBL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '40',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/71lvW+vO4eL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '45',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/51hoTa8WqnL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '50',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/71zsGh3ZOwL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '55',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/71j100aISvL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '60',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/61pNAHlI1sL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '65',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/61pNAHlI1sL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '65',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/61pNAHlI1sL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '65',
		},
		{
			img:
				'https://m.media-amazon.com/images/I/61pNAHlI1sL._AC_UL320_.jpg',
			title: 'shoeOne',
			price: '65',
		},
	];
	return (
		<div className='flex flexx-col flex-wrap justify-center justify-around '>
			{data.map((item) => (
				<Card item={item} />
			))}
		</div>
	);
};

export default CardList;
