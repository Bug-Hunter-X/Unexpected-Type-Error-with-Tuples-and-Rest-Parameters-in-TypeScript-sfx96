# Unexpected Type Error with Tuples and Rest Parameters in TypeScript

This repository demonstrates a subtle type error that can occur in TypeScript when using tuples with rest parameters. The `printTupleWithRest` function expects a string followed by one or more numbers.  The error arises when a tuple with fewer numbers than expected is provided, even though this should theoretically still be valid according to the rest parameter's definition.  The solution shows how to modify the function signature to handle this correctly.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `tsc bug.ts`.  You will see an error highlighting the issue.
4. Examine `bugSolution.ts` to see a corrected version of the function.