let question = [
    {
        numb: 1,
        type: "Multiple Choice",
        question: "Which of the following is not true regarding Data Science?",
        options: [
            "Heavy focus on machine learning algorithms",
            "Concerned only with small data",
            "Concerned with theories in statistics",
            "None of the previous",
        ],
        answer: "None of the previous"
    },
    {
        numb: 2,
        type: "Multiple Choice",
        question: "Which module in Python supports regular expressions?",
        options: [
            "String",
            "re",
            "pyregex",
            "sklearn"
        ],
        answer: "re"
    },
    {
        numb: 3,
        type: "Multiple Choice",
        question: "What does the function 'search' in the regular expressions package do?",
        options: [
            "matches a pattern at the start of the string",
            "matches a pattern at any position in the string",
            "replace all matched",
            "delete all matched"
        ],
        answer: "matches a pattern at any position in the string"
    },
    {
        numb: 4,
        type: "Multiple Choice",
        question: "Which of the following HTTP methods never modifies a server's state?",
        options: [
            "response = requests.put(...)",
            "response = requests.post(...)",
            "response = requests.delete(...)",
            "response = requests.get(...)"
        ],
        answer: "response = requests.get(...)"
    },
    {
        numb: 5,
        type: "Multiple Choice",
        question: "Which module in Python supports parsing HTML and XML documents?",
        options: [
            "BeautifulSoup",
            "numpy",
            "pandas",
            "sklearn"
        ],
        answer: "BeautifulSoup"
    },
    {
        numb: 6,
        type: "Multiple Choice",
        question: "What is the library that corresponds to the alias 'ps' in the following code:",
        options: [
            "pandas",
            "panorama",
            "pymatplots",
            "scipy"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp.png",
        answer: "pandas"
    },
    {
        numb: 7,
        type: "Multiple Choice",
        question: "How many records (rows) will be in the dataframe df after executing the given code?",
        options: [
            "1",
            "3",
            "2",
            "4"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp (2).png",
        answer: "2"
    },
    {
        numb: 8,
        type: "Multiple Choice",
        question: "How many columns will the dataframe df have after executing the given code?",
        options: [
            "6",
            "2",
            "3",
            "1"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp (2).png",
        answer: "2"
    },
    {
        numb: 9,
        type: "Multiple Choice",
        question: "Which of the following is not an example of unordered data?",
        options: [
            "Employee records",
            "Documents",
            "Bank transactions",
            "Time Series"
        ],
        answer: "Time Series"
    },
    {
        numb: 10,
        type: "Multiple Choice",
        question: "What is the primary purpose of the Request module?",
        options: [
            "Send HTTP requests to a server and retrieve web page content",
            "Manage database connections for data storage",
            "Execute complex algorithms for data analysis",
            "Control graphical user interface interactions"
        ],
        answer: "Send HTTP requests to a server and retrieve web page content"
    },
    {
        numb: 11,
        type: "Multiple Choice",
        question: "What will be the output of the given Python code?",
        options: [
            "Porche is the fastest car in the World",
            "Porche is the fastest car in the",
            "Porche is the fastest car in the 2",
            "IndexError: tuple index out of range"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp (4).png",
        answer: "IndexError: tuple index out of range"
    },
    {
        numb: 12,
        type: "Multiple Choice",
        question: "What does the term 'ACID' stand for in the context of databases?",
        options: [
            "All-Comprehensive Isolation and Durability",
            "Atomicity, Consistency, Isolation, Durability",
            "Advanced Configuration for Isolated Databases",
            "Association of Concurrent Information and Data"
        ],
        answer: "Atomicity, Consistency, Isolation, Durability"
    },
    {
        numb: 13,
        type: "Multiple Choice",
        question: "How is the _id field automatically created if not provided in MongoDB?",
        options: [
            "Integer",
            "Timestamp",
            "ObjectId",
            "AutoID"
        ],
        answer: "ObjectId"
    },
    {
        numb: 14,
        type: "Multiple Choice",
        question: "What is MongoDB?",
        options: [
            "Relational database",
            "Document-oriented database",
            "NoSQL database",
            "Both B and C"
        ],
        answer: "Both B and C"
    },
    {
        numb: 15,
        type: "Multiple Choice",
        question: "In MongoDB, what is a document equivalent to in a SQL database?",
        options: [
            "Table",
            "Record",
            "Field",
            "Column"
        ],
        answer: "Record"
    },
    {
        numb: 16,
        type: "Multiple Choice",
        question: "Which method is used to find documents in a MongoDB collection based on a specific condition?",
        options: [
            "get_one()",
            "search()",
            "find_one()",
            "query_one()"
        ],
        answer: "find_one()"
    },
    {
        numb: 17,
        type: "Multiple Choice",
        question: "The hamming distance between two binary vectors is equivalent to:",
        options: [
            "Jaccard Index",
            "Euclidean Distance",
            "Cosine Distance",
            "None of the previous"
        ],
        answer: "None of the previous"
    },
    {
        numb: 18,
        type: "Multiple Choice",
        question: "What does setting New_max=1 and New_min=0 achieve in data normalization?",
        options: [
            "Increases data complexity",
            "Reduces the impact of outliers",
            "Adds noise to the dataset",
            "Standardizes data within a specific range"
        ],
        answer: "Standardizes data within a specific range"
    },
    {
        numb: 19,
        type: "Multiple Choice",
        question: "Which of the following is a common technique to replace missing data in a dataset?",
        options: [
            "Mean",
            "Median",
            "Mode",
            "Random Value",
            "All the mentioned is true"
        ],
        answer: "All the mentioned is true"
    },
    {
        numb: 20,
        type: "Multiple Choice",
        question: "What is the cosine similarity between the vectors (1, 0) and (0, 1)?",
        options: [
            "1",
            "0",
            "0.5",
            "2"
        ],
        answer: "0"
    },
    {
        numb: 21,
        type: "Multiple Choice",
        question: "What is the primary purpose of converting an image to grayscale in machine learning algorithms?",
        options: [
            "To increase computational complexity",
            "To introduce color variations",
            "To reduce computational complexity",
            "To improve image resolution"
        ],
        answer: "To reduce computational complexity"
    },
    {
        numb: 22,
        type: "Multiple Choice",
        question: "In the context of image normalization, what is the benefit of scaling all images to a common range such as [0,1]?",
        options: [
            "It increases computational complexity",
            "It ensures fairness across all images",
            "It introduces colour variations",
            "It reduces the need for data augmentation"
        ],
        answer: "It ensures fairness across all images"
    },
    {
        numb: 23,
        type: "Multiple Choice",
        question: "What is data augmentation in the context of image processing?",
        options: [
            "Increasing the size of an image dataset",
            "Making minor alterations to existing data to increase diversity",
            "Reducing the diversity of a dataset",
            "Converting images to grayscale"
        ],
        answer: "Making minor alterations to existing data to increase diversity"
    },
    {
        numb: 24,
        type: "Multiple Choice",
        question: "What is the assumed seasonality for a monthly time series?",
        options: [
            "7",
            "12",
            "30",
            "365"
        ],
        answer: "12"
    },
    {
        numb: 25,
        type: "Multiple Choice",
        question: "Executing print( (lambda x, y: x/y)(4, 3)) in Python produces",
        options: [
            "0",
            "1",
            "4/3",
            "7"
        ],
        answer: "4/3"
    },
    {
        numb: 26,
        type: "Multiple Choice",
        question: "Executing print(map(lambda x: x**3 , [0,1,2])) in Python produces",
        options: [
            "[0,0,0]",
            "[0,1,2]",
            "[0,1,8]",
            "[0,1,3]"
        ],
        answer: "[0,1,8]"
    },
    {
        numb: 27,
        type: "Multiple Choice",
        question: "Executing print(list(filter(lambda x: x > 2 and x < 8, [-1,0,5,3])) in Python produces",
        options: [
            "[5,3]",
            "[3,5]",
            "[-1,0,5,3]",
            "8"
        ],
        answer: "[5,3]"
    },
    {
        numb: 28,
        type: "Multiple Choice",
        question: "Executing print(functools.reduce(lambda x, y: x+y, [1,2,3,4])) in Python produces",
        options: [
            "24",
            "10",
            "[1,3,6,10]",
            "1"
        ],
        answer: "10"
    },
    {
        numb: 29,
        type: "Multiple Choice",
        question: "Which of the following database is not a relational database?",
        options: [
            "SQLite",
            "MySQL",
            "Oracle",
            "MS Access",
            "None of the database",
        ],
        answer: "None of the database"
    },
    {
        numb: 30,
        type: "Multiple Choice",
        question: "Which of the following library is used for data visualization?",
        options: [
            "TensorFlow",
            "Scrapy",
            "Scikit Learn",
            "Matplotlib"
        ],
        answer: "Matplotlib"
    },
    {
        numb: 31,
        type: "Multiple Choice",
        question: "Which of the following is not a tool for data processing, machine learning algorithm implementation, and visualization?",
        options: [
            "SAS",
            "Weka",
            "RapidMiner",
            "SAS and WEKA"
        ],
        answer: "SAS and WEKA"
    },
    {
        numb: 32,
        type: "Multiple Choice",
        question: "Complex data streams can be analyzed and visualized dynamically using",
        options: [
            "Apache Spark",
            "Scrapy",
            "MS Excel",
            "MS Powerpoint"
        ],
        answer: "Apache Spark"
    },
    {
        numb: 33,
        type: "Multiple Choice",
        question: "metrics.DistanceMetric.get_metric is a function defined in",
        options: [
            "Pandas",
            "Scrapy",
            "Sklearn",
            "Matplotlib"
        ],
        answer: "Sklearn"
    },
    {
        numb: 34,
        type: "Multiple Choice",
        question: "The output of the given code is",
        options: [
            "1",
            "5",
            "9",
            "0"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp (3).png",
        answer: "1"
    },
    {
        numb: 35,
        type: "Multiple Choice",
        question: "Let x={a,b,d} and y={b,c} then S_jaccard(x,y) is ---",
        options: [
            "0.25",
            "1",
            "0.5",
            "0.2"
        ],
        answer: "0.25"
    },
    {
        numb: 36,
        type: "Multiple Choice",
        question: "To normalize the following dataset: 10,40,50,10,50,70,90,30",
        options: [
            "Divide each value by the mean of the data",
            "Replace each value x by (x - the mean of the data / the standard deviation of the data)",
            "A followed by B",
            "Replace each value x by (x - the standard deviation of the data / the median of the data)"
        ],
        answer: "Replace each value x by (x - the mean of the data / the standard deviation of the data)"
    },
    {
        numb: 37,
        type: "Multiple Choice",
        question: "The missing value in the following data : \"10,40,50,10,50,?,10,60,10,30\", may be replaced by ",
        options: [
            "the mean of the remaining data",
            "a value of 10",
            "the median of the remaining data",
            "All the mentioned",
        ],
        answer: "All the mentioned"
    },
    {
        numb: 38,
        type: "Multiple Choice",
        question: "Which of the following distances has three components (distance due to span, content and position)?",
        options: [
            "D('Hello','HALA')",
            "D({a,b,c,d},{a,d})",
            "D(10:30,5:20)",
            "D(10101,01111)"
        ],
        answer: "D(10:30,5:20)"
    },
    {
        numb: 39,
        type: "Multiple Choice",
        question: "Which of the following is NOT an example of Application of Dimensionality Reduction?",
        options: [
            "Microarray data analysis",
            "Protein classification",
            "Fuzzy Logic",
            "Handwritten digit recognition"
        ],
        answer: "Fuzzy Logic"
    },
    {
        numb: 40,
        type: "Multiple Choice",
        question: "Which of the following is not a Challenge in the analysis of the data?",
        options: [
            "Few samples",
            "Mixed data types and unbalanced data",
            "Very low dimensionality",
            "Noise"
        ],
        answer: "Very low dimensionality"
    },
    {
        numb: 41,
        type: "Multiple Choice",
        question: "To use PCA in python you should import it using 'From --- import PCA'",
        options: [
            "sklearn",
            "sklearn.models",
            "sklearn.decomposition",
            "sklearn.metrics"
        ],
        answer: "sklearn.decomposition"
    },
    {
        numb: 42,
        type: "Multiple Choice",
        question: "MRMR --- the relevancy while --- the redundancy",
        options: [
            "maximizes/minimizes",
            "minimizes/minimizes",
            "minimizes/maximizes",
            "maximizes/maximizes"
        ],
        answer: "maximizes/minimizes"
    },
    {
        numb: 43,
        type: "Multiple Choice",
        question: "Which of the following is true regarding the Wrapper model?",
        options: [
            "Relying on a predetermined classification algorithm",
            "Using predictive accuracy as goodness measure",
            "computationally expensive",
            "All the previous is true",
        ],
        answer: "All the previous is true"
    },
    {
        numb: 44,
        type: "Multiple Choice",
        question: "What is the purpose of using StandardScaler() in the given code?",
        options: [
            "reduce the dimension",
            "fill missing data",
            "normalize the data",
            "remove noise"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp (5).png",
        answer: "normalize the data"
    },
    {
        numb: 45,
        type: "Multiple Choice",
        question: "The number of columns of the data_pca",
        options: [
            "4",
            "2",
            "3",
            "1"
        ],
        image:"Q-imgs/IntelliJ_Plugin-main_cpp (5).png",
        answer: "2"
    },
    {
        numb: 46,
        type: "Multiple Choice",
        question: "The resulting data matrix will be of size",
        options: [
            "3×5",
            "4×4",
            "5×5",
            "5×4"
        ],
        image:"Q-imgs/46.jpg",

        answer: "3×5"
    },
    {
        numb: 47,
        type: "Multiple Choice",
        question: "The normalized term frequency of tf ('camel',D1) is",
        options: [
            "0.20",
            "3",
            "4",
            "0.25"
        ],        image:"Q-imgs/46.jpg",

        answer: "0.25"
    },
    {
        numb: 48,
        type: "Multiple Choice",
        question: "The inverse document frequency idf('Camel',D)",
        options: [
            "3",
            "1",
            "1/3",
            "Not Here"
        ],        image:"Q-imgs/46.jpg",

        answer: "Not Here"
    },
    {
        numb: 49,
        type: "Multiple Choice",
        question: "What is the tflogidf ('caw',D)?",
        options: [
            "0",
            "1",
            "3",
            "5"
        ],        image:"Q-imgs/46.jpg",

        answer: "0"
    },
    {
        numb: 50,
        type: "Multiple Choice",
        question: "The resulting distance matrix will be of size",
        options: [
            "3×5",
            "4 × 4",
            "5×5",
            "3×3"
        ],        image:"Q-imgs/46.jpg",

        answer: "3×3"
    },
    {
        numb: 51,
        type: "Multiple Choice",
        question: "The corresponding feature vector of document D1 using binary term frequency is",
        options: [
            "[1 1 1 0 0]",
            "[1 0 0 0 1]",
            "[1 0 1 1]",
            "[2 1 1]"
        ],        image:"Q-imgs/46.jpg",

        answer: "[1 1 1 0 0]"
    },
    {
        numb: 52,
        type: "Multiple Choice",
        question: "The correlation between the data using the new axes z1,z2 is --- than the correlation between the same data with respect to the axes x1,x2",
        options: [
            "Higher",
            "lower",
            "equals",
            "higher or equals"
        ],
        image:"Q-imgs/53.jpg",
        answer: "lower"
    },
    {
        numb: 53,
        type: "Multiple Choice",
        question: "Which axis you may neglect to reduce the dimension?",
        options: [
            "z1",
            "z2",
            "z1 or z2",
            "z1 and z2"
        ],
        image:"Q-imgs/53.jpg",

        answer: "z2"
    }
]
