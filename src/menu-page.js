const createMenuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(
        createMenuItem(
            "Fettuccine Alfredo",
            "Fettuccine Friday > Taco Tuesday.<br><br>Especially when the pasta is made from scratch."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Cuban Sandwich",
            "Between the sugar in the limoncello and the unhinging of my jaw required to eat the nuffuletta, it's no wonder my dentist hates me."
        )

    );
    
    menu.appendChild(
        createMenuItem(
            "Cinnamon Rolls",
            "No better way to break in a baking pan than a batch of freshly baked cinnamon rolls."
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Carmelized Onions",
            "Carmelized onions area an underrated condiment. What keeps people from making them more? Is it the 3 hour cooking time? It's probably the 3 hour cooking time."
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Avocado Toast",
            "Just because the avocado will make me throw up doesn't mean I can't make it look pretty."
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Ramen",
            "Thank you, God, for a wonderful, warm meal on a night when the heating doesn't work."
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Pan Pizza",
            "Prefect pan pizza checklist:<br>Crispy edges: <span>&#10003</span><br>Sweet/ spicy bannana peppers: <span>&#10003</span><br>Prefectly browned cheese: <span>&#10003</span><br>Cups of hot pepperoni fat: <span>&#10003</span>"
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Pancetta",
            "Her: Babe, you're extra<br>Me: that's not true<br>Also me: *home cured pancetta*"
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Spaghettios",
            `"I don't know what Spaghettio's taste like, but I know they don't taste like this."<br>- Wolfgang Puck, probably`
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Creme Brulee",
            "Creme brulee so crisp it's a musical instrument."
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Ohio Valley Pepper Sauce",
            "Some like it hot, but I prefer it Ohio Valley Pepper Sauce hot."
        )
    );
    
    menu.appendChild(
        createMenuItem(
            "Ohio Valley Reaper Sauce",
            "Don't fear the reaper."
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