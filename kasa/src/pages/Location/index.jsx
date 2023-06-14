import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";

export default function Location() {
	const { locationId } = useParams();
	const [isLoading, setLoading] = useState(true);
	let logements;
	let logement;
	const getLogements = () => {
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
				// console.log(logements);

				const logementArray = logements.filter(
					(logement) => logement.id === locationId
				);
				logement = logementArray[0];
				console.log(logement);
				setLoading(false);
			});
	};
	getLogements();

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
				<p>{logement.title}</p>
			</div>
			<Footer></Footer>
		</div>
	);
}
