function progression(n) {
    if (n == 1) return 1;
    return progression(n - 1) + n;
  }
  
  console.log(progression(5));

  function progression1(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;
    return progression(n - 1) + progression(n - 2);
  }
  console.log(progression1(5));

  function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (end >= start) {
      let mid = Math.floor((start + end) / 2);
      if (num > arr[mid]) {
        start = mid + 1;
      } else if (num < arr[mid]) {
        end = mid - 1;
      } else return mid;
    }
    return "the number you're looking for is not here";
  }
  
  console.log(binarySearch([1, 2, 3, 4, 5, 9, 12], 8));

  function binarySearch(arr, num, start, end) {
    if (start > end) return "the number you're looking for is not here";
    let mid = Math.floor((start + end) / 2);
    if (num > array[mid]) {
      return binarySearch(arr, num, mid + 1, end);
    } else if (num < array[mid]) {
      return binarySearch(arr, num, start, mid - 1);
    } else return mid;
  }
  
  let array = [1, 2, 3, 4, 5, 9, 12];
  console.log(binarySearch(array, 9, 0, array.length - 1));

  function Hanoi(n, A, C, B) {
    if (n == 1) return A + C + " ";
    return Hanoi(n - 1, A, B, C) + A + C + " " + Hanoi(n - 1, B, C, A);
  }
  
  console.log(Hanoi(10, "A", "C", "B"));