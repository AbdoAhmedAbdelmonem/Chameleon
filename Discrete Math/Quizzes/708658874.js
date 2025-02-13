const question = [
    {
        numb: 1,type: "Multiple Choices",
        question: "What is a graph in discrete mathematics?",
        options: [
            "A. A set of vertices and edges connecting them",
            "B. A set of numbers",
            "C. A set of functions",
            "D. A set of matrices"
        ],
        answer: "A. A set of vertices and edges connecting them"
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "What is the degree of a vertex in an undirected graph?",
        options: [
            "A. The number of edges incident with it",
            "B. The number of loops at the vertex",
            "C. The number of vertices in the graph",
            "D. The number of edges in the graph"
        ],
        answer: "A. The number of edges incident with it"
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "What is a null graph?",
        options: [
            "A. A graph with no edges",
            "B. A graph with no vertices",
            "C. A graph with multiple edges",
            "D. A graph with loops"
        ],
        answer: "A. A graph with no edges"
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is a simple graph?",
        options: [
            "A. A graph with no loops or multiple edges",
            "B. A graph with multiple edges",
            "C. A graph with loops",
            "D. A graph with no vertices"
        ],
        answer: "A. A graph with no loops or multiple edges"
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "What is a multigraph?",
        options: [
            "A. A graph with multiple edges connecting the same vertices",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with loops"
        ],
        answer: "A. A graph with multiple edges connecting the same vertices"
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "What is a pseudograph?",
        options: [
            "A. A graph that may include loops and multiple edges",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with only simple edges"
        ],
        answer: "A. A graph that may include loops and multiple edges"
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "What is an undirected graph?",
        options: [
            "A. A graph where edges have no direction",
            "B. A graph where edges have a direction",
            "C. A graph with no edges",
            "D. A graph with no vertices"
        ],
        answer: "A. A graph where edges have no direction"
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "What is a directed graph?",
        options: [
            "A. A graph where edges have a direction",
            "B. A graph where edges have no direction",
            "C. A graph with no edges",
            "D. A graph with no vertices"
        ],
        answer: "A. A graph where edges have a direction"
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "What is a mixed graph?",
        options: [
            "A. A graph with both directed and undirected edges",
            "B. A graph with only directed edges",
            "C. A graph with only undirected edges",
            "D. A graph with no edges"
        ],
        answer: "A. A graph with both directed and undirected edges"
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "What is an isolated vertex?",
        options: [
            "A. A vertex with degree zero",
            "B. A vertex with degree one",
            "C. A vertex with multiple edges",
            "D. A vertex with loops"
        ],
        answer: "A. A vertex with degree zero"
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "What is a pendant vertex?",
        options: [
            "A. A vertex with degree one",
            "B. A vertex with degree zero",
            "C. A vertex with multiple edges",
            "D. A vertex with loops"
        ],
        answer: "A. A vertex with degree one"
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "What does the Handshaking Theorem state?",
        options: [
            "A. The sum of the degrees of all vertices is equal to twice the number of edges",
            "B. The sum of the degrees of all vertices is equal to the number of edges",
            "C. The sum of the degrees of all vertices is equal to the number of vertices",
            "D. The sum of the degrees of all vertices is zero"
        ],
        answer: "A. The sum of the degrees of all vertices is equal to twice the number of edges"
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "What is the in-degree of a vertex in a directed graph?",
        options: [
            "A. The number of edges entering the vertex",
            "B. The number of edges leaving the vertex",
            "C. The total number of edges in the graph",
            "D. The number of loops at the vertex"
        ],
        answer: "A. The number of edges entering the vertex"
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "What is the out-degree of a vertex in a directed graph?",
        options: [
            "A. The number of edges leaving the vertex",
            "B. The number of edges entering the vertex",
            "C. The total number of edges in the graph",
            "D. The number of loops at the vertex"
        ],
        answer: "A. The number of edges leaving the vertex"
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "What is a subgraph?",
        options: [
            "A. A graph whose vertices and edges are subsets of another graph",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with multiple edges"
        ],
        answer: "A. A graph whose vertices and edges are subsets of another graph"
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "What is a complete graph?",
        options: [
            "A. A graph with exactly one edge between each pair of distinct vertices",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with multiple edges"
        ],
        answer: "A. A graph with exactly one edge between each pair of distinct vertices"
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "What is a cycle graph?",
        options: [
            "A. A graph that consists of a single cycle",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with multiple edges"
        ],
        answer: "A. A graph that consists of a single cycle"
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "What is a wheel graph?",
        options: [
            "A. A graph formed by adding a central vertex connected to all vertices of a cycle",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with multiple edges"
        ],
        answer: "A. A graph formed by adding a central vertex connected to all vertices of a cycle"
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "What is a bipartite graph?",
        options: [
            "A. A graph whose vertices can be divided into two disjoint sets with no edges within the same set",
            "B. A graph with no edges",
            "C. A graph with no vertices",
            "D. A graph with multiple edges"
        ],
        answer: "A. A graph whose vertices can be divided into two disjoint sets with no edges within the same set"
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "What is graph isomorphism?",
        options: [
            "A. Two graphs having the same number of vertices, edges, and edge connectivity",
            "B. Two graphs with different numbers of vertices",
            "C. Two graphs with different numbers of edges",
            "D. Two graphs with no edges"
        ],
        answer: "A. Two graphs having the same number of vertices, edges, and edge connectivity"
    },
    {
        numb: 21,type: "Multiple Choices",
        question: "What is an adjacency matrix?",
        options: [
            "A. A matrix representing which vertices of a graph are adjacent to which other vertices",
            "B. A matrix representing the number of edges in a graph",
            "C. A matrix representing the number of vertices in a graph",
            "D. A matrix representing loops in a graph"
        ],
        answer: "A. A matrix representing which vertices of a graph are adjacent to which other vertices"
    },
    {
        numb: 22,type: "Multiple Choices",
        question: "What is an incidence matrix?",
        options: [
            "A. A matrix representing the relationship between vertices and edges in a graph",
            "B. A matrix representing the number of edges in a graph",
            "C. A matrix representing the number of vertices in a graph",
            "D. A matrix representing loops in a graph"
        ],
        answer: "A. A matrix representing the relationship between vertices and edges in a graph"
    },
    {
        numb: 23,type: "Multiple Choices",
        question: "What is the neighborhood of a vertex?",
        options: [
            "A. The set of all vertices adjacent to the vertex",
            "B. The set of all edges connected to the vertex",
            "C. The set of all vertices in the graph",
            "D. The set of all edges in the graph"
        ],
        answer: "A. The set of all vertices adjacent to the vertex"
    },
    {
        numb: 24,type: "Multiple Choices",
        question: "What is a directed multigraph?",
        options: [
            "A. A directed graph that may have multiple directed edges",
            "B. A directed graph with no edges",
            "C. A directed graph with no vertices",
            "D. A directed graph with loops"
        ],
        answer: "A. A directed graph that may have multiple directed edges"
    },
    {
        numb: 25,type: "Multiple Choices",
        question: "What is the degree sequence of a graph?",
        options: [
            "A. A list of the degrees of the vertices in the graph",
            "B. A list of the edges in the graph",
            "C. A list of the vertices in the graph",
            "D. A list of the loops in the graph"
        ],
        answer: "A. A list of the degrees of the vertices in the graph"
    }
];