import {
	useRef,
	useEffect,
	useState,
} from "react";
import mapboxgl from "mapbox-gl";
// import styles from "./Map.module.css";

const key =
	"pk.eyJ1IjoicW9ib255b25pIiwiYSI6ImNsdXdnd3FvajBieGkya21naGg2ejJkYTYifQ.vMxrDboGtUpiyJ7XdrFP4w";

mapboxgl.accessToken = key;

const Map = ({ coords }) => {
	const mapContainerRef = useRef(null);

	const [lat, setLat] = useState(coords[0]);
	const [lng, setLng] = useState(coords[1]);
	// const [lat, lng] = coords;
	const [zoom, setZoom] = useState(15);

	// Initialize map when component mounts
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom: zoom,
		});

		// Add navigation control (the +/- zoom buttons)
		map.addControl(
			new mapboxgl.NavigationControl(),
			"top-right",
		);

		map.on("move", () => {
			setLng(map.getCenter().lng.toFixed(4));
			setLat(map.getCenter().lat.toFixed(4));
			setZoom(map.getZoom().toFixed(2));
		});

		// Clean up on unmount
		return () => map.remove();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<div>
				<div className='sidebarStyle'>
					Longitude: {lng} | Latitude: {lat} |
					Zoom: {zoom}
				</div>
			</div>
			<div
				className='map-container'
				ref={mapContainerRef}
			/>
		</div>
	);
};

export default Map;
