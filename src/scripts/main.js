const menu = document.querySelector(".header__mobile__menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".header__mobile__top__menu__hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
    }
)

document.querySelector('[name="fone"]')
    .addEventListener('input', function (e) {
        const x = e.target.value.replace(/\D/g, '')
            .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,2})/);

        if (!x[1]) {
            e.target.value = '';

            return;
        }

        if (!x[2]) {
            e.target.value = `${x[1]}`;

            return;
        }

        e.target.value = `(${x[1]}) ${x[2]}`
            + ( x[3] ? `${x[3]}` : '' )
            + ( x[4] ? `-${x[4]}` : '' )
            + ( x[5] ? `${x[5]}` : '' );
    });