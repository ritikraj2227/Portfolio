var myID = document.getElementById('navbar-brand');
var nav = document.getElementById('navbar-menu');
var navitem = document.querySelectorAll('.nav-link');
var myscrollfunc = function () {
	var y = window.scrollY;
	if (y >= 350) {
		myID.style.display = 'block';
	} else {
		myID.style.display = 'none';
	}
};

window.addEventListener('scroll', myscrollfunc);

var navcolor = function () {
	var y = window.scrollY;
	if (y >= 550) {
		nav.style.backgroundColor = '#002447';
	} else {
		nav.style.backgroundColor = '#002447';
	}
};

window.addEventListener('scroll', navcolor);

var typing = new Typed('.text', {
	strings: ['Ritik Raj.', 'A Web Developer.', 'A Web Designer.'],
	typeSpeed: 100,
	backSpeed: 40,
	loop: true,
});
