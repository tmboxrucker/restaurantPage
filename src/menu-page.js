const createMenuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Chicken Carbonara",
            "Desription of dish"
        )
    );

    menu.appendChild(
        createMenuItem(
            "Sandwich",
            "Desription of dish"
        )

    );
    
    menu.appendChild(
        createMenuItem(
            "Cinnamon Rolls",
            "Desription of dish"
        )
    );

    return menu;
}

const createMenuItem = (dishName, dishDesc) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const name = document.createElement('h2');
    name.innerHTML = dishName;

    const desc = document.createElement('p');
    desc.innerHTML = dishDesc;

    const image = document.createElement('img');
    image.src = `images/food/${dishName.toLowerCase().replace(/\s/g, '')}.jpg`;
    image.alt = dishName;

    menuItem.appendChild(image);
    menuItem.appendChild(name);
    menuItem.appendChild(desc);

    return menuItem;
}

export const loadMenuPage = () => {
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(createMenuPage());
}