var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var item = 3;

function removeElement(array, item) {
  var index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

console.log(removeElement(array, item));
