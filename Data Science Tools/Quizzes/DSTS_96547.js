let questions = [
    {
        numb: 1,
        question: "What is the primary goal of dimensionality reduction?",
        options: [
            "To increase the number of features",
            "To visualize high-dimensional data in lower dimensions",
            "To make models more complex",
            "To remove all noise from data"
        ],
        answer: "To visualize high-dimensional data in lower dimensions"
    },
    {
        numb: 2,
        question: "Which of the following is NOT an application of dimensionality reduction mentioned in the lecture?",
        options: [
            "Customer relationship management",
            "Text mining",
            "Image retrieval",
            "Time series forecasting"
        ],
        answer: "Time series forecasting"
    },
    {
        numb: 3,
        question: "What is the key difference between feature selection and feature reduction?",
        options: [
            "Feature selection uses all original features while feature reduction uses a subset",
            "Feature selection uses a subset of original features while feature reduction transforms all features",
            "There is no difference between them",
            "Feature reduction always performs better than feature selection"
        ],
        answer: "Feature selection uses a subset of original features while feature reduction transforms all features"
    },
    {
        numb: 4,
        question: "What is the main advantage of filter models in feature selection?",
        options: [
            "They are computationally expensive",
            "They are biased toward specific learning algorithms",
            "They are fast and independent of any learning algorithm",
            "They always provide the highest accuracy"
        ],
        answer: "They are fast and independent of any learning algorithm"
    },
    {
        numb: 5,
        question: "Which of the following best describes the wrapper model of feature selection?",
        options: [
            "Uses general data characteristics for selection",
            "Relies on a predetermined classification algorithm",
            "Is independent of any learning algorithm",
            "Is faster than filter models"
        ],
        answer: "Relies on a predetermined classification algorithm"
    },
    {
        numb: 6,
        question: "What does MRMR stand for in feature selection?",
        options: [
            "Maximum Redundancy Minimum Relevance",
            "Minimum Redundancy Maximum Relevance",
            "Maximum Reduction Minimum Ranking",
            "Minimum Reduction Maximum Ranking"
        ],
        answer: "Minimum Redundancy Maximum Relevance"
    },
    {
        numb: 7,
        question: "Which of the following is NOT a linear feature reduction algorithm?",
        options: [
            "Principal Component Analysis (PCA)",
            "Linear Discriminant Analysis (LDA)",
            "Independent Component Analysis (ICA)",
            "t-Distributed Stochastic Neighbor Embedding (t-SNE)"
        ],
        answer: "t-Distributed Stochastic Neighbor Embedding (t-SNE)"
    },
    {
        numb: 8,
        question: "What is the main purpose of Principal Component Analysis (PCA)?",
        options: [
            "To increase dimensionality of data",
            "To find new uncorrelated variables that retain most information",
            "To select a subset of original features",
            "To classify data into categories"
        ],
        answer: "To find new uncorrelated variables that retain most information"
    },
    {
        numb: 9,
        question: "In PCA, what does the first principal component represent?",
        options: [
            "The direction of minimum variance in the data",
            "The direction of maximum variance in the data",
            "The mean of all data points",
            "The noise in the data"
        ],
        answer: "The direction of maximum variance in the data"
    },
    {
        numb: 10,
        question: "What is the formula for entropy of a variable X?",
        options: [
            "H(X) = ΣP(x_i)log(P(x_i))",
            "H(X) = -ΣP(x_i)log(P(x_i))",
            "H(X) = ΣP(x_i)/log(P(x_i))",
            "H(X) = -ΣP(x_i)/log(P(x_i))"
        ],
        answer: "H(X) = -ΣP(x_i)log(P(x_i))"
    },
    {
        numb: 11,
        question: "What does Information Gain measure in feature selection?",
        options: [
            "The reduction in entropy after splitting on a feature",
            "The increase in entropy after splitting on a feature",
            "The correlation between features",
            "The variance of a feature"
        ],
        answer: "The reduction in entropy after splitting on a feature"
    },
    {
        numb: 12,
        question: "Which of the following search strategies is NOT mentioned for feature selection?",
        options: [
            "Exhaustive search",
            "Heuristic search",
            "Nondeterministic search",
            "Evolutionary search"
        ],
        answer: "Evolutionary search"
    },
    {
        numb: 13,
        question: "What is the main disadvantage of feature ranking methods?",
        options: [
            "They consider correlation between features",
            "They are computationally expensive",
            "They cannot consider correlation between features",
            "They always provide optimal subsets"
        ],
        answer: "They cannot consider correlation between features"
    },
    {
        numb: 14,
        question: "In the PCA algorithm, what is the purpose of computing eigenvalues and eigenvectors?",
        options: [
            "To determine the mean of the data",
            "To identify directions of maximum variance",
            "To normalize the data",
            "To remove outliers"
        ],
        answer: "To identify directions of maximum variance"
    },
    {
        numb: 15,
        question: "What does the explained variance ratio in PCA represent?",
        options: [
            "The percentage of variance explained by each principal component",
            "The correlation between original features",
            "The number of features to keep",
            "The error in reconstruction"
        ],
        answer: "The percentage of variance explained by each principal component"
    },
    {
        numb: 16,
        question: "Which of the following is a supervised feature reduction technique?",
        options: [
            "Principal Component Analysis (PCA)",
            "Linear Discriminant Analysis (LDA)",
            "Independent Component Analysis (ICA)",
            "Latent Semantic Indexing (LSI)"
        ],
        answer: "Linear Discriminant Analysis (LDA)"
    },
    {
        numb: 17,
        question: "What is the first step in the PCA algorithm?",
        options: [
            "Compute the covariance matrix",
            "Center the data by subtracting the mean",
            "Compute eigenvalues and eigenvectors",
            "Select the number of components"
        ],
        answer: "Center the data by subtracting the mean"
    },
    {
        numb: 18,
        question: "Which of the following is NOT a characteristic of the filter model?",
        options: [
            "Fast execution",
            "Independent of any learning algorithm",
            "Uses predictive accuracy as evaluation measure",
            "Relies on general data characteristics"
        ],
        answer: "Uses predictive accuracy as evaluation measure"
    },
    {
        numb: 19,
        question: "What is the main advantage of the wrapper model?",
        options: [
            "Fast execution",
            "High accuracy for the specific learning algorithm",
            "Independent of any learning algorithm",
            "Works well with any dataset size"
        ],
        answer: "High accuracy for the specific learning algorithm"
    },
    {
        numb: 20,
        question: "Which Python library is used for implementing PCA in the example?",
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
        question: "What preprocessing step is typically applied before PCA?",
        options: [
            "Normalization or standardization",
            "Removing all categorical features",
            "Adding noise to the data",
            "Increasing dimensionality"
        ],
        answer: "Normalization or standardization"
    },
    {
        numb: 22,
        question: "In the MRMR algorithm, what does the first term in the criterion equation maximize?",
        options: [
            "Redundancy",
            "Relevance",
            "Variance",
            "Correlation"
        ],
        answer: "Relevance"
    },
    {
        numb: 23,
        question: "What is the computational complexity of exact MRMR feature selection for k features from n candidates?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(n^k)"
        ],
        answer: "O(n^k)"
    },
    {
        numb: 24,
        question: "Which of the following is a nonlinear feature reduction method?",
        options: [
            "Principal Component Analysis (PCA)",
            "Linear Discriminant Analysis (LDA)",
            "Manifold learning",
            "Canonical Correlation Analysis (CCA)"
        ],
        answer: "Manifold learning"
    },
    {
        numb: 25,
        question: "What is the purpose of standardizing data before PCA?",
        options: [
            "To make features comparable when they have different scales",
            "To increase the number of features",
            "To remove all correlations between features",
            "To make the data non-linear"
        ],
        answer: "To make features comparable when they have different scales"
    },
    {
        numb: 26,
        question: "In the PCA example with iris dataset, what was used to visualize correlations after PCA?",
        options: [
            "Scatter plot",
            "Heatmap",
            "Line chart",
            "Bar chart"
        ],
        answer: "Heatmap"
    },
    {
        numb: 27,
        question: "What does the covariance matrix represent in PCA?",
        options: [
            "The mean of the data",
            "The relationships between features",
            "The eigenvalues",
            "The number of components"
        ],
        answer: "The relationships between features"
    },
    {
        numb: 28,
        question: "Which of the following is true about principal components?",
        options: [
            "They are correlated with each other",
            "They are ordered by the fraction of total information they retain",
            "The first PC captures the least variance",
            "They are linear combinations of a subset of original features"
        ],
        answer: "They are ordered by the fraction of total information they retain"
    },
    {
        numb: 29,
        question: "What is the main challenge in document classification mentioned in the lecture?",
        options: [
            "Too few terms",
            "Thousands of terms",
            "Lack of categories",
            "Small document size"
        ],
        answer: "Thousands of terms"
    },
    {
        numb: 30,
        question: "In gene expression microarray analysis, what is the typical data challenge?",
        options: [
            "Few genes and many samples",
            "Thousands of genes and few samples",
            "Only categorical data",
            "No class labels available"
        ],
        answer: "Thousands of genes and few samples"
    }
];