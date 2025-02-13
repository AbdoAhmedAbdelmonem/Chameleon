let question=[
    {
        numb: 1,type:"Multiple Choice",
        question: "What is clustering?",
        answer: "B) Grouping similar objects together while separating dissimilar objects",
        options: [
            "A) Grouping objects into random sets",
            "B) Grouping similar objects together while separating dissimilar objects",
            "C) A method of predicting future outcomes",
            "D) A process for sorting data alphabetically"
        ]
    },
    {
        numb: 2,type:"Multiple Choice",
        question: "What type of learning is clustering classified as?",
        answer: "B) Unsupervised learning",
        options: [
            "A) Supervised learning",
            "B) Unsupervised learning",
            "C) Reinforcement learning",
            "D) Semi-supervised learning"
        ]
    },
    {
        numb: 3,type:"Multiple Choice",
        question: "Which of the following is a common clustering method?",
        answer: "B) K-means",
        options: [
            "A) Decision Trees",
            "B) K-means",
            "C) Logistic Regression",
            "D) Support Vector Machines"
        ]
    },
    {
        numb: 4,type:"Multiple Choice",
        question: "Which of the following is NOT a clustering method?",
        answer: "C) Linear regression",
        options: [
            "A) Hierarchical clustering",
            "B) Partitioning methods",
            "C) Linear regression",
            "D) Density-based clustering"
        ]
    },
    {
        numb: 5,type:"Multiple Choice",
        question: "Which approach involves creating a hierarchical decomposition of the data?",
        answer: "B) Hierarchical clustering",
        options: [
            "A) Partitioning methods",
            "B) Hierarchical clustering",
            "C) Model-based clustering",
            "D) Fuzzy clustering"
        ]
    },
    {
        numb: 6,type:"Multiple Choice",
        question: "What type of data is typically used in K-means clustering?",
        answer: "B) Numerical data",
        options: [
            "A) Categorical data",
            "B) Numerical data",
            "C) Text data",
            "D) Binary data"
        ]
    },
    {
        numb: 7,type:"Multiple Choice",
        question: "In K-means clustering, what is a 'centroid'?",
        answer: "B) The average of all points in a cluster",
        options: [
            "A) The first point in a cluster",
            "B) The average of all points in a cluster",
            "C) The point farthest from the origin",
            "D) The last point added to a cluster"
        ]
    },
    {
        numb: 8,type:"Multiple Choice",
        question: "What is the primary measure of distance used in K-means clustering?",
        answer: "C) Euclidean distance",
        options: [
            "A) Manhattan distance",
            "B) Cosine similarity",
            "C) Euclidean distance",
            "D) Hamming distance"
        ]
    },
    {
        numb: 9,type:"Multiple Choice",
        question: "Which of the following is a step in the K-means clustering algorithm?",
        answer: "B) Choose K centroids randomly",
        options: [
            "A) Assign random labels to all objects",
            "B) Choose K centroids randomly",
            "C) Predict the future class of each object",
            "D) Assign each object to the closest predefined class"
        ]
    },
    {
        numb: 10,type:"Multiple Choice",
        question: "When does the K-means clustering algorithm stop iterating?",
        answer: "B) When the centroids stop changing positions",
        options: [
            "A) When all objects have been assigned to a class",
            "B) When the centroids stop changing positions",
            "C) When a predefined number of iterations have occurred",
            "D) When the distances between all objects are zero"
        ]
    },
    {
        numb: 11,type:"Multiple Choice",
        question: "Which of the following is a disadvantage of K-means clustering?",
        answer: "B) The results depend on the initial random assignments",
        options: [
            "A) It can only be used with categorical data",
            "B) The results depend on the initial random assignments",
            "C) It is not useful for large datasets",
            "D) It provides inconsistent results when using Euclidean distance"
        ]
    },
    {
        numb: 12,type:"Multiple Choice",
        question: "How many clusters must be specified before running the K-means algorithm?",
        answer: "C) K",
        options: [
            "A) None, it chooses automatically",
            "B) One",
            "C) K",
            "D) Ten"
        ]
    },
    {
        numb: 13,type:"Multiple Choice",
        question: "Which of the following represents an iterative step in K-means clustering?",
        answer: "A) Assign records to the closest centroid",
        options: [
            "A) Assign records to the closest centroid",
            "B) Sort the data alphabetically",
            "C) Predict the future category for new data",
            "D) Merge all objects into one group"
        ]
    },
    {
        numb: 14,type:"Multiple Choice",
        question: "What is the term for recalculating the centroid during K-means clustering?",
        answer: "D) Re-centering",
        options: [
            "A) Smoothing",
            "B) Averaging",
            "C) Updating",
            "D) Re-centering"
        ]
    },
    {
        numb: 15,type:"Multiple Choice",
        question: "In the K-means algorithm, what happens when objects no longer change groups?",
        answer: "A) The algorithm stops",
        options: [
            "A) The algorithm stops",
            "B) The centroids are recalculated again",
            "C) The data is reshuffled",
            "D) The objects are reassigned randomly"
        ]
    },
    {
        numb: 16,type:"Multiple Choice",
        question: "Which clustering approach involves minimizing the sum of square errors?",
        answer: "D) Partitioning methods",
        options: [
            "A) Fuzzy clustering",
            "B) Model-based clustering",
            "C) Hierarchical clustering",
            "D) Partitioning methods"
        ]
    },
    {
        numb: 17,type:"Multiple Choice",
        question: "What is the key difference between classification and clustering?",
        answer: "A) Clustering groups objects based on similarity, while classification assigns predefined labels",
        options: [
            "A) Clustering groups objects based on similarity, while classification assigns predefined labels",
            "B) Classification is unsupervised, and clustering is supervised",
            "C) Clustering predicts future data, classification does not",
            "D) Classification groups similar objects together, clustering does not"
        ]
    },
    {
        numb: 18,type:"Multiple Choice",
        question: "Which of the following is an advanced clustering approach?",
        answer: "C) Model-based clustering",
        options: [
            "A) Linear regression",
            "B) Hierarchical clustering",
            "C) Model-based clustering",
            "D) K-medoids"
        ]
    },
    {
        numb: 19,type:"Multiple Choice",
        question: "What issue can arise if the K-means algorithm is given few data points?",
        answer: "C) The initial grouping can significantly impact the clusters",
        options: [
            "A) The clusters are more accurate",
            "B) The number of iterations increases",
            "C) The initial grouping can significantly impact the clusters",
            "D) There are no clusters formed"
        ]
    },
    {
        numb: 20,type:"Multiple Choice",
        question: "Which of the following is a potential problem with K-means clustering?",
        answer: "C) Different runs of the algorithm can yield different results",
        options: [
            "A) The algorithm runs indefinitely",
            "B) It cannot be applied to numerical data",
            "C) Different runs of the algorithm can yield different results",
            "D) The algorithm always converges to the same result"
        ]
    },
    {
        numb: 21,type:"Multiple Choice",
        question: "What type of clustering method is K-means considered?",
        answer: "A) Partitioning method",
        options: [
            "A) Partitioning method",
            "B) Hierarchical method",
            "C) Fuzzy clustering",
            "D) Density-based clustering"
        ]
    },
    {
        numb: 22,type:"Multiple Choice",
        question: "Why is clustering considered unsupervised learning?",
        answer: "B) It does not involve labeled data",
        options: [
            "A) It requires labeled data",
            "B) It does not involve labeled data",
            "C) It uses predictions",
            "D) It requires feedback signals"
        ]
    },
    {
        numb: 23,type:"Multiple Choice",
        question: "What is the final result of the K-means algorithm?",
        answer: "C) Final cluster centers and assignments",
        options: [
            "A) Classification labels for the data",
            "B) Predictions for new data",
            "C) Final cluster centers and assignments",
            "D) An unsorted dataset"
        ]
    },
    {
        numb: 24,type:"Multiple Choice",
        question: "What type of data is NOT used in K-means clustering?",
        answer: "C) Text data",
        options: [
            "A) Numerical data",
            "B) Binary data",
            "C) Text data",
            "D) Categorical data"
        ]
    },
    {
        numb: 25,type:"Multiple Choice",
        question: "What is the first step in the K-means algorithm?",
        answer: "C) Choose K and select random centroids",
        options: [
            "A) Assign data to clusters",
            "B) Recalculate centroids",
            "C) Choose K and select random centroids",
            "D) Sort data by value"
        ]
    }

]
