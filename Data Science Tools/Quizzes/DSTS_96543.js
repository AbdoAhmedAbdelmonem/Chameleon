let question = [
    {
        numb: 1,
        question: "Which of the following is NOT a data preprocessing task?",
        options: [
            "Dealing with incomplete data",
            "Removing duplicate records",
            "Data collection",
            "Noise removal"
        ],
        answer: "Data collection"
    },
    {
        numb: 2,
        question: "What is one method to handle missing data?",
        options: [
            "Ignore the tuple",
            "Fill with random values",
            "Delete the entire dataset",
            "None of the above"
        ],
        answer: "Ignore the tuple"
    },
    {
        numb: 3,
        question: "In the example 5,1,3,2,9,?, what value is suggested to fill the missing entry?",
        options: [
            "1",
            "3",
            "4",
            "5"
        ],
        answer: "4"
    },
    {
        numb: 4,
        question: "Which method is used for noise removal by partitioning data into equal-depth bins?",
        options: [
            "Clustering",
            "Regression",
            "Binning",
            "Normalization"
        ],
        answer: "Binning"
    },
    {
        numb: 5,
        question: "What is the purpose of normalization in data preprocessing?",
        options: [
            "To remove all missing values",
            "To scale features to similar ranges",
            "To delete duplicate records",
            "To add noise to the data"
        ],
        answer: "To scale features to similar ranges"
    },
    {
        numb: 6,
        question: "Which normalization technique uses the formula: v' = (v - min_A)/(max_A - min_A)?",
        options: [
            "z-score normalization",
            "Decimal scaling",
            "min-max normalization",
            "None of the above"
        ],
        answer: "min-max normalization"
    },
    {
        numb: 7,
        question: "In z-score normalization, what does the formula (v - mean_a)/stand_dev_a represent?",
        options: [
            "Scaling by decimal places",
            "Standardizing data to have mean 0 and standard deviation 1",
            "Normalizing to a 0-1 range",
            "None of the above"
        ],
        answer: "Standardizing data to have mean 0 and standard deviation 1"
    },
    {
        numb: 8,
        question: "What is the main goal of feature extraction?",
        options: [
            "To increase data size",
            "To convert raw patterns into feature vectors and reduce redundancy",
            "To remove all features",
            "To add noise to the data"
        ],
        answer: "To convert raw patterns into feature vectors and reduce redundancy"
    },
    {
        numb: 9,
        question: "Which of the following is NOT a property of a metric distance measure?",
        options: [
            "Symmetry",
            "Constancy of self-similarity",
            "Triangular inequality",
            "Linear dependence"
        ],
        answer: "Linear dependence"
    },
    {
        numb: 10,
        question: "What is the Hamming distance between vectors [1,0,1] and [0,1,1]?",
        options: [
            "0",
            "1",
            "2",
            "3"
        ],
        answer: "2"
    },
    {
        numb: 11,
        question: "Which distance metric is a special case of Minkowski distance when p=1?",
        options: [
            "Euclidean distance",
            "Manhattan distance",
            "Square distance",
            "Hamming distance"
        ],
        answer: "Manhattan distance"
    },
    {
        numb: 12,
        question: "What is the Euclidean distance between points (1,2) and (4,6)?",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: "5"
    },
    {
        numb: 13,
        question: "Which similarity measure is calculated as x·y/(||x|| ||y||)?",
        options: [
            "Jaccard index",
            "Cosine similarity",
            "Pearson correlation",
            "Hamming distance"
        ],
        answer: "Cosine similarity"
    },
    {
        numb: 14,
        question: "What is the Jaccard similarity between sets {a,c,d} and {a,b,e}?",
        options: [
            "0.20",
            "0.33",
            "0.50",
            "0.75"
        ],
        answer: "0.20"
    },
    {
        numb: 15,
        question: "Which distance measure counts the number of substitutions needed to transform one string into another?",
        options: [
            "Euclidean distance",
            "Hamming distance",
            "Manhattan distance",
            "Mahalanobis distance"
        ],
        answer: "Hamming distance"
    },
    {
        numb: 16,
        question: "What does a Pearson correlation coefficient of 0.9 indicate?",
        options: [
            "No correlation",
            "Weak positive correlation",
            "Moderate positive correlation",
            "Strong positive correlation"
        ],
        answer: "Strong positive correlation"
    },
    {
        numb: 17,
        question: "Which of the following is NOT a limitation of Pearson's correlation coefficient?",
        options: [
            "It only measures linear relationships",
            "It is sensitive to outliers",
            "It cannot detect non-linear relationships",
            "It always ranges between -2 and +2"
        ],
        answer: "It always ranges between -2 and +2"
    },
    {
        numb: 18,
        question: "In text processing, what is the purpose of removing stop words?",
        options: [
            "To increase document size",
            "To focus on meaningful terms",
            "To add noise to the data",
            "To create duplicate records"
        ],
        answer: "To focus on meaningful terms"
    },
    {
        numb: 19,
        question: "What does TF-IDF stand for in text processing?",
        options: [
            "Term Frequency-Inverse Document Frequency",
            "Total Frequency-Individual Document Frequency",
            "Text Feature-Indexed Document Feature",
            "None of the above"
        ],
        answer: "Term Frequency-Inverse Document Frequency"
    },
    {
        numb: 20,
        question: "Which of the following is NOT a variant of TF weight?",
        options: [
            "Binary",
            "Raw frequency",
            "Log normalization",
            "Exponential scaling"
        ],
        answer: "Exponential scaling"
    },
    {
        numb: 21,
        question: "What is the output of (lambda x, y: x-y)(2, 3) in Python?",
        options: [
            "0",
            "-1",
            "5",
            "6"
        ],
        answer: "-1"
    },
    {
        numb: 22,
        question: "What does the map() function do in Python?",
        options: [
            "Applies a function to all elements in a sequence",
            "Filters elements based on a condition",
            "Reduces a sequence to a single value",
            "None of the above"
        ],
        answer: "Applies a function to all elements in a sequence"
    },
    {
        numb: 23,
        question: "What is the output of reduce(lambda x, y: x+y, [1,2,3,4])?",
        options: [
            "24",
            "3",
            "[1,2,3,4]",
            "10"
        ],
        answer: "10"
    },
    {
        numb: 24,
        question: "Which of the following is true about the binning method for noise removal?",
        options: [
            "It sorts data and partitions into equal-depth bins",
            "It removes all missing values",
            "It increases data dimensionality",
            "None of the above"
        ],
        answer: "It sorts data and partitions into equal-depth bins"
    },
    {
        numb: 25,
        question: "What is the main purpose of discretization?",
        options: [
            "To convert continuous data into categories",
            "To remove all features",
            "To add noise to the data",
            "To delete duplicate records"
        ],
        answer: "To convert continuous data into categories"
    },
    {
        numb: 26,
        question: "Which of the following is NOT a feature type mentioned in symbolic objects?",
        options: [
            "Quantitative features",
            "Qualitative features",
            "Random features",
            "Continuous ratio values"
        ],
        answer: "Random features"
    },
    {
        numb: 27,
        question: "What does the triangular inequality property state about distance measures?",
        options: [
            "D(A,B) = D(B,A)",
            "D(A,A) = 0",
            "D(A,B) ≤ D(A,C) + D(B,C)",
            "D(A,B) = 0 if A=B"
        ],
        answer: "D(A,B) ≤ D(A,C) + D(B,C)"
    },
    {
        numb: 28,
        question: "Which of the following is an example of an ordinal qualitative feature?",
        options: [
            "Color",
            "Military rank",
            "Blood type",
            "Height"
        ],
        answer: "Military rank"
    },
    {
        numb: 29,
        question: "What is the purpose of stemming in text processing?",
        options: [
            "To reduce words to their root form",
            "To increase document size",
            "To add stop words",
            "To create duplicate terms"
        ],
        answer: "To reduce words to their root form"
    },
    {
        numb: 30,
        question: "Executing print(reduce(lambda x, y: x*y, [1,2,3,4])) in Python  produces?",
        options: [
            "6",
            "12",
            "24",
            "10"
        ],
        answer: "24"
    }
];