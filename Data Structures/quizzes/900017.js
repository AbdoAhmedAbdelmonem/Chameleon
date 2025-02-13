let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is a Heap Tree?",
        options: [
            "A binary search tree with sorted elements",
            "A complete binary tree where every node satisfies the heap property",
            "A tree where all leaf nodes are at the same level",
            "A tree with no duplicate values"
        ],
        answer: "A complete binary tree where every node satisfies the heap property",
    },
    {
        numb: 2,
        type: "Multiple Choice",
        question: "In a Max-Heap, the value of a parent node is:",
        options: [
            "Less than its children",
            "Greater than or equal to its children",
            "Equal to its children",
            "Unrelated to its children"
        ],
        answer: "Greater than or equal to its children",
    },
    {
        numb: 3,
        type: "Multiple Choice",
        question: "What is the time complexity to insert an element into a heap?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: "O(log n)",
    },
    {
        numb: 4,
        type: "Multiple Choice",
        question: "Which operation is used to maintain the heap property after insertion?",
        options: ["Heapify Up", "Heapify Down", "Bubble Sort", "Rotation"],
        answer: "Heapify Up",
    },
    {
        numb: 5,
        type: "Multiple Choice",
        question: "What is the root node's value in a Min-Heap?",
        options: [
            "The smallest element",
            "The largest element",
            "A random element",
            "The median element"
        ],
        answer: "The smallest element",
    },
    {
        numb: 6,
        type: "Multiple Choice",
        question: "How is a heap typically represented in memory?",
        options: [
            "As a linked list",
            "As a binary tree",
            "As an array",
            "As a hash table"
        ],
        answer: "As an array",
    },
    {
        numb: 7,
        type: "Multiple Choice",
        question: "What is the time complexity of building a heap from an array?",
        options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
        answer: "O(n)",
    },
    {
        numb: 8,
        type: "Multiple Choice",
        question: "Which of the following is NOT a property of a heap?",
        options: [
            "It is a complete binary tree",
            "The parent node is always greater than its children in a max-heap",
            "The tree is always balanced",
            "The root node is the maximum element in a max-heap"
        ],
        answer: "The tree is always balanced",
    },
    {
        numb: 9,
        type: "Multiple Choice",
        question: "What happens when you delete the root of a heap?",
        options: [
            "The last element replaces the root and heapify is called",
            "The root is simply removed",
            "The tree is rebalanced",
            "The heap is destroyed"
        ],
        answer: "The last element replaces the root and heapify is called",
    },
    {
        numb: 10,
        type: "Multiple Choice",
        question: "In a max-heap, which of the following is true about the children of a node at index i?",
        options: [
            "They are located at indices 2i and 2i + 1",
            "They are located at indices 2i + 1 and 2i + 2",
            "They are located at indices i - 1 and i + 1",
            "They are located at indices i/2 and i/2 + 1"
        ],
        answer: "They are located at indices 2i and 2i + 1",
    },
    {
        numb: 11,
        type: "Multiple Choice",
        question: "Which algorithm uses a heap to efficiently find the minimum element?",
        options: [
            "Dijkstra's Algorithm",
            "Depth First Search",
            "Breadth First Search",
            "Binary Search"
        ],
        answer: "Dijkstra's Algorithm",
    },
    {
        numb: 12,
        type: "Multiple Choice",
        question: "What is the time complexity of heapsort?",
        options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
        answer: "O(n log n)",
    },
    {
        numb: 13,
        type: "Multiple Choice",
        question: "Which of the following is a characteristic of a Min-Heap?",
        options: [
            "The root is the maximum element",
            "The root is the minimum element",
            "All nodes are in ascending order",
            "It is not a complete binary tree"
        ],
        answer: "The root is the minimum element",
    },
    {
        numb: 14,
        type: "Multiple Choice",
        question: "What is the minimum number of elements required to form a heap of height h?",
        options: ["h + 1", "2^h", "2^(h+1) - 1", "h^2"],
        answer: "2^(h+1) - 1",
    },
    {
        numb: 15,
        type: "Multiple Choice",
        question: "Which operation is performed to restore the heap property after deletion?",
        options: ["Heapify Up", "Heapify Down", "Bubble Up", "Bubble Down"],
        answer: "Heapify Down",
    },
    {
        numb: 16,
        type: "Multiple Choice",
        question: "In a heap, what is the time complexity of the delete operation?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: "O(log n)",
    },
    {
        numb: 17,
        type: "Multiple Choice",
        question: "Which of the following is a common application of heaps?",
        options: [
            "Sorting algorithms",
            "Graph algorithms",
            "Priority queues",
            "All of the above"
        ],
        answer: "All of the above",
    },
    {
        numb: 18,
        type: "Multiple Choice",
        question: "What is the primary advantage of using a heap over a simple array for priority queues?",
        options: [
            "Heaps are faster to implement",
            "Heaps provide better memory usage",
            "Heaps allow for efficient insertion and deletion",
            "Heaps are easier to understand"
        ],
        answer: "Heaps allow for efficient insertion and deletion",
    },
    {
        numb: 19,
        type: "Multiple Choice",
        question: "Which of the following statements about heaps is true?",
        options: [
            "Heaps can be implemented as binary search trees",
            "Heaps are always sorted",
            "Heaps are complete binary trees",
            "Heaps do not allow duplicate values"
        ],
        answer: "Heaps are complete binary trees",
    },
    {
        numb: 20,
        type: "Multiple Choice",
        question: "What is the primary purpose of the 'heapify' operation?",
        options: [
            "To sort the elements in the heap",
            "To maintain the heap property after an insertion or deletion",
            "To find the maximum or minimum element",
            "To convert a binary tree into a heap"
        ],
        answer: "To maintain the heap property after an insertion or deletion",
    }
];