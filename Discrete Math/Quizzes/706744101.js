const question = [
    {
        numb: 1,
        question: "What is a permutation?",
        options: [
            "An unordered arrangement of distinct objects",
            "An ordered arrangement of distinct objects",
            "A combination of objects",
            "A subset of objects"
        ],
        answer: "An ordered arrangement of distinct objects"
    },
    {
        numb: 2,
        question: "How many permutations are there of the letters A, B, and C?",
        options: [
            "3",
            "9",
            "12",
            "6",
        ],
        answer: "6"
    },
    {
        numb: 3,
        question: "What is the formula for the number of permutations of n distinct objects?",
        options: [
            "n(n-1)",
            "n!",
            "n^2",
            "n + (n-1)"
        ],
        answer: "n!"
    },
    {
        numb: 4,
        question: "How many permutations of the letters ABCDEFGH contain the string ABC?",
        options: [
            "120",
            "720",
            "360",
            "240"
        ],
        answer: "720"
    },
    {
        numb: 5,
        question: "What is an r-permutation?",
        options: [
            "A subset of r elements from a set"
            "An unordered arrangement of r elements from a set",
            "An ordered arrangement of r elements from a set",
            "A combination of r elements from a set",
        ],
        answer: "An ordered arrangement of r elements from a set"
    },
    {
        numb: 6,
        question: "What is the formula for the number of r-permutations of n distinct objects?",
        options: [
            "P(n, r) = n! * r!",
            "P(n, r) = n! / (n - r)!",
            "P(n, r) = n! / r!",
            "P(n, r) = n! + r!"
        ],
        answer: "P(n, r) = n! / (n - r)!"
    },
    {
        numb: 7,
        question: "How many ways are there to select a first-prize, second-prize, and third-prize winner from 100 people?",
        options: [
            "500,000",
            "100,000",
            "1,000,000",
            "970,200",
        ],
        answer: "970,200"
    },
    {
        numb: 8,
        question: "What is a combination?",
        options: [
            "An ordered selection of r elements from a set",
            "An unordered selection of r elements from a set",
            "A permutation of r elements from a set",
            "A subset of r elements from a set"
        ],
        answer: "An unordered selection of r elements from a set"
    },
    {
        numb: 9,
        question: "What is the formula for the number of r-combinations of n distinct objects?",
        options: [
            "C(n, r) = n! / r!",
            "C(n, r) = n! * r!",
            "C(n, r) = n! / (r! * (n - r)!)",
            "C(n, r) = n! + r!"
        ],
        answer: "C(n, r) = n! / (r! * (n - r)!)"
    },
    {
        numb: 10,
        question: "How many ways are there to select 3 balls from a box containing 10 colored balls?",
        options: [
            "120",
            "60",
            "240",
            "360"
        ],
        answer: "120"
    },
    {
        numb: 11,
        question: "How many ways are there to select 5 players from a 10-member tennis team?",
        options: [
            "120",
            "252",
            "504",
            "360"
        ],
        answer: "252"
    },
    {
        numb: 12,
        question: "How many ways are there to form a committee of 3 math faculty and 4 CS faculty from 9 math and 11 CS faculty members?",
        options: [
            "30,000",
            "25,000",
            "27,720",
            "20,000"
        ],
        answer: "27,720"
    },
    {
        numb: 13,
        question: "How many bit strings of length 10 contain exactly four 1s?",
        options: [
            "120",
            "252",
            "210",
            "360"
        ],
        answer: "210"
    },
    {
        numb: 14,
        question: "How many bit strings of length 10 contain at most four 1s?",
        options: [
            "386",
            "210",
            "252",
            "512"
        ],
        answer: "386"
    },
    {
        numb: 15,
        question: "How many bit strings of length 10 contain at least four 1s?",
        options: [
            "848",
            "386",
            "512",
            "1024"
        ],
        answer: "848"
    },
    {
        numb: 16,
        question: "How many bit strings of length 10 contain an equal number of 0s and 1s?",
        options: [
            "210",
            "386",
            "512",
            "252",
        ],
        answer: "252"
    },
    {
        numb: 17,
        question: "How many bit strings of length 19 contain exactly five 0s and 14 1s, with every 0 immediately followed by two 1s?",
        options: [
            "210",
            "126",
            "252",
            "386"
        ],
        answer: "126"
    },
    {
        numb: 18,
        question: "What is the value of C(10, 4)?",
        options: [
            "210",
            "120",
            "252",
            "360"
        ],
        answer: "210"
    },
    {
        numb: 19,
        question: "What is the value of C(10, 6)?",
        options: [
            "210",
            "120",
            "252",
            "360"
        ],
        answer: "210"
    },
    {
        numb: 20,
        question: "What is the relationship between C(n, r) and C(n, n - r)?",
        options: [
            "C(n, r) = C(n, n + r)",
            "C(n, r) = C(n, r - n)",
            "C(n, r) = C(n, n - r)",
            "C(n, r) = C(n, r + n)"
        ],
        answer: "C(n, r) = C(n, n - r)"
    },
    {
        numb: 21,
        question: "How many bit strings of length 10 contain exactly six 1s?",
        options: [
            "210",
            "120",
            "252",
            "360"
        ],
        answer: "210"
    },
    {
        numb: 22,
        question: "How many bit strings of length 10 contain exactly three 1s?",
        options: [
            "210",
            "120",
            "252",
            "360"
        ],
        answer: "120"
    },
    {
        numb: 23,
        question: "How many bit strings of length 10 contain exactly two 1s?",
        options: [
            "120",
            "210",
            "45",
            "252"
        ],
        answer: "45"
    },
    {
        numb: 24,
        question: "How many bit strings of length 10 contain exactly one 1?",
        options: [
            "120",
            "10",
            "45",
            "210"
        ],
        answer: "10"
    },
    {
        numb: 25,
        question: "How many bit strings of length 10 contain exactly zero 1s?",
        options: [
            "1",
            "10",
            "45",
            "120"
        ],
        answer: "1"
    }
];