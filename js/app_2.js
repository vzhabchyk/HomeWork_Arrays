const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let sumPositiveDigits = 0;
let positiveDigitsCount = 0;
let minElement = array[0];
let minElementIndex = 0;
let maxElement = array[0];
let maxElementIndex = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sumPositiveDigits += array[i];
    positiveDigitsCount += 1;
  }
  if (array[i] < minElement) {
    minElement = array[i];
    minElementIndex = i;
  }
  if (array[i] > maxElement) {
    maxElement = array[i];
    maxElementIndex = i;
  }
}
document.write('Sum of positive elements: ' + sumPositiveDigits + '</br>');
document.write('Count of positive elements: ' + positiveDigitsCount + '</br>');
document.write('Minimum  element: ' + minElement + '</br>');
document.write('Minimum  element index: ' + minElementIndex + '</br>');
document.write('Maximum element: ' + maxElement + '</br>');
document.write('Maximum element index: ' + maxElementIndex + '</br>');

