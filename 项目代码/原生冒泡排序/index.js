function unEevey(arr) {
    let temp;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // console.log(arr[i] + " ........" + arr[j]);
            if (arr[j] > arr[j + 1]) {
                console.log(arr[j] + " ........" + arr[j + 1]);
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(unEevey([1, 3, 1, 1, 4, 5]));
