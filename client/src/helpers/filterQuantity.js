export const filterQuantity = (prodId, obj) => {
	const quantity = Object.entries(obj)
		// eslint-disable-next-line array-callback-return,consistent-return
		.map(([productId, cartQuantity]) => {
			if (prodId === productId) return cartQuantity;
		})
		.filter(Boolean)
		?.pop();
	return quantity;
};
