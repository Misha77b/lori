import React from "react";

const Field = ({ description, name, type, onChange, value, errors }) => {
	return (
		<div className="input__container">
			<label htmlFor={name}>{description}</label>
			<input
				id={name}
				name={name}
				type={type}
				placeholder={description}
				onChange={onChange}
				value={value}
				min={type === "number" ? "15" : null}
			/>
			{errors && <p className="error">{errors}</p>}
		</div>
	);
};

export default Field;
