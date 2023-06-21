import React, { useState, useEffect } from "react";
import "../../style/home.scss";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import HomeCard from "../../components/HomeCard";
import Footer from "../../components/Footer";

export default function Home() {
	const [logements, setlogements] = useState([]);
	const getlogements = () => {
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
				setlogements(myJson);
			});
	};
	useEffect(() => {
		getlogements();
	}, []);

	// console.log(logements);
	return (
		<div className="home__body">
			<div className="margin__main">
				<Header></Header>
				<div className="home__body">
					<Banner className="homeBanner">Chez vous, partout et ailleurs</Banner>
					<div className="home__body__cardsContainer">
						{logements.map((logement) => (
							<HomeCard
								key={logement.id}
								id={logement.id}
								cover={logement.cover}
								title={logement.title}
							></HomeCard>
						))}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
