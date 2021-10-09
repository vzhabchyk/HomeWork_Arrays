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
let negativeDigitsCount = 0;
let oddPositiveElementsCount = 0;
let evenPositiveElementsCount = 0;
let sumEvenPositiveElements = 0;
let sumOddPositiveElements = 0;
let multiplicationPositiveElements = 1;


for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sumPositiveDigits += array[i];
    positiveDigitsCount += 1;
    multiplicationPositiveElements *= array[i];
    if (array[i] % 2) {
      oddPositiveElementsCount += 1;
      sumOddPositiveElements += array[i];
    } else {
      evenPositiveElementsCount += 1;
      sumEvenPositiveElements += array[i];
    }
  }
  if (array[i] < minElement) {
    minElement = array[i];
    minElementIndex = i;
  }
  if (array[i] > maxElement) {
    maxElement = array[i];
    maxElementIndex = i;
  }
  if (array[i] < 0) {
    negativeDigitsCount += 1;
  }
}

for ( let i = 0; i < array.length; i++) {
  if (array[i] < maxElement) {
    array[i] = 0;
  }
}


document.write('Sum of positive elements: ' + sumPositiveDigits + '</br>');
document.write('Count of positive elements: ' + positiveDigitsCount + '</br>');
document.write('Minimum  element: ' + minElement + '</br>');
document.write('Minimum  element index: ' + minElementIndex + '</br>');
document.write('Maximum element: ' + maxElement + '</br>');
document.write('Maximum element index: ' + maxElementIndex + '</br>');
document.write('Count of negative elements: ' + negativeDigitsCount + '</br>');
document.write('Count of odd positive elements: ' + oddPositiveElementsCount + '</br>');
document.write('Count of even positive elements: ' + evenPositiveElementsCount + '</br>');
document.write('Sum of even positive elements: ' + sumEvenPositiveElements + '</br>');
document.write('Sum of odd positive elements: ' + sumOddPositiveElements + '</br>');
document.write('Multiplication of positive elements: ' + multiplicationPositiveElements + '</br>');

document.write(array);
