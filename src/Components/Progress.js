  import React from 'react';
import pyramidMask from '../img/pyramidmask.png';


const Progress = ({sweetIncrease, sweetDecrease, weeklyIncrease, weeklyDecrease, dailyIncrease, dailyDecrease,}) => {
	return (
		  <div className="progress">
		    <span className="calendar-title">Weekly progress</span>
		        <span className="calendar-detail">Here you can see your progress during the week and how you achieve to complete 
		    the requirements of the alimentary pyramid for a correct Mediterranean diet.</span>
		    	<div className="pyramid-cont"><img src={pyramidMask} className="pyramid-mask" alt="pyramid" />
		    		<div className="pyramidbar pyramid-sweet"><span className="barsweet"/></div>
		    		<div className="pyramidbar pyramid-weekly"><span className="barweekly"/></div>
		    		<div className="pyramidbar pyramid-base2"><span className="bardaily"/></div>
		     		 <div className="pyramidbar pyramid-base"><span className="barbasicdaily"/></div>
		    	</div>
		        <div className="portions">
		    		<p className="amount-sweet"><span data-meal="sweet-graf" className="sweetPortion" id="amount-meal">0</span> Portions<br />
		        	<span>(max  1 portion at week)</span></p>
		       		<p className="amount-weekly"><span id="amount-meal" className="weeklyPortion">0</span> Portions<br />
		        	<span>(max 7 portions at week)</span></p>
		       		<p className="amount-basic2"><span id="amount-meal" className="basicPortion">0</span> Portions<br />
		        	<span>(min 14 portions at week)</span></p>
		       		<p className="amount-basic"><span id="amount-meal" className="basicDailyPortion">0</span> Portions<br />
		        	<span>(min 20 portions at week)</span></p>
		        </div>
 		 </div>
	);
}

export default Progress;


 