export const updateNotAuthToAuthCart = (notAuthCart, cartAuth) => {
	const a = cartAuth.map(({ cartQuantity, _id }) => ({ product: _id, cartQuantity }));
	const b = Object.entries(notAuthCart).map(([productId, cartQuantity]) => ({
		product: productId,
		cartQuantity,
	}));
	return { products: [...a, ...b] };
};
