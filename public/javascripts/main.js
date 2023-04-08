document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a').forEach(function(a) {
        a.addEventListener('click', clickA);
    });
    document.querySelector('.header__btn').addEventListener('click', clickHeaderBtn);
});

window.addEventListener('load', headerSticky);
window.addEventListener('resize', headerSticky);
window.addEventListener('scroll', headerSticky);

function clickHeaderBtn() {
    this.classList.toggle('header__btn_active');
    document.body.classList.toggle('header__btn_active');
}

function clickA(event) {
    const link = event.currentTarget.getAttribute('href');
    if(link.length > 1 && link.indexOf('#') === 0) {
        event.preventDefault();
        event.stopPropagation();

        navbar(event.currentTarget);

        const section = document.querySelector(link);

        if(section) {
            const top = section.offsetTop - 90;
            window.scrollTo({
                top: top,
                behavior: 'smooth'
            });
        }
    }
}

function navbar(active) {
    if(active.classList.contains('header__a')) {
        const li = active.closest('li');
        const ul = li.parentElement;
        Array.from(ul.children).forEach(function(child) {
            if(child !== li) {
                child.classList.remove('header__li_active');
            }
        });
        li.classList.add('header__li_active');
        document.body.classList.remove('header__btn_active');
        document.body.querySelector('.header__btn').classList.toggle('header__btn_active');
    }
}

function headerSticky() {
    const sticky = document.querySelector('.header');
    const scroll = window.pageYOffset;
    if(scroll >= 1) {
        sticky.classList.add('header_fixed');
    } else {
        sticky.classList.remove('header_fixed');
    }
}
