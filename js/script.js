;(function () {
  var menu = document.getElementById('menu');

  menu.classList.toggle('no-display');

  var PAGE_SUFFIX = '-page';
  var TAG_PREFIX = '/#/';

  var elementsIds = ['resume', 'myself', 'portfolio', 'about'];
  var elements = {};
  
  elementsIds.forEach(function(id) {
    elements[id] = {
      tab: document.getElementById(id),
      page: document.getElementById(id + PAGE_SUFFIX)
    }
  })

  var previewElementId = elementsIds[0];

  var urlHash = window.location.hash.substr(2);

  if (urlHash && elementsIds.indexOf(urlHash) !== -1) {
    onMenuClick(urlHash);
  }

  menu.onclick = function(ev) {
    var element = ev.target;

    while (element !== this) {
      if (element.tagName === 'DIV') {
        onMenuClick(element.id);
        addUrlHash(element.id);

        return;
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

  function addUrlHash(elementId) {
    window.location.href = window.location.origin + TAG_PREFIX + elementId;
  }
})();