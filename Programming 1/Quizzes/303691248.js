let question=[
    {
        numb: 1,type: "Multiple Choices",
        question: "What is an array?",
        answer: "C) An object that stores many values of the same type",
        options: [
            "A) A single value of any type",
            "B) A method that stores multiple values of different types",
            "C) An object that stores many values of the same type",
            "D) A variable that can change type"
        ]
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "What is an element in the context of arrays?",
        answer: "B) One value in an array",
        options: [
            "A) A value stored in a variable",
            "B) One value in an array",
            "C) A method to sort arrays",
            "D) The size of an array"
        ]
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "How is the index used in arrays?",
        answer: "B) A 0-based integer to access an element from an array",
        options: [
            "A) To store multiple values",
            "B) A 0-based integer to access an element from an array",
            "C) To delete elements from an array",
            "D) To determine the type of elements in an array"
        ]
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is the syntax for declaring an array in Java?",
        answer: "E) Both C and D",
        options: [
            "A) type[] name = type[length];",
            "B) type name = new type[length];",
            "C) type[] name = new type[length];",
            "D) type name[] = new type[length];",
            "E) Both C and D"
        ]
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "How do you declare an integer array of length 10?",
        answer: "B) int[] numbers = new int[10];",
        options: [
            "A) int[] numbers = new int(10);",
            "B) int[] numbers = new int[10];",
            "C) int numbers = new int[10];",
            "D) int[10] numbers = new int[10];"
        ]
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "How can the length of an array be dynamically set by the user?",
        answer: "C) Scanner input = new Scanner(System.in); int n = input.nextInt(); int[] numbers = new int[n];",
        options: [
            "A) int n = length.input(); int[] numbers = new int[n];",
            "B) int n = new Scanner(System.in); int[] numbers = new int[n];",
            "C) Scanner input = new Scanner(System.in); int n = input.nextInt(); int[] numbers = new int[n];",
            "D) Scanner input = new Scanner(); int n = input.nextInt(); int[] numbers = new int[n];"
        ]
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "Can the length of an array be any integer expression? Give an example.",
        answer: "E) all the mentioned",
        options: [
            "A) int x = 2 * 3 + 1; int[] data = new int[x * 5];",
            "B) int x = 2 + 3 * 1; int[] data = new int[x % 5];",
            "C) int x = 2 * 3 + 1; int[] data = new int[x % 5 + 2];",
            "D) int x = 2 * 3 + 1; int[] data = new int[x + 5];",
            "E) all the mentioned"
        ]
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "What are the default initial values for different types in arrays?",
        answer: "C) int: 0, double: 0.0, boolean: false, char: '\\u0000'",
        options: [
            "A) int: 0, double: 0.0, boolean: false, char: ' '",
            "B) int: 0, double: 1.0, boolean: true, char:'0'",
            "C) int: 0, double: 0.0, boolean: false, char: '\\u0000'",
            "D) int: -1, double: -1.0, boolean: false, char: '\\0'"
        ]
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "How are array elements accessed and modified?",
        answer: "B) Access: name[index], Modify: name[index] = value",
        options: [
            "A) Access: name.value, Modify: name.value = value",
            "B) Access: name[index], Modify: name[index] = value",
            "C) Access: name.value(index), Modify: name.value(index) = value",
            "D) Access: name(index), Modify: name(index) = value"
        ]
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "Provide an example of modifying the first and fourth elements in an integer array.",
        answer: "B) int[] numbers = new int[10]; numbers[0] = 27; numbers[4] = -6;",
        options: [
            "A) int[] numbers = new int[10]; numbers[1] = 27; numbers[4] = -6;",
            "B) int[] numbers = new int[10]; numbers[0] = 27; numbers[4] = -6;",
            "C) int[] numbers = new int[10]; numbers[0] = 27; numbers[3] = -6;",
            "D) int[] numbers = new int[10]; numbers[1] = 27; numbers[3] = -6;"
        ]
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "How would you declare and initialize a double array of length 5 with specific values?",
        answer: "C) double[] results = new double[]{0.0, 0.0, 3.4, 0.0, -0.5};",
        options: [
            "A) double[] results = new double[5]; results = {0.0, 0.0, 3.4, 0.0, -0.5};",
            "B) double[] results = [5]{0.0, 0.0, 3.4, 0.0, -0.5};",
            "C) double[] results = new double[]{0.0, 0.0, 3.4, 0.0, -0.5};",
            "D) double results = {0.0, 0.0, 3.4, 0.0, -0.5};"
        ]
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "How would you declare a boolean array of length 6 and set the fourth element to true?",
        answer: "B) boolean[] tests = new boolean[6]; tests[3] = true;",
        options: [
            "A) boolean[] tests = new boolean[6]; tests[4] = true;",
            "B) boolean[] tests = new boolean[6]; tests[3] = true;",
            "C) boolean[] tests = new boolean[6]; tests[2] = true;",
            "D) boolean tests = new boolean[6]; tests[3] = true;"
        ]
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "How can for loops be used with arrays?",
        answer: "B) For assigning and accessing values in arrays",
        options: [
            "A) For initializing arrays with values only",
            "B) For assigning and accessing values in arrays",
            "C) For creating new arrays",
            "D) For deleting elements from arrays"
        ]
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "What does the length field of an array represent?",
        answer: "C) The number of elements in the array",
        options: [
            "A) The type of elements in the array",
            "B) The total memory allocated for the array",
            "C) The number of elements in the array",
            "D) The maximum value in the array"
        ]
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "How would you initialize an array quickly with known values?",
        answer: "D) All of the above",
        options: [
            "A) int[] numbers = {12, 49, -2, 26, 5, 17, -6};",
            "B) int[] numbers = new int[]{12, 49, -2, 26, 5, 17, -6};",
            "C) int numbers[] = new int[]{12, 49, -2, 26, 5, 17, -6};",
            "D) All of the above"
        ]
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which of the following data types has the highest precision in Java?",
        answer: "B) double",
        options: [
            "A) float",
            "B) double",
            "C) int",
            "D) long"
        ]
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is the correct syntax to declare an array in Java?",
        answer: "d) Both a and c",
        options: [
            "a) int arr[];",
            "b) arr int[];",
            "c) int[] arr;",
            "d) Both a and c"
        ]
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What is the output of the following array operation sequence?",
        answer: "A) [0, 3, 11, 42, 99, 0, 2, 0]",
        options: [
            "A) [0, 3, 11, 42, 99, 0, 2, 0]",
            "B) [0, 3, 0, 42, 99, 0, 11, 0]",
            "C) [0, 3, 11, 42, 0, 99, 2, 0]",
            "D) [0, 3, 42, 11, 99, 0, 2, 0]"
        ],image:"../../../MDA/1-18 P2.png"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What is the output of this code snippet using arrays and for loops?",
        answer: "B) 0 2 4 6 8 10 12 14",
        options: [
            "A) 2 4 6 8 10 12 14 16",
            "B) 0 2 4 6 8 10 12 14",
            "C) 1 3 5 7 9 11 13 15",
            "D) 0 1 2 3 4 5 6 7"
        ],image:"../../../MDA/1-19 P2.png"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What is the output of the following array operation sequence?",
        answer: "D) false false false true false false",
        options: [
            "A) false false false false false false",
            "B) true false false false false true",
            "C) true true true true true true true",
            "D) false false false true false false"
        ],image:"../../../MDA/1-20 P2.png"
    }

]
