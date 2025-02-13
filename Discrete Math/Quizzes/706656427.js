const question = [
    {
        numb: 1,
        question: "How many possible passwords are there if each password is six to eight characters long, with each character being an uppercase letter or a digit, and must contain at least one digit?",
        options: [
            "2,684,483,063,360",
            "1,000,000,000",
            "3,000,000,000",
            "2,000,000,000"
        ],
        answer: "2,684,483,063,360"
    },
    {
        numb: 2,
        question: "What is the formula to calculate the number of possible passwords of length 6 that contain at least one digit?",
        options: [
            "36^6 - 26^6",
            "36^6 + 26^6",
            "36^6 * 26^6",
            "36^6 / 26^6"
        ],
        answer: "36^6 - 26^6"
    },
    {
        numb: 3,
        question: "How many different IPv4 addresses are available for computers on the Internet?",
        options: [
            "3,737,091,842",
            "4,000,000,000",
            "3,000,000,000",
            "2,000,000,000"
        ],
        answer: "3,737,091,842"
    },
    {
        numb: 4,
        question: "How many IPv4 addresses are available in Class A?",
        options: [
            "2,130,706,178",
            "1,073,709,056",
            "532,676,607",
            "1,000,000,000"
        ],
        answer: "2,130,706,178"
    },
    {
        numb: 5,
        question: "How many IPv4 addresses are available in Class B?",
        options: [
            "1,073,709,056",
            "2,130,706,178",
            "532,676,607",
            "1,000,000,000"
        ],
        answer: "1,073,709,056"
    },
    {
        numb: 6,
        question: "How many IPv4 addresses are available in Class C?",
        options: [
            "532,676,607",
            "2,130,706,178",
            "1,073,709,056",
            "1,000,000,000"
        ],
        answer: "532,676,607"
    },
    {
        numb: 7,
        question: "How many ways can a photographer arrange 6 people in a row from a group of 10 people if the bride must be in the picture?",
        options: [
            "90,720",
            "100,000",
            "80,000",
            "70,000"
        ],
        answer: "90,720"
    },
    {
        numb: 8,
        question: "How many ways can a photographer arrange 6 people in a row from a group of 10 people if both the bride and groom must be in the picture?",
        options: [
            "50,400",
            "60,000",
            "40,000",
            "30,000"
        ],
        answer: "50,400"
    },
    {
        numb: 9,
        question: "How many ways can a photographer arrange 6 people in a row from a group of 10 people if exactly one of the bride and groom is in the picture?",
        options: [
            "80,640",
            "90,000",
            "70,000",
            "60,000"
        ],
        answer: "80,640"
    },
    {
        numb: 10,
        question: "What is the Subtraction Rule in counting?",
        options: [
            "If a task can be done in n1 ways or n2 ways, the total number of ways is n1 + n2 minus the number of common ways",
            "If a task can be done in n1 ways or n2 ways, the total number of ways is n1 + n2",
            "If a task can be done in n1 ways or n2 ways, the total number of ways is n1 * n2",
            "If a task can be done in n1 ways or n2 ways, the total number of ways is n1 - n2"
        ],
        answer: "If a task can be done in n1 ways or n2 ways, the total number of ways is n1 + n2 minus the number of common ways"
    },
    {
        numb: 11,
        question: "What is the principle of inclusion-exclusion?",
        options: [
            "It counts the number of elements in the union of two sets by adding the sizes of the sets and subtracting the size of their intersection",
            "It counts the number of elements in the union of two sets by multiplying the sizes of the sets",
            "It counts the number of elements in the union of two sets by adding the sizes of the sets",
            "It counts the number of elements in the union of two sets by subtracting the sizes of the sets"
        ],
        answer: "It counts the number of elements in the union of two sets by adding the sizes of the sets and subtracting the size of their intersection"
    },
    {
        numb: 12,
        question: "How many bit strings of length five start with a 1 bit?",
        options: [
            "16",
            "8",
            "32",
            "64"
        ],
        answer: "16"
    },
    {
        numb: 13,
        question: "How many bit strings of length five end with the two bits 00?",
        options: [
            "8",
            "16",
            "32",
            "64"
        ],
        answer: "8"
    },
    {
        numb: 14,
        question: "How many bit strings of length five start with a 1 bit and end with the two bits 00?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: "4"
    },
    {
        numb: 15,
        question: "How many bit strings of length five either start with a 1 bit or end with the two bits 00?",
        options: [
            "20",
            "16",
            "24",
            "32"
        ],
        answer: "20"
    },
    {
        numb: 16,
        question: "How many applicants majored neither in computer science nor in business if 220 majored in computer science, 147 in business, and 51 in both, out of 350 applicants?",
        options: [
            "34",
            "50",
            "60",
            "70"
        ],
        answer: "34"
    },
    {
        numb: 17,
        question: "What is the formula for the number of elements in the union of two sets A and B?",
        options: [
            "|A ∪ B| = |A| + |B| - |A ∩ B|",
            "|A ∪ B| = |A| + |B|",
            "|A ∪ B| = |A| * |B|",
            "|A ∪ B| = |A| - |B|"
        ],
        answer: "|A ∪ B| = |A| + |B| - |A ∩ B|"
    },
    {
        numb: 18,
        question: "How many bit strings of length five are there?",
        options: [
            "32",
            "16",
            "64",
            "128"
        ],
        answer: "32"
    },
    {
        numb: 19,
        question: "How many bit strings of length five start with a 0 bit?",
        options: [
            "16",
            "8",
            "32",
            "64"
        ],
        answer: "16"
    },
    {
        numb: 20,
        question: "How many bit strings of length five end with the two bits 11?",
        options: [
            "8",
            "16",
            "32",
            "64"
        ],
        answer: "8"
    },
    {
        numb: 21,
        question: "How many bit strings of length five start with a 0 bit and end with the two bits 11?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: "4"
    },
    {
        numb: 22,
        question: "How many bit strings of length five either start with a 0 bit or end with the two bits 11?",
        options: [
            "20",
            "16",
            "24",
            "32"
        ],
        answer: "20"
    },
    {
        numb: 23,
        question: "How many bit strings of length five start with a 1 bit and end with the two bits 11?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: "4"
    },
    {
        numb: 24,
        question: "How many bit strings of length five either start with a 1 bit or end with the two bits 11?",
        options: [
            "20",
            "16",
            "24",
            "32"
        ],
        answer: "20"
    },
    {
        numb: 25,
        question: "How many bit strings of length five start with a 0 bit and end with the two bits 00?",
        options: [
            "4",
            "8",
            "16",
            "32"
        ],
        answer: "4"
    }
];