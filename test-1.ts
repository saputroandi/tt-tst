function fishBash(n: number): void {
  for (let i = 1; i <= n; i++) {
    let print: string = "";

    if (i % 3 === 0) {
      print += "fish";
    }
    if (i % 5 === 0) {
      print += "bash";
    }
    if (print === "") {
      continue;
    }

    console.log(print);
  }
}

fishBash(20);

function manualSort(
  arr: number[],
  order: "ascending" | "descending" = "ascending"
): number[] {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      const shouldSwap =
        order === "ascending" ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];

      if (shouldSwap) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

const unsortedArray = [64, 25, 12, 22, 11];
console.log(manualSort(unsortedArray, "ascending"));
console.log(manualSort(unsortedArray, "descending"));

function isPalindrome(str: string) {
  var pal = str.toLowerCase().replace(/\s/g, "");
  var reverse = pal.split("").reverse().join("");
  return reverse === pal ? true : false;
}

console.log(isPalindrome("kasur rusak"));
console.log(isPalindrome("hello world"));
