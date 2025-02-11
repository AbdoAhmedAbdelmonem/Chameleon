const question = [
    {
        numb: 1,type: "Multiple Choices",
        question: "What is a function in mathematics?",
        options: [
            "An assignment of multiple elements of Y to each element of X",
            "A set of ordered pairs",
            "An assignment of exactly one element of Y to each element of X",
            "A subset of the Cartesian product"
        ],
        answer: "An assignment of exactly one element of Y to each element of X"
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "What is the domain of a function?",
        options: [
            "The set of all possible output values (Y)",
            "The set of all ordered pairs (X, Y)",
            "The set of all possible input values (X)",
            "The set of all subsets of X"
        ],
        answer: "The set of all possible input values (X)"
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "What is the co-domain of a function?",
        options: [
            "The set of all possible output values (Y)",
            "The set of all possible input values (X)",
            "The set of all ordered pairs (X, Y)",
            "The set of all subsets of Y"
        ],
        answer: "The set of all possible output values (Y)"
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is the range of a function?",
        options: [
            "The set of all possible input values",
            "The set of all actual output values produced by the function",
            "The set of all ordered pairs (X, Y)",
            "The set of all subsets of Y"
        ],
        answer: "The set of all actual output values produced by the function"
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "What is a one-to-one function (injective)?",
        options: [
            "A function where multiple elements of the domain map to the same element in the co-domain",
            "A function where each element of the domain maps to a unique element in the co-domain",
            "A function where the range equals the co-domain",
            "A function where the domain equals the co-domain"
        ],
        answer: "A function where each element of the domain maps to a unique element in the co-domain"
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "What is an onto function (surjective)?",
        options: [
            "A function where every element in the co-domain is mapped to by at least one element in the domain",
            "A function where each element of the domain maps to a unique element in the co-domain",
            "A function where the range is a subset of the co-domain",
            "A function where the domain is a subset of the co-domain"
        ],
        answer: "A function where every element in the co-domain is mapped to by at least one element in the domain"
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "What is a bijection?",
        options: [
            "A function that is onto but not one-to-one",
            "A function that is one-to-one but not onto",
            "A function that is both one-to-one and onto",
            "A function that is neither one-to-one nor onto"
        ],
        answer: "A function that is both one-to-one and onto"
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "What is the inverse of a function?",
        options: [
            "A function that is the same as the original function",
            "A function that maps the domain to itself",
            "A function that maps the co-domain to the domain",
            "A function that reverses the mapping of the original function",
        ],
        answer: "A function that reverses the mapping of the original function"
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "When is a function invertible?",
        options: [
            "When it is a bijection",
            "When it is one-to-one but not onto",
            "When it is onto but not one-to-one",
            "When it is neither one-to-one nor onto"
        ],
        answer: "When it is a bijection"
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "What is the composition of two functions f and g?",
        options: [
            "A function defined by (f ∘ g)(x) = g(f(x))",
            "A function defined by (f ∘ g)(x) = f(x) + g(x)",
            "A function defined by (f ∘ g)(x) = f(x) * g(x)",
            "A function defined by (f ∘ g)(x) = f(g(x))",
        ],
        answer: "A function defined by (f ∘ g)(x) = f(g(x))"
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "What is the condition for the composition of two functions f and g to be defined?",
        options: [
            "The domain of g must be a subset of the range of f",
            "The range of f must be a subset of the domain of g",
            "The range of g must be a subset of the domain of f",
            "The domain of f must be a subset of the range of g"
        ],
        answer: "The range of g must be a subset of the domain of f"
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "What is the composition of f and g if f(x) = 2x + 3 and g(x) = 3x + 2?",
        options: [
            "6x + 11",
            "5x + 5",
            "6x + 7",
            "6x + 5"
        ],
        answer: "6x + 7"
    },
    {
        numb: 13type: "Multiple Choices",
        question: "What is the composition of g and f if f(x) = 2x + 3 and g(x) = 3x + 2?",
        options: [
            "6x + 7",
            "6x + 11",
            "5x + 5",
            "6x + 5"
        ],
        answer: "6x + 11"
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "What is the inverse of the function f(a) = 2, f(b) = 3, f(c) = 1?",
        options: [
            "f⁻¹(1) = a, f⁻¹(2) = b, f⁻¹(3) = c",
            "f⁻¹(1) = b, f⁻¹(2) = a, f⁻¹(3) = c",
            "f⁻¹(1) = c, f⁻¹(2) = b, f⁻¹(3) = a",
            "f⁻¹(1) = c, f⁻¹(2) = a, f⁻¹(3) = b",
        ],
        answer: "f⁻¹(1) = c, f⁻¹(2) = a, f⁻¹(3) = b"
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "What is the range of the function f(a) = 1, f(b) = 3, f(c) = 7, f(d) = 4, f(e) = 5?",
        options: [
            "{1, 2, 3, 4, 5, 6, 7}",
            "{1, 3, 4, 5, 7}",
            "{1, 3, 5, 7}",
            "{1, 3, 4, 5}"
        ],
        answer: "{1, 3, 4, 5, 7}"
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "What is the co-domain of the function f(a) = 1, f(b) = 3, f(c) = 7, f(d) = 4, f(e) = 5?",
        options: [
            "{1, 3, 4, 5, 7}",
            "{1, 2, 3, 4, 5, 6, 7}",
            "{1, 2, 3, 4, 5}",
            "{1, 3, 5, 7}"
        ],
        answer: "{1, 2, 3, 4, 5, 6, 7}"
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "What is the domain of the function f(a) = 1, f(b) = 3, f(c) = 7, f(d) = 4, f(e) = 5?",
        options: [
            "{1, 2, 3, 4, 5, 6, 7}",
            "{1, 3, 4, 5, 7}",
            "{a, b, c}",
            "{a, b, c, d, e}",
        ],
        answer: "{a, b, c, d, e}"
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "What is the range of the function f(x) = x² from the set of integers to the set of integers?",
        options: [
            "The set of all integers",
            "The set of positive integers",
            "The set of non-negative integers",
            "The set of even integers"
        ],
        answer: "The set of non-negative integers"
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "Is the function f(x) = x² from the set of integers to the set of integers one-to-one?",
        options: [
            "Yes",
            "No",
            "It depends on the domain",
            "It depends on the co-domain"
        ],
        answer: "No"
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "Is the function f(x) = x² from the set of integers to the set of integers onto?",
        options: [
            "Yes",
            "No",
            "It depends on the domain",
            "It depends on the co-domain"
        ],
        answer: "No"
    },
    {
        numb: 21,type: "Multiple Choices",
        question: "What is the inverse of the function f(x) = 2x + 3?",
        options: [
            "f⁻¹(x) = (x + 3) / 2",
            "f⁻¹(x) = 2x - 3",
            "f⁻¹(x) = (x - 3) / 2",
            "f⁻¹(x) = 2x + 3"
        ],
        answer: "f⁻¹(x) = (x - 3) / 2"
    },
    {
        numb: 22,type: "Multiple Choices",
        question: "What is the inverse of the function f(x) = 3x + 2?",
        options: [
            "f⁻¹(x) = (x - 2) / 3",
            "f⁻¹(x) = (x + 2) / 3",
            "f⁻¹(x) = 3x - 2",
            "f⁻¹(x) = 3x + 2"
        ],
        answer: "f⁻¹(x) = (x - 2) / 3"
    },
    {
        numb: 23,type: "Multiple Choices",
        question: "What is the composition of f and g if f(x) = x + 1 and g(x) = x²?",
        options: [
            "f ∘ g(x) = (x + 1)²",
            "f ∘ g(x) = x² + x + 1",
            "f ∘ g(x) = x² + 1",
            "f ∘ g(x) = x² + 2x + 1"
        ],
        answer: "f ∘ g(x) = x² + 1"
    },
    {
        numb: 24type: "Multiple Choices",
        question: "What is the composition of g and f if f(x) = x + 1 and g(x) = x²?",
        options: [
            "g ∘ f(x) = x² + 1",
            "g ∘ f(x) = (x + 1)²",
            "g ∘ f(x) = x² + x + 1",
            "g ∘ f(x) = x² + 2x + 1"
        ],
        answer: "g ∘ f(x) = (x + 1)²"
    },
    {
        numb: 25,type: "Multiple Choices",
        question: "What is the composition of f and g if f(x) = 2x and g(x) = x + 3?",
        options: [
            "f ∘ g(x) = 2x + 6",
            "f ∘ g(x) = 2x + 3",
            "f ∘ g(x) = 2x + 9",
            "f ∘ g(x) = 2x + 12"
        ],
        answer: "f ∘ g(x) = 2x + 6"
    }
];