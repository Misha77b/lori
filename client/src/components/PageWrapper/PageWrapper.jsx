function PageWrapper({ children }) {
	return (
		<div>
			<div className="page-name">{pageName}</div>
			{children}
		</div>
	);
}
export default PageWrapper;
