const succes = document.querySelector('.succes');

if (succes) {
  setTimeout(() => {
    succes.remove();
  }, 3000);
}