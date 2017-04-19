var evens = [0, 2, 4, 6, 8, 10]

function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}