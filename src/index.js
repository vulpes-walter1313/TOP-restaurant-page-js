import './css/index.scss';
import firstLoad from './js/firstLoad';
import aboutTab from './js/aboutTab';
import menuTab from './js/menuTab';
import contactTab from './js/contactTab';

console.log("Hacker Voice: I'm in...");
console.log("Hackman says: ye ye");

firstLoad();
const infoButtons = document.querySelectorAll('.info-selectors button');
infoButtons.forEach(btn => btn.addEventListener('click', handleBtn));

function handleBtn() {
  if (this.id == "about-btn") {
    console.log("You Click About info my guy");
    let infoSection = document.querySelector(".info-section");
    infoSection.innerHTML = "";
    infoSection = aboutTab(infoSection);
  }
  if (this.id == "menu-btn") {
    console.log("This is Menu");
    let infoSection = document.querySelector(".info-section");
    infoSection.innerHTML = "";
    infoSection = menuTab(infoSection);
  }
  if (this.id == "contact-btn") {
    console.log("This is Contact");
    let infoSection = document.querySelector(".info-section");
    infoSection.innerHTML = "";
    infoSection = contactTab(infoSection);
  }
}