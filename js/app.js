let userArrayLength ;
let userArray = [];

do {
  userArrayLength = prompt('Enter array length.');
} while (userArrayLength < 6);

for (let i = 0; i < userArrayLength; i++) {
  const userData = prompt('Enter element #' + (i + 1));
  userArray.push(userData);
}
document.write('Array: ' + userArray + '</br>');

userArray = userArray.sort(function(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
});
document.write('Sorted array: ' + userArray + '</br>');

userArray.splice(2,3);
document.write('Modified array: ' + userArray + '</br>');


