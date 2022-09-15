const createContactPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const social = document.createElement('div');
    social.classList.add('socialMediaHolder');

    social.appendChild(createAnchor('twitter'));
    social.appendChild(createAnchor('instagram'));

    contact.appendChild(createForm());
    contact.appendChild(createParagraph('Follow me below!'));
    contact.appendChild(social);

    return contact;
}

const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

const createAnchor = (text) => {
    const anchor = document.createElement('a');
    anchor.classList.add(text);
    anchor.setAttribute('href', 'https://github.com/tmboxrucker');

    const image = document.createElement('img');
    image.src = `./images/${text.toLowerCase().replace(/\s/g, '')}.png`;
    image.alt = text;

    anchor.appendChild(image);

    return anchor;
}

const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.setAttribute('onsubmit', 'return false');

    const formMessage = document.createElement('p');
    formMessage.innerHTML = 'Message me!';

    const submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.setAttribute('value','Submit');


    form.appendChild(formMessage);
    form.appendChild(createInput('input','Name', 'text'));
    form.appendChild(createInput('input','Email', 'email'));
    form.appendChild(createInput('textarea','Type your message...'));
    form.appendChild(submit);

    return form;
}

const createInput = (e, value, type) => {
    const formInput = document.createElement('div');
    formInput.classList.add('formInput');

    const input = document.createElement(e);
    input.setAttribute('required', true);
    input.setAttribute('placeholder', ' ')

    if (type != undefined) {
        input.setAttribute('type',type)
    }

    const span = document.createElement('span');
    span.innerHTML = value;

    formInput.appendChild(input);
    formInput.appendChild(span);

    return formInput;
}

export const loadContactPage = () => {
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(createContactPage());
}