import { useState } from "react";
import "./Amount.scss";

export default function Amount() {
	const [amount, setAmount] = useState(1);

	const increment = () => setAmount(amount + 1);

	const decrement = () => {
		if (amount === 1) return;
		setAmount(amount - 1);
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
