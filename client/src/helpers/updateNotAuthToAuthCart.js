export const updateNotAuthToAuthCart = (cart) => {
	const transformedCart = {
		products: Object.entries(cart).map(([productId, cartQuantity]) => ({
			product: productId,
			cartQuantity,
		})),
	};

	return transformedCart;
};
