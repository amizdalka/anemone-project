var navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    var targetId = this.getAttribute('href');
    var targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});
