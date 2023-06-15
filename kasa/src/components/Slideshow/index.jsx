import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "../../style/slideshow.scss";
import VectorSuivant from "../../images/VectorSuivant.png";
import VectorPrecedent from "../../images/VectorPrecedent.png";

export default function Slideshow(pictures) {
	const buttonStyle = {
		width: "80px",
		background: "none",
		border: "0px",
	};
	const proprietes = {
		infinite: true,
		indicators: true,
		arrows: true,
		easing: "ease",
		prevArrow: (
			<button style={{ ...buttonStyle }}>
				<img
					src={VectorPrecedent}
					alt="Précedent"
				/>
			</button>
		),
		nextArrow: (
			<button style={{ ...buttonStyle }}>
				<img
					src={VectorSuivant}
					alt="Suivant"
				/>
			</button>
		),
	};
	pictures.pictures.map((slideImage) => console.log(slideImage));
	return (
		<div className="containerSlide">
			<Slide {...proprietes}>
				{pictures.pictures.map((slideImage, index) => (
					<div key={index}>
						<div
							className="img"
							style={{ backgroundImage: `url(${slideImage})` }}
						></div>
					</div>
				))}
			</Slide>
		</div>
	);
}
