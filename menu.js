const menuLinks = document.querySelectorAll('.menu__link');
const subMenus = document.querySelectorAll('.sub-menu');
const menuArrows = document.querySelectorAll('.menu__arrow');

menuLinks.forEach(link => link.addEventListener('click', () => {
	const menuList = link.parentNode;
	const subMenu = menuList.querySelector('.sub-menu');
  const menuArrow = menuList.querySelector('.menu__arrow');

  if(subMenu.classList.contains('active')) {
  	subMenu.classList.remove('active');
    menuArrow.classList.remove('active');
  } else {
   	subMenus.forEach(menu => menu.classList.remove('active'));

    menuArrows.forEach(arrow => arrow.classList.remove('active'));
   	subMenu.classList.add('active');
    menuArrow.classList.add('active');
  }


}));