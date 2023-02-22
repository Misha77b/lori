export const getLocalItem = (name) => {
	return localStorage.getItem(name);
};

export const setLocalItem = (name, value) => {
	let existingEntries = JSON.parse(getLocalItem(name));
	// eslint-disable-next-line no-unused-expressions
	existingEntries === null && (existingEntries = []);
	const entryItem = value;
	localStorage.setItem("item", entryItem);
	existingEntries.push(entryItem);
	const set = Array.from(new Set(existingEntries));
	localStorage.setItem(name, JSON.stringify(set));
};

export const getNumberOfItems = (name) => {
	const arrayLength = JSON.parse(getLocalItem(name));
	if (!arrayLength) {
		return 0;
	}
	return arrayLength.length;
};
export const getItems = (name, items) => {
	const parsed = JSON.parse(getLocalItem(name));
	if (!parsed) return [];
	return (
		items
			// eslint-disable-next-line consistent-return, array-callback-return
			.map((item) => {
				if (parsed.includes(item.itemNo)) return item;
			})
			.filter(Boolean)
	);
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
export const deleteCardIdFromStore = (id, name) => {
	const value = Number(id);
	let parsed = JSON.parse(getLocalItem(name));
	parsed = parsed.filter((item) => Number(item) !== value);
	return localStorage.setItem(name, JSON.stringify(parsed));
};
