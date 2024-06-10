import { Link } from "react-router-dom";

function Homepage() {
	return (
		<>
			<main className='main'>
				<div className='main__content'>
					<div className='main__text'>
						<h1 className='main__header'>
							Explore the best camps on Earth
						</h1>
						<p>
							With over a million campsites around
							<br />
							the world let us help you find the
							perfect one.
						</p>

						<Link
							to='/sites'
							className='btn btn--primary'
							onClick={() => {}}>
							View Campsites
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}

export default Homepage;
