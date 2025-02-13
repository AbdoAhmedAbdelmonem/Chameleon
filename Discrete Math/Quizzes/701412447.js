let question = [
    {
        number: 1,type: "Multiple Choices",
        question: "What is a predicate in logic?",
        options: [
            "A statement that is always true",
            "A statement that is always false",
            "A statement involving variables that becomes a proposition when values are assigned to the variables",
            "A statement without variables"
        ],
        answer: "A statement involving variables that becomes a proposition when values are assigned to the variables"
    },
    {
        number: 2,type: "Multiple Choices",
        question: "What is the predicate in the statement 'x > 3'?",
        options: [
            "x",
            "> 3",
            "x > 3",
            "None of the above"
        ],
        answer: "> 3"
    },
    {
        number: 3,type: "True or False",
        question: "What is the truth value of P(4) if P(x) denotes 'x > 3'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 4,type: "True or False",
        question: "What is the truth value of P(2) if P(x) denotes 'x > 3'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 5,type: "True or False",
        question: "What is the truth value of P(1) if P(x) denotes 'x < 5'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 6,type: "True or False",
        question: "What is the truth value of P(10) if P(x) denotes 'x < 5'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 7,type: "True or False",
        question: "What is the truth value of P(lemon) if P(x) denotes 'the word x contains the letter a'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 8,type: "True or False",
        question: "What is the truth value of P(false) if P(x) denotes 'the word x contains the letter a'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 9,type: "True or False",
        question: "What is the truth value of Q(1, 2) if Q(x, y) denotes 'x = y + 3'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 10,type: "True or False",
        question: "What is the truth value of Q(3, 0) if Q(x, y) denotes 'x = y + 3'?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 11,type: "Multiple Choices",
        question: "What does the universal quantifier (∀) represent?",
        options: [
            "There exists at least one x in the domain",
            "There exists a unique x in the domain",
            "For all values of x in the domain",
            "None of the above"
        ],
        answer: "For all values of x in the domain"
    },
    {
        number: 12,type: "Multiple Choices",
        question: "What does the existential quantifier (∃) represent?",
        options: [
            "For all values of x in the domain",
            "There exists at least one x in the domain",
            "There exists a unique x in the domain",
            "None of the above"
        ],
        answer: "There exists at least one x in the domain"
    },
    {
        number: 13,type: "True or False",
        question: "What is the truth value of ∀x P(x) if P(x) denotes 'x + 1 > x' and the domain is all real numbers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 14,type: "True or False",
        question: "What is the truth value of ∀x P(x) if P(x) denotes 'x² > 0' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 15,type: "True or False",
        question: "What is the truth value of ∀x P(x) if P(x) denotes 'x < 2' and the domain is all real numbers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 16,type: "True or False",
        question: "What is the truth value of ∃x P(x) if P(x) denotes 'x = x + 1' and the domain is all real numbers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 17,type: "True or False",
        question: "What is the truth value of ∃x P(x) if P(x) denotes 'x² = x' and the domain is all real numbers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 18,type: "True or False",
        question: "What is the truth value of ∀x P(x) if P(x) denotes 'x² ≥ x' and the domain is {0.5, 1, 2, 3}?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 19,type: "True or False",
        question: "What is the truth value of ∃x P(x) if P(x) denotes 'x² = x' and the domain is {0.5, 1, 2, 3}?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 20,type: "True or False",
        question: "What is the truth value of P(0) if P(x) denotes 'x = x²' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 21,type: "True or False",
        question: "What is the truth value of P(1) if P(x) denotes 'x = x²' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 22,type: "True or False",
        question: "What is the truth value of P(2) if P(x) denotes 'x = x²' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 23,type: "True or False",
        question: "What is the truth value of P(-1) if P(x) denotes 'x = x²' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    },
    {
        number: 24,type: "True or False",
        question: "What is the truth value of ∃x P(x) if P(x) denotes 'x = x²' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "True"
    },
    {
        number: 25,type: "True or False",
        question: "What is the truth value of ∀x P(x) if P(x) denotes 'x = x²' and the domain is all integers?",
        options: [
            "True",
            "False",
            "Undefined",
            "Neither"
        ],
        answer: "False"
    }
];