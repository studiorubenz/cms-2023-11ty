export function init() {
  const imprintLink = document.getElementById('imprint-link');
  const closeImprintLink = document.getElementById('close-imprint-link');
  const imprintContainer = document.querySelector('footer .columns');

  // console.log(imprintContainer);

  imprintLink.addEventListener('click', function(e) {
    if (imprintContainer.classList.contains('clicked') ) {
      imprintContainer.classList.remove('clicked');
    } else {
      imprintContainer.classList.add('clicked');
      setTimeout(function () {

        window.scroll({
          top: window.scrollY + 700,
          behavior: 'smooth'
        });
      }, 700);

    }
    e.preventDefault();
  }, false);

  closeImprintLink.addEventListener('click', function(e) {
    if (imprintContainer.classList.contains('clicked') ) {
      imprintContainer.classList.remove('clicked');
    }
    e.preventDefault();
  }, false);
}
