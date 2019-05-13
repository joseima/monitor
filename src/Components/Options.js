  import React from 'react';
import redmeat from '../img/redmeat.png';
import eggs from '../img/eggs.png';
import potato from '../img/potato.png';
import herbs from '../img/herbs.png';
import milkproducts from '../img/milkproducts.png';
import vegetables from '../img/vegetables.png';
import bread from '../img/bread.png';
import oliveoil from '../img/oliveoil.png';
import fishsea from '../img/fishsea.png';
import seeds from '../img/seeds.png';
import sweet from '../img/sweets.png';
import legumes from '../img/legumes.png';
import cereals from '../img/cereals.png';
import whitemeat from '../img/whitemeat.png';
import fruits from '../img/fruits.png';
import olives from '../img/olives.png';
import arrowHead from '../img/arrow-head.png';


const Options = ({addGraf}) => {
	return (
		  <div className="options">
		  	  <span className="options-title"><img src={arrowHead} className="arrowhead" alt="arrow head" /> Choose your meals for today</span>
		        <span className="options-detail">You can remove a wrong selection by click/tap in the “Today” collumn</span>
		  		<img src={vegetables} data-meal="vegetables-alim" data-portion="basicDailyPortion" className="aliment basic vegetables" alt="vegetables" /> 
		        <img src={bread}  data-meal="bread-alim" onClick={addGraf} data-portion="basicDailyPortion" className="aliment basic bread" alt="Bread" /> 
		  		<img src={cereals} data-meal="cereals-alim" onClick={addGraf} data-portion="basicDailyPortion" className="aliment basic cereals" alt="cereals" />
		  		<img src={fruits} data-meal="fruits-alim" onClick={addGraf} data-portion="basicDailyPortion" className="aliment basic fruits" alt="fruits" />
		  		<img src={oliveoil} data-meal="olive-oil-alim" onClick={addGraf} data-portion="basicDailyPortion" className="aliment basic olive-oil" alt="olive oil" />
		  		<img src={herbs} data-meal="herbs-alim" onClick={addGraf} data-portion="basicPortion" className="aliment basic2 herbs" alt="herbs" />
		      	<img src={milkproducts} data-meal="milk-prod-alim" onClick={addGraf} data-portion="basicPortion" className="aliment basic2 milk-products" alt="Milk products" /> 
		  		<img src={olives} data-meal="olives-alim" onClick={addGraf} data-portion="basicPortion" className="aliment basic2 olives" alt="olives" />
		  		<img src={seeds} data-meal="seeds-alim" onClick={addGraf} data-portion="basicPortion" className="aliment basic2 seeds" alt="seeds" />
		  		<img src={redmeat} data-meal="meat-alim" onClick={addGraf} data-portion="weeklyPortion" className="aliment weekly meat" alt="red meat" />
		  		<img src={potato} data-meal="potato-alim" onClick={addGraf} data-portion="weeklyPortion" className="aliment weekly potato" alt="Potatos" />
		        <img src={whitemeat} data-meal="white-meat-alim" onClick={addGraf} data-portion="weeklyPortion" className="aliment weekly white-meat" alt="White meat" /> 
		  		<img src={eggs} data-meal="eggs-alim" onClick={addGraf} data-portion="weeklyPortion" className="aliment weekly eggs" alt="Eggs" />
		  		<img src={legumes} data-meal="legumes-alim" onClick={addGraf} data-portion="weeklyPortion" className="aliment weekly legumes" alt="Legumes" />
		  		<img src={fishsea} data-meal="fish-sea-alim" onClick={addGraf} data-portion="weeklyPortion" className="aliment weekly fish-sea" alt="Fish Sea food" />
		  		<img src={sweet} data-meal="sweet-alim" onClick={addGraf} data-portion="sweetPortion" className="aliment sweets" alt="Sweets" />     
		   </div>
	);
}

export default Options;


 