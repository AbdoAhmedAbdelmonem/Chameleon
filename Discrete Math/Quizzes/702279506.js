let question = [
    {
        numb: 1,type: "Multiple Choices",
        question: "What is a set in mathematics?",
        options: [
            "An ordered collection of objects",
            "An unordered collection of objects",
            "A collection of functions",
            "A collection of numbers"
        ],
        answer: "An unordered collection of objects"
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "What is the notation used to denote that an element 'a' is a member of set S?",
        options: [
            "a ∈ S",
            "a ∉ S",
            "a = S",
            "a ⊂ S"
        ],
        answer: "a ∈ S"
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "What is the notation used to denote that an element 'e' is not a member of set S?",
        options: [
            "e ∈ S",
            "e ∉ S",
            "e = S",
            "e ⊂ S"
        ],
        answer: "e ∉ S"
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is the set of odd positive integers less than 10?",
        options: [
            "{1, 3, 5, 7, 9}",
            "{2, 4, 6, 8}",
            "{1, 2, 3, 4, 5, 6, 7, 8, 9}",
            "{0, 1, 3, 5, 7, 9}"
        ],
        answer: "{1, 3, 5, 7, 9}"
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "What is the empty set?",
        options: [
            "A set with no elements",
            "A set with one element",
            "A set with infinite elements",
            "A set with two elements"
        ],
        answer: "A set with no elements"
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "What is the notation for the empty set?",
        options: [
            "∅",
            "{0}",
            "{ }",
            "Both ∅ and { }"
        ],
        answer: "Both ∅ and { }"
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "What is the set builder notation for the set of odd positive integers less than 10?",
        options: [
            "{x | x is an odd positive integer less than 10}",
            "{x | x is an even positive integer less than 10}",
            "{x | x is a positive integer less than 10}",
            "{x | x is a negative integer less than 10}"
        ],
        answer: "{x | x is an odd positive integer less than 10}"
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "What is the set of natural numbers?",
        options: [
            "{0, 1, 2, 3, ...}",
            "{1, 2, 3, ...}",
            "{..., -2, -1, 0, 1, 2, ...}",
            "{0, 1, 2, 3, 4}"
        ],
        answer: "{0, 1, 2, 3, ...}"
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "What is the set of integers?",
        options: [
            "{0, 1, 2, 3, ...}",
            "{1, 2, 3, ...}",
            "{..., -2, -1, 0, 1, 2, ...}",
            "{0, 1, 2, 3, 4}"
        ],
        answer: "{..., -2, -1, 0, 1, 2, ...}"
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "What is the set of rational numbers?",
        options: [
            "{p/q | p, q ∈ Z, q ≠ 0}",
            "{p/q | p, q ∈ Z, q = 0}",
            "{p/q | p, q ∈ N, q ≠ 0}",
            "{p/q | p, q ∈ N, q = 0}"
        ],
        answer: "{p/q | p, q ∈ Z, q ≠ 0}"
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "What is the interval notation for the set {x | a ≤ x ≤ b}?",
        options: [
            "[a, b]",
            "(a, b)",
            "[a, b)",
            "(a, b]"
        ],
        answer: "[a, b]"
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "What is the interval notation for the set {x | a < x < b}?",
        options: [
            "[a, b]",
            "(a, b)",
            "[a, b)",
            "(a, b]"
        ],
        answer: "(a, b)"
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "What is the universal set?",
        options: [
            "The set of all elements under consideration",
            "The set of all natural numbers",
            "The set of all integers",
            "The set of all real numbers"
        ],
        answer: "The set of all elements under consideration"
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "What is the notation for the universal set?",
        options: [
            "U",
            "N",
            "Z",
            "R"
        ],
        answer: "U"
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "What is the cardinality of the set S = {1, 2, 3, 4, 5}?",
        options: [
            "5",
            "4",
            "3",
            "2"
        ],
        answer: "5"
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "What is the cardinality of the set S = {3, 3, 3, 3, 3}?",
        options: [
            "1",
            "5",
            "3",
            "0"
        ],
        answer: "1"
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "What is the cardinality of the empty set?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: "0"
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "What is the power set of S = {1, 2, 3}?",
        options: [
            "{∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}",
            "{∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}}",
            "{∅, {1}, {2}, {3}, {1, 2}, {1, 3}}",
            "{∅, {1}, {2}, {3}}"
        ],
        answer: "{∅, {1}, {2}, {3}, {1, 2}, {1, 3}, {2, 3}, {1, 2, 3}}"
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "What is the Cartesian product of A = {a, b} and B = {0, 1}?",
        options: [
            "{(a, 0), (a, 1), (b, 0), (b, 1)}",
            "{(a, 0), (a, 1), (b, 0)}",
            "{(a, 0), (a, 1)}",
            "{(a, 0), (b, 0)}"
        ],
        answer: "{(a, 0), (a, 1), (b, 0), (b, 1)}"
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "What is the Cartesian product of A = {1, 2} and B = {a, b, c}?",
        options: [
            "{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}",
            "{(1, a), (1, b), (1, c)}",
            "{(1, a), (2, a)}",
            "{(1, a), (1, b), (2, a), (2, b)}"
        ],
        answer: "{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}"
    },
    {
        numb: 21,type: "Multiple Choices",
        question: "What is the Cartesian product of A = {0, 1}, B = {1, 2}, and C = {0, 1, 2}?",
        options: [
            "{(0, 1, 0), (0, 1, 1), (0, 1, 2), (0, 2, 0), (0, 2, 1), (0, 2, 2), (1, 1, 0), (1, 1, 1), (1, 1, 2), (1, 2, 0), (1, 2, 1), (1, 2, 2)}",
            "{(0, 1, 0), (0, 1, 1), (0, 1, 2)}",
            "{(0, 1, 0), (0, 1, 1)}",
            "{(0, 1, 0), (0, 1, 1), (0, 1, 2), (0, 2, 0), (0, 2, 1)}"
        ],
        answer: "{(0, 1, 0), (0, 1, 1), (0, 1, 2), (0, 2, 0), (0, 2, 1), (0, 2, 2), (1, 1, 0), (1, 1, 1), (1, 1, 2), (1, 2, 0), (1, 2, 1), (1, 2, 2)}"
    },
    {
        numb: 22,type: "Multiple Choices",
        question: "What is the cardinality of the Cartesian product A × B if |A| = 2 and |B| = 3?",
        options: [
            "6",
            "5",
            "4",
            "3"
        ],
        answer: "6"
    },
    {
        numb: 23,type: "Multiple Choices",
        question: "What is the cardinality of the Cartesian product A × B × C if |A| = 2, |B| = 2, and |C| = 3?",
        options: [
            "12",
            "6",
            "4",
            "3"
        ],
        answer: "12"
    },
    {
        numb: 24,type: "Multiple Choices",
        question: "What is the power set of S = {1, 2}?",
        options: [
            "{∅, {1}, {2}, {1, 2}}",
            "{∅, {1}, {2}}",
            "{∅, {1, 2}}",
            "{∅, {1}}"
        ],
        answer: "{∅, {1}, {2}, {1, 2}}"
    },
    {
        numb: 25,type: "Multiple Choices",
        question: "What is the cardinality of the power set of S = {1, 2, 3}?",
        options: [
            "8",
            "6",
            "4",
            "3"
        ],
        answer: "8"
    }
];