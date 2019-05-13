  import React from 'react';
import redmeatGraf from '../img/redmeatgraf.png';
import eggsGraf from '../img/eggsgraf.png';
import potatoGraf from '../img/potatograf.png';
import herbsGraf from '../img/herbsgraf.png';
import milkproductsGraf from '../img/milkproductsgraf.png';
import vegetablesGraf from '../img/vegetablesgraf.png';
import breadGraf from '../img/breadgraf.png';
import oliveoilGraf from '../img/oliveoilgraf.png';
import fishseaGraf from '../img/fishseagraf.png';
import seedsGraf from '../img/seedsgraf.png';
import sweetGraf from '../img/sweetsgraf.png';
import legumesGraf from '../img/legumesgraf.png';
import cerealsGraf from '../img/cerealsgraf.png';
import fruitsGraf from '../img/fruitsgraf.png';
import whitemeatGraf from '../img/whitemeatgraf.png';
import olivesGraf from '../img/olivesgraf.png';
import remove from '../img/remove.png'


const Calendar = ({addGraf , removeGraf, removePortion}) => {
	return (
		 <div className="calendar">
	    <div className="calendardata">
	    <p className="datapick">Date: <input type="date" id="datepicker"/></p>
	    <span className="calendar-title">Weekly Calendar </span><p className="date-detail"> 31 Jul - 6 Aug</p><br />
	      <span className="calendar-detail">This is the regitser of your meals during this week. You can always consult previous weeks.</span>
	      </div>
	    <div className="calendar-flex">
	    	<div className="calendar-day day1">
	          <div className="weekly-food">
	           	<img alt="meatgraf1" src={redmeatGraf} className="meat-graf"/>
	            <img alt="egggraf1" src={eggsGraf} className="eggs-graf"/>
	            <img alt="potatograf1" src={potatoGraf} className="potato-graf"/>
	          </div>
	          <div className="daily-food">
	            	<img alt="image1" src={herbsGraf} className="herbs-graf"/>
	                <img alt="image2" src={milkproductsGraf} className="milk-prod-graf"/>
	          </div>
	        	<div className="basic-daily-food">
	           		<img alt="image3" src={vegetablesGraf} className="vegetables-graf"/>
	                <img alt="image4" src={breadGraf} className="bread-graf"/>
	                <img alt="image5" src={oliveoilGraf} className="olive-oil-graf"/>
	            </div> 
	          <span>Monday 31</span>
	      </div>
	      <div className="calendar-day day2">
	    	   <div className="sweet-food">
	           	<img alt="image6" src={sweetGraf} className="sweet-graf"/>
	          </div>
	          <div className="weekly-food">
	           	<img alt="image7" src={redmeatGraf} className="meat-graf"/>
	            <img alt="image8" src={fishseaGraf} className="fish-sea-graf"/>
	            <img alt="image9" src={potatoGraf} className="potato-graf"/>
	          </div>
	          <div className="daily-food">
	            	<img alt="image10" src={herbsGraf} className="herbs-graf"/>
	                <img alt="image11" src={oliveoilGraf} className="olives-graf"/>
	                <img alt="image12" src={seedsGraf} className="seeds-graf"/>
	          </div>
	        	<div className="basic-daily-food">
	                <img alt="image13" src={cerealsGraf} className="cereals-graf"/>
	                <img alt="image14" src={fruitsGraf} className="fruits-graf"/>
	                <img alt="image15" src={oliveoilGraf} className="olive-oil-graf"/>
	            </div> 
	         	  <span>Tuesday 1</span>
	      </div>
	      <div className="calendar-day day3">
	          <div className="weekly-food">
	            <img alt="image16" src={eggsGraf} className="eggs-graf"/>
	            <img alt="image17" src={legumesGraf} className="legumes-graf"/>
	            <img alt="image18" src={fishseaGraf} className="fish-sea-graf"/>
	            <img alt="image19" src={potatoGraf} className="potato-graf"/>
	          </div>
	          <div className="daily-food">
	            	<img alt="image20" src={herbsGraf} className="herbs-graf"/>
	                <img alt="image21" src={oliveoilGraf} className="olives-graf"/>
	                <img alt="image22" src={seedsGraf} className="seeds-graf"/>
	          </div>
	        	<div className="basic-daily-food">
	           		<img alt="image23" src={vegetablesGraf} className="vegetables-graf"/>
	                <img alt="image24" src={breadGraf} className="bread-graf"/>
	                <img alt="image25" src={cerealsGraf} className="cereals-graf"/>
	            </div> 
	       	  <span>Wednesday 2</span>
	      </div>
	      <div className="calendar-day day4">
	          <div className="weekly-food">
	           	<img alt="image26" src={redmeatGraf} className="meat-graf"/>
	            <img alt="image27" src={potatoGraf} className="potato-graf"/>
	          </div>
	          <div className="daily-food">
	            	<img alt="image28" src={herbsGraf} className="herbs-graf"/>
	                <img alt="image29" src={milkproductsGraf} className="milk-prod-graf"/>
	                <img alt="image30" src={oliveoilGraf} className="olives-graf"/>
	                <img alt="image31" src={seedsGraf} className="seeds-graf"/>
	          </div>
	        	<div className="basic-daily-food">
	           		<img alt="image32" src={vegetablesGraf} className="vegetables-graf"/>
	                <img alt="image33" src={fruitsGraf} className="fruits-graf"/>
	                <img alt="image34" src={oliveoilGraf} className="olive-oil-graf"/>
	            </div> 
	       	  <span>Thursday 3</span>
	      </div>
	      <div className="calendar-day day5">   
	          <div className="weekly-food">
	           	<img alt="image35" src={redmeatGraf} className="meat-graf"/>
	            <img alt="image36" src={eggsGraf} className="eggs-graf"/>
	            <img alt="image37" src={potatoGraf} className="potato-graf"/>
	          </div>
	          <div className="daily-food">
	            	<img alt="image38" src={herbsGraf} className="herbs-graf"/>
	                <img alt="image39" src={milkproductsGraf} className="milk-prod-graf"/>
	          </div>
	        	<div className="basic-daily-food">
	           		<img alt="image40" src={vegetablesGraf} className="vegetables-graf"/>
	                <img alt="image41" src={breadGraf} className="bread-graf"/>
	                <img alt="image42" src={cerealsGraf} className="cereals-graf"/>
	                <img alt="image43" src={fruitsGraf} className="fruits-graf"/>
	                <img alt="image44" src={oliveoilGraf} className="olive-oil-graf"/>
	          </div> 
	       	  <span>Fryday 4</span>
	      </div>
	      <div className="calendar-active-day today"> 
	        	<span className="today">Today</span>
	          <div className="today-sweet sweet-alim">
	            <img  src={remove} alt="remove meal1" onClick={removeGraf} data-portion="sweetPortion"  data-meal="sweet-alim" className="remove-sweet remove"/>
	           	<img alt="image46" src={sweetGraf} className="meal-graf sweet-graf"/>
	          </div>
	          <div className="today-weekly meat-alim">
	            <img  src={remove} alt="remove meal2" onClick={removeGraf} data-portion="weeklyPortion" data-meal="meat-alim" className="remove-meat remove"/>
	           	<img alt="image48" src={redmeatGraf} className="meat-graf weekly-graf meal-graf"/>
	          </div>
	          <div className="today-weekly eggs-alim">
	           <img  src={remove} alt="remove meal3" onClick={removeGraf} data-portion="weeklyPortion" data-meal="eggs-alim" className="remove-eggs remove"/>
	            <img alt="image50" src={eggsGraf} className="eggs-graf weekly-graf meal-graf"/>
	          </div>
	          <div className="today-weekly legumes-alim">
	            <img  src={remove} alt="remove meal4" onClick={removeGraf} data-portion="weeklyPortion" data-meal="legumes-alim" className="remove-legumes remove"/>
	            <img alt="image52" src={legumesGraf} className="legumes-graf weekly-graf meal-graf"/>
	          </div>
	          <div className="today-weekly white-meat-alim">
	            <img src={remove} alt="remove meal5" onClick={removeGraf} data-portion="weeklyPortion" data-meal="white-meat-alim" className="remove-white-meat remove"/>        
	            <img alt="image54" src={whitemeatGraf} className="white-meat-graf weekly-graf meal-graf"/>
	          </div>
	          <div className="today-weekly fish-sea-alim">
	            <img  src={remove} alt="remove meal6" onClick={removeGraf} data-portion="weeklyPortion" data-meal="fish-sea-alim" className="remove-fish-sea remove"/>        
	            <img alt="image56" src={fishseaGraf} className="fish-sea-graf weekly-graf meal-graf"/>
	          </div>
	          <div className="today-weekly potato-alim">
	            <img  src={remove} alt="remove meal7" onClick={removeGraf} data-portion="weeklyPortion" data-meal="potato-alim" className="remove-potato remove"/>        
	            <img alt="image58" src={potatoGraf} className="potato-graf weekly-graf meal-graf"/>
	          </div>
	          <div className="today-daily herbs-alim">
	            <img  src={remove} alt="remove meal8" onClick={removeGraf} data-portion="basicPortion" data-meal="herbs-alim" className="remove-herbs remove"/>      
	            	<img alt="image60" src={herbsGraf} className="herbs-graf daily-graf meal-graf"/>
	            </div>
	          <div className="today-daily milk-prod-alim">
	            <img  src={remove} alt="remove meal9" onClick={removeGraf} data-portion="basicPortion" data-meal="milk-prod-alim" className="remove-milk-prod remove"/>            
	                <img alt="image62" src={milkproductsGraf} className="milk-prod-graf daily-graf meal-graf"/>
	          </div>
	          <div className="today-daily olives-alim">
	            <img  src={remove} alt="remove meal10" onClick={removeGraf} data-portion="basicPortion" data-meal="olives-alim" className="remove-olives remove"/>            
	                <img alt="image64" src={olivesGraf} className="olives-graf daily-graf meal-graf"/>
	           </div>
	          <div className="today-daily seeds-alim"> 
	            <img src={remove} alt="remove meal11" onClick={removeGraf} data-portion="basicPortion" data-meal="seeds-alim" className="remove-seeds remove"/>            
	                <img alt="image66" src={seedsGraf} className="seeds-graf daily-graf meal-graf"/>
	          </div>
	        	<div className="today-basic-daily vegetables-alim">
	            <img  src={remove} alt="remove meal12" onClick={removeGraf} data-portion="basicDailyPortion" data-meal="vegetables-alim" className="remove-vegetables remove"/>        
	           		<img alt="image68" src={vegetablesGraf} className="vegetables-graf basic-graf meal-graf"/>
	          </div>
	          <div className="today-basic-daily bread-alim">
	            <img  src={remove} alt="remove meal13" onClick={removeGraf} data-portion="basicDailyPortion" data-meal="bread-alim" className="remove-bread remove"/>            
	                <img alt="image70" src={breadGraf} className="bread-graf basic-graf meal-graf"/>
	          </div>
	          <div className="today-basic-daily cereals-alim">
	            <img src={remove} alt="remove meal14" onClick={removeGraf} data-portion="basicDailyPortion" data-meal="cereals-alim" className="remove-cereals remove"/>            
	                <img alt="image72" src={cerealsGraf} className="cereals-graf basic-graf meal-graf"/>
	          </div>
	          <div className="today-basic-daily fruits-alim">
	            <img  src={remove} alt="remove meal15" onClick={removeGraf} data-portion="basicDailyPortion" data-meal="fruits-alim" className="remove-fruits remove"/>            
	                <img alt="image74" src={fruitsGraf} className="fruits-graf basic-graf meal-graf"/>
	          </div>
	          <div className="today-basic-daily olive-oil-alim">
	            <img  src={remove} data-meal="olive-oil-alim" onClick={removeGraf}  data-portion="basicDailyPortion" alt="remove meal16" className="remove-olive-oil remove"/>            
	                <img alt="image76" src={oliveoilGraf} className="olive-oil-graf basic-graf meal-graf"/>
	            </div> 
	            <span>Saturday 5</span>   
	      </div>
      <div className="calendar-day day7">
        <span>Sunday 6</span>
      </div>
    </div> 
  </div>
	);
}

export default Calendar;


 