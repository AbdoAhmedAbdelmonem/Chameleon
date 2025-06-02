let questions = [
    {
        numb: 1,
        question: "What is the main difference between hierarchical and partitional clustering algorithms?",
        options: [
            "Hierarchical creates a tree-like structure while partitional creates non-overlapping clusters",
            "Partitional creates a tree-like structure while hierarchical creates non-overlapping clusters",
            "Both create tree-like structures",
            "Both create non-overlapping clusters"
        ],
        answer: "Hierarchical creates a tree-like structure while partitional creates non-overlapping clusters"
    },
    {
        numb: 2,
        question: "In k-means clustering, what is the first step of the algorithm?",
        options: [
            "Assign objects to the nearest cluster center",
            "Decide on a value for k",
            "Re-estimate the cluster centers",
            "Check for convergence"
        ],
        answer: "Decide on a value for k"
    },
    {
        numb: 3,
        question: "What does the objective function in k-means clustering minimize?",
        options: [
            "The number of clusters",
            "The distance between all points and their cluster centers",
            "The variance within each cluster",
            "The number of iterations"
        ],
        answer: "The distance between all points and their cluster centers"
    },
    {
        numb: 4,
        question: "Which of the following is NOT a weakness of k-means clustering?",
        options: [
            "Need to specify k in advance",
            "Unable to handle noisy data and outliers",
            "Not suitable for clusters with non-convex shapes",
            "Requires categorical data"
        ],
        answer: "Requires categorical data"
    },
    {
        numb: 5,
        question: "What technique is suggested for determining the number of clusters in k-means?",
        options: [
            "Knee finding or elbow finding",
            "Random selection",
            "Always using k=3",
            "Using hierarchical clustering first"
        ],
        answer: "Knee finding or elbow finding"
    },
    {
        numb: 6,
        question: "Which of the following best describes partitional clustering?",
        options: [
            "It creates a hierarchical decomposition of the set of objects",
            "Each instance is placed in exactly one of K non overlapping clusters",
            "It does not require the number of clusters to be specified",
            "It always finds the global optimum"
        ],
        answer: "Each instance is placed in exactly one of K non overlapping clusters"
    },
    {
        numb: 7,
        question: "What is the Davies-Bouldin Index (DBI) used for?",
        options: [
            "To determine the initial centroids",
            "To evaluate clustering algorithms",
            "To calculate distance between points",
            "To visualize clusters"
        ],
        answer: "To evaluate clustering algorithms"
    },
    {
        numb: 8,
        question: "In agglomerative hierarchical clustering, what is the first step?",
        options: [
            "Merge the two closest clusters",
            "Compute the distance matrix",
            "Let each data point be a cluster",
            "Update the distance matrix"
        ],
        answer: "Compute the distance matrix"
    },
    {
        numb: 9,
        question: "What is single-link distance between clusters?",
        options: [
            "The maximum distance between any two points in different clusters",
            "The average distance between all points in different clusters",
            "The minimum distance between any two points in different clusters",
            "The distance between cluster centroids"
        ],
        answer: "The minimum distance between any two points in different clusters"
    },
    {
        numb: 10,
        question: "When does the k-means algorithm typically stop iterating?",
        options: [
            "After a fixed number of iterations.",
            "When the objective function value reaches zero",
            "If none of the objects changed membership in the last iteration",
            "When the number of clusters equals the number of objects"
        ],
        answer: "If none of the objects changed membership in the last iteration"
    },
    {
        numb: 11,
        question: "What parameters are needed for DBSCAN clustering?",
        options: [
            "k (number of clusters)",
            "Eps (neighborhood radius) and MinPts (minimum points)",
            "Only Eps",
            "Only MinPts"
        ],
        answer: "Eps (neighborhood radius) and MinPts (minimum points)"
    },
    {
        numb: 12,
        question: "What is a core point in DBSCAN?",
        options: [
            "A point with no neighbors",
            "A point with at least MinPts in its Eps-neighborhood",
            "A point on the edge of a cluster",
            "A noise point"
        ],
        answer: "A point with at least MinPts in its Eps-neighborhood"
    },
    {
        numb: 13,
        question: "What type of clusters can density-based methods like DBSCAN discover?",
        options: [
            "Only spherical clusters",
            "Only linearly separable clusters",
            "Clusters of arbitrary shape",
            "Only convex clusters"
        ],
        answer: "Clusters of arbitrary shape"
    },
    {
        numb: 14,
        question: "In the agglomerative clustering Python example, what parameter defines the distance metric?",
        options: [
            "n_clusters",
            "affinity",
            "linkage",
            "random_state"
        ],
        answer: "affinity"
    },
    {
        numb: 15,
        question: "What is the complexity of hierarchical clustering?",
        options: [
            "O(n)",
            "O(n log n)",
            "O(n²)",
            "O(n³)"
        ],
        answer: "O(n³)"
    },
    {
        numb: 16,
        question: "Which of the following is NOT a density-based clustering method ?",
        options: [
            "DBSCAN",
            "OPTICS",
            "K-MEDOIDS",
            "DENCLUE"
        ],
        answer: "K-MEDOIDS"
    },
    {
        numb: 17,
        question: "What does a lower Davies-Bouldin Index value indicate?",
        options: [
            "Worse clustering",
            "Better clustering",
            "More clusters needed",
            "Higher dimensionality"
        ],
        answer: "Better clustering"
    },
    {
        numb: 18,
        question: "In k-means, what happens if none of the objects change membership in an iteration?",
        options: [
            "The algorithm continues",
            "The algorithm restarts",
            "The algorithm exits",
            "The value of k is increased"
        ],
        answer: "The algorithm exits"
    },
    {
        numb: 19,
        question: "What is the main advantage of k-means ?",
        options: [
            "Can handle categorical data well",
            "Relatively efficient with complexity O(tkn)",
            "Doesn't require specifying k",
            "Works well with noisy data"
        ],
        answer: "Relatively efficient with complexity O(tkn)"
    },
    {
        numb: 20,
        question: "In the k-means Python example, what function is used to generate sample data?",
        options: [
            "make_blobs",
            "make_circles",
            "make_moons",
            "make_classification"
        ],
        answer: "make_blobs"
    },
    {
        numb: 21,
        question: "What does 'MinPts' represent in density-based clustering?",
        options: [
            "The minimum number of clusters",
            "The maximum radius of a neighborhood",
            "The minimum number of points in an Eps-neighborhood of a point for it to be considered a core point",
            "The minimum distance between two clusters"
        ],
        answer: "The minimum number of points in an Eps-neighborhood of a point for it to be considered a core point"
    },
    {
        numb: 22,
        question: "Which of the following is true about noise points in DBSCAN?",
        options: [
            "They are core points",
            "They are border points",
            "They are not density-reachable from any core object",
            "They form their own clusters"
        ],
        answer: "They are not density-reachable from any core object"
    },
    {
        numb: 23,
        question: "What is the key operation in agglomerative hierarchical clustering?",
        options: [
            "Initializing centroids",
            "Computing distance between clusters",
            "Assigning points to nearest centroid",
            "Determining k"
        ],
        answer: "Computing distance between clusters"
    },
    {
        numb: 24,
        question: "How is the single-link distance between two clusters defined?",
        options: [
            "The maximum distance between any object in one cluster and any object in the other",
            "The average distance between all pairs of objects, one from each cluster",
            "The minimum distance between any object in one cluster and any object in the other",
            "The distance between the centroids of the two clusters"
        ],
        answer: "The minimum distance between any object in one cluster and any object in the other"
    },
    {
        numb: 25,
        question: "What visualization is used in the Python example for agglomerative clustering?",
        options: [
            "Heatmap",
            "Dendrogram",
            "Scatter plot",
            "Line chart"
        ],
        answer: "Scatter plot"
    },
    {
        numb: 26,
        question: "What is density-connected in DBSCAN?",
        options: [
            "Two points connected directly",
            "Two points connected through a chain of core points",
            "Two points in the same grid cell",
            "Two points with the same attributes"
        ],
        answer: "Two points connected through a chain of core points"
    },
    {
        numb: 27,
        question: "Which of the following is a characteristic of density-based clustering methods?",
        options: [
            "They require specifying k",
            "They can discover clusters of arbitrary shape",
            "They work only with spherical clusters",
            "They cannot handle noise"
        ],
        answer: "They can discover clusters of arbitrary shape"
    },
    {
        numb: 28,
        question: "In the k-means Python example, what parameter specifies the number of clusters?",
        options: [
            "n_neighbors",
            "n_clusters",
            "random_state",
            "affinity"
        ],
        answer: "n_clusters"
    },
    {
        numb: 29,
        question: "What is the purpose of the distance matrix in hierarchical clustering?",
        options: [
            "To initialize centroids",
            "To determine which clusters to merge",
            "To assign points to clusters",
            "To visualize the data"
        ],
        answer: "To determine which clusters to merge"
    },
    {
        numb: 30,
        question: "Which of the following is NOT a step in the DBSCAN algorithm?",
        options: [
            "Arbitrarily select a point",
            "Form a cluster if it's a core point",
            "Update cluster centroids",
            "Retrieve all density-reachable points"
        ],
        answer: "Update cluster centroids"
    }
];