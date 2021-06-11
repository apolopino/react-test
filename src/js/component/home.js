import React from "react";
import propTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//creo un title que recibe un objeto props
const Title = props => {
	return (
		<div>
			<h1 style={{ color: "red", fontSize: "60px" }}>{props.name}</h1>
			<h2>{props.name}</h2>
		</div>
	);
};
// Definos los proptypes para el title
Title.propTypes = {
	name: propTypes.string
};

//Creo una card
const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.body}</p>
				<a href={props.url} className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	image: propTypes.string,
	title: propTypes.string,
	body: propTypes.string,
	url: propTypes.string
};

export function Home() {
	return (
		<div className="container row">
			<div className="col">
				<Card
					image="https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg"
					title="Titulo con React"
					body="A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
					url="https://linkedin.com"
				/>
			</div>
			<div className="col">
				<Card
					image="https://st4.depositphotos.com/12982378/22072/i/600/depositphotos_220729084-stock-photo-smiling-adult-man-crossed-arms.jpg"
					title="Titulo con React 2"
					body="A 2nd card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards."
					url="https://linkedin.com"
				/>
			</div>
		</div>
	);
}
