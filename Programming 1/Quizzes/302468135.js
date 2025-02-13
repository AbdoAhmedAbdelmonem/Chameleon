let question= [
    {
        numb: 1,type: "Multiple Choices",
        question: "What is the purpose of a loop statement in Java?",
        answer: "A) To repeatedly execute a statement or sequence of statements as long as a condition is true",
        options: [
            "A) To repeatedly execute a statement or sequence of statements as long as a condition is true",
            "B) To execute a statement once",
            "C) To declare variables",
            "D) To stop the execution of a program"
        ],
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "Which of the following is not a type of loop in Java?",
        answer: "D) Until loop",
        options: [
            "A) for loop",
            "B) while loop",
            "C) do-while loop",
            "D) Until loop"
        ],
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "Which loop is best suited for a count-controlled loop?",
        answer: "A) for loop",
        options: [
            "A) for loop",
            "B) while loop",
            "C) do-while loop",
            "D) any loop can be used"
        ],
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What does the following code output?",
        answer: "B) I am so smart1I am so smart2I am so smart3",
        options: [
            "A) I am so smart<br>I am so smart<br>I am so smart",
            "B) I am so smart1I am so smart2I am so smart3",
            "C) I am so smart 3 times",
            "D) Compilation error"
        ],image:'../../../MDA/7-4o.png'
},
    {
        numb: 5,type: "Multiple Choices",
        question: "What will happen if the loop condition in a for loop is always true?",
        answer: "C) The loop will run indefinitely",
        options: [
            "A) The loop will never execute",
            "B) The loop will execute only once",
            "C) The loop will run indefinitely",
            "D) Compilation error"
        ],
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "Which statement can be used to stop a loop immediately?",
        answer: "A) break",
        options: [
            "A) break",
            "B) continue",
            "C) stop",
            "D) exit"
        ],
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "What does the continue statement do in a loop?",
        answer: "B) Skips the current iteration and moves to the next iteration",
        options: [
            "A) Terminates the loop",
            "B) Skips the current iteration and moves to the next iteration",
            "C) Resets the loop",
            "D) None of the above"
        ],
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "What is the output of the following code?",
        answer: "A) The sum is 500500",
        options: [
            "A) The sum is 500500",
            "B) The sum is 1000",
            "C) The sum is 2000",
            "D) The sum is 1001000"
        ],image:'../../../MDA/7-8o.png'
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "In a nested loop, which loop is executed the most number of times?",
        answer: "B) The innermost loop",
        options: [
            "A) The outermost loop",
            "B) The innermost loop",
            "C) All loops are executed the same number of times",
            "D) None of the above"
        ],
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "What does the following code do? }",
        answer: "C) Counts down from 10 to 1",
        options: [
            "A) Counts up from 1 to 10",
            "B) Prints 1 to 10",
            "C) Counts down from 10 to 1",
            "D) None of the above"
        ],image:'../../../MDA/7-10o.png'
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "Which loop guarantees that the loop's body will run at least once?",
        answer: "B) do-while loop",
        options: [
            "A) for loop",
            "B) do-while loop",
            "C) while loop",
            "D) None of the above"
        ],
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "What is the difference between while loop and do-while loop?",
        answer: "C) do-while loop tests the condition after executing the loop body",
        options: [
            "A) while loop is more efficient",
            "B) do-while loop is used for different data types",
            "C) do-while loop tests the condition after executing the loop body",
            "D) There is no difference"
        ],
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "What is an infinite loop?",
        answer: "A) A loop that never terminates",
        options: [
            "A) A loop that never terminates",
            "B) A loop that terminates after one iteration",
            "C) A loop with a finite number of iterations",
            "D) A loop that runs only when certain conditions are met"
        ],
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "What is the output of the following code?",
        answer: "B) 2 ^ 20 = 1048576",
        options: [
            "A) 2 ^ 20 = 2048",
            "B) 2 ^ 20 = 1048576",
            "C) 2 ^ 20 = 524288",
            "D) 2 ^ 20 = 2097152"
        ],image:'../../../MDA/7-14o.png'
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "Which of the following is an example of a sentinel-controlled loop?",
        answer: "B) Prompting the user until they type a negative number",
        options: [
            "A) Printing 'hello' 10 times",
            "B) Prompting the user until they type a negative number",
            "C) Printing each odd number between 5 and 127",
            "D) Finding all prime numbers up to an integer n"
        ],
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "What does the following code print? ",
        answer: "A) 4 3 2 1 Done",
        options: [
            "A) 4 3 2 1 Done",
            "B) 1 2 3 4 Done",
            "C) Done",
            "D) 1 2 3 Done"
        ],image:'../../../MDA/7-16.png'
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "Which loop is best for performing initialization, testing, and updating in a single line?",
        answer: "A) for loop",
        options: [
            "A) for loop",
            "B) while loop",
            "C) do-while loop",
            "D) None of the above"
        ],
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "Which of the following is a correct example of a cumulative sum?",
        answer: "C) for (int i = 1; i <= 1000; i++) { sum += i; }",
        options: [
            "A) for (int i = 1; i <= 1000; i++) { sum *= i; }",
            "B) for (int i = 1; i <= 1000; i++) { sum = i; }",
            "C) for (int i = 1; i <= 1000; i++) { sum += i; }",
            "D) None of the above"
        ],
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "What will happen if you use the wrong comparison operator in a loop condition?",
        answer: "B) The loop may never run or run indefinitely",
        options: [
            "A) The program will crash",
            "B) The loop may never run or run indefinitely",
            "C) The loop will execute only once",
            "D) The loop will function normally"
        ],
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "What does the following code output? ",
        answer: "A) 1, 2, 3, 4, 5,",
        options: [
            "A) 1, 2, 3, 4, 5,",
            "B) 1, 2, 3, 4, 5",
            "C) 1, 2, 3, 4, 5, 6",
            "D) 5, 4, 3, 2, 1,"
        ],image:'../../../MDA/7-20.png'
    },
    {
        numb: 21,type: "Multiple Choices",
        question: "Which loop is ideal for checking a condition before each iteration?",
        answer: "B) while loop",
        options: [
            "A) for loop",
            "B) while loop",
            "C) do-while loop",
            "D) None of the above"
        ],
    },
    {
        numb: 22,type: "Multiple Choices",
        question: "What is the role of the initialization step in a for loop?",
        answer: "A) To set the starting value of the loop variable",
        options: [
            "A) To set the starting value of the loop variable",
            "B) To check the loop condition",
            "C) To update the loop variable",
            "D) To terminate the loop"
        ],
    },
    {
        numb: 23,type: "Multiple Choices",
        question: "How do nested loops function?",
        answer: "B) The inner loop runs completely for each iteration of the outer loop",
        options: [
            "A) The outer loop runs completely for each iteration of the inner loop",
            "B) The inner loop runs completely for each iteration of the outer loop",
            "C) Both loops run simultaneously",
            "D) None of the above"
        ],
    },
    {
        numb: 24,type: "Multiple Choices",
        question: "What is the difference between break and continue statements?",
        answer: "A) break terminates the loop, continue skips to the next iteration",
        options: [
            "A) break terminates the loop, continue skips to the next iteration",
            "B) continue terminates the loop, break skips to the next iteration",
            "C) break and continue both terminate the loop",
            "D) None of the above"
        ],
    },
    {
        numb: 25,type: "Multiple Choices",
        question: "What is the primary use of a loop variable?",
        answer: "C) To control the number of times the loop executes",
        options: [
            "A) To store the output of the loop",
            "B) To check the status of the loop",
            "C) To control the number of times the loop executes",
            "D) To declare functions"
        ],
    },
];
