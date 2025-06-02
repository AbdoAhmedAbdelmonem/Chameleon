let questions = [
    {
        numb: 1,
        question: "What is the primary task in the text document classification case study?",
        options: [
            "To translate documents into different languages",
            "To classify documents into predefined categories based on content",
            "To summarize long documents",
            "To correct grammar in documents"
        ],
        answer: "To classify documents into predefined categories based on content"
    },
    {
        numb: 2,
        question: "Which of the following preprocessing steps is NOT mentioned for text documents?",
        options: [
            "Removing stop words",
            "Applying stemming",
            "Converting all text to uppercase",
            "Normalizing document vectors"
        ],
        answer: "Converting all text to uppercase"
    },
    {
        numb: 3,
        question: "What does the Porter's stemming algorithm do?",
        options: [
            "Removes punctuation from text",
            "Reduces words to their root form",
            "Translates words to other languages",
            "Counts word frequencies"
        ],
        answer: "Reduces words to their root form"
    },
    {
        numb: 4,
        question: "What is the vector space model used for in text processing?",
        options: [
            "To represent documents as vectors of term frequencies",
            "To visualize documents in 3D space",
            "To translate between vector languages",
            "To compress document sizes"
        ],
        answer: "To represent documents as vectors of term frequencies"
    },
    {
        numb: 5,
        question: "Why are document vectors normalized to unit length?",
        options: [
            "To make documents of different lengths comparable",
            "To reduce storage requirements",
            "To remove all stop words",
            "To translate documents"
        ],
        answer: "To make documents of different lengths comparable"
    },
    {
        numb: 6,
        question: "What is the formula for Inverse Document Frequency (IDF)?",
        options: [
            "log(N/n_t)",
            "log(n_t/N)",
            "N/log(n_t)",
            "n_t/log(N)"
        ],
        answer: "log(N/n_t)"
    },
    {
        numb: 7,
        question: "If a term appears in all documents (N=2), what is its IDF value?",
        options: [
            "0",
            "1",
            "0.5",
            "Undefined"
        ],
        answer: "0"
    },
    {
        numb: 8,
        question: "What does TF stand for in text processing?",
        options: [
            "Term Frequency",
            "Text Formatting",
            "Total Features",
            "Term Filtering"
        ],
        answer: "Term Frequency"
    },
    {
        numb: 9,
        question: "Which TF weighting scheme uses the formula: 1 + log(f_{t,d})?",
        options: [
            "Binary",
            "Raw frequency",
            "Log normalization",
            "Double normalization"
        ],
        answer: "Log normalization"
    },
    {
        numb: 10,
        question: "What is the binary TF weighting scheme?",
        options: [
            "0 or 1 indicating presence/absence of term",
            "The actual count of terms",
            "A logarithmic transformation",
            "A normalized count"
        ],
        answer: "0 or 1 indicating presence/absence of term"
    },
    {
        numb: 11,
        question: "Which IDF variant uses log(1 + N/n_t)?",
        options: [
            "Inverse document frequency",
            "Inverse document frequency smooth",
            "Inverse document frequency max",
            "Probabilistic inverse document frequency"
        ],
        answer: "Inverse document frequency smooth"
    },
    {
        numb: 12,
        question: "What is TF-IDF?",
        options: [
            "Term Frequency multiplied by Inverse Document Frequency",
            "Term Frequency divided by Inverse Document Frequency",
            "Term Frequency added to Inverse Document Frequency",
            "A different algorithm from TF and IDF"
        ],
        answer: "Term Frequency multiplied by Inverse Document Frequency"
    },
    {
        numb: 13,
        question: "If term 'example' appears 3 times in document d2 and in 1 of 2 total documents, what is its TF-IDF value?",
        options: [
            "0.9030",
            "0.3010",
            "3",
            "1"
        ],
        answer: "0.9030"
    },
    {
        numb: 14,
        question: "Which of the following is NOT a variant of TF weighting mentioned?",
        options: [
            "Binary",
            "Raw frequency",
            "Square root normalization",
            "Double normalization 0.5"
        ],
        answer: "Square root normalization"
    },
    {
        numb: 15,
        question: "What does the 'double normalization K' TF weighting scheme include?",
        options: [
            "A constant K that can be adjusted",
            "Only the raw frequency",
            "Only the binary indicator",
            "The square of the frequency"
        ],
        answer: "A constant K that can be adjusted"
    },
    {
        numb: 16,
        question: "Which IDF variant uses the maximum document frequency of any term in the denominator?",
        options: [
            "Inverse document frequency max",
            "Inverse document frequency smooth",
            "Probabilistic inverse document frequency",
            "Unary"
        ],
        answer: "Inverse document frequency max"
    },
    {
        numb: 17,
        question: "What is the purpose of removing stop words in text processing?",
        options: [
            "To focus on meaningful terms",
            "To make documents longer",
            "To increase storage requirements",
            "To remove all verbs"
        ],
        answer: "To focus on meaningful terms"
    },
    {
        numb: 18,
        question: "In the vector space model, what do the dimensions of the vector represent?",
        options: [
            "Terms in the vocabulary",
            "Documents in the collection",
            "Categories in the classification",
            "Characters in the alphabet"
        ],
        answer: "Terms in the vocabulary"
    },
    {
        numb: 19,
        question: "Which of the following applications is mentioned for text classification?",
        options: [
            "Email filtering",
            "Image recognition",
            "Stock market prediction",
            "Weather forecasting"
        ],
        answer: "Email filtering"
    },
    {
        numb: 20,
        question: "What is the unary IDF weighting scheme?",
        options: [
            "Always 1",
            "log(N/n_t)",
            "log(1 + N/n_t)",
            "log((N - n_t)/n_t)"
        ],
        answer: "Always 1"
    },
    {
        numb: 21,
        question: "What does n_t represent in IDF calculations?",
        options: [
            "Number of documents containing term t",
            "Total number of documents",
            "Number of terms in document d",
            "Length of term t"
        ],
        answer: "Number of documents containing term t"
    },
    {
        numb: 22,
        question: "Which of the following is true about text classification?",
        options: [
            "A document can belong to only one category",
            "A document can belong to multiple categories",
            "Categories must be mutually exclusive",
            "There can only be two categories"
        ],
        answer: "A document can belong to multiple categories"
    },
    {
        numb: 23,
        question: "What is the probabilistic IDF formula?",
        options: [
            "log((N - n_t)/n_t)",
            "log(N/n_t)",
            "log(1 + N/n_t)",
            "log(n_t/N)"
        ],
        answer: "log((N - n_t)/n_t)"
    },
    {
        numb: 24,
        question: "Which preprocessing step reduces 'engineering' to 'engine'?",
        options: [
            "Stop word removal",
            "Stemming",
            "TF-IDF weighting",
            "Vector normalization"
        ],
        answer: "Stemming"
    },
    {
        numb: 25,
        question: "What does document vector normalization achieve?",
        options: [
            "Makes all documents the same length",
            "Allows comparison of documents of different lengths",
            "Removes all frequent terms",
            "Changes the meaning of documents"
        ],
        answer: "Allows comparison of documents of different lengths"
    },
    {
        numb: 26,
        question: "In the example, how many times does 'example' appear in document d2?",
        options: [
            "1",
            "2",
            "3",
            "0"
        ],
        answer: "3"
    },
    {
        numb: 27,
        question: "Which of the following is NOT a text classification application mentioned?",
        options: [
            "Web searching",
            "Sorting documents by topic",
            "Email filtering",
            "Speech recognition"
        ],
        answer: "Speech recognition"
    },
    {
        numb: 28,
        question: "What is the main advantage of using TF-IDF over raw term frequencies?",
        options: [
            "It gives more weight to common terms",
            "It reduces the importance of rare but meaningful terms",
            "It balances term importance by considering both frequency and document prevalence",
            "It's computationally cheaper"
        ],
        answer: "It balances term importance by considering both frequency and document prevalence"
    },
    {
        numb: 29,
        question: "What does the 'raw frequency' TF weighting scheme use?",
        options: [
            "The actual count of terms in the document",
            "Binary presence indicator",
            "Logarithm of the count",
            "Normalized count"
        ],
        answer: "The actual count of terms in the document"
    },
    {
        numb: 30,
        question: "In the IDF calculation, what does N represent?",
        options: [
            "Total number of documents in the collection",
            "Number of terms in a document",
            "Number of categories",
            "Length of the longest document"
        ],
        answer: "Total number of documents in the collection"
    }
];