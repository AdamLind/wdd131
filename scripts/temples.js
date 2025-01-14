const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const title = document.querySelector('.title')
const header = document.querySelector('.normal-head')
const navwrap = document.querySelector('.list-wrapper')

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	title.classList.toggle('disappear');
	header.classList.toggle('head-rearrange');
	navwrap.classList.toggle('show');
});