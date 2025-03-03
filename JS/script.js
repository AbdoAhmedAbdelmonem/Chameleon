let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height= sec.offsetHeight;
        if(top=>offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
    function switchMode(){
        const body = document.querySelector('body');
        const edu = document.querySelector('.education');
        const textanimation = document.querySelector('.text-animation');
        const timeline_dates = document.querySelectorAll('.timeline-date');
        const timeline_contents = document.querySelectorAll('.timeline-content');
        const home_image = document.querySelector('.home-image');
        const menu_icon = document.getElementById('menu-icon');
        const contact = document.querySelector('.contact');
        const input_boxes = document.querySelectorAll('.input-box');
        const footer = document.querySelector('.footer');
        const send = document.querySelector('.button');
        const home = document.querySelector('.home');
        const homeImg = document.querySelector('.home-image');



        setTimeout(() => {
            home.classList.toggle('light');
            body.classList.toggle('light');
            edu.classList.toggle('light');
            textanimation.classList.toggle('light');
            home_image.classList.toggle('light');
            menu_icon.classList.toggle('light');
            contact.classList.toggle('light');
            footer.classList.toggle('light');
            send.classList.toggle('light');
            homeImg.classList.toggle('light');

            input_boxes.forEach(box => {
                box.classList.toggle('light');
            });

            timeline_contents.forEach(content => {
                content.classList.toggle('light');
            });

            timeline_dates.forEach(date => {
                date.classList.toggle('light');
            });
        }, 250);
    }

    const main = document.querySelector('.main');
    const about = document.querySelector('.popo');
    const popup2 = document.querySelector('.popup2');
    const ok = document.querySelector('.info-ok-btn');

    about.onclick=()=>{
        popup2.classList.add('active');
        main.classList.add('active');
    };
    ok.onclick=()=>{
        popup2.classList.remove('active');
        main.classList.remove('active');
    };
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdOKIPuhZKYQ1Sz8VtL6WnF1QXMR9YHavSWFgCKXDItmd2pAA/formResponse";

        const formData = new FormData(this);

        fetch(formURL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        }).then(() => {
            alert("Message sent successfully!");
            this.reset();
        }).catch((error) => {
            alert("There was an error sending your message.");
            console.error('Error:', error);
        });
    });
    document.querySelectorAll('.timeline-content.locked').forEach(item => {
        item.closest('a').removeAttribute('href');
    });


    function getRandomColor() {
        let r, g, b;
        do {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
        } while (r < 100 && g < 100 && b < 100);

        return `rgb(${r}, ${g}, ${b})`;
    }

    function changeMainColor() {
        const newColor = getRandomColor();
        document.documentElement.style.setProperty('--main-color', newColor);
    }

    window.onload = changeMainColor;

    $('.team-members').slick({
    slidesToShow: 3,
    speed: 300,
    prevArrow:'#left-arrow',
    nextArrow:'#right-arrow',
    centerPadding: '60px',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]});
