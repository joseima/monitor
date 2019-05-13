  import React from 'react';
import improve from '../img/improve.jpg';
import tips from '../img/tips.jpg';


const Tips = () => {
	return (
		  <div className="tips-notes">
		    <label htmlFor="hacky">
		      <div className="improve-title">What to improve</div>
		   </label>
		      <div className="improve"><img src={improve} alt="improve" width="100%" /></div>  
		    <label htmlFor="hacky">
		      <div className="tips-title">Autum tips</div>
		     </label>
		       <input type="checkbox" id="hacky" />
		      <div className="tips"><img src={tips} alt="improve" width="100%" /></div>
		    
		      <div className="notes-title">Consults</div>      
		      <div className="notes main"></div>
		  </div>
	);
}

export default Tips;


 