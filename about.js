const menuOpenIcon = document.getElementById('menu_icon');
const menuCloseIcon = document.querySelector('.close_menu_icon');
const menuItems = document.querySelector('.menu_items');
const li = document.querySelectorAll('.menu_items nav a');

// functionality to open and close the menu bar

menuOpenIcon.addEventListener('click', () => {
  menuItems.style.display = 'flex';
});

menuCloseIcon.addEventListener('click', () => {
  menuItems.style.display = 'none';
});

li.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.style.display = 'none';
  });
});
