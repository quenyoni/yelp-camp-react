function Btn({ children, func }) {
	return (
		<button
			onClick={() => func()}
			className='btn btn--primary'>
			{children}
		</button>
	);
}

export default Btn;
