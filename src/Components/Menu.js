import React from 'react';
import closeIcon from '../img/close-icon.png';
import dashboardIcon from '../img/dashboards-icon.png';
import medicalIcon from '../img/medicalrecs-icon.png';
import formsIcon from '../img/forms-icon.png';
import calendarIcon from '../img/calendar-icon.png';
import clinicsIcon from '../img/clinics-icon.png';
import addonsIcon from '../img/addons-icon.png';





const Menu = ({closeMenu}) => {
	return (
		<div className="courtain">
			<div className="lat-menu">
				<div className="user">
			    <img className="closemenu" src={closeIcon} onClick={closeMenu} alt="Close Menu" />
			<h2>Bryan Addams</h2>
			    <button>View Profile</button> | <button>Log out</button>
			    </div>
			    <ul className="menu">
			    	<li><button><img src={dashboardIcon}  alt="Dash Boards" /> Dash Boards</button></li>
			        <li><button><img src={medicalIcon}  alt="Medical Records" /> Medical Records</button></li>
			        <li><button><img src={formsIcon}  alt="Forms" />Forms</button></li>
			        <li><button><img src={calendarIcon}  alt="Calendar" />Calendar</button></li>
			        <li><button><img src={clinicsIcon}  alt="Clinics" />Clinics</button></li>  
			        <li><button><img src={addonsIcon}  alt="Add-ons" />Add-ons</button></li>       
			    </ul>
			</div>
		</div>
	);
}

export default Menu;