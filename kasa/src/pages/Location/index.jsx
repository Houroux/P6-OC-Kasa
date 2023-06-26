import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Loader from "../../components/Loader";
import Error from "../../pages/Error";
import { useParams } from "react-router-dom";
import OrangeStar from "../../images/orangeStar.png";
import GreyStar from "../../images/greyStar.png";
import "../../style/location.scss";

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
	useEffect(() => {
		getLogements();
	}, []);

	const rangeRating = [1, 2, 3, 4, 5];
	if (logement === undefined) return <Error />;
	return isLoading ? (
		<div>
			<div className="margin__main">
				<Header />
				<div className="locationContainer">
					<Loader></Loader>
				</div>
			</div>
			<Footer />
		</div>
	) : (
		<div>
			<div className="margin__main">
				<Header></Header>
				<div className="locationContainer">
					<Slideshow pictures={logement.pictures}></Slideshow>
					<div className="locationInfo">
						<div className="locationInfoLeft">
							<h1 className="locationInfoLeftTitle">{logement.title}</h1>
							<p className="locationInfoLeftLocalisation">
								{logement.location}
							</p>
							<div className="locationInfoLeftTags">
								<ul className="tagsList">
									{logement.tags.map((tag) => (
										<li
											key={tag}
											className="tagsListElement"
										>
											{tag}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="locationInfoRight">
							<div className="host">
								<p className="hostName">{logement.host.name}</p>
								<img
									src={logement.host.picture}
									alt="Host"
								/>
							</div>
							<div className="rating">
								{rangeRating.map((rangeElem) =>
									logement.rating >= rangeElem ? (
										<img
											src={OrangeStar}
											key={rangeElem.toString()}
											className="orangeStar"
											alt="Etoile orange"
										></img>
									) : (
										<img
											src={GreyStar}
											key={rangeElem.toString()}
											className="greyStar"
											alt="Etoile grise"
										></img>
									)
								)}
							</div>
						</div>
					</div>
					<div className="collapses">
						<Collapse title="Description">
							<p>{logement.description}</p>
						</Collapse>
						<Collapse title="Équipements">
							<ul>
								{logement.equipments.map((equipment) => (
									<li key={equipment}>{equipment}</li>
								))}
							</ul>
						</Collapse>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
