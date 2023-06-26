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
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolorem ab magnam reiciendis velit sapiente in id ea, quod veniam hic ratione dolor cum neque facere. Earum blanditiis quidem soluta.",
		},
		{
			title: "Respect",
			description:
				"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus laborum nam, ea dolorum delectus assumenda et distinctio commodi, sint eos, harum libero unde dicta doloremque ducimus maxime sunt! Sunt, asperiores.",
		},
		{
			title: "Service",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, placeat voluptates, reiciendis hic sapiente voluptas ut praesentium eaque qui minus a minima. Iste corrupti officia quasi esse animi voluptatem odio.",
		},
		{
			title: "Sécurité",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi alias magnam esse delectus minima necessitatibus eum similique beatae ad ex molestiae perspiciatis optio, saepe totam doloribus recusandae excepturi dolor eligendi!",
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
