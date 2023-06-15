import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slideshow from "../../components/Slideshow";
import { useParams } from "react-router-dom";

export default function Location() {
	const { locationId } = useParams();
	const [isLoading, setLoading] = useState(true);
	const [logement, setLogement] = useState({});
	const getLogements = () => {
		let logements;
		fetch("../../Data/logements.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				logements = myJson;
				let logementArray = logements.find(
					(logement) => logement.id === locationId
				);
				setLogement(logementArray);
				setLoading(false);
			});
	};

	getLogements();
	console.log(logement);

	return isLoading ? (
		<div>
			<div className="margin__main">
				<Header></Header>
				<p>Loading</p>
			</div>
			<Footer></Footer>
		</div>
	) : (
		<div>
			<div className="margin__main">
				<Header></Header>
				<div className="locationContainer">
					<Slideshow pictures={logement?.pictures}></Slideshow>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
