let question = [
    {
        numb: 1,
        question: "What is the main difference between classification and clustering?",
        options: [
            "Classification uses known categories while clustering discovers unknown categories",
            "Clustering uses known categories while classification discovers unknown categories",
            "Both use known categories",
            "Both discover unknown categories"
        ],
        answer: "Classification uses known categories while clustering discovers unknown categories"
    },
    {
        numb: 2,
        question: "Which of the following is NOT a pattern recognition task ?",
        options: [
            "Classification",
            "Clustering",
            "Association Rule Discovery",
            "Dimensionality Reduction"
        ],
        answer: "Dimensionality Reduction"
    },
    {
        numb: 3,
        question: "What is the function of a linear classifier?",
        options: [
            "f(x,w,b) = tanh(w x + b)",
            "f(x,w,b) = sign(w x + b)",
            "f(x,w,b) = cos(w x + b)",
            "f(x,w,b) = exp(w x + b)"
        ],
        answer: "f(x,w,b) = sign(w x + b)"
    },
    {
        numb: 4,
        question: "What defines the margin of a linear classifier?",
        options: [
            "The distance between the classifier and the farthest point",
            "The width that the boundary could be increased before hitting a datapoint",
            "The number of support vectors",
            "The angle of the decision boundary"
        ],
        answer: "The width that the boundary could be increased before hitting a datapoint"
    },
    {
        numb: 5,
        question: "What are support vectors in SVM?",
        options: [
            "All training datapoints",
            "Only misclassified datapoints",
            "Datapoints that the margin pushes up against",
            "Randomly selected datapoints"
        ],
        answer: "Datapoints that the margin pushes up against"
    },
    {
        numb: 6,
        question: "Which approach is used for multi-class classification with SVM as mentioned in the lecture?",
        options: [
            "One-to-Rest approach",
            "Binary Trees approach",
            "Random Forest approach",
            "Neural Network approach"
        ],
        answer: "One-to-Rest approach"
    },
    {
        numb: 7,
        question: "In K-Nearest Neighbors, when is classification performed?",
        options: [
            "During training",
            "Before seeing any data",
            "When a new instance arrives",
            "Only during model evaluation"
        ],
        answer: "When a new instance arrives"
    },
    {
        numb: 8,
        question: "What is the formula for standardized variables in KNN?",
        options: [
            "X_s = (X - Mean)/StdDev",
            "X_s = X/Max",
            "X_s = (X - Min)/(Max - Min)",
            "X_s = X^2"
        ],
        answer: "X_s = (X - Mean)/StdDev"
    },
    {
        numb: 9,
        question: "What is the main advantage of distance-weighted KNN?",
        options: [
            "It gives more weight to farther points",
            "It gives more weight to nearby points",
            "It ignores distance completely",
            "It only considers the closest point"
        ],
        answer: "It gives more weight to nearby points"
    },
    {
        numb: 10,
        question: "Which of the following is NOT an advantage of KNN ?",
        options: [
            "Training is very fast",
            "Suits complex target functions",
            "Fast at query time",
            "Doesn't lose information"
        ],
        answer: "Fast at query time"
    },
    {
        numb: 11,
        question: "What happens when k=1 in KNN?",
        options: [
            "It becomes insensitive to noise",
            "It becomes very sensitive to noise",
            "It becomes a linear classifier",
            "It stops working"
        ],
        answer: "It becomes very sensitive to noise"
    },
    {
        numb: 12,
        question: "Which metric is calculated as (a + d)/(a + b + c + d) in classification?",
        options: [
            "Error Rate",
            "Accuracy",
            "Precision",
            "Recall"
        ],
        answer: "Accuracy"
    },
    {
        numb: 13,
        question: "What is Recall in classification metrics?",
        options: [
            "a/(a+c)",
            "a/(a+b)",
            "d/(c+d)",
            "(b+c)/(a+b+c+d)"
        ],
        answer: "a/(a+b)"
    },
    {
        numb: 14,
        question: "In KNN regression with k>1, how is the prediction made?",
        options: [
            "Take the maximum value of neighbors",
            "Take the minimum value of neighbors",
            "Take the average of neighbors' values",
            "Take the median of neighbors' values"
        ],
        answer: "Take the average of neighbors' values"
    },
    {
        numb: 15,
        question: "What does RMSE stand for in regression metrics?",
        options: [
            "Root Mean Square Error",
            "Relative Mean Squared Error",
            "Root Median Squared Error",
            "Relative Median Squared Error"
        ],
        answer: "Root Mean Square Error"
    },
    {
        numb: 16,
        question: "In k-fold cross-validation, how many partitions are used for testing in each iteration?",
        options: [
            "1",
            "k-1",
            "k",
            "All partitions"
        ],
        answer: "1"
    },
    {
        numb: 17,
        question: "What is the main difference between k-fold cross-validation and leave-one-out method?",
        options: [
            "k-fold uses k partitions while leave-one-out uses N partitions where N is the number of samples",
            "k-fold is faster than leave-one-out",
            "leave-one-out is less accurate than k-fold",
            "There is no difference"
        ],
        answer: "k-fold uses k partitions while leave-one-out uses N partitions where N is the number of samples"
    },
    {
        numb: 18,
        question: "What is the rationale behind ensemble learning?",
        options: [
            "To always use the same algorithm",
            "To combine learners that when combined have higher accuracy",
            "To reduce the number of features",
            "To make training faster"
        ],
        answer: "To combine learners that when combined have higher accuracy"
    },
    {
        numb: 19,
        question: "In the voting method for ensemble learning, what condition must the weights satisfy?",
        options: [
            "w_j ≥ 0 and sum(w_j) = 1",
            "w_j ≤ 0 and sum(w_j) = 1",
            "w_j can be any value",
            "sum(w_j) = 0"
        ],
        answer: "w_j ≥ 0 and sum(w_j) = 1"
    },
    {
        numb: 20,
        question: "Which Python library is used for creating the KNN classifier in the example?",
        options: [
            "numpy",
            "pandas",
            "sklearn",
            "matplotlib"
        ],
        answer: "sklearn"
    },
    {
        numb: 21,
        question: "In the Python example, what does the Outcome column value '1' represent?",
        options: [
            "Non-diabetic patients",
            "Diabetic patients",
            "Missing data",
            "Invalid entry"
        ],
        answer: "Diabetic patients"
    },
    {
        numb: 22,
        question: "What visualization is used in the Python example to show feature correlations?",
        options: [
            "Scatter plot",
            "Heatmap",
            "Bar chart",
            "Pie chart"
        ],
        answer: "Heatmap"
    },
    {
        numb: 23,
        question: "In the K-Nearest Neighbor (KNN) algorithm, when is classification typically performed?",
        options: [
            "During the training phase, before any new instances arrive",
            "When a new instance arrives, by comparing its feature vector to others",
            "Periodically, based on a predefined schedule",
            "Only after all data has been standardized"
        ],
        answer: "When a new instance arrives, by comparing its feature vector to others"
    },
    {
        numb: 24,
        question: "What are \"Support Vectors\" in the context of a Support Vector Machine (SVM)?",
        options: [
            "All data points used in the training set",
            "Data points that are misclassified by the SVM",
            "Data points that the margin pushes up against",
            "The data points that are furthest from the decision boundary"
        ],
        answer: "Data points that the margin pushes up against"
    },
    {
        numb: 25,
        question: "What is the \"margin\" of a linear classifier?",
        options: [
            "The number of misclassified data points",
            "The width that the boundary could be increased by before hitting a data point.",
            "The distance between the two most separated data points",
            "The angle of the classification boundary"
        ],
        answer: "The width that the boundary could be increased by before hitting a data point."
    },
    {
        numb: 26,
        question: "Which metric is NOT mentioned in the classification performance metrics?",
        options: [
            "Sensitivity",
            "Specificity",
            "F1-score",
            "Mean Absolute Error"
        ],
        answer: "Mean Absolute Error"
    },
    {
        numb: 27,
        question: "What is the formula for Precision in classification metrics? while a is TP , d is FN , c is FP , d is TN",
        options: [
            "a/(a+b)",
            "a/(a+c)",
            "d/(c+d)",
            "(a+d)/(a+b+c+d)"
        ],
        answer: "a/(a+c)"
    },
    {
        numb: 28,
        question: "Which of the following is an application of pattern recognition ?",
        options: [
            "Optical character recognition",
            "Weather prediction",
            "Stock market analysis",
            "All of the above"
        ],
        answer: "Optical character recognition"
    },
    {
        numb: 29,
        question: "What does the heatmap in the Python example show?",
        options: [
            "Distribution of each feature",
            "Correlations between variables",
            "Decision boundaries",
            "Classification errors"
        ],
        answer: "Correlations between variables"
    },
    {
        numb: 30,
        question: "Which function is used to split the dataset into training and testing sets ?",
        options: [
            "train_test_split()",
            "data_split()",
            "partition_data()",
            "split_dataset()"
        ],
        answer: "train_test_split()"
    }
];
