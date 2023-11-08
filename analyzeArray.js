function computeAverage(arr) {
  if (arr.length) {
    let temp = 0;
    arr.forEach((element) => {
      temp += element;
    });
    return temp / arr.length;
  }
}
function computeMin(arr) {
  if (arr.length) {
    let min = 0;
    arr.forEach((element) => {
      if (element < min) {
        min = element;
      }
    });
    return min;
  }
}
function computeMax(arr) {
  if (arr.length) {
    let max = 0;
    arr.forEach((element) => {
      if (element > max) {
        max = element;
      }
    });
    return max;
  }
}

function analyzeArray(arr) {
  const object = {};
  object.average = computeAverage(arr);
  object.min = computeMin(arr);
  object.max = computeMax(arr);
  object.length = arr.length;
  return object;
}

module.exports = analyzeArray;
