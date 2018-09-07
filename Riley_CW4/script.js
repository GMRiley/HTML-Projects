function randomClass() {
  var classes = ['up', 'right', 'bottom', 'left'],
    index = Math.floor(Math.random() * classes.length);
  return classes[index];
}

function changePerspective() {
  var tiles = document.querySelectorAll('.tile');
  for (var i = 0; i < tiles.length; i++) {
    tiles[i].className = 'tile ' + randomClass();
  }
}