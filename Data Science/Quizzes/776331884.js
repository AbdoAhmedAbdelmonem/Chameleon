let question=[
    {
        numb: 1,type:"Multiple Choice",
        question: "What is the purpose of association rules in data analysis?",
        answer: "B) To discover relationships among data items",
        options: [
            "A) To predict future trends",
            "B) To discover relationships among data items",
            "C) To classify data into categories",
            "D) To sort data alphabetically"
        ]
    },
    {
        numb: 2,type:"Multiple Choice",
        question: "Which of the following is an example of an association rule?",
        answer: "A) If X is true, then Y is true",
        options: [
            "A) If X is true, then Y is true",
            "B) If X is false, then Y is false",
            "C) X and Y are independent",
            "D) X and Y are mutually exclusive"
        ]
    },
    {
        numb: 3,type:"Multiple Choice",
        question: "Association rules are most commonly used in which of the following?",
        answer: "B) Market basket analysis",
        options: [
            "A) Sentiment analysis",
            "B) Market basket analysis",
            "C) Image classification",
            "D) Time series analysis"
        ]
    },
    {
        numb: 4,type:"Multiple Choice",
        question: "What is a key output of market basket analysis?",
        answer: "B) Customer purchase patterns",
        options: [
            "A) Predictions about future sales",
            "B) Customer purchase patterns",
            "C) Classification of product categories",
            "D) Recommendations for inventory management"
        ]
    },
    {
        numb: 5,type:"Multiple Choice",
        question: "Which algorithm is used for learning association rules?",
        answer: "A) Sequential Covering Algorithm",
        options: [
            "A) Sequential Covering Algorithm",
            "B) Decision Tree Algorithm",
            "C) K-means Clustering",
            "D) Linear Regression"
        ]
    },
    {
        numb: 6,type:"Multiple Choice",
        question: "In association rules, what does the 'IF' part represent?",
        answer: "B) Rule Precondition",
        options: [
            "A) Rule Consequent",
            "B) Rule Precondition",
            "C) Rule Hypothesis",
            "D) Rule Conclusion"
        ]
    },
    {
        numb: 7,type:"Multiple Choice",
        question: "What is the measure used to assess the accuracy of a rule in association rule mining?",
        answer: "A) Confidence",
        options: [
            "A) Confidence",
            "B) Support",
            "C) Coverage",
            "D) Likelihood"
        ]
    },
    {
        numb: 8,type:"Multiple Choice",
        question: "In association rules, confidence represents:",
        answer: "B) The likelihood that Y occurs when X is observed",
        options: [
            "A) The frequency of the rule",
            "B) The likelihood that Y occurs when X is observed",
            "C) The percentage of the data covered by the rule",
            "D) The total number of transactions"
        ]
    },
    {
        numb: 9,type:"Multiple Choice",
        question: "Which of the following is an example of rule confidence?",
        answer: "B) 60% of customers who buy milk also buy cookies",
        options: [
            "A) 10% of transactions include both milk and bread",
            "B) 60% of customers who buy milk also buy cookies",
            "C) 30% of products are sold during promotions",
            "D) 50% of orders are placed online"
        ]
    },
    {
        numb: 10,type:"Multiple Choice",
        question: "What is rule support in association rule mining?",
        answer: "D) The percentage of transactions that meet a rule's conditions",
        options: [
            "A) The ratio of transactions that contain a specific item",
            "B) The total number of transactions",
            "C) The minimum percentage of transactions containing both X and Y",
            "D) The percentage of transactions that meet a rule's conditions"
        ]
    },
    {
        numb: 11,type:"Multiple Choice",
        question: "Which metric determines the frequency of a rule in transactions?",
        answer: "B) Support",
        options: [
            "A) Coverage",
            "B) Support",
            "C) Confidence",
            "D) Likelihood"
        ]
    },
    {
        numb: 12,type:"Multiple Choice",
        question: "A recommender system uses association rules to suggest products based on:",
        answer: "B) Historical customer purchasing behavior",
        options: [
            "A) Popularity of the products",
            "B) Historical customer purchasing behavior",
            "C) Supplier recommendations",
            "D) Sales targets"
        ]
    },
    {
        numb: 13,type:"Multiple Choice",
        question: "Which of the following is an example of a market basket analysis result?",
        answer: "A) People who buy milk are 20% more likely to buy bread",
        options: [
            "A) People who buy milk are 20% more likely to buy bread",
            "B) Customers who buy shoes prefer size 9",
            "C) On average, customers purchase 3 items per visit",
            "D) Customers are likely to return within 30 days"
        ]
    },
    {
        numb: 14,type:"Multiple Choice",
        question: "In market basket analysis, confidence is defined as:",
        answer: "B) The ratio of transactions with both items present to the total transactions containing one item",
        options: [
            "A) The total number of transactions involving a specific item",
            "B) The ratio of transactions with both items present to the total transactions containing one item",
            "C) The frequency of an item appearing in transactions",
            "D) The likelihood of a rule being useful"
        ]
    },
    {
        numb: 15,type:"Multiple Choice",
        question: "Which of the following is an example of rule confidence?",
        answer: "A) 20% of people who purchase milk also purchase bread",
        options: [
            "A) 20% of people who purchase milk also purchase bread",
            "B) 50% of transactions include at least two items",
            "C) 30% of items are bought in bulk",
            "D) 40% of customers prefer shopping on weekends"
        ]
    },
    {
        numb: 16,type:"Multiple Choice",
        question: "If 100 transactions involve purchasing milk, and 25 of these transactions also include bread, what is the confidence of the rule 'If milk, then bread'?",
        answer: "B) 25%",
        options: [
            "A) 15%",
            "B) 25%",
            "C) 50%",
            "D) 75%"
        ]
    },
    {
        numb: 17,type:"Multiple Choice",
        question: "Which of the following is an example of using association rules in a recommender system?",
        answer: "A) Predicting which movies a customer will like based on their purchase history",
        options: [
            "A) Predicting which movies a customer will like based on their purchase history",
            "B) Sorting products by price",
            "C) Showing the most popular items in a store",
            "D) Grouping products into categories"
        ]
    },
    {
        numb: 18,type:"Multiple Choice",
        question: "In association rules, what does a high support value indicate?",
        answer: "A) The rule involves a large portion of the database",
        options: [
            "A) The rule involves a large portion of the database",
            "B) The rule is highly accurate",
            "C) The rule is rarely useful",
            "D) The rule is a weak indicator of relationships"
        ]
    },
    {
        numb: 19,type:"Multiple Choice",
        question: "Association rules are frequently used to:",
        answer: "C) Identify interesting patterns in large datasets",
        options: [
            "A) Segment data into clusters",
            "B) Generate sales forecasts",
            "C) Identify interesting patterns in large datasets",
            "D) Organize data into predefined categories"
        ]
    },
    {
        numb: 20,type:"Multiple Choice",
        question: "Which method is used to measure the significance of an association rule?",
        answer: "C) Support and Confidence",
        options: [
            "A) Coverage",
            "B) Lift",
            "C) Support and Confidence",
            "D) Correlation"
        ]
    },
    {
        numb: 21,type:"Multiple Choice",
        question: "In association rule mining, which of the following is an example of minimum support?",
        answer: "A) The minimum percentage of transactions that contain both X and Y",
        options: [
            "A) The minimum percentage of transactions that contain both X and Y",
            "B) The number of transactions needed to qualify for analysis",
            "C) The probability of future purchases",
            "D) The ratio of sales to marketing costs"
        ]
    },
    {
        numb: 22,type:"Multiple Choice",
        question: "Which of the following is an example of an antecedent in association rules?",
        answer: "B) The itemset that leads to the consequent",
        options: [
            "A) The action taken based on the rule",
            "B) The itemset that leads to the consequent",
            "C) The percentage of transactions that meet the rule",
            "D) The products likely to be bought together"
        ]
    },
    {
        numb: 23,type:"Multiple Choice",
        question: "In market basket analysis, how is confidence calculated?",
        answer: "B) By dividing the number of transactions containing both X and Y by the number of transactions containing X",
        options: [
            "A) By dividing the number of transactions containing both X and Y by the total number of transactions",
            "B) By dividing the number of transactions containing both X and Y by the number of transactions containing X",
            "C) By subtracting the support from the lift",
            "D) By multiplying the support and coverage"
        ]
    },
    {
        numb: 24,type:"Multiple Choice",
        question: "Which of the following best describes an association rule?",
        answer: "B) A pattern that describes how frequently items are purchased together",
        options: [
            "A) A correlation between two unrelated events",
            "B) A pattern that describes how frequently items are purchased together",
            "C) A process for dividing data into subsets",
            "D) A model used for regression analysis"
        ]
    },
    {
        numb: 25,type:"Multiple Choice",
        question: "What is the main goal of market basket analysis?",
        answer: "A) To increase sales by recommending related products",
        options: [
            "A) To increase sales by recommending related products",
            "B) To classify products into categories",
            "C) To reduce transaction processing times",
            "D) To organize data for inventory purposes"
        ]
    }
]
