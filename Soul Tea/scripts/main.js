//Navigation

const nav = document.querySelector('.navbar-nav');
const burger = document.querySelector('.burger');
const navLinks = document.querySelectorAll('.nav-item');
const html = document.documentElement;
burger.addEventListener('click', () => {
    burger.classList.toggle('clicked');
    nav.classList.toggle('show-nav');
    navLinks.forEach(link => {
        link.classList.toggle('show-links');
    });
    // document.body.addEventListener('mouseup', function(event) {
    //     if (event.target !== nav) {
    //         nav.classList.remove('show-nav');
    //         burger.classList.remove('clicked');
    //         navLinks.forEach(link => {
    //             link.classList.remove('show-links');
    //         });
    //     };
    // });
});




//Tabs orders

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('current')
        });
        tabs.forEach(tab => {
            tab.classList.remove('current');
        });
        tab.classList.add('current');
        target.classList.add('current');
    });
});

//Simple form validation

const btnOrder = document.querySelector('#btn-order');
const dessertsOrder = document.querySelector('#dessert-type');
const dessertsNumber = document.querySelector('#dessert-quantity');
const teaOrder = document.querySelector('#tea-choices');
const teaBig = document.querySelector('#big-tea');
const teaSmall = document.querySelector('#small-tea');
const fireAccessoire = document.querySelector('#fire-set');
const airAccessoire = document.querySelector('#air-set');
const earthAccessoire = document.querySelector('#earth-set');

btnOrder.addEventListener('click', (e) => {
    e.preventDefault();
    let isDessertSelected = ''
    if (dessertsOrder.value !== '' && dessertsNumber.value !== '') {
        isDessertSelected = true
    } else {
        isDessertSelected = false
    };

    let isTeaSelected = '';
    if ((teaSmall.checked === true || teaBig.checked === true) && teaOrder.value !== '') {
        isTeaSelected = true
    } else {
        isTeaSelected = false
    };


    let isAccessorySelected = '';
    if (fireAccessoire.checked === true || airAccessoire.checked === true || earthAccessoire.checked === true) {
        isAccessorySelected = true
    } else {
        isAccessorySelected = false
    };

    if (isTeaSelected === true || isAccessorySelected === true || isDessertSelected === true) {
        alert('Поръчката Ви е приета успешно и ще бъде обработена в кратък срок!')
        location.reload()
    } else {
        alert('Моля, добавете продукт (или количество) към поръчката си.')
    }
});

// SNS
const socialIcons = document.querySelectorAll('.footer-sns img');
socialIcons.forEach(network => {
    network.addEventListener('mouseover', () => {
        network.setAttribute("src", `images/icons/${network.id}-marked.svg`)
    })
    network.addEventListener('mouseleave', () => {
        network.setAttribute("src", `images/icons/${network.id}.svg`)
    })
    network.addEventListener('mousedown', () => {
        network.setAttribute("src", `images/icons/${network.id}-clicked.svg`)
    })


});