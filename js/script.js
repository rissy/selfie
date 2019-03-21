;(function () {
  document.getElementById('menu').classList.toggle('no-display');

  var TAB_SUFFIX = '-tab';
  var PAGE_SUFFIX = '-page';

  var elementsIds = ['resume', 'myself', 'portfolio', 'site'];

  var elements = elementsIds.map(function(id) {
    return {
      tab: document.getElementById(id + TAB_SUFFIX),
      page: document.getElementById(id + PAGE_SUFFIX)
    }
  });

  var previewElement = elements[0];

  elements.forEach(function (element) {
    element.tab.onclick = function () {
      if (element === previewElement) {
        return;
      }

      element.tab.classList.toggle('active-menu-item');
      previewElement.tab.classList.toggle('active-menu-item');

      element.page.classList.toggle('no-display');
      previewElement.page.classList.toggle('no-display');

      previewElement = element;
    };
  });
})();