const question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "In a circular queue with rear and front pointers and CAPACITY as the queue array, how do you increment the rear end of the queue?",
        options: ["rear++", "(rear + 1) % CAPACITY", "(rear % CAPACITY) + 1", "None of the above"],
        answer: "(rear + 1) % CAPACITY",
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "What is the time complexity of pop() operation when the stack is implemented using an array?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: "O(1)",
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "Consider the following operation performed on a stack of size 5:<br> Push(1), Pop(), Push(2), Push(3), Pop(), Push(4), Pop(), Pop(), Push(5). <br>After the completion of all operations, the number of elements present in the stack is?",
        options: ["1", "2", "3", "4"],
        answer: "1",
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Problem abstraction is needed in which of the following situations?",
        options: ["To obtain an exact view of the problem at hand", "To obtain an abstract view of the problem at hand", "To merge necessary as well as unnecessary facts of real problems", "To transform real problems into automated problems"],
        answer: "To obtain an abstract view of the problem at hand",
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "Which is the best way to go for searching in Game playing problems?",
        options: ["The linear search approach", "The random search approach", "The heuristic search approach", "None of the above"],
        answer: "The heuristic search approach",
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "In the IT community, which of the following tasks require extensive knowledge of Data Structures?",
        options: ["Designing a new software component", "Maintenance of a software component", "Testing and improving existing software component", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "In real life, real problems are usually characterized by which of the following?",
        options: ["They are usually automated by nature", "They are easy to analyze and handle", "They contain necessary as well as unnecessary details", "None of the above"],
        answer: "They contain necessary as well as unnecessary details",
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Dynamic stacks can best be implemented with which of the following elementary data structures?",
        options: ["Singly Linked Lists", "Doubly Linked Lists", "Single-Dimension arrays", "All of the above"],
        answer: "Singly Linked Lists",
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "The abstract view, or model, of real problems should include:",
        options: ["Data items that are affected", "Operations identified by the problem", "Both A and B", "None of the above"],
        answer: "Both A and B",
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What best describes the operation 'Constructor' of an Abstract Data Type (ADT)?",
        options: ["It is called automatically whenever you create an object from the ADT", "One can define several constructors, all with the same name, but with different parameters", "There must be at least one constructor for a given ADT", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "An interface of an ADT is best defined to be:",
        options: ["The set of operations provided by the ADT", "A subset of the operations defined by the ADT", "A subset of the operations defined by the ADT the user can access", "The set of private operations defined by the ADT the user can access"],
        answer: "A subset of the operations defined by the ADT the user can access",
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "An abstract data type is usually characterized by:",
        options: ["It helps extending the language", "It defines a set of new operations", "It exports a new data type", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Analyzing algorithms by running the programs representing them several times:",
        options: ["Will be informative in the general case", "Will not be informative in the general case", "Will give us its general behavior", "None of the above"],
        answer: "Will not be informative in the general case",
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which of the following should be our main goal from analyzing algorithms?",
        options: ["Predicting some future failures", "Estimating the running time as a function from the input", "Estimating the running time as a function from the memory size", "None of the above"],
        answer: "Estimating the running time as a function from the input",
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Which of the following is the best reason forcing us to analyze algorithms?",
        options: ["To save valuable resources", "To develop new and efficient algorithms", "To be able to compare among algorithms that can solve the same problem", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Using the big O notations, which of the following is correct?",
        options: ["O(2^n) < O(n^2) < O(n^2 log(n)) < O(n^3) < O(n!)", "O(n) < O(n^2) < O(n^2 log(n)) < O(e^n) < O(n!)", "O(n) < O(n^2) < O(n^2 log(n)) < O(3^n) < O(n!)", "O(n) < O(n^2) < O(n^2 log(n)) < O(n^3) < O(n!)"],
        answer: "O(n) < O(n^2) < O(n^2 log(n)) < O(n^3) < O(n!)",
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is the best complexity one can achieve for sorting a list of a partially sorted list?",
        options: ["O(n)", "Something between O(log(n)) and O(n)", "Something between O(n log(n)) and O(n^2)", "None of the above"],
        answer: "None of the above",
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Usually, Stacks are called FILO for which of the following reasons?",
        options: ["The last element to 'push' is the last element to 'pop'", "The first element to 'push' is the first element to 'pop'", "The last element to 'push' is the first element to 'pop'", "None of the above"],
        answer: "The last element to 'push' is the first element to 'pop'",
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Dynamic memory allocation is recommended in which of the following situations?",
        options: ["The size of the data is known to be (and remain) constant", "The size of the data is initially zero and expand (or shrink) over time", "There is an upper limit on the number of data items needed", "None of the above"],
        answer: "The size of the data is initially zero and expand (or shrink) over time",
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Dynamic memory allocation can be implemented using:",
        options: ["Arrays", "Singly Linked Lists", "Doubly Linked Lists", "Both B and C"],
        answer: "Both B and C",
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is the correct code for inserting an element with value X after the element pointed to by P in a Singly Linked List (SLL)?",
        options: ["P.next = new Node(X, null);", "P.next = new Node(X, P.next);", "P.next = new Node(X, P.next); if (P == Tail) Tail = Tail.next;", "None of the above"],
        answer: "P.next = new Node(X, P.next); if (P == Tail) Tail = Tail.next;",
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Which one from the following is classified as a non-linear data structure?",
        options: ["Linked Lists", "Dynamic Stacks", "Circular Queues", "Binary Trees"],
        answer: "Binary Trees",
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "Usually, Stacks are called LIFO for which of the following reasons?",
        options: ["The last element to 'push' is the last element to 'pop'", "The first element to 'push' is the first element to 'pop'", "The last element to 'push' is the first element to 'pop'", "None of the above"],
        answer: "The last element to 'push' is the first element to 'pop'",
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Dynamic stacks are characterized by which of the following features?",
        options: ["It is a constrained version from the singly linked lists", "Limited to a predefined max stack size parameter", "Must leave one empty location to work correctly", "All of the above"],
        answer: "It is a constrained version from the singly linked lists",
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Usually, Queues are called FIFO for which of the following reasons?",
        options: ["The first element to 'enQueue' is the last element to 'deQueue'", "The first element to 'enQueue' is the first element to 'deQueue'", "The last element to 'enQueue' is the first element to 'deQueue'", "None of the above"],
        answer: "The first element to 'enQueue' is the first element to 'deQueue'",
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "In the static implementation of a circular queue with f and r indices, which of the following is correct?",
        options: ["Index f points to the front element and index r points to the rear element", "Index f points to the front element and index r points to location immediately after the rear element", "Index f points to the front element and index r points to the right-most location of the array", "None of the above"],
        answer: "Index f points to the front element and index r points to location immediately after the rear element",
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "In a static circular queue with max queue size N = 17, if r = 4 and f = 11 then the queue size is:",
        options: ["10", "13", "15", "17"],
        answer: "10",
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "A binary tree is balanced if:",
        options: ["All levels are full", "All nodes in the binary tree have both left and right childs", "All levels above the lowest level are full", "None of the above"],
        answer: "All levels above the lowest level are full",
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "Which of the following is the correct procedure for deleting a node with non-empty childs in a Binary Search Tree (BST)?",
        options: ["Remove the node by making its parent points to the left child of the original node", "Remove the node by replacing it with its right-left most leaf node", "Remove the node by making its parent points to the right child of the original node", "Only disconnect the node from its parent"],
        answer: "Remove the node by replacing it with its right-left most leaf node",
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "If the pre-order traverse of a Binary Search Tree (BST) is '9 5 3 7 20 17 15 18 25 23 28' then the inorder traverse is:",
        options: ["28 23 25 18 15 17 20 7 3 5 9", "3 5 7 9 15 17 18 20 23 25 28", "3 7 5 15 18 17 23 28 25 20 9", "None of the above"],
        answer: "3 5 7 9 15 17 18 20 23 25 28",
    },
    {
        numb: 31,
        type: "Multiple Choices",
        question: "Which of the following is a suitable application for the queue data structure?",
        options: ["The printing jobs in a multitasking operating system", "Function calls and recursions", "Transforming 'infix' to 'postfix' expressions", "None of the above"],
        answer: "The printing jobs in a multitasking operating system",
    },
    {
        numb: 32,
        type: "Multiple Choices",
        question: "The height of a binary tree is defined to be:",
        options: ["The number of levels above the lowest level", "2^(n-1), where n is the maximum number of levels", "The depth of its deepest node", "None of the above"],
        answer: "The depth of its deepest node",
    },
    {
        numb: 33,
        type: "Multiple Choices",
        question: "What is the complexity of the following sorting algorithm written in Java?",
        options: ["O(log(n))", "O(n log(n))", "O(n) <= Complexity <= O(n^2)", "O(n^2)"],
        answer: "O(n) <= Complexity <= O(n^2)",
    },
    {
        numb: 34,
        type: "Multiple Choices",
        question: "What is wrong with the following pop() operation in the static stack class?",
        options: ["Will not work correctly if the stack is empty", "The operation should be declared as private instead of public", "Always return the top element of the stack without affecting its contents", "Nothing is wrong and the operation will work correctly"],
        answer: "Always return the top element of the stack without affecting its contents"
    },
    {
        numb: 35,
        type: "Multiple Choices",
        question: "What is wrong with the following addToTail operation in the SinglyLinkedList Class?",
        options: ["The Head pointer is not set correctly", "Nothing is wrong and the operation will work correctly", "The new Node(el) doesn't specify a next pointer value", "None of the above"],
        answer: "None of the above",
    },
    {
        numb: 36,
        type: "Multiple Choices",
        question: "Dynamic Queues can best be implemented with which of the following elementary data structures?",
        options: ["Singly Linked Lists", "Binary Search Trees", "Single-Dimension arrays", "None of the above"],
        answer: "Singly Linked Lists",
    },
    {
        numb: 37,
        type: "Multiple Choices",
        question: "If the pre-order traverse of a BST is '9 5 3 7 20 17 15 18 25 23 28' then the post-order traverse is:",
        options: ["28 23 25 18 15 17 20 7 3 5 9", "3 5 7 9 15 17 18 20 23 25 28", "3 7 5 15 18 17 23 28 25 20 9", "None of the above"],
        answer: "3 7 5 15 18 17 23 28 25 20 9",
    },
    {
        numb: 38,
        type: "Multiple Choices",
        question: "If the pre-order traverse of a BST is '9 5 3 7 20 17 15 18 25 23 28' then:",
        options: ["The binary tree is not balanced", "The binary tree is not balanced and its height is 4", "The binary tree is balanced and its height is 3", "None of the above"],
        answer: "The binary tree is balanced and its height is 3",
    },
    {
        numb: 39,
        type: "Multiple Choices",
        question: "While transforming infix to postfix, if the top of the stack is '/' and the next token is ']', the action is:",
        options: ["Push the ']' token on the stack", "A pop operation is performed, placing the '/' in the output, then push the ']' token on the stack", "A pop operation is performed, placing the '/' in the output", "None of the above"],
        answer: "None of the above",
    },
    {
        numb: 40,
        type: "Multiple Choices",
        question: "While evaluating a postfix expression, if the top of the stack is 'A' and the next token is 'B', the action is:",
        options: ["Push the token 'B' on the stack", "A pop operation is performed, then the current operation is performed on 'A' & 'B'", "Two pop operations are performed, then the current operation is performed on 'A' & 'B'", "None of the above"],
        answer: "Push the token 'B' on the stack",
    },
    {
        numb: 41,
        type: "Multiple Choices",
        question: "Dynamic Queues are characterized by which of the following features:",
        options: ["It is a constrained version from a single dimension array", "Limited to a predefined max queue size parameter", "Must leave one empty location to work correctly", "None of the above"],
        answer: "None of the above",
    },
    {
        numb: 42,
        type: "Multiple Choices",
        question: "While evaluating a postfix expression, if the next token is '+', the action is:",
        options: ["Push the token", "Pop the last two elements from the stack and perform the '+' operation", "Pop the last two elements from the stack and perform the '+' operation, then push the results", "None of the above"],
        answer: "Pop the last two elements from the stack and perform the '+' operation, then push the results",
    },
    {
        numb: 43,
        type: "Multiple Choices",
        question: "In a static circular queue, when incrementing f and r, the modulo N operation is used for what reason?",
        options: ["To be able to enforce priorities in the queue", "To limit the size of the queue to the value N", "To make f and r circulate through the array representing the queue", "None of the above"],
        answer: "To make f and r circulate through the array representing the queue",
    },
    {
        numb: 44,
        type: "Multiple Choices",
        question: "Which of the following is a valid statement about circular singly linked list?",
        options: ["Two pointers, head and tail, must be defined and used", "The next pointer of the last element in the list points to 'NULL'", "We can move through the list clockwise and counter clockwise without any overhead", "None of the above"],
        answer: "None of the above",
    },
    {
        numb: 45,
        type: "Multiple Choices",
        question: "A starvation-free job-scheduling policy guarantees that no job waits indefinitely for service. Which of the following job-scheduling policies is starvation-free?",
        options: ["Round-Robin", "Priority Queuing", "Shortest Job First", "None of the above"],
        answer: "Round-Robin",
    },
    {
        numb: 46,
        type: "Multiple Choices",
        question: "If x is a string then x^r denotes the reversal of x. If x and y are strings, then {x y}^r =",
        options: ["x y^r", "y x^r", "y^r x", "y^r x^r"],
        answer: "y^r x^r",
    },
    {
        numb: 47,
        type: "Multiple Choices",
        question: "The object-oriented paradigm includes which of the following properties?",
        options: ["Encapsulation", "Inheritance", "Recursion", "Both A & B"],
        answer: "Both A & B",
    },
    {
        numb: 48,
        type: "Multiple Choices",
        question: "Which of the following algorithms has running time O(n^2) in the worst case but O(n log n) on average?",
        options: ["Linear Sort", "Merge Sort", "Quick Sort", "Heap Sort"],
        answer: "Quick Sort",
    },
    {
        numb: 49,
        type: "Multiple Choices",
        question: "Which of the following is the name of the data structure in a compiler that is responsible for managing information about variables and their attributes?",
        options: ["Abstract Syntax Tree (AST)", "Symbol Table", "Attribute Grammar", "Parse Table"],
        answer: "Symbol Table",
    },
    {
        numb: 50,
        type: "Multiple Choices",
        question: "Which of the following represents a postorder traversal of the binary tree T shown below?",
        options: ["U X W Q Z Y V P", "P Q U W X V Y Z", "U Q X W P V Z Y", "U X Z Q W Y V P"],
        answer: "U X W Q Z Y V P",
        image:"../../../MDA/question 50-51 f1.png",
    },
];