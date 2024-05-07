import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import { Footer } from "./Footer";


//create your first component
const Home = () => {
	return (
		<>
			<Jumbotron/>

			<Footer/>
		</>
	)
}
export default Home;
