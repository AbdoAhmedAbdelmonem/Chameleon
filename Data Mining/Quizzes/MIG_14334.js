let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Hard vs. soft (fuzzy) clustering: key difference in element membership? 🧐",
        options: [
            "Hard allows multiple clusters per element; soft assigns one.",
            "Soft (fuzzy) allows overlapping clusters & varied membership degrees; hard does not.",
            "Hard uses centroids; soft uses medoids.",
            "Soft is for numerical data only; hard handles mixed types."
        ],
        answer: "Soft (fuzzy) allows overlapping clusters & varied membership degrees; hard does not."
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Fuzzy logic, by Dr. Lotfi Zadeh, is based on what core concept? 🤔",
        options: [
            "Absolute true/false.",
            "Probabilistic certainties.",
            "'Degrees of truth', not strict Boolean logic.",
            "Neural network decisions."
        ],
        answer: "'Degrees of truth', not strict Boolean logic."
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "Primary motivation for Dr. Lotfi Zadeh's fuzzy logic introduction? 💡",
        options: [
            "More efficient database queries.",
            "Model uncertainty/imprecision in natural language.",
            "Improve computer processor speed.",
            "Develop new cryptography."
        ],
        answer: "Model uncertainty/imprecision in natural language."
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "How does a fuzzy set show an element's link to a concept (e.g., 'sunny day')? ☀️",
        options: [
            "Binary value (1 if sunny, 0 if not).",
            "A grade of membership, typically 0 to 1.",
            "Ranking relative to other days.",
            "Assigning to the closest weather category."
        ],
        answer: "A grade of membership, typically 0 to 1."
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "Defining trait of a 'crisp set' for classifying individuals? 📏",
        options: [
            "Allows partial membership.",
            "Divides individuals into members and nonmembers.",
            "Uses probability for membership.",
            "Membership is dynamic and context-dependent."
        ],
        answer: "Divides individuals into members and nonmembers."
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Main purpose of a Membership Function (MF) in fuzzy logic? 📉",
        options: [
            "Determine total cluster count.",
            "Map input points to a membership value (0-1).",
            "Calculate precise boundary of crisp sets.",
            "Select key features for clustering."
        ],
        answer: "Map input points to a membership value (0-1)."
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What's suggested for selecting MF shapes (triangular, trapezoidal, etc.)? 📐",
        options: [
            "Triangular is always optimal.",
            "Gaussian is only for statistical data.",
            "Type is context-dependent, often user experience-based.",
            "Trapezoidal for high uncertainty inputs."
        ],
        answer: "Type is context-dependent, often user experience-based."
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which is a highlighted advantage of fuzzy logic? 👍",
        options: [
            "Always more precise than traditional logic.",
            "Handles problems not easily defined by math models.",
            "Requires much more computational power.",
            "Eliminates need for expert system design knowledge."
        ],
        answer: "Handles problems not easily defined by math models."
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Fundamental role of a Fuzzy Inference System (FIS)? ⚙️",
        options: [
            "Convert fuzzy sets to crisp sets only.",
            "Map input to output using fuzzy logic, rules, MFs.",
            "Generate new MFs automatically.",
            "Perform hard clustering on large datasets."
        ],
        answer: "Map input to output using fuzzy logic, rules, MFs."
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Typical format for fuzzy rules in an FIS? 📝",
        options: [
            "Complex mathematical equations.",
            "Binary decision trees.",
            "'If-then' statements with fuzzy parts.",
            "List of data points in each fuzzy set."
        ],
        answer: "'If-then' statements with fuzzy parts."
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Main goal of 'Fuzzification' in a Fuzzy Inference System? 🌫️",
        options: [
            "Convert fuzzy outputs to a crisp number.",
            "Combine outputs of all fuzzy rules.",
            "Transform crisp inputs to fuzzy inputs (degrees of membership).",
            "Select best fuzzy rules from knowledge base."
        ],
        answer: "Transform crisp inputs to fuzzy inputs (degrees of membership)."
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What happens during 'Fuzzy Inference' or 'Rule Evaluation' in an FIS? 🤔",
        options: [
            "MFs are first created.",
            "Linguistic rules are applied to fuzzy inputs for rule outputs.",
            "Final crisp output is calculated.",
            "Input data is normalized."
        ],
        answer: "Linguistic rules are applied to fuzzy inputs for rule outputs."
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Primary goal of 'Aggregation of all outputs' in an FIS? 🧩",
        options: [
            "Select one best rule for the input.",
            "Convert individual rule fuzzy outputs to crisp values.",
            "Combine rule outputs into one fuzzy set per output variable.",
            "Adjust input variable MFs."
        ],
        answer: "Combine rule outputs into one fuzzy set per output variable."
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Purpose of 'Defuzzification' in a Fuzzy Inference System? 🎯",
        options: [
            "Define linguistic variables.",
            "Convert aggregated fuzzy output to a single crisp number.",
            "Apply fuzzy operators (AND, OR) to rule antecedents.",
            "Determine membership degree for crisp inputs."
        ],
        answer: "Convert aggregated fuzzy output to a single crisp number."
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "In 'IF service is poor OR food is bad THEN tip is cheap', what is 'service is poor OR food is bad'? 📜",
        options: [
            "Consequent",
            "Fuzzy output",
            "Antecedent",
            "Membership function"
        ],
        answer: "Antecedent"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "In 'IF temperature is hot THEN fan_speed is high', what is 'fan_speed is high'? 💨",
        options: [
            "Antecedent",
            "Crisp input",
            "Consequent",
            "Fuzzifier"
        ],
        answer: "Consequent"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "How is a multi-part antecedent (e.g., 'IF x is low AND y is high') resolved to one degree of support? 🔗",
        options: [
            "Choose part with highest linguistic importance.",
            "Apply fuzzy logic operators (min for AND, max for OR) to parts' membership degrees.",
            "Average membership degrees of all parts.",
            "Convert all parts to crisp values first."
        ],
        answer: "Apply fuzzy logic operators (min for AND, max for OR) to parts' membership degrees."
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What does the 'Knowledge Base' in a Fuzzy Expert System (FIS) primarily contain? 🧠",
        options: [
            "Only historical input-output data.",
            "Fuzzification/defuzzification algorithms.",
            "Fuzzy rules and MFs for fuzzy sets.",
            "Hardware specs for running the system."
        ],
        answer: "Fuzzy rules and MFs for fuzzy sets."
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Correct sequence of main operations in a fuzzy expert system? 🔄",
        options: [
            "Defuzzification, Fuzzification, Rule Evaluation, Aggregation.",
            "Fuzzification, Rule Evaluation, Aggregation, Defuzzification.",
            "Aggregation, Fuzzification, Defuzzification, Rule Evaluation.",
            "Rule Evaluation, Defuzzification, Fuzzification, Aggregation."
        ],
        answer: "Fuzzification, Rule Evaluation, Aggregation, Defuzzification."
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What types of problems or systems is fuzzy logic well-suited for? 🛠️",
        options: [
            "Problems needing absolute precision and binary outcomes.",
            "Systems easily defined by conventional math models.",
            "Control/decision problems with imprecise info or not easily defined by strict math.",
            "Tasks with only large-scale numerical computation, no ambiguity."
        ],
        answer: "Control/decision problems with imprecise info or not easily defined by strict math."
    }
];