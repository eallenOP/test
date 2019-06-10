function classToggle() {
    const navs = document.querySelectorAll('.navitems')

    navs.forEach(nav => nav.classList.toggle('navtoggleshow'));
}

document.querySelector('.navtoggle').addEventListener('click', classToggle);

document.getElementById('footer').innerHTML += '<div class="right">Last Modified: ' + document.lastModified + '</div>';

$('.googleMapPopUp').each(function() {
    var thisPopup = $(this);
    thisPopup.colorbox({
        iframe: true,
        innerWidth: 400,
        innerHeight: 300,
        opacity: 0.7,
        href: thisPopup.attr('href') + '&ie=UTF8&t=h&output=embed'
    });
});