const createHomePage = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    const chefImage = document.createElement('img');
    chefImage.src = 'images/chef-andrew.jpg';
    chefImage.alt = 'Chef Andrew';

    home.appendChild(createParagraph('All types of cullinary cuisines at home'));
    home.appendChild(createParagraph('From breakfast to dinner, and everything in between!'));
    home.appendChild(chefImage);
    home.appendChild(createParagraph('Ask about the weekly hot sauce!'))

    return home;
}

const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

export const loadHomePage = () => {
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(createHomePage());
}