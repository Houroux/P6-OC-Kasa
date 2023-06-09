import React, { useState, useEffect } from "react";
import "../../style/home.scss";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
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
				console.log(myJson);
				setlogements(myJson);
			});
	};
	useEffect(() => {
		getlogements();
	}, []);
	return (
		<div className="home__body">
			<div className="margin__main home__body__main ">
				<Header></Header>
				<HomeBanner></HomeBanner>
				<div className="cardsContainer">
					{logements.map((logement) => (
						<HomeCard
							key={logement.id}
							cover={logement.cover}
							title={logement.title}
						></HomeCard>
					))}
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
