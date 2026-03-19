const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
  toggle.setAttribute('aria-expanded', !expanded);
  navList.style.display = !expanded ? 'flex' : 'none';
});


