import styled from "styled-components";

export const CatalogueWrapper = styled.div`
	display: grid;
	gap: 48px;
	grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
`;
export const FiltersPhonesStyledWrapper = styled.div`
	display: grid;
	gap: 2%;
	grid-template-columns: ${(props) => (props.isMobileSize ? "auto" : "300px auto")};
`;
