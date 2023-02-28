export const getNumberOfItems = (name) => {
	const arrayLength = JSON.parse(getLocalItem(name));
	if (!arrayLength) {
		return 0;
	}
	return arrayLength.length;
};
export const counterCartSum = (products) => {
	// eslint-disable-next-line consistent-return,array-callback-return
	const mapped = products.map(({ price, newPrice }) => {
		if (price) {
			return Number(price);
		}
		if (newPrice) {
			return Number(newPrice);
		}
	});
	const sum = mapped.reduce((partialSum, a) => partialSum + a, 0);
	const sumRound = sum.toFixed(2);
	return sumRound;
};
