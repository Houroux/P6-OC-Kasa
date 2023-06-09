import React from "react";
import "../../style/home.scss";
import Header from "../../components/Header";
import HomeBanner from "../../components/HomeBanner";
import HomeCardsContainer from "../../components/HomeCardsContainer";
import Footer from "../../components/Footer";

export default function Home() {
	return (
		<div className="home__body">
			<div className="margin__main home__body__main ">
				<Header></Header>
				<HomeBanner></HomeBanner>
				<HomeCardsContainer></HomeCardsContainer>
			</div>
			<Footer></Footer>
		</div>
	);
}
