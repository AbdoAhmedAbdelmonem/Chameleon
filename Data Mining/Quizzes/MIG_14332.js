let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Which of the following is a Predictive Data Mining Task according to the lecture?",
        options: [
            "Clustering",
            "Summarization",
            "Classification",
            "Association Rules"
        ],
        answer: "Classification"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which of the following is a Descriptive Data Mining Task according to the lecture?",
        options: [
            "Regression",
            "Prediction",
            "Clustering",
            "Time Series Analysis"
        ],
        answer: "Clustering"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "Clustering is the process of grouping data objects so that objects within a cluster have:",
        options: [
            "Low similarity and high dissimilarity to objects in other clusters",
            "High similarity and high dissimilarity to objects in other clusters",
            "High similarity and low dissimilarity to objects in other clusters",
            "Low similarity and low dissimilarity to objects in other clusters"
        ],
        answer: "High similarity and low dissimilarity to objects in other clusters"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "In cluster analysis, what predictions are made?",
        options: [
            "Predictions about future trends",
            "Predictions about specific data points",
            "No predictions are made",
            "Predictions about class labels"
        ],
        answer: "No predictions are made"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "Clustering is known as which type of learning because class label information is not present?",
        options: [
            "Supervised learning",
            "Reinforcement learning",
            "Unsupervised learning",
            "Semi-supervised learning"
        ],
        answer: "Unsupervised learning"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of the following is a popular clustering method mentioned?",
        options: [
            "Decision Trees",
            "k-means",
            "Support Vector Machines",
            "Linear Regression"
        ],
        answer: "k-means"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the key difference between clustering and classification?",
        options: [
            "Clustering uses predefined classes, classification groups objects",
            "Clustering has an unknown number of classes, classification has a known number of classes",
            "Clustering is supervised learning, classification is unsupervised learning",
            "Clustering is for future observations, classification is for understanding data"
        ],
        answer: "Clustering has an unknown number of classes, classification has a known number of classes"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "In the context of machine learning, classification is ________ learning and clustering is ________ learning.",
        options: [
            "unsupervised, supervised",
            "supervised, unsupervised",
            "reinforcement, supervised",
            "unsupervised, reinforcement"
        ],
        answer: "supervised, unsupervised"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Which of the following is a Major Clustering Approach?",
        options: [
            "Fuzzy clustering",
            "Density-based clustering",
            "Partitioning methods",
            "Model-based clustering"
        ],
        answer: "Partitioning methods"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Typical methods for the Partitioning approach include:",
        options: [
            "Hierarchical clustering",
            "k-means, k-medoids",
            "DBSCAN",
            "EM Algorithm"
        ],
        answer: "k-means, k-medoids"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "The k-modes method extends k-means to cluster nominal data by replacing means with:",
        options: [
            "Medians",
            "Centroids",
            "Modes",
            "Outliers"
        ],
        answer: "Modes"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "A typical k-medoids partitioning algorithm works effectively for small data sets but does not scale well for:",
        options: [
            "Unstructured data",
            "Very clean data sets",
            "Large data sets",
            "Numerical data only"
        ],
        answer: "Large data sets"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Compared to k-means, k-medoids is more robust in the presence of noise and outliers because a medoid is:",
        options: [
            "More influenced by outliers than a mean",
            "Less influenced by outliers than a mean",
            "Identical to a mean",
            "Only used with clean data"
        ],
        answer: "Less influenced by outliers than a mean"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Medoids are defined as:",
        options: [
            "Hypothetical points in a cluster",
            "Always members of the data set and representative objects whose average dissimilarity to all objects in the cluster is minimal",
            "Points that are far from the center of a cluster",
            "Only numerical averages of a cluster"
        ],
        answer: "Always members of the data set and representative objects whose average dissimilarity to all objects in the cluster is minimal"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "The first step in the K-medoids Algorithm (Step 1) is to:",
        options: [
            "Calculate the total cost",
            "Select one of the non-medoids",
            "For a given cluster assignment C, find the observation in the cluster minimizing the total distance to other points",
            "Assign each observation to the closest cluster center"
        ],
        answer: "For a given cluster assignment C, find the observation in the cluster minimizing the total distance to other points"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "The Manhattan distance between two points (x1, y1) and (x2, y2) is calculated as:",
        options: [
            "sqrt((x2-x1)^2 + (y2-y1)^2)",
            "|x2-x1| + |y2-y1|",
            "max(|x2-x1|, |y2-y1|)",
            "(x2-x1) * (y2-y1)"
        ],
        answer: "|x2-x1| + |y2-y1|"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "Both k-means and k-medoids methods require the user to specify:",
        options: [
            "The distance measure to be used",
            "The initial data points",
            "k, the number of clusters",
            "The maximum number of iterations"
        ],
        answer: "k, the number of clusters"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "In the k-medoids algorithm, if swapping a medoid to a non-medoid increases the total cost (S > 0), it means:",
        options: [
            "It's a good idea to swap the medoid",
            "The clustering has converged",
            "Moving to the new non-medoid would be a bad idea",
            "The original medoid was an outlier"
        ],
        answer: "Moving to the new non-medoid would be a bad idea"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "K-medoids clustering is computationally more intensive than k-means because:",
        options: [
            "It uses a simpler distance measure",
            "It only works with small datasets",
            "It iteratively replaces medoids based on total distance improvement",
            "It does not require initial centers"
        ],
        answer: "It iteratively replaces medoids based on total distance improvement"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What is the goal of clustering methods?",
        options: [
            "To make predictions about future observations",
            "To find class labels for new objects",
            "To find similarities between objects and group similar objects into clusters",
            "To reduce the dimensionality of the data"
        ],
        answer: "To find similarities between objects and group similar objects into clusters"
    }
];