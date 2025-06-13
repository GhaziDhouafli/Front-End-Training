/*================== SHOW MENU ==================*/
const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

/* Menu Show */
if (navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ================= Remove Menu Mobile ================= */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*================== SWIPER HOME ==================*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n)
{
  showDivs(slideIndex += n);
}

function showDivs(n)
{
    var i;
    var x = document.getElementsByClassName("home__image");

    if (n > x.length)
    {
        slideIndex = 1
    }

    if (n < 1)
    {
        slideIndex = x.length
    };

    for (i = 0; i < x.length; i++)
    {
        x[i].style.display = "none";
    }

    x[slideIndex-1].style.display = "block";
}

/*================== Nav Bar Styling ==================*/

window.addEventListener('scroll', function() {
    const header = document.getElementById('nav-menu');
    const destinationSection = document.getElementById('destination');
    const sectionTop = destinationSection.offsetTop;
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY + 60 >= sectionTop) { // 60 = navbar height, adjust as needed
        header.classList.add('header--scrolled');
    } else {
        header.classList.remove('header--scrolled');
    }
});