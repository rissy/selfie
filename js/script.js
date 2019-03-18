;(function () {
  var menuElementsIds = ['myself', 'resume', 'portfolio', 'site'];
  var menuElements = menuElementsIds.map(function(id) {return document.getElementById(id)});
  var previewElement = menuElements[0];

  menuElements.forEach(function (element) {
    element.onclick = function () {
      if (element === previewElement) {
        return;
      }

      previewElement.classList.toggle('active-menu-item');
      element.classList.toggle('active-menu-item');

      previewElement = element;
    };
  });
})();