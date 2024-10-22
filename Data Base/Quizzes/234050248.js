const question = [
    {
        numb: 1,
        question: "What is data?",
        answer: "B) Raw, unorganized facts",
        options: [
            "A) Processed information",
            "B) Raw, unorganized facts",
            "C) Structured entities in a database",
            "D) A software program"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is an example of information?",
        answer: "C) A database of student marks processed to find the average",
        options: [
            "A) A student's name",
            "B) A list of phone numbers",
            "C) A database of student marks processed to find the average",
            "D) A product code"
        ]
    },
    {
        numb: 3,
        question: "What is the main role of a Database Management System (DBMS)?",
        answer: "B) To manage interaction between end users and a database",
        options: [
            "A) To store raw data",
            "B) To manage interaction between end users and a database",
            "C) To allow multiple users to access files concurrently",
            "D) To perform transactions at a bank"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is NOT a component of an information system?",
        answer: "D) Internet",
        options: [
            "A) People",
            "B) Data",
            "C) Technology",
            "D) Internet"
        ]
    },
    {
        numb: 5,
        question: "Which of the following statements is true about data redundancy?",
        answer: "B) It occurs when the same data is duplicated in multiple files",
        options: [
            "A) It helps in reducing inconsistency",
            "B) It occurs when the same data is duplicated in multiple files",
            "C) It always leads to data integrity",
            "D) It improves the performance of the database"
        ]
    },
    {
        numb: 6,
        question: "In the hierarchical database model, relationships are represented as:",
        answer: "B) Parent-child",
        options: [
            "A) Many-to-Many",
            "B) Parent-child",
            "C) Peer-to-peer",
            "D) Master-slave"
        ]
    },
    {
        numb: 7,
        question: "Which of the following is a disadvantage of the network database model?",
        answer: "C) Structural dependence",
        options: [
            "A) Limited portability",
            "B) Lack of standards",
            "C) Structural dependence",
            "D) Inability to represent one-to-many relationships"
        ]
    },
    {
        numb: 8,
        question: "The relational model stores data in the form of:",
        answer: "B) Tables (relations)",
        options: [
            "A) Trees",
            "B) Tables (relations)",
            "C) Files",
            "D) Networks"
        ]
    },
    {
        numb: 9,
        question: "What does the term 'schema' refer to in a database context?",
        answer: "C) The description of a database, including entities, relationships, and constraints",
        options: [
            "A) The actual data stored in a database",
            "B) The physical storage structure",
            "C) The description of a database, including entities, relationships, and constraints",
            "D) A method of indexing data"
        ]
    },
    {
        numb: 10,
        question: "Which of the following statements best describes 'data independence'?",
        answer: "A) The ability to modify a database without affecting applications",
        options: [
            "A) The ability to modify a database without affecting applications",
            "B) The separation of the schema and data from the database application",
            "C) The ability to query data without writing code",
            "D) Storing data without redundancy"
        ]
    },
    {
        numb: 11,
        question: "A database is a collection of:",
        answer: "B) Logically related data",
        options: [
            "A) Independent data sets",
            "B) Logically related data",
            "C) Random data",
            "D) Static information"
        ]
    },
    {
        numb: 12,
        question: "Which of the following is a feature of the relational model?",
        answer: "C) Table-based storage",
        options: [
            "A) Hierarchical data organization",
            "B) Data redundancy",
            "C) Table-based storage",
            "D) Direct file access"
        ]
    },
    {
        numb: 13,
        question: "Which database model supports many-to-many relationships?",
        answer: "B) Network",
        options: [
            "A) Hierarchical",
            "B) Network",
            "C) Relational",
            "D) None of the above"
        ]
    },
    {
        numb: 14,
        question: "What does DBMS stand for?",
        answer: "A) Database Management System",
        options: [
            "A) Database Management System",
            "B) Database Management Storage",
            "C) Data Backup Management",
            "D) Digital Base System"
        ]
    },
    {
        numb: 15,
        question: "In a relational model, each row in a table represents:",
        answer: "C) A record",
        options: [
            "A) A column",
            "B) An attribute",
            "C) A record",
            "D) A relationship"
        ]
    },
    {
        numb: 16,
        question: "Which of the following is not a DBMS functionality?",
        answer: "D) Operating system installation",
        options: [
            "A) Querying",
            "B) Report generation",
            "C) Data modification",
            "D) Operating system installation"
        ]
    },
    {
        numb: 17,
        question: "The term 'entity' in databases refers to:",
        answer: "B) An object or concept in the real world",
        options: [
            "A) A software module",
            "B) An object or concept in the real world",
            "C) A table field",
            "D) A set of operations"
        ]
    },
    {
        numb: 18,
        question: "Which is a key characteristic of a DBMS?",
        answer: "A) Data security",
        options: [
            "A) Data security",
            "B) Data redundancy",
            "C) Data isolation",
            "D) File system dependency"
        ]
    },
    {
        numb: 19,
        question: "An attribute in a database refers to:",
        answer: "B) A characteristic or property of an entity",
        options: [
            "A) A type of data stored",
            "B) A characteristic or property of an entity",
            "C) The relationship between two tables",
            "D) None of the above"
        ]
    },
    {
        numb: 20,
        question: "What is an example of an application of DBMS?",
        answer: "A) Flight reservations",
        options: [
            "A) Flight reservations",
            "B) Web browsing",
            "C) Photo editing",
            "D) Video streaming"
        ]
    },
    {
        numb: 21,
        question: "What is a major disadvantage of the hierarchical model?",
        answer: "C) It cannot handle many-to-many relationships",
        options: [
            "A) It lacks conceptual simplicity",
            "B) It cannot handle one-to-many relationships",
            "C) It cannot handle many-to-many relationships",
            "D) It does not support data independence"
        ]
    },
    {
        numb: 22,
        question: "The term 'atomicity' in databases refers to:",
        answer: "C) Completing a transaction fully or not at all",
        options: [
            "A) The smallest unit of data",
            "B) The ability to divide a database",
            "C) Completing a transaction fully or not at all",
            "D) The separation of data from the system"
        ]
    },
    {
        numb: 23,
        question: "Which of the following best describes concurrent access?",
        answer: "B) Multiple users can access the database simultaneously",
        options: [
            "A) Only one user can access the database at a time",
            "B) Multiple users can access the database simultaneously",
            "C) Data integrity is always maintained",
            "D) Data is isolated in different systems"
        ]
    },
    {
        numb: 24,
        question: "Which of the following is not an advantage of the relational model?",
        answer: "C) High hardware overhead",
        options: [
            "A) Structural independence",
            "B) Easier database management",
            "C) High hardware overhead",
            "D) Conceptual simplicity"
        ]
    },
    {
        numb: 25,
        question: "What type of database model represents records using tables?",
        answer: "C) Relational model",
        options: [
            "A) Network model",
            "B) Hierarchical model",
            "C) Relational model",
            "D) Object-oriented model"
        ]
    },
    {
        numb: 26,
        question: "What is the role of a Database Administrator (DBA)?",
        answer: "B) Maintain the DBMS",
        options: [
            "A) Develop applications",
            "B) Maintain the DBMS",
            "C) Design data schemas",
            "D) Execute queries"
        ]
    },
    {
        numb: 27,
        question: "Which is a feature of the three-schema architecture?",
        answer: "C) Insulation of programs and data",
        options: [
            "A) Physical schema only",
            "B) External schema only",
            "C) Insulation of programs and data",
            "D) One level of abstraction"
        ]
    },
    {
        numb: 28,
        question: "Logical data independence allows:",
        answer: "B) Changes in the conceptual schema without affecting applications",
        options: [
            "A) Changes in the physical schema without affecting applications",
            "B) Changes in the conceptual schema without affecting applications",
            "C) Changes in the data structure with minimal data loss",
            "D) No modifications to data queries"
        ]
    },
    {
        numb: 29,
        question: "Physical data independence means:",
        answer: "A) The structure of the database can be changed without affecting the conceptual schema",
        options: [
            "A) The structure of the database can be changed without affecting the conceptual schema",
            "B) Application programs must be modified with every change",
            "C) Changing the physical storage has no impact on the external schema",
            "D) Data cannot be updated without altering the entire structure"
        ]
    },
    {
        numb: 30,
        question: "What is the purpose of indexing in a database?",
        answer: "B) To optimize query performance",
        options: [
            "A) To store data",
            "B) To optimize query performance",
            "C) To increase redundancy",
            "D) To define relationships between tables"
        ]
    },
    {
        numb: 31,
        question: "What is a data anomaly?",
        answer: "C) Data inconsistencies caused by redundancy",
        options: [
            "A) Data that is redundant",
            "B) A logical error in data storage",
            "C) Data inconsistencies caused by redundancy",
            "D) Data that is incomplete"
        ]
    },
    {
        numb: 32,
        question: "What does 'reducing data redundancy' mean?",
        answer: "B) Minimizing data duplication across multiple tables",
        options: [
            "A) Decreasing the number of data storage locations",
            "B) Minimizing data duplication across multiple tables",
            "C) Removing unnecessary tables",
            "D) Improving database performance"
        ]
    },
    {
        numb: 33,
        question: "A primary key in a relational database:",
        answer: "B) Must contain unique values for each row",
        options: [
            "A) Can be repeated across multiple rows",
            "B) Must contain unique values for each row",
            "C) Cannot be indexed",
            "D) Is the same as a foreign key"
        ]
    },
    {
        numb: 34,
        question: "Referential integrity ensures:",
        answer: "B) Each foreign key value must match a primary key value in another table",
        options: [
            "A) Every record in a table is unique",
            "B) Each foreign key value must match a primary key value in another table",
            "C) Data can be modified without constraints",
            "D) Multiple users can access data concurrently"
        ]
    },
    {
        numb: 35,
        question: "Which of the following is an example of a database application?",
        answer: "B) An ATM system",
        options: [
            "A) A web browser",
            "B) An ATM system",
            "C) A word processor",
            "D) A file compression tool"
        ]
    },
    {
        numb: 36,
        question: "Which of the following is NOT a function of a DBMS?",
        answer: "C) Printing documents",
        options: [
            "A) Defining data structures",
            "B) Data manipulation",
            "C) Printing documents",
            "D) Data retrieval"
        ]
    },
    {
        numb: 37,
        question: "In a relational database, each column represents:",
        answer: "B) An attribute",
        options: [
            "A) A record",
            "B) An attribute",
            "C) A foreign key",
            "D) A schema"
        ]
    },
    {
        numb: 38,
        question: "What is an entity in a database?",
        answer: "B) An object that represents a concept or thing in the real world",
        options: [
            "A) A data manipulation tool",
            "B) An object that represents a concept or thing in the real world",
            "C) A method to store large amounts of data",
            "D) A relationship between two tables"
        ]
    },
    {
        numb: 39,
        question: "A foreign key in a relational database:",
        answer: "B) Links tables together by referencing the primary key of another table",
        options: [
            "A) Is always unique",
            "B) Links tables together by referencing the primary key of another table",
            "C) Is the same as a primary key",
            "D) Cannot contain null values"
        ]
    },
    {
        numb: 40,
        question: "What does 'normalization' refer to in database design?",
        answer: "C) Organizing data to reduce redundancy and improve integrity",
        options: [
            "A) Reducing data to its simplest form",
            "B) Removing all data anomalies",
            "C) Organizing data to reduce redundancy and improve integrity",
            "D) Decreasing the size of the database"
        ]
    },
    {
        numb: 41,
        question: "The relational database model uses which of the following to enforce data integrity?",
        answer: "C) Constraints",
        options: [
            "A) Indexing",
            "B) Schemas",
            "C) Constraints",
            "D) Relationships"
        ]
    },
    {
        numb: 42,
        question: "Which of the following is a key advantage of the relational model over the hierarchical model?",
        answer: "B) Supports many-to-many relationships",
        options: [
            "A) Faster access",
            "B) Supports many-to-many relationships",
            "C) Simpler to implement",
            "D) Less redundancy"
        ]
    },
    {
        numb: 43,
        question: "What does SQL stand for?",
        answer: "A) Structured Query Language",
        options: [
            "A) Structured Query Language",
            "B) Simple Query Language",
            "C) Sequential Query Logic",
            "D) Standard Query Log"
        ]
    },
    {
        numb: 44,
        question: "A relational database is based on the concept of:",
        answer: "B) Relations and tuples",
        options: [
            "A) Objects and classes",
            "B) Relations and tuples",
            "C) Keys and values",
            "D) Data flow diagrams"
        ]
    },
    {
        numb: 45,
        question: "What does a query language do?",
        answer: "B) Retrieves and manipulates data",
        options: [
            "A) Stores data",
            "B) Retrieves and manipulates data",
            "C) Defines the physical structure of a database",
            "D) Manages user permission"
        ]
    },
    {
        numb: 46,
        question: "Which of the following is an example of a hierarchical relationship?",
        answer: "A) A parent-child relationship",
        options: [
            "A) A parent-child relationship",
            "B) A many-to-many relationship",
            "C) A peer-to-peer relationship",
            "D) A one-to-one relationship"
        ]
    },
    {
        numb: 47,
        question: "Which type of DBMS allows for multiple user views and access levels?",
        answer: "B) Relational DBMS",
        options: [
            "A) Hierarchical DBMS",
            "B) Relational DBMS",
            "C) Object-oriented DBMS",
            "D) Network DBMS"
        ]
    },
    {
        numb: 48,
        question: "Which of the following is not a type of data model?",
        answer: "D) Tangential",
        options: [
            "A) Hierarchical",
            "B) Network",
            "C) Relational",
            "D) Tangential"
        ]
    },
    {
        numb: 49,
        question: "The process of designing a database schema involves:",
        answer: "A) Defining relationships and attributes",
        options: [
            "A) Defining relationships and attributes",
            "B) Writing SQL queries",
            "C) Programming database software",
            "D) Creating data backup"
        ]
    },
    {
        numb: 50,
        question: "What does 'data isolation' refer to?",
        answer: "C) Data being separated into different formats in different locations",
        options: [
            "A) Storing data in separate systems",
            "B) Keeping data from being accessed concurrently",
            "C) Data being separated into different formats in different locations",
            "D) Inability to access data without specialized software"
        ]
    }
]