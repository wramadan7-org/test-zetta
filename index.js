/**
 * Direction:
 * Find maximum number of words from given sentences.
 *
 * Expected:
 * 23
 */
const sentences = [
  "Mauris ultricies sed sapien eget malesuada. Suspendisse et aliquet odio, id ultrices erat. Praesent vehicula erat nulla. Aliquam a lorem urna. Donec.",
  "Duis at tellus et ex bibendum pellentesque sed in nibh. Sed aliquet, diam id mollis facilisis, massa metus accumsan elit, at mattis magna.",
  "Sed non nibh quam. Pellentesque eget ultrices diam. Aliquam diam justo, consectetur ac dui lobortis, vestibulum bibendum lorem. Sed porta pulvinar.",
];

function result(sentences) {
  let arrayMaxLength = [];

  // Looping array from default setences
  sentences.forEach((value) => {
    // Set string to array by space (" ") and get length
    const stringLength = value.split(" ").length;

    // Push result length to arrayMaxLength
    arrayMaxLength.push(stringLength);
  });

  // Sorting list length of string in array result of loop with descending
  arrayMaxLength.sort((a, b) => {
    return b - a;
  });

  // Return array 0 (the max number)
  return arrayMaxLength[0];
}

console.log(result(sentences));
