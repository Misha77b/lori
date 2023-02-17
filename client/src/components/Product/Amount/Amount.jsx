import { useState } from "react";
import styled from "styled-components";
import "./Amount.scss";

export default function Amount() {
	const [amount, setAmount] = useState(1);
	const handlerClick = (ev) => {
		if (ev.target.value === "+") {
			setAmount(amount + 1);
		} else if (ev.target.value === "-") {
			setAmount(amount - 1);
		} else {
			setAmount(ev.target.value);
		}
	};
	return (
		<div className="inpt">
			<input className="inpt  inpt__button" type="button" value="-" onClick={handlerClick} />
			<input className="inpt inpt__text" type="text" value={amount} />
			<input className="inpt inpt__button" type="button" value="+" onClick={handlerClick} />
		</div>
	);
}
