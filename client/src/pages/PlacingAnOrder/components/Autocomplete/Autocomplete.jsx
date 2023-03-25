import React, { useState, useEffect, useRef } from "react";
import "./Autocomplete.scss";

const Autocomplete = ({ options, values }) => {
	const [value, setValue] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const suggestions = options.filter(
		(option) => option.label.toLowerCase().includes(value.toLowerCase()),
		// eslint-disable-next-line no-mixed-spaces-and-tabs
	);

	const autocompleteRef = useRef();

	useEffect(() => {
		const handleClick = (event) => {
			if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
				setShowSuggestions(false);
			}
		};
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	// useEffect(() => {
	// 	values = value;
	// }, [value]);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	const handleSuggestionClick = (suggetion) => {
		setValue(suggetion);
		setShowSuggestions(false);
	};
	return (
		<div className="autocomplete">
			<input
				id="adress"
				name="adress"
				value={value}
				onChange={handleChange}
				values={(values = value)}
				placeholder="Search"
				onFocus={() => setShowSuggestions(true)}
				className="autocomplete__input"
			/>
			{showSuggestions && (
				<ul className="suggestions">
					{suggestions.map((suggestion) => (
						<li onClick={() => handleSuggestionClick(suggestion.label)} key={suggestion.id}>
							{suggestion.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Autocomplete;
