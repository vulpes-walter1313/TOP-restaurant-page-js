import food1 from '../imgs/food/food1.webp';
import food2 from '../imgs/food/food2.webp';
import food3 from '../imgs/food/food3.webp';
import food4 from '../imgs/food/food4.webp';

function menuTab(section) {
    const menuItems = [
        {img: food1, text: "This first plate is an authentic plate of great proportions.", alt: "Plate1"},
        {img: food2, text: "This second plate is an authentic plate of great proportions.", alt: "Plate2"},
        {img: food3, text: "This third plate is an authentic plate of great proportions.", alt: "Plate3"},
        {img: food4, text: "This fourth plate is an authentic plate of great proportions.", alt: "Plate4"}
    ];
    
    let h2 = document.createElement('h2');
    h2.textContent = "Menu"
    section.appendChild(h2);

    let itemWrapperDiv = document.createElement('div');
    itemWrapperDiv.classList.add("menu-flex-wrapper");

    menuItems.forEach(item => {
        let itemCard = document.createElement('div');
        itemCard.classList.add('menu-item-card');
    
        let img = document.createElement('img');
        img.src = item.img;
        img.alt = item.alt;
    
        let p = document.createElement('p');
        p.textContent = item.text;
    
        itemCard.appendChild(img);
        itemCard.appendChild(p);
    
        itemWrapperDiv.appendChild(itemCard);

    });
    section.appendChild(itemWrapperDiv);
    return section;
}

export default menuTab;