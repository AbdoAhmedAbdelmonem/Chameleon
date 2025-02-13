const question = [
    {
        numb: 1,
        question: "What is the Product Rule in counting?",
        options: [
            "If a procedure can be broken into tasks, the total number of ways is the sum of the number of ways to do each task",
            "If a procedure can be broken into tasks, the total number of ways is the product of the number of ways to do each task",
            "If a procedure can be broken into tasks, the total number of ways is the maximum of the number of ways to do each task",
            "If a procedure can be broken into tasks, the total number of ways is the minimum of the number of ways to do each task"
        ],
        answer: "If a procedure can be broken into tasks, the total number of ways is the product of the number of ways to do each task"
    },
    {
        numb: 2,
        question: "How many different bit strings of length seven are there?",
        options: [
            "512",
            "64",
            "128",
            "256",
        ],
        answer: "128"
    },
    {
        numb: 3,
        question: "How many ways are there to assign different offices to two employees if there are 12 offices?",
        options: [
            "144",
            "132",
            "120",
            "156"
        ],
        answer: "132"
    },
    {
        numb: 4,
        question: "How many different ways can a true-false test consisting of 10 questions be answered?",
        options: [
            "1024",
            "512",
            "2048",
            "256"
        ],
        answer: "1024"
    },
    {
        numb: 5,
        question: "How many different license plates can be made if each plate contains a sequence of three uppercase English letters followed by three digits?",
        options: [
            "17,576,000",
            "15,600,000",
            "20,000,000",
            "12,000,000"
        ],
        answer: "17,576,000"
    },
    {
        numb: 6,
        question: "How many functions are there from a set with m elements to a set with n elements?",
        options: [
            "m^n",
            "n^m",
            "n * m",
            "n + m"
        ],
        answer: "n^m"
    },
    {
        numb: 7,
        question: "How many one-to-one functions are there from a set with m elements to a set with n elements if m ≤ n?",
        options: [
            "m(m-1)(m-2)...(m-n+1)",
            "n^m",
            "n(n-1)(n-2)...(n-m+1)",
            "m^n"
        ],
        answer: "n(n-1)(n-2)...(n-m+1)"
    },
    {
        numb: 8,
        question: "How many different PINs are possible if a PIN is a sequence of four symbols chosen from 26 letters and 10 digits, with repetition allowed?",
        options: [
            "1,679,616",
            "1,000,000",
            "2,000,000",
            "1,500,000"
        ],
        answer: "1,679,616"
    },
    {
        numb: 9,
        question: "How many different North American telephone numbers are possible under the old numbering plan?",
        options: [
            "6,400,000,000",
            "5,376,000,000",
            "1,024,000,000",
            "2,000,000,000"
        ],
        answer: "1,024,000,000"
    },
    {
        numb: 10,
        question: "How many different North American telephone numbers are possible under the new numbering plan?",
        options: [
            "1,024,000,000",
            "6,400,000,000",
            "2,000,000,000",
            "5,376,000,000",
        ],
        answer: "6,400,000,000"
    },
    {
        numb: 11,
        question: "What is the difference in the number of telephone numbers between the new and old numbering plans?",
        options: [
            "1,024,000,000",
            "6,400,000,000",
            "5,376,000,000",
            "2,000,000,000"
        ],
        answer: "5,376,000,000"
    },
    {
        numb: 12,
        question: "What is the value of k after executing nested loops with m levels, where each loop runs from 1 to n_i?",
        options: [
            "n1 + n2 + ... + nm",
            "max(n1, n2, ..., nm)",
            "n1 * n2 * ... * nm",
            "min(n1, n2, ..., nm)"
        ],
        answer: "n1 * n2 * ... * nm"
    },
    {
        numb: 13,
        question: "What is the Sum Rule in counting?",
        options: [
            "If tasks are disjoint, the total number of ways is the product of the number of ways to do each task",
            "If tasks are disjoint, the total number of ways is the sum of the number of ways to do each task",
            "If tasks are not disjoint, the total number of ways is the sum of the number of ways to do each task",
            "If tasks are not disjoint, the total number of ways is the product of the number of ways to do each task"
        ],
        answer: "If tasks are disjoint, the total number of ways is the sum of the number of ways to do each task"
    },
    {
        numb: 14,
        question: "How many different choices are there for a representative if there are 37 mathematics majors and 83 physics majors, and no one is both?",
        options: [
            "100",
            "150",
            "200",
            "120",
        ],
        answer: "120"
    },
    {
        numb: 15,
        question: "How many possible projects are there to choose from if a student can choose from three lists containing 23, 15, and 19 projects, respectively, and no project is on more than one list?",
        options: [
            "50",
            "57",
            "60",
            "70"
        ],
        answer: "57"
    },
    {
        numb: 16,
        question: "What is the value of k after executing a loop that runs from 1 to n_i for each of m loops?",
        options: [
            "n1 * n2 * ... * nm",
            "max(n1, n2, ..., nm)",
            "min(n1, n2, ..., nm)",
            "n1 + n2 + ... + nm",
        ],
        answer: "n1 + n2 + ... + nm"
    },
    {
        numb: 17,
        question: "How many different bit strings of length 5 are there?",
        options: [
            "16",
            "32",
            "64",
            "128"
        ],
        answer: "32"
    },
    {
        numb: 18,
        question: "How many different ways can a chair be labeled with an uppercase English letter followed by a positive integer not exceeding 100?",
        options: [
            "2600",
            "2500",
            "2700",
            "2800"
        ],
        answer: "2600"
    },
    {
        numb: 19,
        question: "How many different license plates can be made if each plate contains two uppercase English letters followed by four digits?",
        options: [
            "6,760,000",
            "5,000,000",
            "7,000,000",
            "8,000,000"
        ],
        answer: "6,760,000"
    },
    {
        numb: 20,
        question: "How many one-to-one functions are there from a set with 3 elements to a set with 7 elements?",
        options: [
            "343",
            "125",
            "512",
            "210",
        ],
        answer: "210"
    },
    {
        numb: 21,
        question: "How many different PINs are possible if a PIN is a sequence of three symbols chosen from 26 letters and 10 digits, with repetition allowed?",
        options: [
            "46,656",
            "50,000",
            "40,000",
            "45,000"
        ],
        answer: "46,656"
    },
    {
        numb: 22,
        question: "How many different ways can a chair be labeled with a lowercase English letter followed by a positive integer not exceeding 50?",
        options: [
            "1200",
            "1400",
            "1300",
            "1500"
        ],
        answer: "1300"
    },
    {
        numb: 23,
        question: "How many different ways can a chair be labeled with an uppercase English letter followed by a positive integer not exceeding 50?",
        options: [
            "1200",
            "1300",
            "1400",
            "1500"
        ],
        answer: "1300"
    },
    {
        numb: 24,
        question: "How many different ways can a chair be labeled with a lowercase English letter followed by a positive integer not exceeding 100?",
        options: [
            "2600",
            "2500",
            "2700",
            "2800"
        ],
        answer: "2600"
    },
    {
        numb: 25,
        question: "How many different ways can a chair be labeled with an uppercase English letter followed by a positive integer not exceeding 100?",
        options: [
            "2500",
            "2700",
            "2800",
            "2600",
        ],
        answer: "2600"
    }
];