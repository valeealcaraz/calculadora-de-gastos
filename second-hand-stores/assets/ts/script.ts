type ItemMenu = {
    name: string;
    href: string;
}

type ItemsMenu = ItemMenu[];

const itemsMenu: ItemsMenu = [
    {
        name: 'itemMenu1',
        href: '/',
        
    },
    {
        name: 'itemMenu2',
        href: '/',
    },
    {
        name: 'itemMenu3',
        href: '/',
    }
]

const createNavbar = () => {
    const nav = document.createElement('nav');
    const divLeft = document.createElement('div');
    const divRight = document.createElement('div');

    // LADO IZQUIERDO:
    const logo = document.createTextNode('Titulo');
    divLeft.appendChild(logo);

    // LADO DERECHO:
    const ul = document.createElement('ul');

    for(let item of itemsMenu) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        const text = document.createTextNode(item.name);
        a.href = item.href;
        a.appendChild(text);
        li.appendChild(a);
        ul.appendChild(li);
    }
    console.log("hola")

    divRight.appendChild(ul);
    nav.appendChild(divRight);
    nav.appendChild(divLeft);
    document.body.appendChild(nav)

    nav.classList.add("primary-nav")
}

createNavbar()