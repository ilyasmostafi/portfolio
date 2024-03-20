let nemuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

nemuicon.onclick = () => {
    nemuicon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}




let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = ()  => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + heigth)
        {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href* = '+id +']').classList.add('active');

            }
                );
        };
    }
        
        
        
        );

        let header = document.querySelector('header');
header.classList.toggle('sticky' , window.scrollY > 100);


nemuicon.classList.remove('fa-x');
navbar.classList.remove('active');
};



ScrollReveal({ 
    distance : '80px',
    duration : 2000,
    delay : 200,
});

ScrollReveal().reveal('.home-content , heading ' ,{origin : 'top'});
ScrollReveal().reveal('.home-img , portfolio-box , contact form ' ,{origin : 'buttom'});
ScrollReveal().reveal('.home-contact h1 , .about-img ' ,{origin : 'left'});
ScrollReveal().reveal('.home-contact p , about-content ' ,{origin : 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Full Stack Developer'],
    typeSpeed: 70,    // Vitesse à laquelle le texte est tapé (en millisecondes par caractère)
    backSpeed: 70,    // Vitesse à laquelle le texte est effacé (en millisecondes par caractère)
    backDelay: 1000,  // Délai avant de commencer à effacer le texte (en millisecondes)
    loop: true        // Indique si l'animation doit être en boucle ou non
});

function sendmail()
{
    let params  = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,

    }
    emailjs.send("service_z6rdmvi" , "template_06a79i1" ,params).then(alert("done"))
}






