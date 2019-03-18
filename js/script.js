(function () {
  const menuElementsIds = ['myself', 'resume', 'portfolio', 'site'];
  const menuElements = menuElementsIds.map(id => document.getElementById(id));

  let previewElement = menuElements[0];

  menuElements.forEach(element => {
    element.onclick = () => {
      if (element === previewElement) {
        return;
      }

      previewElement.classList.toggle('active-menu-item');
      element.classList.toggle('active-menu-item');

      previewElement = element;
    };
  });
})();