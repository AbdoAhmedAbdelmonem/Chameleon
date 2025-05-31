let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary reason stated for the necessity of Data Mining?",
        options: [
            "Lack of data storage",
            "Too much knowledge, not enough data",
            "Explosive growth of data but scarcity of knowledge",
            "Slow data collection tools"
        ],
        answer: "Explosive growth of data but scarcity of knowledge"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "According to the lecture, what is Data Mining essentially a search for?",
        options: [
            "Random data entries",
            "Relationships and global patterns hidden in large databases",
            "Small, easily visible datasets",
            "Outdated information"
        ],
        answer: "Relationships and global patterns hidden in large databases"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is an alternative name for Data Mining mentioned in the lecture?",
        options: [
            "Data Warehousing",
            "Knowledge Discovery in Databases",
            "Data Collection",
            "Information Processing"
        ],
        answer: "Knowledge Discovery in Databases"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which of the following is NOT considered a data preprocessing step in the knowledge discovery process?",
        options: [
            "Data cleaning",
            "Data integration",
            "Pattern Generation",
            "Data selection"
        ],
        answer: "Pattern Generation"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is the core of the knowledge discovery process?",
        options: [
            "Data cleaning",
            "Data mining",
            "Knowledge presentation",
            "Data selection"
        ],
        answer: "Data mining"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "What is a Data Warehouse defined as?",
        options: [
            "A temporary storage for raw data",
            "A single, complete, and consistent store of data for end-user understanding and business context",
            "A system for real-time transaction processing",
            "A collection of unstructured data"
        ],
        answer: "A single, complete, and consistent store of data for end-user understanding and business context"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "Which of these is a potential application of Data Mining mentioned?",
        options: [
            "Manual data entry",
            "Market basket analysis",
            "Basic arithmetic calculations",
            "Writing software code"
        ],
        answer: "Market basket analysis"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What is the key difference highlighted between Data Mining and Data Warehousing?",
        options: [
            "Data mining stores data, data warehousing finds patterns",
            "Data mining finds patterns and forecasts, data warehousing extracts, cleans, and stores data",
            "They are synonyms",
            "Data mining is a subset of data warehousing"
        ],
        answer: "Data mining finds patterns and forecasts, data warehousing extracts, cleans, and stores data"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Data Science is described as using which of the following areas?",
        options: [
            "Only computer science",
            "Computer science, statistics, machine learning, visualization, and human-computer interactions",
            "Only statistics and visualization",
            "Only machine learning"
        ],
        answer: "Computer science, statistics, machine learning, visualization, and human-computer interactions"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What is the relationship between Data Science and Data Mining according to the lecture?",
        options: [
            "Data Mining is an umbrella term for Data Science",
            "Data Science is only a small component of Data Mining",
            "Data Mining is only a part of Data Science",
            "They are completely unrelated fields"
        ],
        answer: "Data Mining is only a part of Data Science"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which of the following is a type of data that Data Mining can be applied to?",
        options: [
            "Only simple text files",
            "Relational databases, data warehouses, transactional databases, stream data, and WWW",
            "Only numerical data",
            "Handwritten notes"
        ],
        answer: "Relational databases, data warehouses, transactional databases, stream data, and WWW"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What are 'Facts' defined as in the context of learning levels?",
        options: [
            "Complex theories",
            "Simple statements of truth",
            "Hypothetical scenarios",
            "Opinions"
        ],
        answer: "Simple statements of truth"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What do 'Concepts' refer to in the four levels of learning?",
        options: [
            "Individual data points",
            "Set of objects, symbols, or events grouped because they share common characteristics",
            "Random occurrences",
            "Abstract ideas without any shared traits"
        ],
        answer: "Set of objects, symbols, or events grouped because they share common characteristics"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What is 'Supervised Learning' in data mining?",
        options: [
            "Building models from data without predefined classes",
            "Using models to identify objects of similar structure and determine the outcome",
            "Learning without any human intervention",
            "Randomly exploring data"
        ],
        answer: "Using models to identify objects of similar structure and determine the outcome"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Which of the following is an example of a Predictive Data Mining Task?",
        options: [
            "Summarization",
            "Clustering",
            "Classification",
            "Association Rules"
        ],
        answer: "Classification"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which of the following is an example of a Descriptive Data Mining Task?",
        options: [
            "Regression",
            "Time Series Analysis",
            "Clustering",
            "Prediction"
        ],
        answer: "Clustering"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "The process of combining multiple data sources is known as:",
        options: [
            "Data cleaning",
            "Data integration",
            "Data selection",
            "Data transformation"
        ],
        answer: "Data integration"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What is the purpose of 'Pattern evaluation' in the knowledge discovery process?",
        options: [
            "To remove noise from data",
            "To retrieve relevant data for analysis",
            "To identify truly interesting patterns representing knowledge",
            "To transform data into an appropriate form"
        ],
        answer: "To identify truly interesting patterns representing knowledge"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Fraud detection is listed as a potential application of Data Mining under which category?",
        options: [
            "Market analysis and management",
            "Risk analysis and management",
            "Other Applications",
            "Data analysis and decision support"
        ],
        answer: "Risk analysis and management"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What does 'Unsupervised Learning' in data mining involve?",
        options: [
            "Using predefined classes to build models",
            "Building models from data without predefined classes",
            "Focusing on predicting future outcomes",
            "Requiring constant human supervision"
        ],
        answer: "Building models from data without predefined classes"
    }
];
