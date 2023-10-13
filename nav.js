const primary_nav = document.querySelector('#menu');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
  const visibility = primary_nav.getAttribute('data-visible');
  console.log(visibility);
  if (visibility === "false"){
    primary_nav.setAttribute('data-visible',true);
    primary_nav.setAttribute('aria-expanded',true);

  }
  if (visibility === "true"){
    primary_nav.setAttribute('data-visible',false);
    primary_nav.setAttribute('aria-expanded',false);
  }
});