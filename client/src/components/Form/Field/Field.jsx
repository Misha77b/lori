import React from "react";
import styled from "styled-components";

const Field = ({ description, name, type, onChange, value, errors }) => {
	return (
		<div className="input__container">
			<Label htmlFor={name}>{description}</Label>
			<Input
				id={name}
				name={name}
				type={type}
				placeholder={description}
				onChange={onChange}
				value={value}
				min={type === "number" ? "15" : null}
			/>
			{errors && <Error>{errors}</Error>}
		</div>
	);
};
export const Label = styled.label`
	font-family: Open Sans, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 14px;
	color: #000000;
`;
export const Input = styled.input`
	box-sizing: border-box;
	width: 300px;
	height: 44px;
	background-color: #ffffff;
	border: 1px solid #a0a9af;
	border-radius: 2px;
	padding: 10px;
`;
export const Error = styled.p`
	font-family: Open Sans, sans-serif;
	font-size: 14px;
	font-weight: 400;
	line-height: 14px;
	color: #e03737;
	&:before {
		content: "\\26A0";
		display: inline-block;
		font-size: 16px;
		margin-right: 4px;
	}
`;
export default Field;
