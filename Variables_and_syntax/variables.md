# Variables



Variables are containers for holding data. In javascript, there are 7 types of variables, corresponding to seven different classes of data. They are undefined, null, boolean, string, symbol, number, and object. These are further broken down into sub-types, such as integer and float from number. 

Similar to python, variables are initialized without a type specification. This means that  variables can easily be reassigned various data types implicitly. Furthermore, this gives a large amount of ambiguity about how they interact when operators are overloaded, as will be shown below.

Variable declarations occur based of scope and editability. There are three types of declarations, const, var and let. These determine the usage of the variable.



## Declaration

The declaration of a variable determines two aspects: it's scope, i.e., the parts of a program it is accessible in, and the parts in which it may be accessed, and it's editability, or whether or not the value the variable holds can be changed post declaration.

The three variable declarations are:

### var:

​		Initializes a variable in a global scope. Such a variable is persistent, and will last throughout the program, until it's completion. It can be changed as required.

### let:

​	Let gives scope specific variables. A variable initialized using this keyword will be accessible only while it's scope exists. For example, a variable created in a function would allow the variable to be accessed only while the function was running, and even then, only by the function itself.

### const:

​	Const is used for creating constants. These values, once initialized, cannot be changed until the program stops.



## Data Types

​	Data types explain the kind of information a variable holds. Javascript supports implicit conversion between datatypes, which can be extremely dangerous while programming. Therefore, it is extremely vital to be aware of the kind of data being dealt with. The **typeof** keyword returns a string containing the type of a given variable when preceding the variable, and is used for this exact purpose.

### undefined:

​	This is the datatype to which all declared variables default. It automatically changes to the type of the data assigned to the variable when an assignment is performed, or null when operations are attempted on it.

### null:

​	It is a null value which is given to a variable when illegal operations are performed on it. May also have other applications

### boolean:

​	Holds a truth value, i.e. True or False

### string:

​	This variable contains a set of characters. While it can be reassigned normally, individual characters or character sequences cannot be edited. Concatenations and slicing is possible, however. Strings can also be accessed using zero-based indexing, as in most programming languages.

### symbol:

### number:

​	The number data type can be divided into two main subcategories, integer and floating point numbers. Both of them work in the same manner, except for the fact that upon encountering an operation including both, the float takes precedence to preserve data. It will, however, convert floats into integers upon elimination of the floating part.

### object:

​	The object datatype is the most malleable of all the given datatypes. An object is a predefined container designed to hold multiple pieces of data. Examples of this include arrays and classes.