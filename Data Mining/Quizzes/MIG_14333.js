let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Building an animal family tree (species to genera, families) is like which hierarchical clustering approach?",
        options: [
            "Divisive (top-down)",
            "Agglomerative (bottom-up)",
            "K-means clustering",
            "Model-based clustering"
        ],
        answer: "Agglomerative (bottom-up)"
        // Concept: Compares agglomerative approach to a real-world bottom-up structuring
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "In hierarchical clustering, what does a 'singleton' refer to in the initial step of the agglomerative approach?",
        options: [
            "A cluster with only one data object.",
            "The largest cluster in the hierarchy.",
            "A cluster that cannot be merged further.",
            "An outlier data point."
        ],
        answer: "A cluster with only one data object."
        // Concept: Definition of singleton in agglomerative clustering [cite: 6, 8]
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is the ultimate goal when constructing a dendrogram in hierarchical clustering, given an input set S?",
        options: [
            "To ensure each leaf node represents a cluster of multiple items from S.",
            "To have the root of the dendrogram represent a single item from S.",
            "To produce a hierarchy where nodes represent subsets of S, with the root being S itself.",
            "To create a flat partition of S into k clusters."
        ],
        answer: "To produce a hierarchy where nodes represent subsets of S, with the root being S itself."
        // Concept: Purpose and structure of a dendrogram [cite: 4]
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "If we consider the distance between two clusters to be the shortest distance from any member of one cluster to any member of the other, which linkage method are we using?",
        options: [
            "Complete-linkage",
            "Average-linkage",
            "Single-linkage",
            "Centroid-linkage"
        ],
        answer: "Single-linkage"
        // Concept: Definition of single-linkage clustering [cite: 12, 15]
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "An internal node in a hierarchical clustering tree (dendrogram) always represents:",
        options: [
            "An individual data object from the input set S.",
            "The union of its children.",
            "A decision boundary for classification.",
            "The average of all data objects in S."
        ],
        answer: "The union of its children."
        // Concept: Properties of internal nodes in a dendrogram [cite: 4]
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of these describes the 'divisive' or 'top-down' style of hierarchical clustering?",
        options: [
            "Beginning with singletons and merging them until the whole set is achieved as the root.",
            "Placing each instance of the set S in its own cluster initially.",
            "Recursively partitioning the set S until singleton sets are reached.",
            "Computing a merging cost function between every pair of elements."
        ],
        answer: "Recursively partitioning the set S until singleton sets are reached."
        // Concept: Definition of Divisive (top-down) hierarchical clustering [cite: 7]
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "If you're using complete-linkage clustering, how do you conceptually define the distance between two clusters, say Cluster X and Cluster Y?",
        options: [
            "As the minimum distance between any point in X and any point in Y.",
            "As the greatest distance from any member of one cluster to any member of the other cluster.",
            "As the average distance between all pairs of points, one from X and one from Y.",
            "As the distance between the centroids of X and Y."
        ],
        answer: "As the greatest distance from any member of one cluster to any member of the other cluster."
        // Concept: Definition of complete-linkage clustering [cite: 13, 15]
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "When does the agglomerative hierarchical clustering algorithm typically terminate its merging process?",
        options: [
            "When a pre-defined number of clusters is formed.",
            "When there is only one set (cluster) remaining, encompassing all original data objects.",
            "When the distance between the closest clusters exceeds a very large, predefined threshold.",
            "After a fixed number of iterations, regardless of cluster formation."
        ],
        answer: "When there is only one set (cluster) remaining, encompassing all original data objects."
        // Concept: Termination condition for agglomerative clustering [cite: 10]
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "A key visual output of hierarchical clustering that displays the nested cluster structure and merge history is called a:",
        options: [
            "Scatter plot matrix",
            "Frequency histogram",
            "Dendrogram",
            "Component heatmap"
        ],
        answer: "Dendrogram"
        // Concept: Dendrogram as a visualization tool [cite: 4, 41]
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "In the *very first* step of an agglomerative clustering process, after all items are in their own singleton clusters, what guides the merging decision?",
        options: [
            "Random selection of two clusters.",
            "The pair of clusters with the minimum distance (cheapest merge cost) between them.",
            "The pair of clusters with the maximum distance between them to establish boundaries.",
            "Merging the two largest clusters first to simplify the problem."
        ],
        answer: "The pair of clusters with the minimum distance (cheapest merge cost) between them."
        // Concept: Initial merging criterion in agglomerative clustering [cite: 8]
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "According to the lecture, which general style of hierarchical clustering is noted as the 'most common approach'?",
        options: [
            "Divisive (top-down)",
            "Agglomerative (bottom-up)",
            "Model-based hierarchical clustering",
            "Grid-based hierarchical clustering"
        ],
        answer: "Agglomerative (bottom-up)"
        // Concept: Commonality of agglomerative approach [cite: 7]
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What does the 'lifetime' or height axis on a dendrogram generally represent in the context of cluster merging?",
        options: [
            "The number of data points contained within the merged cluster.",
            "The chronological order in which clusters were considered for merging.",
            "The distance or dissimilarity level at which the clusters are merged.",
            "The computational complexity of performing the merge."
        ],
        answer: "The distance or dissimilarity level at which the clusters are merged."
        // Concept: Interpretation of dendrogram height/lifetime [cite: 40]
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "One of the listed advantages of hierarchical clustering is its inherent ability to:",
        options: [
            "Efficiently handle extremely large datasets better than partitioning methods.",
            "Automatically determine the optimal number of clusters without user input.",
            "Provide hierarchical relations between clusters, showing nested groupings.",
            "Remain robust to the choice of distance metric."
        ],
        answer: "Provide hierarchical relations between clusters, showing nested groupings."
        // Concept: Advantage of hierarchical clustering [cite: 41]
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "A mentioned disadvantage or challenge associated with hierarchical clustering is that:",
        options: [
            "It cannot be easily visualized, unlike other clustering methods.",
            "It is computationally too simple and thus cannot capture complex data relationships.",
            "It can be difficult to define the appropriate levels for the final clusters from the hierarchy.",
            "It exclusively works with numerical data and cannot handle categorical attributes."
        ],
        answer: "It can be difficult to define the appropriate levels for the final clusters from the hierarchy."
        // Concept: Disadvantage of hierarchical clustering [cite: 41]
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "With single-linkage, if clusters (P_i) and (P_j) exist, how is their conceptual distance d((P_i), (P_j)) found?",
        options: [
            "Maximum distance between any element in P_i and P_j.",
            "Average of all pairwise distances between elements in P_i and P_j.",
            "Minimum distance between any element in P_i and P_j.",
            "Distance between the geometric means (centroids) of P_i and P_j."
        ],
        answer: "Minimum distance between any element in P_i and P_j."
        // Concept: Application of single-linkage to merged clusters
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What is the primary input that the hierarchical clustering algorithm (as described in the lecture) requires to begin its process?",
        options: [
            "A user-defined number of desired clusters (k).",
            "The initial centroids for a set of clusters.",
            "A pairwise distance matrix that involved all instances in the dataset S.",
            "A complete set of class labels for each data instance for supervised learning."
        ],
        answer: "A pairwise distance matrix that involved all instances in the dataset S."
        // Concept: Initial input for the algorithm [cite: 8]
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "If single-linkage forms cluster (XY) by merging X and Y, how is its distance to cluster Z determined?",
        options: [
            "By averaging d(X,Z) and d(Y,Z).",
            "By taking the maximum of d(X,Z) and d(Y,Z).",
            "By taking the minimum of d(X,Z) and d(Y,Z).",
            "By finding (XY)'s centroid then its distance to Z."
        ],
        answer: "By taking the minimum of d(X,Z) and d(Y,Z)."
        // Concept: Updating distances with single-linkage after a merge
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "The lecture mentions that 'Each level of the tree represents a partition of the input data'. What is a key implication of this statement regarding the clusters at any specific level?",
        options: [
            "That each level must contain an equal number of clusters.",
            "That at any given horizontal cut (level) through the dendrogram, the resulting clusters are mutually exclusive and collectively exhaustive of the dataset.",
            "That each level is formed by splitting only one cluster from the immediately preceding higher level.",
            "That the tree structure is always perfectly balanced and binary."
        ],
        answer: "That at any given horizontal cut (level) through the dendrogram, the resulting clusters are mutually exclusive and collectively exhaustive of the dataset."
        // Concept: Nature of partitions at different levels of the hierarchy [cite: 5]
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "If you were to employ a 'divisive' (top-down) hierarchical clustering approach, what would be the characteristic initial state or first step?",
        options: [
            "Starting with each data point as an individual, separate cluster.",
            "Starting with all data points grouped into one single, comprehensive cluster.",
            "Calculating the complete pairwise distance matrix for all data points.",
            "Identifying and removing outlier points before any grouping occurs."
        ],
        answer: "Starting with all data points grouped into one single, comprehensive cluster."
        // Concept: Initial step of divisive clustering [cite: 7]
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What does the root of the dendrogram ultimately represent in a completed agglomerative hierarchical clustering process?",
        options: [
            "The single data point that is most central to the entire dataset.",
            "A single cluster that contains all the data objects from the input set S.",
            "The point in the algorithm where the optimal number of clusters is determined.",
            "The cluster with the highest internal variance or largest diameter."
        ],
        answer: "A single cluster that contains all the data objects from the input set S."
        // Concept: Meaning of the root in a dendrogram [cite: 4]
    }
];