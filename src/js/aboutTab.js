function aboutTab(section) {
    let h2 = document.createElement('h2');
    h2.textContent = 'About us';

    let p = document.createElement('p');
    p.textContent = "We work hard to ensure all our food is authentic and as delicious as when they were first created. Scourring all corners of Mexico to find the best rendition of these famous dishes.";
    section.appendChild(h2);
    section.appendChild(p);
    return section;
}
export default aboutTab;