let question = [
    {
        numb: 1,
        question: "Which of the following is NOT a type of NoSQL database mentioned in the lecture?",
        options: [
            "Document Store",
            "Graph Store",
            "Hierarchical Store",
            "Key-Value Store"
        ],
        answer: "Hierarchical Store"
    },
    {
        numb: 2,
        question: "What does the CAP theorem state about shared data-systems?",
        options: [
            "They can guarantee consistency, availability, and partition tolerance simultaneously",
            "They can only guarantee two out of three properties at the same time",
            "They can guarantee all three properties with enough resources",
            "None of the above"
        ],
        answer: "They can only guarantee two out of three properties at the same time"
    },
    {
        numb: 3,
        question: "Which of the following is a characteristic of SQL databases?",
        options: [
            "They are schema-less",
            "They use tables with rows and columns",
            "They don't support complex queries",
            "They are always file-based"
        ],
        answer: "They use tables with rows and columns"
    },
    {
        numb: 4,
        question: "What is the main difference between SQLite and other SQL databases like MySQL?",
        options: [
            "SQLite is server-based while others are file-based",
            "SQLite is file-based while others are server-based",
            "SQLite doesn't use SQL",
            "SQLite is a NoSQL database"
        ],
        answer: "SQLite is file-based while others are server-based"
    },
    {
        numb: 5,
        question: "Which of the following is NOT an advantage of NoSQL databases mentioned in the lecture?",
        options: [
            "Easier scalability",
            "Table-less design",
            "Strong ACID compliance",
            "Flexible schema"
        ],
        answer: "Strong ACID compliance"
    },
    {
        numb: 6,
        question: "What does BASE stand for in NoSQL databases?",
        options: [
            "Basic Atomicity, Stability, and Endurance",
            "Basically Available, Soft-state, Eventually consistent",
            "Binary Access, Storage, and Encoding",
            "None of the above"
        ],
        answer: "Basically Available, Soft-state, Eventually consistent"
    },
    {
        numb: 7,
        question: "Which of the following is a document-oriented NoSQL database?",
        options: [
            "Neo4j",
            "MongoDB",
            "Redis",
            "HBase"
        ],
        answer: "MongoDB"
    },
    {
        numb: 8,
        question: "In MongoDB, what is the equivalent of a row in a relational database?",
        options: [
            "Collection",
            "Document",
            "Field",
            "Index"
        ],
        answer: "Document"
    },
    {
        numb: 9,
        question: "What is the primary key field automatically created in MongoDB called?",
        options: [
            "_id",
            "id",
            "key",
            "primary"
        ],
        answer: "_id"
    },
    {
        numb: 10,
        question: "Which of the following is NOT a feature of MongoDB mentioned in the lecture?",
        options: [
            "Full ACID compliance",
            "Horizontal scalability",
            "Rich query capabilities",
            "Flexible schema"
        ],
        answer: "Full ACID compliance"
    },
    {
        numb: 11,
        question: "What type of join does SQLite NOT currently support according to the lecture?",
        options: [
            "LEFT JOIN",
            "RIGHT JOIN",
            "INNER JOIN",
            "FULL OUTER JOIN"
        ],
        answer: "FULL OUTER JOIN"
    },
    {
        numb: 12,
        question: "Which SQL operator is used to match a character pattern?",
        options: [
            "=",
            "LIKE",
            "IN",
            "BETWEEN"
        ],
        answer: "LIKE"
    },
    {
        numb: 13,
        question: "What is the purpose of a view in SQL?",
        options: [
            "To physically store data",
            "To structure data in a way users find intuitive",
            "To increase database size",
            "To replace tables"
        ],
        answer: "To structure data in a way users find intuitive"
    },
    {
        numb: 14,
        question: "Which of the following is NOT a MongoDB data type?",
        options: [
            "ObjectId",
            "ISODate",
            "VARCHAR",
            "Embedded Document"
        ],
        answer: "VARCHAR"
    },
    {
        numb: 15,
        question: "How does MongoDB typically represent relationships between data?",
        options: [
            "Through foreign keys",
            "Through embedded documents or references",
            "Through join tables",
            "Through XML links"
        ],
        answer: "Through embedded documents or references"
    },
    {
        numb: 16,
        question: "What is the main advantage of column store NoSQL databases?",
        options: [
            "They are best for data analytics",
            "They are the simplest to implement",
            "They support complex transactions",
            "They are the fastest for simple key-value lookups"
        ],
        answer: "They are best for data analytics"
    },
    {
        numb: 17,
        question: "Which of the following companies is using NoSQL databases?",
        options: [
            "Google",
            "Amazon",
            "Microsoft",
            "All are mentioned"
        ],
        answer: "All are mentioned"
    },
    {
        numb: 18,
        question: "What is the default database that the MongoDB shell connects to?",
        options: [
            "admin",
            "test",
            "local",
            "main"
        ],
        answer: "test"
    },
    {
        numb: 19,
        question: "Which command is used to create an index in MongoDB?",
        options: [
            "createIndex",
            "ensureIndex",
            "makeIndex",
            "addIndex"
        ],
        answer: "ensureIndex"
    },
    {
        numb: 20,
        question: "What does the $set operator do in MongoDB?",
        options: [
            "Creates a new collection",
            "Updates specific fields in a document",
            "Deletes a document",
            "Performs a join operation"
        ],
        answer: "Updates specific fields in a document"
    },
    {
        numb: 21,
        question: "Which of the following is a disadvantage of SQLite mentioned in the lecture?",
        options: [
            "Difficult to set up",
            "Not easily scalable",
            "Requires constant administration",
            "Uses non-standard SQL syntax"
        ],
        answer: "Not easily scalable"
    },
    {
        numb: 22,
        question: "What is the main characteristic of graph databases?",
        options: [
            "They store data in tables",
            "They focus on relationships between nodes",
            "They are optimized for simple key-value pairs",
            "They use a document-oriented approach"
        ],
        answer: "They focus on relationships between nodes"
    },
    {
        numb: 23,
        question: "Which of the following is NOT a SQL language component mentioned in the lecture?",
        options: [
            "Data Definition Language",
            "Data Manipulation Language",
            "Query Language",
            "Transaction Control Language"
        ],
        answer: "Transaction Control Language"
    },
    {
        numb: 24,
        question: "How does MongoDB handle schema evolution?",
        options: [
            "Through strict schema enforcement",
            "By requiring schema migrations",
            "By allowing documents in the same collection to have different structures",
            "By using XML schemas"
        ],
        answer: "By allowing documents in the same collection to have different structures"
    },
    {
        numb: 25,
        question: "What is BSON in MongoDB?",
        options: [
            "A query language",
            "A binary representation of JSON-like documents",
            "A type of index",
            "A replication protocol"
        ],
        answer: "A binary representation of JSON-like documents"
    },
    {
        numb: 26,
        question: "Which of the following is a key advantage of relational databases mentioned in the lecture?",
        options: [
            "Easy horizontal scaling",
            "Support for complex queries and joins",
            "Flexible schema",
            "Simple key-value access"
        ],
        answer: "Support for complex queries and joins"
    },
    {
        numb: 27,
        question: "What is the purpose of the .pretty() method in the MongoDB shell?",
        options: [
            "To format output in a more readable way",
            "To make queries run faster",
            "To create indexes",
            "To validate data"
        ],
        answer: "To format output in a more readable way"
    },
    {
        numb: 28,
        question: "Which of the following is NOT a MongoDB feature mentioned in the lecture?",
        options: [
            "Geospatial features",
            "Real-time aggregation",
            "Stored procedures",
            "Ad hoc queries"
        ],
        answer: "Stored procedures"
    },
    {
        numb: 29,
        question: "What is the main difference between SQL and NoSQL approaches to schema design?",
        options: [
            "NoSQL requires more upfront schema design",
            "SQL allows schema to evolve more easily",
            "NoSQL typically has a more flexible approach to schema",
            "They are essentially the same"
        ],
        answer: "NoSQL typically has a more flexible approach to schema"
    },
    {
        numb: 30,
        question: "Which of the following commands would you use in MongoDB to find one document where the 'name' field equals 'John'?",
        options: [
            "db.collection.search({name: 'John'})",
            "db.collection.selectOne({name: 'John'})",
            "db.collection.findOne({name: 'John'})",
            "db.collection.get({name: 'John'})"
        ],
        answer: "db.collection.findOne({name: 'John'})"
    }
];
