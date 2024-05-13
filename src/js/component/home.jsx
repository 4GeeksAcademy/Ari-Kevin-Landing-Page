import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Card } from "./Card.";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid jumbo-container">
                <Jumbotron />

                <Card />
            </div>

			<Footer />
		</>
	)
}
export default Home;