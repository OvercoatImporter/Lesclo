const navHeader = document.querySelector('#site-desktop-header');
const headerHeight = 72;

const root = document.querySelector(':root');
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
	if (window.scrollY >= headerHeight){
		navHeader.classList.add('navbar-scrolled');
		root.style.setProperty('--site-nav-link-color', '#E10718');
	}
	else if (window.scrollY < headerHeight)
	{
		navHeader.classList.remove('navbar-scrolled');
		root.style.setProperty('--site-nav-link-color', '#E10718');
	}
});


// Show and hide mobile nav bar with animation
function toggleNav(){
	const menuButton = document.querySelector('#site-mobile-toggle');
	const menuBackground = document.querySelector('#mobile-header-background');
	const navMenu = document.querySelector('#site-mobile-header');
	
	if (!menuButton.checked) {
		navMenu.classList.add('mobile-nav-open');
		navMenu.style.touchAction = 'none';
		menuBackground.style.pointerEvents = 'all';
		menuBackground.style.touchAction = 'none';
		menuBackground.style.opacity = '50%';
		menuButton.checked = true;
	}
	else if (menuButton.checked)
	{
		navMenu.classList.remove('mobile-nav-open');
		navMenu.style.touchAction = 'auto';
		menuBackground.style.pointerEvents = 'none';
		menuBackground.style.touchAction = 'auto';
		menuBackground.style.opacity = '0%';
		menuButton.checked = false;
	}
}

function closeNav () {
	const menuButton = document.querySelector('#site-mobile-toggle');
	const menuBackground = document.querySelector('#mobile-header-background');
	const navMenu = document.querySelector('#site-mobile-header');
	
	navMenu.classList.remove('mobile-nav-open');
	navMenu.style.touchAction = 'auto';
	menuBackground.style.pointerEvents = 'none';
	menuBackground.style.touchAction = 'auto';
	menuBackground.style.opacity = '0%';
	menuButton.checked = false;
}
