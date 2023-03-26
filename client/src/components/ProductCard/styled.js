import styled from "styled-components";

export const ProductCardWrapper = styled.div`
	background-color: rgba(245, 245, 245, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 25px;
	padding: 10px;
	position: relative;
	width: 100%;
	height: 100%;
	transition: all 0.3s ease-in;
	@media screen and (max-width: 700px) {
		width: 90%;
		margin-inline: auto;
	}
	@media screen and (min-width: 920px) {
		&:hover {
			transform: scale(1.1);
			box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.4);
			border-color: #007042;
		}
	}
	@media screen and (max-width: 350px) {
		margin-inline: auto;
		width: 285px;
	}
`;
