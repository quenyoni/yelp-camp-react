import Container from "../layouts/Container";
import { Link } from "react-router-dom";
function CampSites({ camps, dispatch }) {
	return (
		<Container>
			<Sites camps={camps} dispatch={dispatch} />
		</Container>
	);
}

export default CampSites;

function Sites({ camps, dispatch }) {
	return (
		<div className='camp__wrapper'>
			{camps.map((c, index) => {
				return (
					<div key={c.name} className='card'>
						<div className='card-inner'>
							<div className='card-front'>
								<img
									alt={c.name}
									src={
										c.img.includes("http")
											? c.img
											: `/camp-images/${c.img}.jpg`
									}
								/>
							</div>
							<div
								className='card-back'
								style={{
									backgroundImage: `url("./camp-images/${c.img}.jpg")`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									background:
										"linearGradient(#000,#000)",
								}}>
								<div>
									<h4>{c.name}</h4>
									<p>{c.description}</p>
									<Link
										to={"/view"}
										onClick={() => {
											dispatch({
												type: "view",
												payload: index,
											});
										}}>
										<button className='btn btn--secondary'>
											View
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
