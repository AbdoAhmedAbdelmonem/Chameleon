let question= [
    {
        numb: 1,
        question: "1- What is a function in programming?",
        answer: "D) A self-contained block of statements that perform a specific task",
        options: [
            "A) A variable that stores data",
            "B) A command that repeats a block of code",
            "C) A statement that performs calculations",
            "D) A self-contained block of statements that perform a specific task"
        ],
    },
    {
        numb: 2,
        question: "2- What are the two types of functions in programming?",
        answer: "B) Built-in and User-defined functions",
        options: [
            "A) Recursive and Iterative functions",
            "B) Built-in and User-defined functions",
            "C) Static and Dynamic functions",
            "D) Global and Local functions"
        ],
    },
    {
        numb: 3,
        question: "3- What does the return type 'void' signify in a function?",
        answer: "A) The function does not return any value",
        options: [
            "A) The function does not return any value",
            "B) The function returns an integer",
            "C) The function returns a string",
            "D) The function returns a boolean"
        ],
    },
    {
        numb: 4,
        question: "4- Where is a global variable declared in a program?",
        answer: "D) Outside of every function definition",
        options: [
            "A) Inside a specific function",
            "B) At the end of a function",
            "C) Within a loop",
            "D) Outside of every function definition"
        ],
    },
    {
        numb: 5,
        question: "5- What is method overloading?",
        answer: "C) Defining several methods within a class with the same name but different signatures",
        options: [
            "A) Creating multiple instances of a class",
            "B) Using multiple return types in a function",
            "C) Defining several methods within a class with the same name but different signatures",
            "D) Calling a function multiple times in a program"
        ],
    },
    {
        numb: 6,
        question: "6- What is the purpose of the parameter list in a function?",
        answer: "B) To provide input data values to the function",
        options: [
            "A) To define the return type of the function",
            "B) To provide input data values to the function",
            "C) To declare the function name",
            "D) To specify the output of the function"
        ],
    },
    {
        numb: 7,
        question: "7- What is a local variable?",
        answer: "A) A variable declared within a function or block",
        options: [
            "A) A variable declared within a function or block",
            "B) A variable declared outside of all functions",
            "C) A variable that can be accessed anywhere in the program",
            "D) A variable that stores a fixed value"
        ],
    },
    {
        numb: 8,
        question: "8- What is a global variable?",
        answer: "C) A variable declared outside of every function definition",
        options: [
            "A) A variable declared inside a loop",
            "B) A variable declared inside a specific function",
            "C) A variable declared outside of every function definition",
            "D) A variable that cannot be modified"
        ],
    },
    {
        numb: 9,
        question: "9- Which of the following is a correct example of a built-in function in Java?",
        answer: "B) Math.sqrt(x)",
        options: [
            "A) int sum(int a, int b)",
            "B) Math.sqrt(x)",
            "C) void display()",
            "D) double multiply(double a, double b)"
        ],
    },
    {
        numb: 10,
        question: "10- How is a function called in Java?",
        answer: "D) Using the function name followed by the actual parameter list",
        options: [
            "A) By defining the function",
            "B) By writing the return type first",
            "C) By declaring a variable",
            "D) Using the function name followed by the actual parameter list"
        ],
    },
    {
        numb: 11,
        question: "11- Which keyword is used in Java to indicate that a function does not return a value?",
        answer: "A) void",
        options: [
            "A) void",
            "B) null",
            "C) empty",
            "D) none"
        ],
    },
    {
        numb: 12,
        question: "12- What does the scope of a variable determine?",
        answer: "C) The context within a program in which a variable is valid and can be used",
        options: [
            "A) The data type of the variable",
            "B) The memory allocation for the variable",
            "C) The context within a program in which a variable is valid and can be used",
            "D) The value of the variable"
        ],
    },
    {
        numb: 13,
        question: "13- What happens if a variable is declared inside a function?",
        answer: "B) It becomes a local variable",
        options: [
            "A) It becomes a global variable",
            "B) It becomes a local variable",
            "C) It is accessible from anywhere in the program",
            "D) It automatically gets initialized to zero"
        ],
    },
    {
        numb: 14,
        question: "14- What is method signature?",
        answer: "C) The combination of the method name and formal parameter list",
        options: [
            "A) The return type of the method",
            "B) The method body",
            "C) The combination of the method name and formal parameter list",
            "D) The variables declared in the method"
        ],
    },
    {
        numb: 15,
        question: "15- Which of the following is NOT part of a method signature?",
        answer: "B) The returned type value",
        options: [
            "A) Method name",
            "B) The returned type value",
            "C) Formal parameter list",
            "D) The order of parameters"
        ],
    },
    {
        numb: 16,
        question: "16- In the context of functions, what is overloading?",
        answer: "D) Defining multiple methods with the same name but different signatures",
        options: [
            "A) Using the same method in different classes",
            "B) Using the same variable name in multiple methods",
            "C) Declaring the same method multiple times",
            "D) Defining multiple methods with the same name but different signatures"
        ],
    },
    {
        numb: 17,
        question: "17- What is the output of the following function call: Math.sqrt(25)?",
        answer: "C) 5.0",
        options: [
            "A) 25",
            "B) 2.5",
            "C) 5.0",
            "D) Error"
        ],
    },
    {
        numb: 18,
        question: "18- What type of function is used to sum two integer numbers in the provided examples?",
        answer: "B) A user-defined function",
        options: [
            "A) A built-in function",
            "B) A user-defined function",
            "C) A recursive function",
            "D) A void function"
        ],
    },
    {
        numb: 19,
        question: "19- What is required to declare a void function?",
        answer: "A) Use of the keyword void in the function declaration",
        options: [
            "A) Use of the keyword void in the function declaration",
            "B) Declaring a return type",
            "C) A specific number of parameters",
            "D) A loop inside the function"
        ],
    },
    {
        numb: 20,
        question: "20- What is a built-in function?",
        answer: "B) A function provided by the programming language's standard library",
        options: [
            "A) A function defined by the user",
            "B) A function provided by the programming language's standard library",
            "C) A function that cannot be modified",
            "D) A function that is only used in large programs"
        ],
    },
];
