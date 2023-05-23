// global variable declaration :

var a;

// scoped variable declaration :

let b;

// global variable declaration : 

const c=0;

//Note: As shown above, constants cannot be declared without initializing them. As a result, the above line is a definition rather than a declaration.

///

//undefined variable:

var undefined;

//null variable:

var nl = null;

//boolean variable:

var bool = true;
var bool2 = !bool;

//string variable:

var s1 = "Hello World";

//String length

console.log(s1.length);


/*string indexing
The use of square brackets following the name of a string variable to access a character in the string

string[character position in zero based indexing]

invalid if index is not a non negative integer or if it is greater than the length of string

NOTE: String sections are immutable. Attempting to edit a string using indexing throws an error

*/

for(var i=0;i<s1.length;i++){
    console.log(s1[i]);
}

//symbol definition

var sym = Symbol();

//Number definition

var i = 10;     //integer
var f = 1.1;    //float

