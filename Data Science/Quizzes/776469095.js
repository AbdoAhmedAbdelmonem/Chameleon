let question=[
    {
        numb: 1,type:"Multiple Choice",
        question: "What is the 'IF' part in an IF-THEN rule called?",
        answer: "B) Precondition",
        options:[
            "A) Consequent",
            "B) Precondition",
            "C) Condition",
            "D) Rule-set"
        ]
    },
    {
        numb: 2,type:"Multiple Choice",
        question: "How is the accuracy of a rule calculated?",
        answer: "B) ncorrect / ncovers",
        options:[
            "A) ncovers / |D|",
            "B) ncorrect / ncovers",
            "C) ncovers / ncorrect",
            "D) |D| / ncorrect"
        ]
    },
    {
        numb: 3,type:"Multiple Choice",
        question: "What does the support of an association rule represent?",
        answer: "B) Percentage of transactions that contain X ∪ Y",
        options:[
            "A) Ratio of transactions that contain X to total transactions",
            "B) Percentage of transactions that contain X ∪ Y",
            "C) Percentage of transactions that contain X only",
            "D) Ratio of transactions that contain Y to total transactions"
        ]
    },
    {
        numb: 4,type:"Multiple Choice",
        question: "How is confidence for an association rule calculated?",
        answer: "A) Support of X → Y / Support of X",
        options:[
            "A) Support of X → Y / Support of X",
            "B) Support of X / Support of X → Y",
            "C) Support of Y / Support of X",
            "D) Support of X / Support of Y"
        ]
    },
    {
        numb: 5,type:"Multiple Choice",
        question: "What is the main purpose of using association rules in data mining?",
        answer: "B) To discover relationships between variables in large datasets",
        options:[
            "A) To predict future outcomes based on historical data",
            "B) To discover relationships between variables in large datasets",
            "C) To cluster similar data points together",
            "D) To reduce the dimensionality of the data"
        ]
    },
    {
        numb: 6,type:"Multiple Choice",
        question: "Is confidence a symmetric measure?",
        answer: "B) No",
        options:[
            "A) Yes",
            "B) No",
            "C) Often",
            "D) Can't identify"
        ]
    },
    {
        numb: 7,type:"Multiple Choice",
        question: "The Apriori algorithm is primarily used for which purpose?",
        answer: "B) Association rule mining",
        options:[
            "A) Classification",
            "B) Association rule mining",
            "C) Clustering",
            "D) Regression"
        ]
    },
    {
        numb: 8,type:"Multiple Choice",
        question: "What is the first step in the Apriori algorithm?",
        answer: "B) Item set generation",
        options:[
            "A) Association rule generation",
            "B) Item set generation",
            "C) Confidence calculation",
            "D) Support calculation"
        ]
    },
    {
        numb: 9,type:"Multiple Choice",
        question: "What happens to attribute-value combinations that do not meet the coverage requirement in Apriori?",
        answer: "B) They are discarded",
        options:[
            "A) They are promoted to the next level",
            "B) They are discarded",
            "C) They are re-calculated",
            "D) They are marked for review"
        ]
    },
    {
        numb: 10,type:"Multiple Choice",
        question: "Which item set had the highest support in Example 3?",
        answer: "B) {Jam, Diaper}",
        options:[
            "A) {Jam, Diaper, Baby Powder, Bread, Umbrella}",
            "B) {Jam, Diaper}",
            "C) {Jam, Diaper, Milk}",
            "D) {Diaper, Jam, Bread}"
        ],image:"../../../MDA/ex3.png",
    },

    {
        numb: 11,type:"Multiple Choice",
        question: "What is the purpose of scanning the database in the Apriori algorithm?",
        answer: "B) To count the frequency of item sets",
        options:[
            "A) To find the largest item sets",
            "B) To count the frequency of item sets",
            "C) To eliminate infrequent items",
            "D) To validate association rules"
        ]
    },
    {
        numb: 12,type:"Multiple Choice",
        question: "How many candidate item sets are listed in the second iteration of Example 3?",
        answer: "D) 5",
        options:[
            "A) 2",
            "B) 3",
            "C) 4",
            "D) 5"
        ],image:"../../../MDA/ex3.png",
    },
    {
        numb: 13,type:"Multiple Choice",
        question: "Which of the following is a correct association rule derived from Example 3?",
        answer: "B) Diaper → Jam",
        options:[
            "A) Bread → Umbrella",
            "B) Diaper → Jam",
            "C) Spero spates → Diaper",
            "D) Detergent → Milk"
        ],image:"../../../MDA/ex3.png",
    },
    {
        numb: 14,type:"Multiple Choice",
        question: "What is the minimum confidence threshold used in the final association rules in Example 3?",
        answer: "C) 70%",
        options:[
            "A) 50%",
            "B) 60%",
            "C) 70%",
            "D) 80%"
        ],image:"../../../MDA/ex3.png",
    },
    {
        numb: 15,type:"Multiple Choice",
        question: "Which item was present in all iterations of the example's Apriori process?",
        answer: "B) Jam",
        options:[
            "A) Milk",
            "B) Jam",
            "C) Diaper",
            "D) Detergent"
        ],image:"../../../MDA/ex3.png",
    },
    {
        numb: 16,type:"Multiple Choice",
        question: "What is a major advantage of association rules?",
        answer: "B) They can find relationships in large datasets without predefined variables",
        options:[
            "A) They require a predefined dependent variable",
            "B) They can find relationships in large datasets without predefined variables",
            "C) They always yield the most accurate predictions",
            "D) They eliminate the need for data preprocessing"
        ]
    },
    {
        numb: 17,type:"Multiple Choice",
        question: "How many strong association rules were derived in Example 3?",
        answer: "C) 4",
        options:[
            "A) 2",
            "B) 3",
            "C) 4",
            "D) 5"
        ],image:"../../../MDA/ex3.png",
    },
    {
        numb: 18,type:"Multiple Choice",
        question: "Which item combination has the highest confidence in the final rules?",
        answer: "C) Milk → Jam",
        options:[
            "A) Diaper → Jam",
            "B) Jam → Diaper",
            "C) Milk → Jam",
            "D) Baby Powder → Diaper"
        ],image:"../../../MDA/ex3.png",
    },
    {
        numb: 19,type:"Multiple Choice",
        question: "What does 'min_sup' refer to in the context of association rule mining?",
        answer: "A) Minimum support",
        options:[
            "A) Minimum support",
            "B) Minimum supply",
            "C) Minimum supplement",
            "D) Minimum supervision"
        ]
    },
    {
        numb: 20,type:"Multiple Choice",
        question: "Which of the following best describes an 'item set'?",
        answer: "C) A set of attribute-value combinations",
        options:[
            "A) A collection of related rules",
            "B) A group of transactions",
            "C) A set of attribute-value combinations",
            "D) A summary of a dataset"
        ]
    }
]
