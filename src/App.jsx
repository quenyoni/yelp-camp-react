import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import UnitCamp from "./pages/UnitCamp";
import CampSites from "./pages/CampSites";
import Header from "./components/Header";
import { useEffect, useReducer } from "react";

function reducer(state, action) {
	switch (action.type) {
		case "dataReceived":
			return {
				...state,
				status: "ready",
				camps: [...action.payload],
			};

		case "view":
			// console.log(action.payload);

			return {
				...state,
				view: state.camps[action.payload],
			};

		default:
			throw new Error("Action unkonwn");
	}
}

const initialState = {
	loggedIn: false,
	user: null,
	status: "loading",
	camps: [],
	error: null,
	view: null,
};

function App() {
	const [{ camps, view, loggedIn }, dispatch] =
		useReducer(reducer, initialState);

	useEffect(() => {
		fetch("http://localhost:9000/camps")
			.then((res) => res.json())
			.then((data) =>
				dispatch({
					type: "dataReceived",
					payload: data,
				}),
			)
			.catch((err) =>
				dispatch({ type: "dataFailed" }),
			);
	}, []);

	return (
		<Router>
			<Header loggedIn={loggedIn} />
			<Routes>
				<Route path='/' element={<Homepage />} />

				<Route
					path='/view'
					element={<UnitCamp view={view} />}
				/>
				<Route
					path='/sites'
					element={
						<CampSites
							dispatch={dispatch}
							camps={camps}
						/>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
