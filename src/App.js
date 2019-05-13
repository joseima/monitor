import React, {Component} from 'react';
import Navigation from './Components/Navigation';
import Menu from './Components/Menu';
import Calendar from './Components/Calendar';
import Options from './Components/Options';
import Progress from './Components/Progress';
import Tips from './Components/Tips';
import './App.css';

let sweetPortion = 0;
let weeklyPortion = 0;
let basicPortion = 0;
let basicDailyPortion = 0;
let acumWeekly = 14;
let restWeekly = 0;
let acumDaily = 8;
let restDaily = 0;
let acumBasicDaily = 5;
let restBasicDaily = 0;

class App extends Component {
  constructor  () {
    super();
    this.state = {
      menuOn:'',
    }
 }

openMenu = () => {
  const courtain = document.querySelector("div.courtain");
  courtain.classList.add("courtainon");
}

closeMenu = () => {
  const courtain = document.querySelector("div.courtain");
  courtain.classList.remove("courtainon");
}

addGraf = (element) => {
    const alimentType = element.target.getAttribute("data-meal");
    const iconGraf = document.querySelector("."+ alimentType);
    iconGraf.style.display = "block";
    this.addPortion(element);
  }

removeGraf = (element) => {
  const alimentType = element.target.getAttribute("data-meal");
  const iconGraf = document.querySelector("."+ alimentType);
  iconGraf.style.display = "none";
  this.removePortion(element);
}


sweetIncrease = () => {
  const barSweet = document.querySelector(".barsweet");
  barSweet.style.width = '100%';
}
sweetDecrease = () => {
const barSweet = document.querySelector(".barsweet");
  barSweet.style.width = '0%';
}
weeklyIncrease = () => {
  const barWeekly = document.querySelector(".barweekly");
  let coefWeekly = acumWeekly * weeklyPortion;
  barWeekly.style.width = coefWeekly + "%";
  restWeekly = coefWeekly;
}
weeklyDecrease = () => {
  const barWeekly = document.querySelector(".barweekly");
  let coefWeekly =  restWeekly - acumWeekly;
  barWeekly.style.width = coefWeekly + "%";
  restWeekly = coefWeekly;
}
dailyIncrease = () => {
  const barDaily = document.querySelector(".bardaily");
  let coefDaily = acumDaily * basicPortion;
  barDaily.style.width = coefDaily + "%";
  restDaily = coefDaily;
}
dailyDecrease = () => {
  const barDaily = document.querySelector(".bardaily");
  let coefDaily =  restDaily - acumDaily;
  barDaily.style.width = coefDaily + "%";
  restDaily = coefDaily;
}
basicDailyIncrease = () => {
  const barBasicDaily = document.querySelector(".barbasicdaily");
  let coefBasicDaily = acumBasicDaily * basicDailyPortion;
  barBasicDaily.style.width = coefBasicDaily + "%";
  restBasicDaily = coefBasicDaily;
}
basicDailyDecrease = () => {
  const barBasicDaily = document.querySelector(".barbasicdaily");
  let coefBasicDaily =  restBasicDaily - acumBasicDaily;
  barBasicDaily.style.width = coefBasicDaily + "%";
  restBasicDaily = coefBasicDaily;
}

addPortion = (element) => {
  let alimentPortion = element.target.getAttribute("data-portion");
  let spanPortion = document.querySelector(`span.${alimentPortion}`);
  switch (alimentPortion) {
      case "sweetPortion":
          sweetPortion++;
          spanPortion.innerHTML=`${sweetPortion}`;
          this.sweetIncrease ();
        break;
      case "weeklyPortion":
          weeklyPortion++;
          spanPortion.innerHTML=`${weeklyPortion}`;
          this.weeklyIncrease ();          
        break;
      case "basicPortion":
          basicPortion++;
          spanPortion.innerHTML=`${basicPortion}`;
          this.dailyIncrease();          
        break;                
      case "basicDailyPortion":
          basicDailyPortion++;
          spanPortion.innerHTML=`${basicDailyPortion}`; 
          this.basicDailyIncrease();       
        break;
        default:;
    } 
} 
removePortion = (element) => {
  let alimentPortion = element.target.getAttribute("data-portion");
  let spanPortion = document.querySelector(`span.${alimentPortion}`);
  switch (alimentPortion) {
      case "sweetPortion":
          sweetPortion--;
          spanPortion.innerHTML=`${sweetPortion}`;
          if (sweetPortion === 0) {
             this.sweetDecrease ();
          }
        break;
      case "weeklyPortion":
          if (weeklyPortion > 0) {
            weeklyPortion--;
          }
          spanPortion.innerHTML=`${weeklyPortion}`;           
          this.weeklyDecrease ();
        break;
      case "basicPortion":
          if (basicPortion > 0) {
            basicPortion--;
          }
          spanPortion.innerHTML=`${basicPortion}`;
          this.dailyDecrease();
                  
        break;                
      case "basicDailyPortion":
          if (basicDailyPortion > 0) {
            basicDailyPortion--; 
          }
          spanPortion.innerHTML=`${basicDailyPortion}`;
          this.basicDailyDecrease();
        break;
        default:;
    }
} 


  render () {
    return (
      <div className="App">
        <Navigation openMenu={this.openMenu}/>
        <Menu closeMenu={this.closeMenu}/>
        <div className="content"> 
          <Calendar addGraf= {this.addGraf} removeGraf={this.removeGraf} />
          <Options addGraf= {this.addGraf} />
         <Progress/>
        <Tips/>
        </div>
      </div> 
    );
  }
}

export default App;
