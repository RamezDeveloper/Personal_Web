var typed = new Typed (".text",{
    strings: ['Frontend Developer', 'Web Designer', 'Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});

var menuItem = document.getElementById("#menu");
let navbar = document.querySelector('navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute;



        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector('header nav a [hraf*' + id +']').classList.add('active')
            })
        }
    })
}

menuItem.onclick =() =>{
    menuItem.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
