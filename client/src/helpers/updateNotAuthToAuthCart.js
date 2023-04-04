export const updateNotAuthToAuthCart = (notAuthCart, cartAuth) => {
	const authCartTrans = cartAuth.map(({ cartQuantity, _id }) => ({ product: _id, cartQuantity }));
	const notAuthCartTrans = Object.entries(notAuthCart).map(([productId, cartQuantity]) => ({
		product: productId,
		cartQuantity,
	}));
	return { products: [...authCartTrans, ...notAuthCartTrans] };
};
