import React from 'react';
import { Link } from 'react-router-dom';
import './Products.scss';

let Products = (props) => {
	return (
		<ul className={props.productsList}>
			{props.productListData.map((data) => {
				return (
					<li className={props.productsListItem} key={data.id}>
						<Link to={data.link} className='products-list-item-container'>
							<div className='products-image-container'>
								<img src={data.src} className='products-image' alt={data.name} />
							</div>
							<div className={props.productsListItemInfo}>
								<h2 className={props.productsName}>{data.name}</h2>
								<p className={props.productsDescription}>{data.description}</p>
								<p className={props.productsPrice}>${data.price}</p>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Products;
