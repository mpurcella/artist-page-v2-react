import React from 'react';
import Heading from '../../components/heading/Heading';
import { storeHeadingData } from '../../components/heading/HeadingData';
import { storeProductsListData } from '../../components/products-list/StoreProductsListData';
import Products from '../../components/products/Products';
import Wrapper from '../../components/wrapper/Wrapper';
import './Store.scss';

let Store = () => {
	return (
		<main>
			<div className='store'>
				<Wrapper>
					<div className='store-container'>
						<div className='store-heading'>
							<Heading
								headingClassName={storeHeadingData.className}
								headingValue={storeHeadingData.value}
							/>
						</div>
						<div className='store-products'>
							<Products
								productListData={storeProductsListData}
								productsList={'products-list store-products-list'}
								productsListItem={'products-list-item store-products-list-item'}
								productsListItemInfo={'products-list-item-info store-products-list-item-info'}
								productsName={'products-name store-products-name'}
								productsDescription={'products-description store-products-description'}
								productsPrice={'products-price store-products-price'}
							/>
						</div>
					</div>
				</Wrapper>
			</div>
		</main>
	);
};

export default Store;
