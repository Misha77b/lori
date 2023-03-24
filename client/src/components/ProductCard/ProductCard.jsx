import React from "react";
import ProductImageBox from "./components/ProductImageBox";
import ProductDescription from "./components/ProductDescription";
import ProductPrice from "../ProductPrice";
import ToCartButton from "../ToCartButton";
import FavoriteHeartIcon from "../FavoriteHeartIcon";
import ProductFlag from "./components/ProductFlag";
// eslint-disable-next-line import/named
import { ProductCardWrapper } from "./styled";

const ProductCard = ({ card, withCart = true, priceColor, setNotification }) => {
	const { name, currentPrice, previousPrice, newItem, _id, itemNo, sale, brand, imageUrls, color } =
		card;
	return (
		<ProductCardWrapper id={itemNo}>
			<ProductFlag sale={sale} newItem={newItem} />
			<ProductImageBox
				image={imageUrls[0]}
				brand={brand}
				sale={sale}
				newItem={newItem}
				id={itemNo}
			/>
			<ProductDescription name={name} color={color} />
			<ProductPrice
				id={itemNo}
				priceColor={priceColor}
				currentPrice={currentPrice}
				previousPrice={previousPrice}
			/>
			{withCart && <ToCartButton id={_id} setNotification={setNotification} />}
			<FavoriteHeartIcon id={_id} />
		</ProductCardWrapper>
	);
};
export default ProductCard;
