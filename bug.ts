function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];
printArray(myArray); // This will work fine

const myStringArray: string[] = ['a', 'b', 'c'];
printArray(myStringArray); // This will also work fine

const myMixedArray: (string | number)[] = ['a', 1, 'b', 2];
printArray(myMixedArray); // This will also work fine

const myAnyArray: any[] = [1, 'a', true, {name: 'John'}];
printArray(myAnyArray); // This will also work fine

// However, consider this scenario
const myTuple: [string, number] = ['hello', 123];
printArray(myTuple); // This will work fine

// But if we try to use a tuple with a rest parameter, things will become tricky
function printTupleWithRest(...args: [string, ...number[]]): void {
    console.log(args);
}
printTupleWithRest('hello', 1,2,3,4,5,6,7); //This is ok
printTupleWithRest('hello'); // This will throw an error, expecting more numbers.
