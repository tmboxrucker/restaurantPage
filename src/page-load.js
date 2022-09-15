import './style.css';
import {loadHomePage} from './home-page.js';
import {loadMenuPage} from './menu-page.js';
import {loadContactPage} from './contact-page.js';

const createHeader = () => {
    const headerElement = document.createElement('div');
    headerElement.classList.add(`header`);

    const titleElement = document.createElement('h1');
    titleElement.classList.add(`title`);
    titleElement.innerHTML = `Chef Andrew's Eatery`;

    headerElement.appendChild(titleElement);
    headerElement.appendChild(createNav());

    return headerElement;
}

const createNav = () => {
    const navElement = document.createElement('div');

    const homeElement = document.createElement('div');
    const menuElement = document.createElement('div');
    const contactElement = document.createElement('div');

    navElement.classList.add(`navigation`)
    homeElement.classList.add(`nav`);
    menuElement.classList.add(`nav`);
    contactElement.classList.add(`nav`);
    
    homeElement.innerHTML = 'Home';
    menuElement.innerHTML = 'Dishes';
    contactElement.innerHTML = 'Contact';

    homeElement.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveNav(homeElement);
        loadHomePage();
    });
    menuElement.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveNav(menuElement);
        loadMenuPage();
    });
    contactElement.addEventListener("click", (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveNav(contactElement);
        loadContactPage();
    });

    navElement.appendChild(homeElement);
    navElement.appendChild(menuElement);
    navElement.appendChild(contactElement);

    return navElement;
}

const createBody = () => {
    const bodyElement = document.createElement('div');

    bodyElement.classList.add(`body`);
    bodyElement.setAttribute('id','body');

    bodyElement.innerHTML = 'This is a blurb of text. blah blah blah';

    return bodyElement;
}

const createFooter = () => {
    const footerElement = document.createElement('div');

    footerElement.classList.add(`footer`);

    footerElement.innerHTML = 'Page made by Troy Boxrucker 2022';

    return footerElement;
}

const setActiveNav = (e) => {
    const nav = document.querySelectorAll('.nav');

    nav.forEach((e) => {
        if (e != this) {
            e.classList.remove('active');
        }
    });
    e.classList.add('active');
}

export const initialPageLoad = () => {
    const elem = document.getElementById('content');

    elem.appendChild(createHeader());
    elem.appendChild(createBody());
    elem.appendChild(createFooter());

    setActiveNav(document.querySelector('.nav'));
    loadHomePage();
}
