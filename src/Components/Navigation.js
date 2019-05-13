import React from 'react';
import menuIcon from '../img/menu-icon.png';


const Navigation = ({openMenu}) => {
	return (
		<div className="header">
			<div className="title">
				<img id="menu" src={menuIcon} onClick={openMenu} alt="Menu" />
				<h1>Dieta Mediterránea</h1>
			</div>
		</div>
	);
}

export default Navigation;