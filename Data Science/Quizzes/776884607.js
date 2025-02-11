let question=[
    {
        numb: 1,type:"Multiple Choice",
        question: "What is classification in the context of data science?",
        answer: "B) A form of supervised learning",
        options: [
            "A) A form of unsupervised learning",
            "B) A form of supervised learning",
            "C) A form of reinforcement learning",
            "D) A form of deep learning"
        ],
    },
    {
        numb: 2,type:"Multiple Choice",
        question: "What is the first step in the data classification process?",
        answer: "C) Learning step",
        options: [
            "A) Data cleaning",
            "B) Model validation",
            "C) Learning step",
            "D) Prediction step"
        ],
    },
    {
        numb: 3,type:"Multiple Choice",
        question: "In the classification process, what is the role of the 'training set'?",
        answer: "B) To construct the classification model",
        options: [
            "A) To validate the model",
            "B) To construct the classification model",
            "C) To predict class labels for new data",
            "D) To estimate the accuracy of the model"
        ],
    },
    {
        numb: 4,type:"Multiple Choice",
        question: "What does the 'classification step' involve?",
        answer: "B) Predicting class labels for given data",
        options: [
            "A) Constructing the model",
            "B) Predicting class labels for given data",
            "C) Cleaning and preparing the data",
            "D) Validating the model"
        ],
    },
    {
        numb: 5,type:"Multiple Choice",
        question: "What is a decision tree?",
        answer: "B) A hierarchical data structure used for classification",
        options: [
            "A) A type of regression model",
            "B) A hierarchical data structure used for classification",
            "C) A method used for clustering",
            "D) A data visualization technique"
        ],
    },
    {
        numb: 6,type:"Multiple Choice",
        question: "Which of the following is true about decision trees?",
        answer: "C) They can handle both continuous and discrete input variables",
        options: [
            "A) They can only be used with categorical data",
            "B) They are only applicable for binary outcomes",
            "C) They can handle both continuous and discrete input variables",
            "D) They cannot be converted into decision rules"
        ],
    },
    {
        numb: 7,type:"Multiple Choice",
        question: "What is the primary function of the leaf nodes in a decision tree?",
        answer: "C) To represent the outcome of the decision path",
        options: [
            "A) To represent the root of the tree",
            "B) To store decision-making criteria",
            "C) To represent the outcome of the decision path",
            "D) To split the data into subgroups"
        ],
    },
    {
        numb: 8,type:"Multiple Choice",
        question: "In decision trees, what are the internal nodes responsible for?",
        answer: "C) Making decisions based on a variable or attribute",
        options: [
            "A) Storing the root of the tree",
            "B) Representing the outcome of the decision path",
            "C) Making decisions based on a variable or attribute",
            "D) Representing the final classification result"
        ],
    },
    {
        numb: 9,type:"Multiple Choice",
        question: "What is a major advantage of decision trees?",
        answer: "C) They map nicely to a set of production rules",
        options: [
            "A) They are difficult to interpret",
            "B) They are limited to numerical data only",
            "C) They map nicely to a set of production rules",
            "D) They are unstable with slight variations in the training set"
        ],
    },
    {
        numb: 10,type:"Multiple Choice",
        question: "What is a major disadvantage of decision trees?",
        answer: "B) They are limited to one output attribute",
        options: [
            "A) They cannot handle categorical data",
            "B) They are limited to one output attribute",
            "C) They are computationally inefficient",
            "D) They are not applicable to real problems"
        ],
    },
    {
        numb: 11,type:"Multiple Choice",
        question: "How is accuracy estimated in a classification model?",
        answer: "B) By using the test set to validate the model",
        options: [
            "A) By comparing the training set with the model",
            "B) By using the test set to validate the model",
            "C) By measuring the number of nodes in the decision tree",
            "D) By evaluating the leaf nodes"
        ],
    },
    {
        numb: 12,type:"Multiple Choice",
        question: "What is the role of the 'validation set' in classification?",
        answer: "D) To select the best model",
        options: [
            "A) To construct the model",
            "B) To train the model",
            "C) To test the accuracy of the model",
            "D) To select the best model"
        ],
    },
    {
        numb: 13,type:"Multiple Choice",
        question: "Which of the following is an example of a classification technique?",
        answer: "C) Decision Trees",
        options: [
            "A) K-Means Clustering",
            "B) Principal Component Analysis",
            "C) Decision Trees",
            "D) Linear Regression"
        ],
    },
    {
        numb: 14,type:"Multiple Choice",
        question: "What type of decision tree is used to segment observations into more homogenous groups?",
        answer: "B) Classification Tree",
        options: [
            "A) Regression Tree",
            "B) Classification Tree",
            "C) Clustering Tree",
            "D) Random Forest"
        ],
    },
    {
        numb: 15,type:"Multiple Choice",
        question: "What type of outcomes are typically used in classification trees?",
        answer: "B) Binary or categorical",
        options: [
            "A) Continuous",
            "B) Binary or categorical",
            "C) Time-series",
            "D) Unstructured"
        ],
    },
    {
        numb: 16,type:"Multiple Choice",
        question: "Which term refers to the decision points in a decision tree?",
        answer: "D) Internal nodes",
        options: [
            "A) Leaf nodes",
            "B) Root nodes",
            "C) Branches",
            "D) Internal nodes"
        ],
    },
    {
        numb: 17,type:"Multiple Choice",
        question: "In a binary tree, how many children can a node have?",
        answer: "B) Two",
        options: [
            "A) One",
            "B) Two",
            "C) Three",
            "D) Any number"
        ],
    },
    {
        numb: 18,type:"Multiple Choice",
        question: "What is the 'root node' in a decision tree?",
        answer: "C) The top node that occupies the highest hierarchy",
        options: [
            "A) The node with the lowest hierarchy",
            "B) The node that stores the classification results",
            "C) The top node that occupies the highest hierarchy",
            "D) The node that connects the branches"
        ],
    },
    {
        numb: 19,type:"Multiple Choice",
        question: "What happens if a decision tree is too 'deep'?",
        answer: "B) It is likely to be overfitted",
        options: [
            "A) It may be underfitted",
            "B) It is likely to be overfitted",
            "C) It will have fewer leaf nodes",
            "D) It will be computationally efficient"
        ],
    },
    {
        numb: 20,type:"Multiple Choice",
        question: "Which of the following is a reason to choose decision trees?",
        answer: "D) They handle variables with non-linear effects on outcomes",
        options: [
            "A) They are not robust with redundant variables",
            "B) They require a large amount of computational resources",
            "C) They naturally handle missing values",
            "D) They handle variables with non-linear effects on outcomes"
        ],
    },
    {
        numb: 21,type:"Multiple Choice",
        question: "What is the purpose of 'branches' in a decision tree?",
        answer: "D) To represent the outcome of a decision",
        options: [
            "A) To store the final classification result",
            "B) To connect the nodes",
            "C) To make decisions based on attributes",
            "D) To represent the outcome of a decision"
        ],
    },
    {
        numb: 22,type:"Multiple Choice",
        question: "What is a 'degenerate tree'?",
        answer: "B) A tree with a single pathway from root to its one leaf",
        options: [
            "A) A tree with more than two children per node",
            "B) A tree with a single pathway from root to its one leaf",
            "C) A tree with a root node and no branches",
            "D) A tree that is underfitted"
        ],
    },
    {
        numb: 23,type:"Multiple Choice",
        question: "Which of the following can be mapped to a set of production rules?",
        answer: "C) Decision Trees",
        options: [
            "A) Regression analysis",
            "B) Principal Component Analysis",
            "C) Decision Trees",
            "D) Clustering algorithms"
        ],
    },
    {
        numb: 24,type:"Multiple Choice",
        question: "Which of the following is a drawback of decision trees?",
        answer: "B) They can only handle categorical outcomes",
        options: [
            "A) They are easy to understand",
            "B) They can only handle categorical outcomes",
            "C) They cannot process numerical data",
            "D) They are computationally efficient"
        ],
    },
    {
        numb: 25,type:"Multiple Choice",
        question: "What is the main purpose of 'leaf nodes' in a decision tree?",
        answer: "B) To store the final outcome of all prior decisions",
        options: [
            "A) To represent decision-making criteria",
            "B) To store the final outcome of all prior decisions",
            "C) To connect the root node to other nodes",
            "D) To split the data into subgroups"
        ],
    },

]
