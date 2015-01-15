/*
    Day One: Values, Variables and Literals

    ========================================

    five types of primitive values in javascript
    Numbers, Booleans, Strings, null and undefined

    javascript variables have no defined type, it allocates the type according
    to the assigned value.
*/

var answer = 42;
console.log(typeof answer); // typeof is used to find the type of the variable

answer = "My name is abc";
console.log(typeof answer);

/*
    Sometimes there are some auto conversion between the variables. If '+' is
    used between the variables, which is a concatanation operator in javascript
    as well, if one operand is string and another is integer, the ouput will be
    string , but if we use '-' , then the output will be an integer, FUNNY !!

*/
console.log("37" + 1); // outputs "371"
console.log("37" - 1); // outputs 36

/*
    Converting strings to numbers, two ways:
    1. using parseInt() and parseFloat() => easy to understand
    2. unary plus operator => we need to assign '+' before the string and
        need to enclose the whole pattern with brackets.
*/

var x = "1.1" + "1.1";
var y = (+"1.1") + (+"1.1") // unary plus operator

console.log(x); // outputs "1.11.1"
console.log(y); // outputs 2.2
