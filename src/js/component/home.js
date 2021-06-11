import React from "react";
import propTypes from 'prop-types';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//creo un title que recibe un objeto props
const Title = (props) => {
	return (
		<div>
			<h1 style={{ color: "red", fontSize: "60px" }}>
				Titulo en componente Title, con inline style en react
			</h1>
            <h2>{ props.name }</h2>
		</div>
	);
};
//props de title
Title.propTypes = {
    name: PropTypes.string,
}

//Defino una card, la cual puede despues reusar
const Card = (props) => {
	return (
		//aca pegar el codigo de las cards de bootstrap. En los elementos de prop, se coloca {props.element}
	);
};
//props de Card
Card.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	content: PropTypes.string,
};




//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>Titulo del sitio en funcion Home</h1>
			{/* La forma de llamar al título, es a través del componente previamente definido. */}
			<Title />
			{/* Acá coloco el título, per a través de un componente */}
		</div>
		<div>
			<Card 
				title='titulo'
				image='imagen'
				content='content'
				/>
		</div>
	);
}

