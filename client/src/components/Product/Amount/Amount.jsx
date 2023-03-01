import "./Amount.scss";

export default function Amount({ amount, setAmount, itemNo }) {
	const increment = () => {
		// eslint-disable-next-line no-plusplus
		setAmount((prev) => ({ ...prev, [itemNo]: prev[itemNo]++ }));
	};

	const decrement = () => {
		if (amount === 1) return;
		// eslint-disable-next-line no-plusplus
		setAmount((prev) => ({ ...prev, [itemNo]: prev[itemNo]-- }));
	};

	return (
		<div className="inpt">
			<button type="button" className="inpt__button" onClick={decrement}>
				-
			</button>
			<p className="inpt__text">{amount}</p>
			<button type="button" className="inpt__button" onClick={increment}>
				+
			</button>
		</div>
	);
}
