;(function () {
  var menu = document.getElementById('menu');

  menu.classList.toggle('no-display');

  var PAGE_SUFFIX = '-page';

  var elementsIds = ['resume', 'myself', 'portfolio', 'about'];
  var elements = {};
  
  elementsIds.forEach(function(id) {
    elements[id] = {
      tab: document.getElementById(id),
      page: document.getElementById(id + PAGE_SUFFIX)
    }
  })

  var previewElementId = elementsIds[0];

  menu.onclick = function(ev) {
    var element = ev.target;

    while (element !== this) {
      if (element.tagName === 'DIV') {
        onMenuClick(element.id);
      }

      element = element.parentNode;
    }
  };

  function onMenuClick(elementId) {
    if (elementId === previewElementId) {
      return;
    }

    elements[elementId].tab.classList.toggle('active-menu-item');
    elements[previewElementId].tab.classList.toggle('active-menu-item');

    elements[elementId].page.classList.toggle('no-display');
    elements[previewElementId].page.classList.toggle('no-display');

    previewElementId = elementId;
  }
})();