let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Building an animal family tree (species to genera) resembles which hierarchical clustering?",
        options: [
            "Divisive (top-down)",
            "Agglomerative (bottom-up)",
            "K-means clustering",
            "Model-based clustering"
        ],
        answer: "Agglomerative (bottom-up)"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "In agglomerative clustering's start, what is a 'singleton'?",
        options: [
            "A cluster with only one data object.",
            "The largest cluster in the hierarchy.",
            "A cluster that cannot be merged further.",
            "An outlier data point."
        ],
        answer: "A cluster with only one data object."
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What's a dendrogram's goal for an input set S?",
        options: [
            "To ensure each leaf node represents a cluster of multiple items from S.",
            "To have the root of the dendrogram represent a single item from S.",
            "To produce a hierarchy where nodes are subsets of S, and the root is S.",
            "To create a flat partition of S into k clusters."
        ],
        answer: "To produce a hierarchy where nodes are subsets of S, and the root is S."
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which linkage uses the shortest distance between any members of two clusters?",
        options: [
            "Complete-linkage",
            "Average-linkage",
            "Single-linkage",
            "Centroid-linkage"
        ],
        answer: "Single-linkage"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What does an internal node in a dendrogram always represent?",
        options: [
            "An individual data object from the input set S.",
            "The union of its children.",
            "A decision boundary for classification.",
            "The average of all data objects in S."
        ],
        answer: "The union of its children."
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "How does 'divisive' (top-down) hierarchical clustering work?",
        options: [
            "Beginning with singletons and merging them until the whole set is achieved as the root.",
            "Placing each instance of the set S in its own cluster initially.",
            "Recursively partitioning the set S until singletons are reached.",
            "Computing a merging cost function between every pair of elements."
        ],
        answer: "Recursively partitioning the set S until singletons are reached."
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "In complete-linkage, how is the distance between Cluster X and Cluster Y defined?",
        options: [
            "As the minimum distance between any point in X and any point in Y.",
            "As the greatest distance between any member of X and any member of Y.",
            "As the average distance between all pairs of points, one from X and one from Y.",
            "As the distance between the centroids of X and Y."
        ],
        answer: "As the greatest distance between any member of X and any member of Y."
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "When does agglomerative hierarchical clustering typically stop merging?",
        options: [
            "When a pre-defined number of clusters is formed.",
            "When one cluster remains, containing all original data objects.",
            "When the distance between the closest clusters exceeds a very large, predefined threshold.",
            "After a fixed number of iterations, regardless of cluster formation."
        ],
        answer: "When one cluster remains, containing all original data objects."
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What visual output shows hierarchical clustering's nested structure and merge history?",
        options: [
            "Scatter plot matrix",
            "Frequency histogram",
            "Dendrogram",
            "Component heatmap"
        ],
        answer: "Dendrogram"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "In agglomerative clustering's first step (from singletons), what guides merging?",
        options: [
            "Random selection of two clusters.",
            "The pair of clusters with the minimum distance between them.",
            "The pair of clusters with the maximum distance between them to establish boundaries.",
            "Merging the two largest clusters first to simplify the problem."
        ],
        answer: "The pair of clusters with the minimum distance between them."
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which hierarchical clustering style is most common?",
        options: [
            "Divisive (top-down)",
            "Agglomerative (bottom-up)",
            "Model-based hierarchical clustering",
            "Grid-based hierarchical clustering"
        ],
        answer: "Agglomerative (bottom-up)"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What does the height axis on a dendrogram generally represent?",
        options: [
            "The number of data points contained within the merged cluster.",
            "The chronological order in which clusters were considered for merging.",
            "The distance/dissimilarity level at which clusters merge.",
            "The computational complexity of performing the merge."
        ],
        answer: "The distance/dissimilarity level at which clusters merge."
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What's a key advantage of hierarchical clustering?",
        options: [
            "Efficiently handle extremely large datasets better than partitioning methods.",
            "Automatically determine the optimal number of clusters without user input.",
            "It provides hierarchical relations between clusters (nested groupings).",
            "Remain robust to the choice of distance metric."
        ],
        answer: "It provides hierarchical relations between clusters (nested groupings)."
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What is a challenge of hierarchical clustering?",
        options: [
            "It cannot be easily visualized, unlike other clustering methods.",
            "It is computationally too simple and thus cannot capture complex data relationships.",
            "Difficulty in defining appropriate final cluster levels from the hierarchy.",
            "It exclusively works with numerical data and cannot handle categorical attributes."
        ],
        answer: "Difficulty in defining appropriate final cluster levels from the hierarchy."
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "With single-linkage, how is the distance d(P_i, P_j) between clusters P_i and P_j found?",
        options: [
            "Maximum distance between any element in P_i and P_j.",
            "Average of all pairwise distances between elements in P_i and P_j.",
            "Minimum distance between any element in P_i and any in P_j.",
            "Distance between the geometric means (centroids) of P_i and P_j."
        ],
        answer: "Minimum distance between any element in P_i and any in P_j."
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What primary input does hierarchical clustering require?",
        options: [
            "A user-defined number of desired clusters (k).",
            "The initial centroids for a set of clusters.",
            "A pairwise distance matrix of all instances in dataset S.",
            "A complete set of class labels for each data instance for supervised learning."
        ],
        answer: "A pairwise distance matrix of all instances in dataset S."
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "Using single-linkage, if X and Y merge to (XY), how is its distance to cluster Z found?",
        options: [
            "By averaging d(X,Z) and d(Y,Z).",
            "By taking the maximum of d(X,Z) and d(Y,Z).",
            "By taking the minimum of d(X,Z) and d(Y,Z).",
            "By finding (XY)'s centroid then its distance to Z."
        ],
        answer: "By taking the minimum of d(X,Z) and d(Y,Z)."
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "If each dendrogram level is a data partition, what's an implication for clusters at any specific level?",
        options: [
            "That each level must contain an equal number of clusters.",
            "Clusters at any horizontal cut are mutually exclusive and collectively exhaustive of the dataset.",
            "That each level is formed by splitting only one cluster from the immediately preceding higher level.",
            "That the tree structure is always perfectly balanced and binary."
        ],
        answer: "Clusters at any horizontal cut are mutually exclusive and collectively exhaustive of the dataset."
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What's the initial step in divisive (top-down) hierarchical clustering?",
        options: [
            "Starting with each data point as an individual, separate cluster.",
            "Starting with all data points in one single cluster.",
            "Calculating the complete pairwise distance matrix for all data points.",
            "Identifying and removing outlier points before any grouping occurs."
        ],
        answer: "Starting with all data points in one single cluster."
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "In agglomerative clustering, what does the dendrogram's root ultimately represent?",
        options: [
            "The single data point that is most central to the entire dataset.",
            "A single cluster containing all data objects from set S.",
            "The point in the algorithm where the optimal number of clusters is determined.",
            "The cluster with the highest internal variance or largest diameter."
        ],
        answer: "A single cluster containing all data objects from set S."
    }
];
