import React, { useEffect, useState } from "react";
import "../../style/slideshow.scss";
import VectorSuivant from "../../images/VectorSuivant.png";
import VectorPrecedent from "../../images/VectorPrecedent.png";

export default function Slideshow(pictures) {
	const [actualImageIndex, setActualImageIndex] = useState(0);
	const [slideImage, setSlideImage] = useState(
		pictures.pictures[actualImageIndex]
	);
	const [prevImage, setPrevImage] = useState();
	const [nextImage, setNextImage] = useState();

	const getImages = () => {
		setSlideImage(pictures.pictures[actualImageIndex]);
		setPrevImage(
			actualImageIndex === 0
				? pictures.pictures.length - 1
				: actualImageIndex + 1
		);
		setNextImage(
			actualImageIndex === pictures.pictures.length - 1
				? 0
				: actualImageIndex + 1
		);
	};

	useEffect(() => {
		getImages();
	}, [actualImageIndex]);

	return (
		<div className="slideshowContainer">
			<div className="slide">
				<div>
					<div
						className="slideImg"
						style={{ backgroundImage: `url(${slideImage})` }}
					></div>
					<div className="slideNumber">
						{actualImageIndex + 1}/{pictures.pictures.length}
					</div>
				</div>
			</div>
			<button
				className="slideButton slideButtonPrev"
				// onClick={setActualImageIndex(prevImage)}
			>
				<img
					src={VectorPrecedent}
					alt="Précedent"
				/>
			</button>
			<button
				className="slideButton slideButtonNext"
				// onClick={setActualImageIndex(nextImage)}
			>
				<img
					src={VectorSuivant}
					alt="Suivant"
				/>
			</button>
		</div>
	);
}
