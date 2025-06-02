let question = [
    {
        numb: 1,
        type: "Multiple Choice",
        question: "Dimensionality reduction techniques are primarily used for:",
        options: [
            "Data visualization",
            "Data compression",
            "Noise removal",
            "All the mentioned"
        ],
        answer: "All the mentioned"
    },
    {
        numb: 2,
        type: "Multiple Choice",
        question: "Which of the following is an application of dimensionality reduction?",
        options: [
            "Customer relationship management",
            "Image retrieval",
            "Face recognition",
            "All the mentioned"
        ],
        answer: "All the mentioned"
    },
    {
        numb: 3,
        type: "Multiple Choice",
        question: "Image classification involves:",
        options: [
            "Classifying unlabeled documents",
            "Storing and retrieving documents efficiently",
            "Removing noise from documents",
            "None of the mentioned"
        ],
        answer: "None of the mentioned"
    },
    {
        numb: 4,
        type: "Multiple Choice",
        question: "Gene expression microarray analysis deals with:",
        options: [
            "Classifying novel samples into disease types",
            "Analyzing high-dimensional microarray data",
            "Reducing noise in gene expression data",
            "reducing the dimensionality","All the mentioned"
        ],
        answer: "All the mentioned"
    },
    {
        numb: 5,
        type: "Multiple Choice",
        question: "Feature selection differs from feature reduction in that it always produces",
        options: [
            "all original features",
            "a subset of original features",
            "another features",
            "three features only for visualization"
        ],
        answer: "a subset of original features"
    },
    {
        numb: 6,
        type: "Multiple Choice",
        question: "Which model of feature selection relies on a predetermined classification algorithm?",
        options: [
            "Filter model",
            "Wrapper model",
            "MRMR model",
            "Unsupervised model"
        ],
        answer: "Wrapper model"
    },
    {
        numb: 7,
        type: "Multiple Choice",
        question: "Principal Component Analysis (PCA) is used for:",
        options: [
            "Data compression",
            "Dimensionality reduction",
            "Feature selection",
            "Image retrieval"
        ],
        answer: "Dimensionality reduction"
    },
    {
        numb: 8,
        type: "Multiple Choice",
        question: "The MRMR feature selection algorithm aims to",
        options: [
            "Maximize redundancy between features",
            "Minimize relevance of target features",
            "Maximize relevance and minimize redundancy",
            "minimize the variance"
        ],
        answer: "Maximize relevance and minimize redundancy"
    },
    {
        numb: 9,
        type: "Multiple Choice",
        question: "Which library in Python can be used for PCA?",
        options: [
            "NumPy",
            "Pandas",
            "Scikit-learn",
            "Matplotlib"
        ],
        answer: "Scikit-learn"
    },
    {
        numb: 10,
        type: "Multiple Choice",
        question: "What is the purpose of standardizing features before applying PCA?",
        options: [
            "To normalize the data",
            "To remove outliers",
            "to replace missing data",
            "visualization"
        ],
        answer: "To normalize the data"
    },
    {
        numb: 11,
        type: "Multiple Choice",
        question: "Information gain is a measure used in:",
        options: [
            "Wrapper model",
            "Filter model",
            "MRMR model",
            "PCA"
        ],
        answer: "Filter model"
    },
    {
        numb: 12,
        type: "Multiple Choice",
        question: "What is a lambda function in Python?",
        options: [
            "A built-in function",
            "An anonymous function defined with the lambda keyword",
            "A special type of recursive function",
            "A function that can only be used once"
        ],
        answer: "An anonymous function defined with the lambda keyword"
    },
    {
        numb: 13,
        type: "Multiple Choice",
        question: "What is the correct syntax for a lambda function that adds two numbers, a and b?",
        options: [
            "lambda a, b: a + b",
            "lambda a + b",
            "function (a, b): return a + b",
            "(lambda (a, b): return a + b)"
        ],
        answer: "lambda a, b: a + b"
    },
    {
        numb: 14,
        type: "Multiple Choice",
        question: "How do you call a lambda function that multiplies two numbers?",
        options: [
            "(lambda a, b: a * b)(5, 3)",
            "lambda a, b: a * b(5, 3)",
            "call(lambda a, b: a * b, 5, 3)",
            "lambda(5, 3, a * b)"
        ],
        answer: "(lambda a, b: a * b)(5, 3)"
    },
    {
        numb: 15,
        type: "Multiple Choice",
        question: "If the test set is used to select and fine tune the parameters of the models, then it is called ……….",
        options: [
            "training set",
            "validation set",
            "backup set",
            "original set"
        ],
        answer: "validation set"
    },
    {
        numb: 16,
        type: "True/False",
        question: "The test set is a subset of the training set.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 17,
        type: "Multiple Choice",
        question: "In ______ the (classes) are predefined.",
        options: [
            "Association rules.",
            "Summarization.",
            "Clustering",
            "Classification"
        ],
        answer: "Classification"
    },
    {
        numb: 18,
        type: "True/False",
        question: "The number of classes is not known in clustering task",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 19,
        type: "Multiple Choice",
        question: "In the image below, which would be the best value for k assuming that the algorithm you are using is k-Nearest Neighbor.",
        options: [
            "3",
            "10",
            "20",
            "50"
        ],
        image:"Q-imgs/20.png",
        answer: "10"
    },
    {
        numb: 20,
        type: "Multiple Choice",
        question: "Which of the following machine learning algorithm can be used for imputing missing values of both categorical and continuous variables?",
        options: [
            "Linear Regression",
            "KNN",
            "Logistic Regression",
            "kmeans"
        ],
        answer: "KNN"
    },
    {
        numb: 21,
        type: "Multiple Choice",
        question: "Which of the following statement is true about kNN algorithm?",
        options: [
            "k-NN performs much better if all of the data have the same scale and density.",
            "it struggles when the number of objects is very large",
            "k-NN makes no assumptions about the functional form of the problem being solved",
            "All the mentioned"
        ],
        answer: "All the mentioned"
    },
    {
        numb: 22,
        type: "Multiple Choice",
        question: "The process of training a predictive model with well-defined target values is known as (1)",
        options: [
            "Unsupervised learning",
            "Supervised learning",
            "Model estimation",
            "Model testing"
        ],
        answer: "Supervised learning"
    },
    {
        numb: 23,
        type: "Multiple Choice",
        question: "Which of the following transformation is called the z-score transformation",
        options: [
            "(X-max(X))/(Max(X)-Min(X)",
            "(X-Mean(X))/(Max(X)-Min(X))",
            "(X-Mean(X))/Standard Deviation of X",
            "Mean(X)/Max(X)"
        ],
        answer: "(X-Mean(X))/Standard Deviation of X"
    },
    {
        numb: 24,
        type: "Multiple Choice",
        question: "Which of the following is finally produced by Hierarchical Clustering?",
        options: [
            "final estimate of cluster centroids",
            "tree showing how close things are to each other",
            "assignment of each point to clusters",
            "all of the mentioned"
        ],
        answer: "tree showing how close things are to each other"
    },
    {
        numb: 25,
        type: "Multiple Choice",
        question: "……… method works by grouping data objects into predefined number of groups k, by computing k cluster centers in each iteration",
        options: [
            "Hierarchical",
            "K-Means",
            "K-Medoids",
            "None of the above"
        ],
        answer: "K-Means"
    },
    {
        numb: 26,
        type: "Multiple Choice",
        question: "Agglomerative is …… tree",
        options: [
            "Top-Down",
            "Bottom-Up",
            "Both a & b",
            "Hybrid"
        ],
        answer: "Bottom-Up"
    },
    {
        numb: 27,
        type: "Multiple Choice",
        question: "Divisive is …….. Tree",
        options: [
            "Top-Down",
            "Bottom-Up",
            "Both a & b",
            "Hybrid"
        ],
        answer: "Top-Down"
    },
    {
        numb: 28,
        type: "Multiple Choice",
        question: "Consider the distance between one cluster and another cluster to be equal to the shortest distance from any member of one cluster to any member of the other cluster.",
        options: [
            "Single linkage",
            "Complete linkage",
            "Average linkage",
            "None of the above"
        ],
        answer: "Single linkage"
    },
    {
        numb: 29,
        type: "Multiple Choice",
        question: "How can you avoid overfitting your model?",
        options: [
            "Keep the model simple",
            "removing some of the noise in the training data",
            "Use cross-validation techniques",
            "Use regularization techniques",
            "All the mentioned"
        ],
        answer: "All the mentioned"
    },
    {
        numb: 30,
        type: "Multiple Choice",
        question: "Which of the following is true regarding Data Science?",
        options: [
            "Concerned only with big data",
            "Heavy focus on machine learning algorithms",
            "multidisciplinary approach that combines principles and practices from the fields",
            "Concerned with theories in statistics"
        ],
        answer: "multidisciplinary approach that combines principles and practices from the fields"
    },
    {
        numb: 31,
        type: "Multiple Choice",
        question: "Which of the following HTTP methods modifies a server's state?",
        options: [
            "response = requests.put(...)",
            "response = requests.post(...)",
            "response = requests.delete(...)",
            "a , b , c"
        ],
        answer: "a , b , c"
    },
    {
        numb: 32,
        type: "Multiple Choice",
        question: "Which module in Python supports machine learning?",
        options: [
            "BeautifulSoup",
            "matplotlib",
            "pandas",
            "sklearn"
        ],
        answer: "sklearn"
    },
    {
        numb: 33,
        type: "Multiple Choice",
        question: "how many records (rows) will be in the dataframe df,  after executing the code'",
        options: [
            "1",
            "3",
            "2",
            "4"
        ],
        image: "Q-imgs/IntelliJ_Plugin-main_cpp (6).png",
        answer: "4"
    },
    {
        numb: 34,
        type: "Multiple Choice",
        question: "how many columns will be printed?",
        options: [
            "6",
            "2",
            "3",
            "4"
        ],
        image: "Q-imgs/IntelliJ_Plugin-main_cpp (6).png",
        answer: "2"
    },
    {
        numb: 35,
        type: "Multiple Choice",
        question: "how many rows will be printed",
        options: [
            "6",
            "2",
            "3",
            "4"
        ],
        image: "Q-imgs/IntelliJ_Plugin-main_cpp (6).png",
        answer: "2"
    },
    {
        numb: 36,
        type: "Multiple Choice",
        question: "the dataframe df will be saved as",
        options: [
            "text file",
            "xml",
            "html",
            "word"
        ],
        image: "Q-imgs/IntelliJ_Plugin-main_cpp (6).png",
        answer: "text file"
    },
    {
        numb: 37,
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
        numb: 38,
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
        numb: 39,
        type: "Multiple Choice",
        question: "The Euclidean distance between two binary vectors is equivalent to :-",
        options: [
            "Jaccard Index",
            "Edit Distance",
            "Squared Euclidean Distance",
            "None of the Previous is true"
        ],
        answer: "None of the Previous is true"
    },
    {
        numb: 40,
        type: "Multiple Choice",
        question: "What we achieve by data normalization?",
        options: [
            "Increases data complexity",
            "Reduces the impact of outliers",
            "Adds noise to the dataset",
            "Standardizes data within a specific range"
        ],
        answer: "Standardizes data within a specific range"
    },
    {
        numb: 41,
        type: "Multiple Choice",
        question: "Which of the following is not a common technique to replace missing data in a dataset?",
        options: [
            "Mean",
            "Median",
            "Mode",
            "Random Value"
        ],
        answer: "Random Value"
    },
    {
        numb: 42,
        type: "Multiple Choice",
        question: "What is the squared Euclidian distance between the vectors (2, 1) and (1, 2)?",
        options: [
            "1",
            "0",
            "0.5",
            "2"
        ],
        answer: "2"
    },
    {
        numb: 43,
        type: "True/False",
        question: "The primary purpose of converting an image to grayscale is reducing computational complexity",
        options: [
            "True",
            "false"
        ],
        answer: "True"
    },
    {
        numb: 44,
        type: "Multiple Choice",
        question: "Making minor alterations to existing data to increase diversity is",
        options: [
            "data augmentation",
            "normalization",
            "standardization",
            "conversion"
        ],
        answer: "data augmentation"
    },
    {
        numb: 45,
        type: "Multiple Choice",
        question: "What is the assumed seasonality for a daily time series?",
        options: [
            "3",
            "2",
            "1",
            "Not Here"
        ],
        answer: "Not Here"
    },
    {
        numb: 46,
        type: "Multiple Choice",
        question: "Executing print(map(lambda x: x**4, [0,1,2])) in Python produces",
        options: [
            "[0,0]",
            "[0,1,4]",
            "[0,1,16]",
            "[0,1,9]"
        ],
        answer: "[0,1,16]"
    },
    {
        numb: 47,
        type: "Multiple Choice",
        question: "Executing print(list(filter(lambda x: x < 2, [-1,0,5,3])) in Python produces",
        options: [
            "[-1,0]",
            "[3,5]",
            "[5,3]",
            "7"
        ],
        answer: "[-1,0]"
    },
    {
        numb: 48,
        type: "Multiple Choice",
        question: "Executing print(functools.reduce(lambda x, y: x*y, [1,2,3,4])) in Python produces",
        options: [
            "24",
            "10",
            "[1,3,6,10]",
            "1"
        ],
        answer: "24"
    },
    {
        numb: 49,
        type: "Multiple Choice",
        question: "Which of the following database is not a relational database?",
        options: [
            "Mongo",
            "MySQL",
            "Oracle",
            "MS Access"
        ],
        answer: "Mongo"
    },
    {
        numb: 50,
        type: "Multiple Choice",
        question: "Which of the following library is used for data visualization?",
        options: [
            "TensorFlow",
            "Scrapy",
            "Scikit Learn",
            "seaborn"
        ],
        answer: "seaborn"
    },
]