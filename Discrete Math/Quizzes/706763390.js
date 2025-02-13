const question = [
    {
        numb: 1,
        question: "What is a graph in discrete mathematics?",
        options: [
            "A. A set of vertices and edges connecting them",
            "B. A set of edges only",
            "C. A set of vertices only",
            "D. A set of loops and multiple edges"
        ],
        answer: "A. A set of vertices and edges connecting them"
    },
    {
        numb: 2,
        question: "What is the degree of a vertex in an undirected graph?",
        options: [
            "A. The number of loops at the vertex",
            "B. The number of edges incident with it",
            "C. The number of vertices adjacent to it",
            "D. The number of directed edges from the vertex"
        ],
        answer: "B. The number of edges incident with it"
    },
    {
        numb: 3,
        question: "What is a simple graph?",
        options: [
            "A. A graph with no edges",
            "B. A graph with no loops or multiple edges",
            "C. A graph with multiple edges between the same vertices",
            "D. A graph with loops and multiple edges"
        ],
        answer: "B. A graph with no loops or multiple edges"
    },
    {
        numb: 4,
        question: "What is a multigraph?",
        options: [
            "A. A graph with no edges",
            "B. A graph with no loops or multiple edges",
            "C. A graph with multiple edges between the same vertices",
            "D. A graph with loops and multiple edges"
        ],
        answer: "C. A graph with multiple edges between the same vertices"
    },
    {
        numb: 5,
        question: "What is a pseudograph?",
        options: [
            "A. A graph with no edges",
            "B. A graph with no loops or multiple edges",
            "C. A graph with multiple edges between the same vertices",
            "D. A graph with loops and possibly multiple edges"
        ],
        answer: "D. A graph with loops and possibly multiple edges"
    },
    {
        numb: 6,
        question: "What is an isolated vertex?",
        options: [
            "A. A vertex with degree one",
            "B. A vertex with degree zero",
            "C. A vertex with multiple edges",
            "D. A vertex with loops"
        ],
        answer: "B. A vertex with degree zero"
    },
    {
        numb: 7,
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
        numb: 8,
        question: "What is the Handshaking Theorem?",
        options: [
            "A. The sum of the degrees of all vertices is equal to twice the number of edges",
            "B. The sum of the degrees of all vertices is equal to the number of edges",
            "C. The sum of the degrees of all vertices is equal to the number of vertices",
            "D. The sum of the degrees of all vertices is equal to the number of loops"
        ],
        answer: "A. The sum of the degrees of all vertices is equal to twice the number of edges"
    },
    {
        numb: 9,
        question: "What is the in-degree of a vertex in a directed graph?",
        options: [
            "A. The numb of edges with the vertex as their initial vertex",
            "B. The number of edges with the vertex as their terminal vertex",
            "C. The number of loops at the vertex",
            "D. The number of multiple edges at the vertex"
        ],
        answer: "B. The number of edges with the vertex as their terminal vertex"
    },
    {
        numb: 10,
        question: "What is the out-degree of a vertex in a directed graph?",
        options: [
            "A. The number of edges with the vertex as their initial vertex",
            "B. The number of edges with the vertex as their terminal vertex",
            "C. The number of loops at the vertex",
            "D. The number of multiple edges at the vertex"
        ],
        answer: "A. The number of edges with the vertex as their initial vertex"
    },
    {
        numb: 11,
        question: "What is a subgraph?",
        options: [
            "A. A graph that contains all the vertices and edges of another graph",
            "B. A graph whose vertices and edges are subsets of another graph",
            "C. A graph with no edges",
            "D. A graph with no vertices"
        ],
        answer: "B. A graph whose vertices and edges are subsets of another graph"
    },
    {
        numb: 12,
        question: "What is a directed graph?",
        options: [
            "A. A graph with undirected edges",
            "B. A graph with directed edges",
            "C. A graph with no edges",
            "D. A graph with loops and multiple edges"
        ],
        answer: "B. A graph with directed edges"
    },
    {
        numb: 13,
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
        numb: 14,
        question: "What is the neighborhood of a vertex?",
        options: [
            "A. The set of all vertices adjacent to it",
            "B. The set of all edges incident with it",
            "C. The set of all loops at the vertex",
            "D. The set of all multiple edges at the vertex"
        ],
        answer: "A. The set of all vertices adjacent to it"
    },
    {
        numb: 15,
        question: "What is a null graph?",
        options: [
            "A. A graph with no vertices",
            "B. A graph with no edges",
            "C. A graph with no loops",
            "D. A graph with no multiple edges"
        ],
        answer: "B. A graph with no edges"
    },
    {
        numb: 16,
        question: "What is the degree of a vertex with a loop?",
        options: [
            "A. The loop contributes once to the degree",
            "B. The loop contributes twice to the degree",
            "C. The loop does not contribute to the degree",
            "D. The loop contributes half to the degree"
        ],
        answer: "B. The loop contributes twice to the degree"
    },
    {
        numb: 17,
        question: "What is the sum of the degrees of all vertices in a graph with 10 vertices each of degree six?",
        options: [
            "A. 60",
            "B. 30",
            "C. 10",
            "D. 6"
        ],
        answer: "A. 60"
    },
    {
        numb: 18,
        question: "What is the numb of edges in a graph with 10 vertices each of degree six?",
        options: [
            "A. 60",
            "B. 30",
            "C. 10",
            "D. 6"
        ],
        answer: "B. 30"
    },
    {
        numb: 19,
        question: "What is a loop in a graph?",
        options: [
            "A. An edge that connects two different vertices",
            "B. An edge that connects a vertex to itself",
            "C. An edge that connects multiple vertices",
            "D. An edge that is directed"
        ],
        answer: "B. An edge that connects a vertex to itself"
    },
    {
        numb: 20,
        question: "What is the degree of a vertex in a directed graph?",
        options: [
            "A. The sum of its in-degree and out-degree",
            "B. The difference between its in-degree and out-degree",
            "C. The product of its in-degree and out-degree",
            "D. The maximum of its in-degree and out-degree"
        ],
        answer: "A. The sum of its in-degree and out-degree"
    },
    {
        numb: 21,
        question: "What is the degree of a vertex with no edges?",
        options: [
            "A. 0",
            "B. 1",
            "C. 2",
            "D. 3"
        ],
        answer: "A. 0"
    },
    {
        numb: 22,
        question: "What is the degree of a vertex with one loop?",
        options: [
            "A. 1",
            "B. 2",
            "C. 0",
            "D. 3"
        ],
        answer: "B. 2"
    },
    {
        numb: 23,
        question: "What is the degree of a vertex with two edges?",
        options: [
            "A. 1",
            "B. 2",
            "C. 0",
            "D. 3"
        ],
        answer: "B. 2"
    },
    {
        numb: 24,
        question: "What is the degree of a vertex with three edges?",
        options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
        ],
        answer: "C. 3"
    },
    {
        numb: 25,
        question: "What is the degree of a vertex with four edges?",
        options: [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
        ],
        answer: "D. 4"
    }
];