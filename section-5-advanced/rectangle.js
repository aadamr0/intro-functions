/* 
Create a function makeRectangle that will print an m by n rectangle of * to the screen

For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

 * * *
 * * *
 * * *
 * * *
 * * *

Try to complete this task without using for loops!
*/
// no for loops.
// print * m times. how?
// do that command n times.

function makeRectangle(m, n) {
    let row = Array(m).fill('*')
    if (n > 0) {
        makeRectangle(m, n-1)
        console.log(row.join(''))
}
}

// invoke the function below to test it
makeRectangle(3, 2)