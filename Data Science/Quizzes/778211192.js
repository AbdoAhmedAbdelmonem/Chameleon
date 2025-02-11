let question=[
    {
        numb: 1,type:"Multiple Choice",
        question: "What is the first step in building a decision tree?",
        answer: "c) Calculate entropy using frequency tables",
        options: [
            "a) Calculate gain for each attribute",
            "b) Define the root node",
            "c) Calculate entropy using frequency tables",
            "d) Create a table for each attribute"
        ],
    },
    {
        numb: 2,type:"Multiple Choice",
        question: "In a decision tree, what does a high gain value indicate?",
        answer: "b) The attribute is more significant",
        options: [
            "a) The attribute is less significant",
            "b) The attribute is more significant",
            "c) The attribute is irrelevant",
            "d) The attribute has the least entropy"
        ],
    },
    {
        numb: 3,type:"Multiple Choice",
        question: "Which formula is used to calculate the entropy for an attribute in a decision tree?",
        answer: "c) Entropy = Σ -p * log2(p)",
        options: [
            "a) Gain(A) = Info(D) - Info(A)",
            "b) Info(A) = -p1 * log2(p1) - p2 * log2(p2)",
            "c) Entropy = Σ -p * log2(p)",
            "d) Gain = Info(D) - Σ Info(A)"
        ],
    },
    {
        numb: 4,type:"Multiple Choice",
        question: "What is the Info(D) for a decision tree with Age(<=30) if the total records are 5 and Yes = 2, No = 3?",
        answer: "b) 0.346",
        options: [
            "a) 0.259",
            "b) 0.346",
            "c) 0.328",
            "d) 0.703"
        ],image:"../../../MDA/entropy.png"
    },
    {
        numb: 5,type:"Multiple Choice",
        question: "Which attribute was found to have the largest gain in the example decision tree?",
        answer: "a) Age",
        options: [
            "a) Age",
            "b) Income",
            "c) Student",
            "d) Credit rating"
        ],image:"../../../MDA/entropy.png"
    },
    {
        numb: 6,type:"Multiple Choice",
        question: "Which attribute is used as the root node in the example provided?",
        answer: "a) Age",
        options: [
            "a) Age",
            "b) Income",
            "c) Student",
            "d) Credit rating"
        ],image: "../../../MDA/entropy.png"
    },
    {
        numb: 7,type:"Multiple Choice",
        question: "How do you calculate Gain(Student) in a decision tree?",
        answer: "a) Gain(Student) = Info(D) - Info(D) Total Student",
        options: [
            "a) Gain(Student) = Info(D) - Info(D) Total Student",
            "b) Gain(Student) = Info(D) Total Student - Info(D)",
            "c) Gain(Student) = Info(A) - Σ Info(Student)",
            "d) Gain(Student) = Σ Info(Student) - Info(D)"
        ],image: "../../../MDA/entropy.png"
    },
    {
        numb: 8,type:"Multiple Choice",
        question: "What is the formula to calculate Gain(Income) after determining Info(D) for different income levels?",
        answer: "b) Gain(Income) = Info(D) - Σ Info(D) Total Income",
        options: [
            "a) Gain(Income) = Σ Info(D) Total Income",
            "b) Gain(Income) = Info(D) - Σ Info(D) Total Income",
            "c) Gain(Income) = Info(D) Total Income - Σ Info(D)",
            "d) Gain(Income) = Σ Info(Income) - Info(D)"
        ],image: "../../../MDA/entropy.png"
    },
    {
        numb: 9,type:"Multiple Choice",
        question: "What is the entropy (Info(D)) calculated for the attribute 'Income' when p(high) = 4/14, p(medium) = 6/14, and p(low) = 4/14?",
        answer: "b) 0.9111",
        options: [
            "a) 0.9403",
            "b) 0.9111",
            "c) 0.2857",
            "d) 0.3936"
        ],image: "../../../MDA/entropy.png"
    },
    {
        numb: 10,type:"Multiple Choice",
        question: "What is the gain calculated for the attribute 'Credit_rating' when the Info(D) Total Credit_rating is 0.8922?",
        answer: "a) 0.0481",
        options: [
            "a) 0.0481",
            "b) 0.9111",
            "c) 0.1519",
            "d) 0.2857"
        ],image: "../../../MDA/entropy.png"
    },
    {
        numb: 11,type:"Multiple Choice",
        question: "What is the calculated Gain(Age) when Age is divided into <=30, 31..40, and >40?",
        answer: "a) 0.2467",
        options: [
            "a) 0.2467",
            "b) 0.1519",
            "c) 0.0481",
            "d) 0.0292"
        ],image: "../../../MDA/entropy.png"
    },
    {
        numb: 12,type:"Multiple Choice",
        question: "Which of the following statements is correct about entropy in decision trees?",
        answer: "a) Entropy increases with more uncertainty",
        options: [
            "a) Entropy increases with more uncertainty",
            "b) Entropy is the same for all attributes",
            "c) Entropy decreases with more uncertainty",
            "d) Entropy is irrelevant to decision tree construction"
        ],
    },
    {
        numb: 13,type:"Multiple Choice",
        question: "How do you calculate the total Info(D) for an attribute after splitting it into categories?",
        answer: "a) Sum the individual Info(D) values for each category",
        options: [
            "a) Sum the individual Info(D) values for each category",
            "b) Multiply the individual Info(D) values for each category",
            "c) Divide the individual Info(D) values for each category",
            "d) Subtract the individual Info(D) values from the original Info(D)"
        ],
    },
    {
        numb: 14,type:"Multiple Choice",
        question: "What is the purpose of calculating gain in a decision tree?",
        answer: "c) To measure the effectiveness of an attribute in classifying the data",
        options: [
            "a) To find the attribute with the highest uncertainty",
            "b) To identify the root node",
            "c) To measure the effectiveness of an attribute in classifying the data",
            "d) To calculate entropy for the entire dataset"
        ],
    },
    {
        numb: 15,type:"Multiple Choice",
        question: "Which of the following steps is necessary after calculating entropy for different attributes?",
        answer: "c) Calculate the gain for each attribute",
        options: [
            "a) Choose the attribute with the lowest gain",
            "b) Choose the attribute with the highest entropy",
            "c) Calculate the gain for each attribute",
            "d) Build a frequency table"
        ],
    },
    {
        numb: 16,type:"Multiple Choice",
        question: "In the context of decision trees, what does the term 'Information Gain' refer to?",
        answer: "a) The decrease in entropy after a dataset is split on an attribute",
        options: [
            "a) The decrease in entropy after a dataset is split on an attribute",
            "b) The increase in entropy after a dataset is split on an attribute",
            "c) The sum of all entropy values in the dataset",
            "d) The maximum entropy in a decision tree"
        ],
    },

    {
        numb: 17,type:"Multiple Choice",
        question: "How is the gain of a node in a decision tree affected if the attribute perfectly classifies the data?",
        answer: "b) The gain is maximum",
        options: [
            "a) The gain is zero",
            "b) The gain is maximum",
            "c) The gain is negative",
            "d) The gain is irrelevant"
        ],
    },
    {
        numb: 18,type:"Multiple Choice",
        question: "What does Info(D) represent in the context of decision trees?",
        answer: "a) The total entropy of the dataset before splitting",
        options: [
            "a) The total entropy of the dataset before splitting",
            "b) The information loss after a split",
            "c) The total gain after splitting",
            "d) The information gain of a node"
        ],
    },
    {
        numb: 19,type:"Multiple Choice",
        question: "Which of the following methods can be used to reduce overfitting in a decision tree?",
        answer: "c) Pruning the tree",
        options: [
            "a) Increasing the depth of the tree",
            "b) Using more attributes",
            "c) Pruning the tree",
            "d) Reducing the number of categories for attributes"
        ],
    },
    {
        numb: 20,type:"Multiple Choice",
        question: "What is the result of splitting a dataset on an attribute with zero gain?",
        answer: "d) No reduction in entropy",
        options: [
            "a) Maximum reduction in entropy",
            "b) Increase in entropy",
            "c) Perfect classification",
            "d) No reduction in entropy"
        ],
    },
]
