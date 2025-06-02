let question = [
    {
        numb: 1,
        question: "Which of the following is NOT mentioned as a NoSQL database ?",
        options: [
            "MongoDB",
            "Neo4j",
            "MySQL",
            "All are mentioned"
        ],
        answer: "MySQL"
    },
    {
        numb: 2,
        question: "Which module in python supports regular expressions?",
        options: [
            "re",
            "regex",
            "pyregex",
            "All are mentioned"
        ],
        answer: "re"
    },
    {
        numb: 3,
        question: "Which Python library is specifically mentioned for web scraping?",
        options: [
            "Pandas",
            "Scrapy",
            "BeautifulSoup",
            "NumPy"
        ],
        answer: "Scrapy"
    },
    {
        numb: 4,
        question: "Which module in python supports XML ?",
        options: [
            "request",
            "numpy",
            "pyxmlex",
            "BeautifulSoup",
        ],
        answer: "BeautifulSoup"
    },
    {
        numb: 5,
        question: "Which of these is considered an example of unordered data?",
        options: [
            "Time series",
            "Genetic sequence",
            "Employee records",
            "Stock prices"
        ],
        answer: "Employee records"
    },
    {
        numb: 6,
        question: "What is the dtype argument used for in NumPy array creation?",
        options: [
            "To specify array dimensions",
            "To set the data type of array elements",
            "To name the array",
            "To index the array"
        ],
        answer: "To set the data type of array elements"
    },
    {
        numb: 7,
        question: "In Pandas, what is each column in a DataFrame?",
        options: [
            "A NumPy array",
            "A Series object",
            "A Python dictionary",
            "A list"
        ],
        answer: "A Series object"
    },
    {
        numb: 8,
        question: "Which of these tools is mentioned for distributed data processing?",
        options: [
            "Tableau",
            "Apache Spark",
            "Weka",
            "RapidMiner"
        ],
        answer: "Apache Spark"
    },
    {
        numb: 9,
        question: "What is the correct way to create a Pandas DataFrame from a dictionary?",
        options: [
            "pd.DataFrame.from_dict()",
            "pd.createDataFrame()",
            "pd.DataFrame()",
            "pd.dict_to_df()"
        ],
        answer: "pd.DataFrame()"
    },
    {
        numb: 10,
        question: "Which of these is NOT listed as a key topic in the course textbook?",
        options: [
            "pandas",
            "SciPy",
            "Django",
            "scikit-learn"
        ],
        answer: "Django"
    },
    {
        numb: 11,
        question: "What does the .shape attribute of a NumPy array return?",
        options: [
            "The data type of the array",
            "The dimensions of the array",
            "The memory size of the array",
            "The number of elements in the array"
        ],
        answer: "The dimensions of the array"
    },
    {
        numb: 12,
        question: "Which method is used to filter rows in a Pandas DataFrame?",
        options: [
            "filter()",
            "query()",
            "Boolean indexing",
            "select()"
        ],
        answer: "Boolean indexing"
    },
    {
        numb: 13,
        question: "What is the main difference between a NumPy array and a Python list?",
        options: [
            "NumPy arrays can only contain numbers",
            "All elements in a NumPy array must be of the same type",
            "NumPy arrays cannot be indexed",
            "Python lists are faster than NumPy arrays"
        ],
        answer: "All elements in a NumPy array must be of the same type"
    },
    {
        numb: 14,
        question: "Which of these is an example of geometric/structured data?",
        options: [
            "Bank transaction records",
            "Social network graphs",
            "Time series data",
            "Document collections"
        ],
        answer: "Social network graphs"
    },
    {
        numb: 15,
        question: "How do you read data from a CSV file into a Pandas DataFrame?",
        options: [
            "pd.read_csv()",
            "pd.open_csv()",
            "pd.load_csv()",
            "pd.csv_to_df()"
        ],
        answer: "pd.read_csv()"
    },
    {
        numb: 16,
        question: "What is the purpose of the astype() method in NumPy?",
        options: [
            "To change array dimensions",
            "To convert array elements to a different data type",
            "To sort array elements",
            "To save the array to disk"
        ],
        answer: "To convert array elements to a different data type"
    },
    {
        numb: 17,
        question: "Which of these visualization tools is specifically mentioned in the handout?",
        options: [
            "Matplotlib",
            "Tableau",
            "Seaborn",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        numb: 18,
        question: "What happens when you perform arithmetic operations between a NumPy array and a scalar?",
        options: [
            "The operation is applied to each element",
            "It raises an error",
            "Only the first element is modified",
            "The scalar is converted to an array first"
        ],
        answer: "The operation is applied to each element"
    },
    {
        numb: 19,
        question: "Which of these is NOT a component of the data science pipeline mentioned in the handout?",
        options: [
            "Data collection",
            "Data processing",
            "Data visualization",
            "Data encryption"
        ],
        answer: "Data encryption"
    },
    {
        numb: 20,
        question: "What is the correct way to access a single row in a Pandas DataFrame by its index label?",
        options: [
            "df.get()",
            "df.loc[]",
            "df.select()",
            "df.row()"
        ],
        answer: "df.loc[]"
    },
    {
        numb: 21,
        question: "Which of these data formats is NOT mentioned in the handout?",
        options: [
            "XML",
            "JSON",
            "YAML",
            "CSV"
        ],
        answer: "YAML"
    },
    {
        numb: 22,
        question: "What is the main advantage of using Pandas over raw NumPy for data analysis?",
        options: [
            "Higher computational speed",
            "More mathematical functions",
            "Better handling of heterogeneous data and labels",
            "Smaller memory footprint"
        ],
        answer: "Better handling of heterogeneous data and labels"
    },
    {
        numb: 23,
        question: "Which of these is an example of ordered data?",
        options: [
            "Product inventory",
            "Genetic sequence",
            "Employee records",
            "Bank transactions"
        ],
        answer: "Genetic sequence"
    },
    {
        numb: 24,
        question: "How do you drop a column from a Pandas DataFrame?",
        options: [
            "df.remove()",
            "df.drop() with axis='columns'",
            "df.delete()",
            "df.del_column()"
        ],
        answer: "df.drop() with axis='columns'"
    },
    {
        numb: 25,
        question: "What is the dtype='object' used for in NumPy array creation?",
        options: [
            "For numerical computations",
            "For arrays that will hold mixed data types",
            "For object-oriented programming",
            "For faster array operations"
        ],
        answer: "For arrays that will hold mixed data types"
    },
    {
        numb: 26,
        question: "Which of these is NOT listed as a data science tool in the handout?",
        options: [
            "SAS",
            "Weka",
            "RapidMiner",
            "TensorBoard"
        ],
        answer: "TensorBoard"
    },
    {
        numb: 27,
        question: "What is the correct way to convert a NumPy array to a Python list?",
        options: [
            "array.to_list()",
            "list(array)",
            "array.tolist()",
            "All of the above"
        ],
        answer: "array.tolist()"
    },
    {
        numb: 28,
        question: "Which of these is mentioned as a use case for the course?",
        options: [
            "Finance",
            "Media",
            "Health",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        numb: 29,
        question: "What is the main difference between .loc[] and .iloc[] in Pandas?",
        options: [
            ".loc[] uses labels, .iloc[] uses positions",
            ".loc[] is faster than .iloc[]",
            ".loc[] works only with columns, .iloc[] with rows",
            "There is no difference"
        ],
        answer: ".loc[] uses labels, .iloc[] uses positions"
    },
    {
        numb: 30,
        question: "Which of these is NOT a characteristic of NumPy arrays mentioned in the handout?",
        options: [
            "Fixed size at creation",
            "Homogeneous data types",
            "Dynamic resizing",
            "Vectorized operations"
        ],
        answer: "Dynamic resizing"
    }
]