import { useEffect } from "react";
import styles from "./UnitCamp.module.css";
import Container from "../layouts/Container";
import Map from "../components/Map";

function UnitCamp({ view }) {
	console.log(styles);

	console.log(view);
	useEffect(() => {
		document.title = `${view?.name} - ${view?.description}`;
	}, [view]);

	console.log(view.img.includes("http"));

	return (
		<Container>
			<header></header>
			<div className={styles.view}>
				<div className={styles.map}>
					<Map coords={view.coords}></Map>
				</div>
				<div>
					<img
						src={
							view.img.includes("http")
								? view.img
								: `/camp-images/${view.img}.jpg`
						}
						alt={view.name}
					/>
					<h2>{view.name}</h2>
					<p>{view.adminDescription.info}</p>
				</div>
			</div>
		</Container>
	);
}

export default UnitCamp;
