let question = [
    {
        number: 1,type: "Multiple Choices",
        question: "What is a bit in computer systems?",
        options: [
            "A symbol with two possible values: 0 and 1",
            "A symbol with three possible values: 0, 1, and 2",
            "A symbol with infinite values",
            "A symbol representing a byte"
        ],
        answer: "A symbol with two possible values: 0 and 1"
    },
    {
        number: 2,type: "Multiple Choices",
        question: "What is a bit string?",
        options: [
            "A sequence of exactly 8 bits",
            "A sequence of characters",
            "A sequence of zero or more bits",
            "A sequence of numbers"],
        answer: "A sequence of zero or more bits"
    },
    {
        number: 3,type: "Multiple Choices",
        question: "What is the length of the bit string '101010011'?",
        options: [
            "8",
            "10",
            "9",
            "7"
        ],
        answer: "9"
    },
    {
        number: 4,type: "Multiple Choices",
        question: "What is the bitwise OR of the bit strings '01 1011 0110' and '11 0001 1101'?",
        options: [
            "01 0001 0100",
            "11 1011 1111",
            "10 1010 1010",
            "11 1111 1111"
        ],
        answer: "11 1011 1111"
    },
    {
        number: 5,type: "Multiple Choices",
        question: "What is the bitwise AND of the bit strings '01 1011 0110' and '11 0001 1101'?",
        options: [
            "01 0001 0100",
            "11 1011 1111",
            "10 1010 1010",
            "00 0000 0000"
        ],
        answer: "01 0001 0100"
    },
    {
        number: 6,type: "Multiple Choices",
        question: "What is the bitwise XOR of the bit strings '01 1011 0110' and '11 0001 1101'?",
        options: [
            "01 0001 0100",
            "11 1011 1111",
            "10 1010 1011",
            "00 0000 0000"
        ],
        answer: "10 1010 1011"
    },
    {
        number: 7,type: "Multiple Choices",
        question: "What is the negation of the bit string '010110'?",
        options: [
            "111001",
            "001001",
            "101001",
            "111111"
        ],
        answer: "101001"
    },
    {
        number: 8,type: "Multiple Choices",
        question: "What is the output of the bitwise XOR operation between '001100' and '010101'?",
        options: [
            "000000",
            "011001",
            "111111",
            "001101"
        ],
        answer: "011001"
    },
    {
        number: 9,type: "Multiple Choices",
        question: "Which of the following is a basic logic gate?",
        options: [
            "AND gate",
            "OR gate",
            "NOT gate",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        number: 10,type: "Multiple Choices",
        question: "What does an AND gate produce?",
        options: [
            "True if at least one input is true",
            "True only if all inputs are true",
            "The negation of the input",
            "The sum of the inputs"
        ],
        answer: "True only if all inputs are true"
    },
    {
        number: 11,type: "Multiple Choices",
        question: "What does an OR gate produce?",
        options: [
            "True only if all inputs are true",
            "The negation of the input",
            "The product of the inputs",
            "True if at least one input is true",
        ],
        answer: "True if at least one input is true"
    },
    {
        number: 12,type: "Multiple Choices",
        question: "What does a NOT gate produce?",
        options: [
            "The sum of the inputs",
            "The negation of the input",
            "The product of the inputs",
            "True if at least one input is true"
        ],
        answer: "The negation of the input"
    },
    {
        number: 13,type: "Multiple Choices",
        question: "What is a tautology in propositional logic?",
        options: [
            "A compound proposition that is always true",
            "A compound proposition that is always false",
            "A compound proposition that is sometimes true and sometimes false",
            "A simple proposition"],
        answer: "A compound proposition that is always true"
    },
    {
        number: 14,type: "Multiple Choices",
        question: "What is a contradiction in propositional logic?",
        options: [
            "A compound proposition that is always true",
            "A compound proposition that is sometimes true and sometimes false",
            "A compound proposition that is always false",
            "A simple proposition"
        ],
        answer: "A compound proposition that is always false"
    },
    {
        number: 15,type: "Multiple Choices",
        question: "What is a contingency in propositional logic?",
        options: [
            "A compound proposition that is always true",
            "A compound proposition that is neither a tautology nor a contradiction",
            "A compound proposition that is always false",
            "A simple proposition"
        ],
        answer: "A compound proposition that is neither a tautology nor a contradiction"
    },
    {
        number: 16,type: "Multiple Choices",
        question: "Which of the following is an example of a tautology?",
        options: [
            "p ∧ ¬p",
            "p → q",
            "p ∧ q",
            "p ∨ ¬p",
        ],
        answer: "p ∨ ¬p"
    },
    {
        number: 17,type: "Multiple Choices",
        question: "Which of the following is an example of a contradiction?",
        options: [
            "p ∨ ¬p",
            "p ∧ ¬p",
            "p → q",
            "p ∨ q"
        ],
        answer: "p ∧ ¬p"
    },
    {
        number: 18,type: "Multiple Choices",
        question: "What is the logical equivalence of ¬(p ∨ q)?",
        options: [
            "¬p ∧ ¬q",
            "¬p ∨ ¬q",
            "p ∧ q",
            "p ∨ q"
        ],
        answer: "¬p ∧ ¬q"
    },
    {
        number: 19,type: "Multiple Choices",
        question: "What is the logical equivalence of ¬(p ∧ q)?",
        options: [
            "¬p ∧ ¬q",
            "p ∨ q",
            "¬p ∨ ¬q",
            "p ∧ q"
        ],
        answer: "¬p ∨ ¬q"
    },
    {
        number: 20,type: "Multiple Choices",
        question: "Which law states that p ∨ (q ∧ r) ≡ (p ∨ q) ∧ (p ∨ r)?",
        options: [
            "Distributive law",
            "Associative law",
            "De Morgan's law",
            "Absorption law"
        ],
        answer: "Distributive law"
    },
    {
        number: 21,type: "Multiple Choices",
        question: "Which law states that p ∧ (q ∨ r) ≡ (p ∧ q) ∨ (p ∧ r)?",
        options: [
            "Associative law",
            "Distributive law",
            "De Morgan's law",
            "Absorption law"
        ],
        answer: "Distributive law"
    },
    {
        number: 22,type: "Multiple Choices",
        question: "Which law states that ¬(p ∧ q) ≡ ¬p ∨ ¬q?",
        options: [
            "Associative law",
            "Distributive law",
            "Absorption law",
            "De Morgan's law",
        ],
        answer: "De Morgan's law"
    },
    {
        number: 23,type: "Multiple Choices",
        question: "Which law states that p ∨ (p ∧ q) ≡ p?",
        options: [
            "Associative law",
            "Absorption law",
            "Distributive law",
            "De Morgan's law"
        ],
        answer: "Absorption law"
    },
    {
        number: 24,type: "Multiple Choices",
        question: "Which law states that p ∧ (p ∨ q) ≡ p?",
        options: [
            "Absorption law",
            "Associative law",
            "Distributive law",
            "De Morgan's law"
        ],
        answer: "Absorption law"
    },
    {
        number: 25,type: "Multiple Choices",
        question: "Which law states that p ∨ ¬p ≡ T?",
        options: [
            "Associative law",
            "Distributive law",
            "Negation law",
            "Absorption law"
        ],
        answer: "Negation law"
    }
];