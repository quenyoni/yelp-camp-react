import { Link } from "react-router-dom";
function Header({ status, loggedIn }) {
	return (
		<header className='header'>
			<img
				className='logo'
				src='/Logo.svg'
				alt='yelpcamp  logo'
			/>
			{loggedIn && <p>Reed</p>}
			{!loggedIn && (
				<Link
					className='btn btn--primary'
					to='/login'>
					Get Started
				</Link>
			)}
		</header>
	);
}

export default Header;
