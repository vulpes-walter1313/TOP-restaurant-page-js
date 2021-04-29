import aboutTab from "./aboutTab";

function firstLoad() {
    let content = document.querySelector('#content');
    content.innerHTML = '';
    // Header content
    const header = buildHeader();
    content.appendChild(header);

    // info buttons section
    const infoSelectorSection = buildButtons();
    content.appendChild(infoSelectorSection);

    // info section
    const infoSection = buildInfoSection();
    content.appendChild(infoSection);

    // footer section
    const footer = buildFooter();
    content.appendChild(footer);
}

function buildHeader() {
    let header = document.createElement('header');
    let headerContent = document.createElement('div');
    headerContent.classList.add('header-content');
    let headerContentH1 = document.createElement('h1');
    headerContentH1.textContent = 'Welcome to Mexican Cuisine';
    let headerContentP = document.createElement('p');
    headerContentP.textContent = "Mexican cuisine is renowned for it's blends of spanish and indigineous flavors colliding into some delicious plates. Come have a taste for yourself!";
    headerContent.appendChild(headerContentH1)
    headerContent.appendChild(headerContentP);
    header.appendChild(headerContent);
    return header;
}

function buildButtons() {
    let infoSelectorSection = document.createElement('section');
    infoSelectorSection.classList.add('info-selectors');

    let buttonTitles = ["About", "Menu", "Contact"];
    buttonTitles.forEach(title => {
        let button = document.createElement('button');
        button.setAttribute("type", "button");
        button.setAttribute("id", `${title.toLowerCase()}-btn`);
        button.textContent = title;
        infoSelectorSection.appendChild(button);
    });
    return infoSelectorSection;
}

function buildInfoSection() {
    let infoSection = document.createElement('section');
    infoSection.classList.add('info-section');

    infoSection = aboutTab(infoSection)
    return infoSection;
}

function buildFooter() {
    let footer = document.createElement('footer');
    let p = document.createElement('p');
    p.textContent = 'Follow us on the socials and the medias';
    const links = [
        ['#', 'Mastodon'],
        ['#', 'Friendica'],
        ['#', 'Peertube']];

    let ul = document.createElement('ul');
    ul.classList.add('footer-links');
    
    ul.innerHTML = links.map(link => {
        return `<a href="${link[0]}"><li>${link[1]}</li></a>`;
    }).join('');

    footer.appendChild(p);
    footer.appendChild(ul);
    return footer;
}

export default firstLoad;