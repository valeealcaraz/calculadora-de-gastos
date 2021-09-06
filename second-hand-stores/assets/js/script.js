var itemsMenu = [
    {
        name: 'itemMenu1',
        href: '/'
    },
    {
        name: 'itemMenu2',
        href: '/'
    },
    {
        name: 'itemMenu3',
        href: '/'
    }
];
var createNavbar = function () {
    var nav = document.createElement('nav');
    var divLeft = document.createElement('div');
    var divRight = document.createElement('div');
    // LADO IZQUIERDO:
    var logo = document.createTextNode('Titulo');
    divLeft.appendChild(logo);
    // LADO DERECHO:
    var ul = document.createElement('ul');
    for (var _i = 0, itemsMenu_1 = itemsMenu; _i < itemsMenu_1.length; _i++) {
        var item = itemsMenu_1[_i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        var text = document.createTextNode(item.name);
        a.href = item.href;
        a.appendChild(text);
        li.appendChild(a);
        ul.appendChild(li);
    }
    console.log("hola");
    divRight.appendChild(ul);
    nav.appendChild(divRight);
    nav.appendChild(divLeft);
    document.body.appendChild(nav);
    nav.classList.add("primary-nav");
};
createNavbar();
