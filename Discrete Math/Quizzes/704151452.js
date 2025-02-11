const question = [
    {
        numb: 1,type: "Multiple Choices",
        question: "What is the union of sets A and B?",
        options: [
            "The set of elements that are only in A",
            "The set of elements that are in A or in B or in both",
            "The set of elements that are only in B",
            "The set of elements that are in neither A nor B"
        ],
        answer: "The set of elements that are in A or in B or in both"
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "What is the union of the sets {1, 3, 5} and {1, 2, 3}?",
        options: [
            "{1, 3}",
            "{1, 2, 3}",
            "{1, 3, 5}",
            "{1, 2, 3, 5}",
        ],
        answer: "{1, 2, 3, 5}"
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "What is the intersection of sets A and B?",
        options: [
            "The set of elements that are in A or in B",
            "The set of elements that are only in A",
            "The set of elements that are in both A and B",
            "The set of elements that are only in B"
        ],
        answer: "The set of elements that are in both A and B"
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is the intersection of the sets {1, 3, 5} and {1, 2, 3}?",
        options: [
            "{1, 2, 3}",
            "{1, 3}",
            "{1, 3, 5}",
            "{1, 2, 3, 5}"
        ],
        answer: "{1, 3}"
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "What is the difference of sets A and B (A - B)?",
        options: [
            "The set of elements that are in A but not in B",
            "The set of elements that are in B but not in A",
            "The set of elements that are in both A and B",
            "The set of elements that are in neither A nor B"
        ],
        answer: "The set of elements that are in A but not in B"
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "What is the difference of the sets A = {1, 3, 5} and B = {1, 2, 3} (A - B)?",
        options: [
            "{1, 3}",
            "{2}",
            "{1, 2, 3}",
            "{5}",
        ],
        answer: "{5}"
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "What are disjoint sets?",
        options: [
            "Sets whose union is the empty set",
            "Sets whose intersection is the empty set",
            "Sets whose difference is the empty set",
            "Sets whose complement is the empty set"
        ],
        answer: "Sets whose intersection is the empty set"
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "What is the complement of set A?",
        options: [
            "The set of elements in the universal set that are not in A",
            "The set of elements in A that are not in the universal set",
            "The set of elements in A and the universal set",
            "The set of elements in neither A nor the universal set"
        ],
        answer: "The set of elements in the universal set that are not in A"
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "If U = {1, 2, 3, 4, 5} and A = {1, 3}, what is the complement of A?",
        options: [
            "{1, 3}",
            "{2, 4, 5}",
            "{1, 2, 3, 4, 5}",
            "{}"
        ],
        answer: "{2, 4, 5}"
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "What is the generalized union of sets A1, A2, ..., An?",
        options: [
            "The intersection of all sets A1, A2, ..., An",
            "The union of all sets A1, A2, ..., An",
            "The difference of all sets A1, A2, ..., An",
            "The complement of all sets A1, A2, ..., An"
        ],
        answer: "The union of all sets A1, A2, ..., An"
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "What is the generalized intersection of sets A1, A2, ..., An?",
        options: [
            "The union of all sets A1, A2, ..., An",
            "The difference of all sets A1, A2, ..., An",
            "The intersection of all sets A1, A2, ..., An",
            "The complement of all sets A1, A2, ..., An"
        ],
        answer: "The intersection of all sets A1, A2, ..., An"
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "What is the bit string for the union of the sets represented by the bit strings '10101010' and '11100000'?",
        options: [
            "10100000",
            "11101010",
            "11111010",
            "10101010"
        ],
        answer: "11101010"
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "What is the bit string for the intersection of the sets represented by the bit strings '10101010' and '11100000'?",
        options: [
            "10100000",
            "11101010",
            "10101010",
            "11100000"
        ],
        answer: "10100000"
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "What is the union of the sets A = {2, 4, 6, 8, 10} and B = {1, 3, 6, 7, 8}?",
        options: [
            "{2, 4, 6, 8, 10}",
            "{1, 3, 6, 7, 8}",
            "{6, 8}",
            "{1, 2, 3, 4, 6, 7, 8, 10}",
        ],
        answer: "{1, 2, 3, 4, 6, 7, 8, 10}"
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "What is the intersection of the sets A = {2, 4, 6, 8, 10} and B = {1, 3, 6, 7, 8}?",
        options: [
            "{1, 2, 3, 4, 6, 7, 8, 10}",
            "{6, 8}",
            "{2, 4, 6, 8, 10}",
            "{1, 3, 6, 7, 8}"
        ],
        answer: "{6, 8}"
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "What is the complement of set A = {2, 4, 6, 8, 10} if the universal set U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
        options: [
            "{2, 4, 6, 8, 10}",
            "{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
            "{1, 3, 5, 7, 9}",
            "{}"
        ],
        answer: "{1, 3, 5, 7, 9}"
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "What is the difference of sets A = {2, 4, 6, 8, 10} and B = {1, 3, 6, 7, 8} (A - B)?",
        options: [
            "{1, 3, 7}",
            "{6, 8}",
            "{2, 4, 10}",
            "{1, 2, 3, 4, 6, 7, 8, 10}"
        ],
        answer: "{2, 4, 10}"
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "What is the union of the sets A = {0, 1, 2, 3, 5, 8} and B = {0, 2, 4, 6}?",
        options: [
            "{0, 1, 2, 3, 4, 5, 6, 8}",
            "{0, 2}",
            "{0, 1, 2, 3, 5, 8}",
            "{0, 2, 4, 6}"
        ],
        answer: "{0, 1, 2, 3, 4, 5, 6, 8}"
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "What is the complement of set B = {0, 2, 4, 6} if the universal set U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
        options: [
            "{1, 3, 5, 7, 8, 9, 10}",
            "{0, 2, 4, 6}",
            "{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
            "{}"
        ],
        answer: "{1, 3, 5, 7, 8, 9, 10}"
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "What is the intersection of sets B = {0, 2, 4, 6} and C = {1, 3, 5, 7}?",
        options: [
            "{0, 2, 4, 6}",
            "{1, 3, 5, 7}",
            "{}",
            "{0, 1, 2, 3, 4, 5, 6, 7}"
        ],
        answer: "{}"
    },
    {
        numb: 21,type: "Multiple Choices",
        question: "What is the union of sets B = {0, 2, 4, 6} and C = {1, 3, 5, 7}?",
        options: [
            "{0, 2, 4, 6}",
            "{1, 3, 5, 7}",
            "{0, 1, 2, 3, 4, 5, 6, 7}",
            "{}"
        ],
        answer: "{0, 1, 2, 3, 4, 5, 6, 7}"
    },
    {
        numb: 22,type: "Multiple Choices",
        question: "What is the complement of set A = {0, 1, 2, 3, 5, 8} if the universal set U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
        options: [
            "{0, 1, 2, 3, 5, 8}",
            "{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
            "{}",
            "{4, 6, 7, 9, 10}",
        ],
        answer: "{4, 6, 7, 9, 10}"
    },
    {
        numb: 23,type: "Multiple Choices",
        question: "What is the intersection of sets A = {0, 1, 2, 3, 5, 8} and B = {0, 2, 4, 6}?",
        options: [
            "{0, 1, 2, 3, 5, 8}",
            "{0, 2, 4, 6}",
            "{0, 2}",
            "{}"
        ],
        answer: "{0, 2}"
    },
    {
        numb: 24,type: "Multiple Choices",
        question: "What is the union of sets A = {0, 1, 2, 3, 5, 8} and C = {1, 3, 5, 7}?",
        options: [
            "{0, 1, 2, 3, 5, 7, 8}",
            "{0, 1, 2, 3, 5, 8}",
            "{1, 3, 5, 7}",
            "{}"
        ],
        answer: "{0, 1, 2, 3, 5, 7, 8}"
    },
    {
        numb: 25,type: "Multiple Choices",
        question: "What is the complement of set C = {1, 3, 5, 7} if the universal set U = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}?",
        options: [
            "{1, 3, 5, 7}",
            "{0, 2, 4, 6, 8, 9, 10}",
            "{0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",
            "{}"
        ],
        answer: "{0, 2, 4, 6, 8, 9, 10}"
    }
];