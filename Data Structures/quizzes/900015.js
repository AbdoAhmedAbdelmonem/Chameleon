let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is a Binary Search Tree?",
        options: ["A tree where each node has at most two children", "A tree where the left child is greater than the parent", "A tree where the left child is less than the parent and the right child is greater", "A tree with no nodes"],
        answer: "A tree where the left child is less than the parent and the right child is greater",
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "In a BST, the left subtree of a node contains only nodes with values:",
        options: ["Greater than the node's value", "Less than the node's value", "Equal to the node's value", "Any value"],
        answer: "Less than the node's value",
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is the time complexity of searching for a value in a balanced BST?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which of the following operations can be performed on a BST?",
        options: ["Insertion", "Deletion", "Searching", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What happens when you try to insert a duplicate value in a BST?",
        options: ["It is added to the left subtree", "It is added to the right subtree", "It is ignored", "It causes an error"],
        answer: "It is ignored",
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which traversal method would you use to get the values of a BST in sorted order?",
        options: ["Pre-order", "In-order", "Post-order", "Level-order"],
        answer: "In-order",
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the maximum height of a BST with n nodes?",
        options: ["n", "log n", "n/2", "n - 1"],
        answer: "n",
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which of the following is true about a balanced BST?",
        options: ["The height is always log n", "The left and right subtrees have the same height", "The difference in height between left and right subtrees is at most 1", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the worst-case time complexity for searching in an unbalanced BST?",
        options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
        answer: "O(n)",
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "When deleting a node with two children in a BST, which node is typically used to replace it?",
        options: ["The left child", "The right child", "The maximum node from the left subtree", "The minimum node from the right subtree"],
        answer: "The minimum node from the right subtree",
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which of the following is NOT a property of a Binary Search Tree?",
        options: ["Each node has at most two children", "The left child is always less than the parent", "The right child is always less than the parent", "Each subtree is also a BST"],
        answer: "The right child is always less than the parent",
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What is the average time complexity for insertion in a balanced BST?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(log n)",
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Which of the following traversal methods visits the root node last?",
        options: ["Pre-order", "In-order", "Post-order", "Level-order"],
        answer: "Post-order",
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "In a BST, if a node has no children, it is called:",
        options: ["A leaf node", "A root node", "An internal node", "A parent node"],
        answer: "A leaf node",
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the primary advantage of using a BST over a regular binary tree?",
        options: ["Simplicity", "Faster search times", "Easier to implement", "More memory efficient"],
        answer: "Faster search times",
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which of the following is a common application of Binary Search Trees?",
        options: ["Implementing priority queues", "Storing sorted data", "Implementing associative arrays", "All of the above"],
        answer: "All of the above",
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is the result of performing an in-order traversal on a BST?",
        options: ["Nodes are visited in pre-order", "Nodes are visited in post-order", "Nodes are visited in sorted order", "Nodes are visited in reverse order"],
        answer: "Nodes are visited in sorted order",
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Which of the following statements is true regarding the height of a BST?",
        options: ["The height is always equal to the number of nodes", "The height can be minimized by balancing the tree", "The height is irrelevant to the performance of the tree", "The height is always log n"],
        answer: "The height can be minimized by balancing the tree",
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "If a BST is unbalanced, what is a common method to restore balance?",
        options: ["Re-inserting all nodes", "Rotating nodes", "Deleting nodes", "None of the above"],
        answer: "Rotating nodes",
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Which of the following is a type of balanced BST?",
        options: ["AVL Tree", "Red-Black Tree", "Splay Tree", "All of the above"],
        answer: "All of the above",
    }
];