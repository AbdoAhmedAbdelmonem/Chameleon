let question = [
    {
        numb: 1,
        question: "According to the presentation, which of the following is a way you will typically get data?",
        options: [
            "Directly download a data file",
            "Query data from a database",
            "Query an API",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        numb: 2,
        question: "Which HTTP request method is described as the most common?",
        options: [
            "PUT",
            "POST",
            "GET",
            "DELETE"
        ],
        answer: "GET"
    },
    {
        numb: 3,
        question: "What is a key characteristic of REST APIs mentioned in the document?",
        options: [
            "They maintain user session state on the server",
            "They use a proprietary communication protocol",
            "They are stateless, meaning the server doesn't remember previous interactions",
            "They require a graphical user interface"
        ],
        answer: "They are stateless, meaning the server doesn't remember previous interactions"
    },
    {
        numb: 4,
        question: "Which Python library is recommended for issuing HTTP requests?",
        options: [
            "http.client",
            "urllib",
            "requests",
            "socket"
        ],
        answer: "requests"
    },
    {
        numb: 5,
        question: "What does CSV stand for?",
        options: [
            "Comma Separated Values",
            "Computer System Validation",
            "Common Source Vector",
            "Cascading Style Variables"
        ],
        answer: "Comma Separated Values"
    },
    {
        numb: 6,
        question: "In a CSV file, if values themselves contain commas, how can this be handled?",
        options: [
            "Replace commas with semicolons",
            "Remove the commas from the values",
            "Enclose the values in quotes",
            "Split the value into multiple columns"
        ],
        answer: "Enclose the values in quotes"
    },
    {
        numb: 7,
        question: "Which data format is described as easy for humans to read and write, and easy for machines to parse and generate, consisting of attribute-value pairs and arrays?",
        options: [
            "CSV",
            "XML",
            "JSON",
            "HTML"
        ],
        answer: "JSON"
    },
    {
        numb: 8,
        question: "In JSON, how is a number always assumed to be represented?",
        options: [
            "Integer",
            "Floating point",
            "String",
            "Boolean"
        ],
        answer: "Floating point"
    },
    {
        numb: 9,
        question: "Which Python built-in library is used to parse JSON data?",
        options: [
            "json_parser",
            "simplejson",
            "json",
            "jsonify"
        ],
        answer: "json"
    },
        {
        numb: 10,
        question: "How is HTML described in relation to XML in terms of syntax and purpose?",
        options: [
            "HTML is syntactically stricter than XML and describes data structure",
            "HTML is syntactically like XML but primarily meant to describe appearance",
            "HTML uses a completely different syntax from XML and is for data interchange",
            "HTML is an older version of XML used for web documents"
        ],
        answer: "HTML is syntactically like XML but primarily meant to describe appearance"
    },
    {
        numb: 11,
        question: "Which Python library is mentioned for parsing XML/HTML, specifically focused on getting data out of these files?",
        options: [
            "xml.etree.ElementTree",
            "lxml",
            "BeautifulSoup",
            "html.parser"
        ],
        answer: "BeautifulSoup"
    },
    {
        numb: 12,
        question: "What does the 'A' in ACID properties of a relational database stand for?",
        options: [
            "Accuracy",
            "Atomicity",
            "Availability",
            "Authentication"
        ],
        answer: "Atomicity"
    },
    {
        numb: 13,
        question: "Which `re` module function in Python is used to find the first occurrence of a pattern in a string?",
        options: [
            "re.match()",
            "re.findall()",
            "re.search()",
            "re.sub()"
        ],
        answer: "re.search()"
    },
    {
        numb: 14,
        question: "In regular expressions, what does '\\d' typically match?",
        options: [
            "Any non-digit character",
            "Any whitespace character",
            "Any digit ([0-9])",
            "Any word character"
        ],
        answer: "Any digit ([0-9])"
    },
    {
        numb: 15,
        question: "What does the regular expression quantifier 'a*' mean?",
        options: [
            "Match character 'a' exactly once",
            "Match character 'a' zero or one time",
            "Match character 'a' zero or more times",
            "Match character 'a' one or more times"
        ],
        answer: "Match character 'a' zero or more times"
    },
    {
        numb: 16,
        question: "In Python's `re` module, what is the purpose of using 'r' before a regular expression string (e.g., r\"\\w+\")?",
        options: [
            "To make the search case-sensitive",
            "To indicate a raw string, avoiding the need to double escape backslashes",
            "To reverse the search direction",
            "To restrict the search to the beginning of the string"
        ],
        answer: "To indicate a raw string, avoiding the need to double escape backslashes"
    },
    {
        numb: 17,
        question: "By default, regular expressions try to capture as much text as possible. What is this behavior called?",
        options: [
            "Minimal matching",
            "Lazy matching",
            "Greedy matching",
            "Exact matching"
        ],
        answer: "Greedy matching"
    },
    {
        numb: 18,
        question: "Which of the following is a reason for data visualization according to the document?",
        options: [
            "To provide exact numerical values for all data points simultaneously",
            "To replace quantitative analysis entirely",
            "To gain insight into an information space by mapping data onto graphical primitives",
            "To make datasets appear more complex"
        ],
        answer: "To gain insight into an information space by mapping data onto graphical primitives"
    },
    {
        numb: 19,
        question: "What type of visualization is a Spidergram (Star Plot) used for?",
        options: [
            "Displaying univariate data",
            "Displaying bivariate data relationships",
            "Displaying multivariate data",
            "Displaying time-series data"
        ],
        answer: "Displaying multivariate data"
    },
    {
        numb: 20,
        question: "In Parallel Coordinate Plots, how are items characterized by many parameters represented?",
        options: [
            "As points on a 2D scatter plot",
            "As lines connecting points on parallel axes",
            "As segments of a pie chart",
            "As bars in a histogram"
        ],
        answer: "As lines connecting points on parallel axes"
    },
    {
        numb: 21,
        question: "What is the idea behind using Chernoff Faces for data visualization?",
        options: [
            "Faces are mathematically precise representations of data",
            "Humans easily recognize faces and notice small changes without difficulty",
            "They are the only way to represent more than 10 variables",
            "They are easy to generate with basic programming tools"
        ],
        answer: "Humans easily recognize faces and notice small changes without difficulty"
    },
    {
        numb: 22,
        question: "What does a Tag Cloud (Word Cloud) primarily visualize?",
        options: [
            "The relationship between different text documents",
            "The frequency or importance of words in a text",
            "The grammatical structure of sentences",
            "The sentiment of a body of text"
        ],
        answer: "The frequency or importance of words in a text"
    },
    {
        numb: 23,
        question: "Which Python library is used with Pandas to load a dataset as a data frame in the example?",
        options: [
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Pandas itself"
        ],
        answer: "Pandas itself"
    },
    {
        numb: 24,
        question: "In Matplotlib, what does the `bins` argument in `plt.hist()` control?",
        options: [
            "The color of the histogram bars",
            "The number or edges of the intervals for grouping data",
            "The height of the histogram bars",
            "The title of the histogram"
        ],
        answer: "The number or edges of the intervals for grouping data"
    },
    {
        numb: 25,
        question: "Which Python library provides a high-level interface to Matplotlib and makes it easier to produce attractive statistical plots?",
        options: [
            "NumPy",
            "SciPy",
            "Seaborn",
            "Pandas"
        ],
        answer: "Seaborn"
    },
    {
        numb: 26,
        question: "In Seaborn's `lmplot()`, what does the `hue` argument achieve?",
        options: [
            "It changes the overall theme of the plot",
            "It allows color-coding of data points based on a variable",
            "It adjusts the transparency of the plot elements",
            "It fits a linear regression model to the data"
        ],
        answer: "It allows color-coding of data points based on a variable"
    },
    {
        numb: 27,
        question: "What type of plot is `sns.heatmap()` in Seaborn useful for visualizing?",
        options: [
            "One-dimensional distributions",
            "Time-series data",
            "Matrix-like data, such as correlation matrices",
            "Hierarchical data"
        ],
        answer: "Matrix-like data, such as correlation matrices"
    },
    {
        numb: 28,
        question: "What does the y-value represent in an Empirical Cumulative Distribution Function (ECDF)?",
        options: [
            "The frequency of a specific x-value",
            "The mean of the data points up to the corresponding x-value",
            "The fraction of data points that have a value smaller than the corresponding x-value",
            "The standard deviation of the data points"
        ],
        answer: "The fraction of data points that have a value smaller than the corresponding x-value"
    },
    {
        numb: 29,
        question: "In the NetworkX example, what does `nx.shortest_path(g, 'b', 'd', weighted=True)` calculate?",
        options: [
            "The shortest path between nodes 'b' and 'd' considering the number of edges only",
            "All possible paths between nodes 'b' and 'd'",
            "The shortest path between nodes 'b' and 'd' considering the weights of the edges",
            "The longest path between nodes 'b' and 'd'"
        ],
        answer: "The shortest path between nodes 'b' and 'd' considering the weights of the edges"
    },
    {
        numb: 30,
        question: "According to the document, NetworkX provides basic drawing capabilities by using which library?",
        options: [
            "Graphviz",
            "Plotly",
            "Bokeh",
            "Matplotlib"
        ],
        answer: "Matplotlib"
    }
];