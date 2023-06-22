import React, { useState, useEffect } from "react";
import "../../style/slideshow.scss";
import VectorSuivant from "../../images/VectorSuivant.png";
import VectorPrecedent from "../../images/VectorPrecedent.png";

export default function Slideshow({ pictures }) {
	const [actualImageIndex, setActualImageIndex] = useState(0);
	const [slideImage, setSlideImage] = useState(pictures[actualImageIndex]);

	useEffect(() => {
		setSlideImage(pictures[actualImageIndex]);
	}, [actualImageIndex]);

	const goToPrevious = () => {
		const isFirstSlide = actualImageIndex === 0;
		const newIndex = isFirstSlide ? pictures.length - 1 : actualImageIndex - 1;
		setActualImageIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = actualImageIndex === pictures.length - 1;
		const newIndex = isLastSlide ? 0 : actualImageIndex + 1;
		setActualImageIndex(newIndex);
	};

	return (
		<div className="slideshowContainer">
			<div className="slide">
				<div>
					<div
						className="slideImg"
						style={{ backgroundImage: `url(${slideImage})` }}
					></div>
					<div className="slideNumber">
						{actualImageIndex + 1}/{pictures.length}
					</div>
				</div>
			</div>
			<button
				className="slideButton slideButtonPrev"
				onClick={goToPrevious}
			>
				<img
					src={VectorPrecedent}
					alt="Précedent"
				/>
			</button>
			<button
				className="slideButton slideButtonNext"
				onClick={goToNext}
			>
				<img
					src={VectorSuivant}
					alt="Suivant"
				/>
			</button>
		</div>
	);
}
