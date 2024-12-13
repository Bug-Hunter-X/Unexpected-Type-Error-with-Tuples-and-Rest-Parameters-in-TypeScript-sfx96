function printTupleWithRest(...args: [string, ...number[]]): void {
    // Check if the args array is valid against the required tuple parameters
    if(args.length === 0 || typeof args[0] !== 'string' || args.slice(1).some(item => typeof item !== 'number')) {
        console.error('Invalid input: Expected a string followed by one or more numbers.');
        return;
    }
    console.log(args);
}

printTupleWithRest('hello', 1,2,3,4,5,6,7); //This is ok
printTupleWithRest('hello'); //This will show an error message now instead of failing to compile
printTupleWithRest(1,2,3); //This will also show an error message now instead of failing to compile
printTupleWithRest('hello', 'a'); //This will also show an error message now instead of failing to compile