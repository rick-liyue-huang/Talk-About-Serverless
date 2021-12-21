import React from 'react';
import {Banner} from "./components/Banner";
import {Projects} from "./components/Projects";
import {Footer} from "./components/Footer";

export const Home = () => {
	return (
		<div>
			<Banner />
			<Projects />
			<Footer />
		</div>
	)
}
