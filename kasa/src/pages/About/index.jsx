import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import "../../style/about.scss";

export default function About() {
	const aboutData = [
		{
			title: "Fiabilité",
			description:
				"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
		},
		{
			title: "Respect",
			description:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Service",
			description:
				"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
		},
		{
			title: "Sécurité",
			description:
				"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
		},
	];
	return (
		<div>
			<div className="margin__main">
				<Header></Header>
				<div className="about">
					<Banner className="homeBanner aboutBanner">&nbsp;&nbsp;</Banner>
					<div className="aboutCardContainer">
						{aboutData.map((about) => (
							<Collapse
								key={about.title}
								title={about.title}
							>
								<p>{about.description}</p>
							</Collapse>
						))}
					</div>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}
