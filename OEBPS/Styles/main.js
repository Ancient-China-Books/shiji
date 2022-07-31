function changeColor(e) {
  var href = e.href.split('#');
  var p = document.getElementById(href[1]);
  p.style.backgroundColor = '#f1e5c9';
  window.location.reload();
  return true;
}

window.onload = function() {
  var href = window.location.href.split('#');
  if (typeof href !== 'undefined' && href.length > 1) {
    document.getElementById(href[1]).style.backgroundColor = '#f1e5c9';
  }
};
