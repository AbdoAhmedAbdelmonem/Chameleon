let question=[
    {
        numb: 1,
        question: "What is a data model?",
        answer: "B) A set of concepts to describe the structure of a database and its operations",
        options: [
            "A) A way to store data in a database",
            "B) A set of concepts to describe the structure of a database and its operations",
            "C) A type of constraint in a database",
            "D) A method to visualize data"
        ]
    },
    {
        numb: 2,
        question: "Which of the following is NOT a category of data models?",
        answer: "D) Structural data model",
        options: [
            "A) Conceptual data model",
            "B) Logical data model",
            "C) Physical data model",
            "D) Structural data model"
        ]
    },
    {
        numb: 3,
        question: "A schema diagram is:",
        answer: "B) A visual representation of a database schema",
        options: [
            "A) A diagram that shows only the data types",
            "B) A visual representation of a database schema",
            "C) A method to organize tuples",
            "D) A type of database operation"
        ]
    },
    {
        numb: 4,
        question: "What is a relation in the relational model?",
        answer: "A) A table",
        options: [
            "A) A table",
            "B) A record",
            "C) A foreign key",
            "D) A type of attribute"
        ]
    },
    {
        numb: 5,
        question: "What is a tuple in a relation?",
        answer: "B) A record or row in the table",
        options: [
            "A) A column in the table",
            "B) A record or row in the table",
            "C) A key in the table",
            "D) A type of constraint"
        ]
    },
    {
        numb: 6,
        question: "What does a relational schema define?",
        answer: "B) The design for the relation name, attributes, and data types",
        options: [
            "A) Only the data types of a relation",
            "B) The design for the relation name, attributes, and data types",
            "C) A set of constraints",
            "D) The physical storage of the relation"
        ]
    },
    {
        numb: 7,
        question: "Which of the following represents the domain of an attribute?",
        answer: "B) The set of allowed values for an attribute",
        options: [
            "A) A list of all rows in a table",
            "B) The set of allowed values for an attribute",
            "C) A collection of tables",
            "D) The unique identifier for a record"
        ]
    },
    {
        numb: 8,
        question: "What is an atomic value?",
        answer: "B) The smallest unit of data that cannot be decomposed",
        options: [
            "A) A value that can be divided",
            "B) The smallest unit of data that cannot be decomposed",
            "C) A type of foreign key",
            "D) A value used to relate two tables"
        ]
    },
    {
        numb: 9,
        question: "What does the degree of a relation represent?",
        answer: "A) The number of columns in a relation",
        options: [
            "A) The number of columns in a relation",
            "B) The number of rows in a relation",
            "C) The number of constraints in a table",
            "D) The number of foreign keys in a table"
        ]
    },
    {
        numb: 10,
        question: "What is a super key?",
        answer: "C) A set of attributes that can uniquely identify a tuple",
        options: [
            "A) A key that can be shared between two tables",
            "B) A minimal set of attributes that uniquely identifies a tuple",
            "C) A set of attributes that can uniquely identify a tuple",
            "D) A foreign key"
        ]
    },
    {
        numb: 11,
        question: "Which type of integrity constraint ensures that the primary key of a relation cannot be null?",
        answer: "B) Entity integrity",
        options: [
            "A) Referential integrity",
            "B) Entity integrity",
            "C) Key constraint",
            "D) Domain constraint"
        ]
    },
    {
        numb: 12,
        question: "A foreign key is:",
        answer: "B) A key used to reference a primary key in another table",
        options: [
            "A) A key used to identify tuples in the same table",
            "B) A key used to reference a primary key in another table",
            "C) A unique identifier for each row in a table",
            "D) A set of columns used to create indexes"
        ]
    },
    {
        numb: 13,
        question: "Which of the following refers to the concept of referential integrity?",
        answer: "A) Preventing the deletion of parent records that have child records",
        options: [
            "A) Preventing the deletion of parent records that have child records",
            "B) Ensuring that the primary key is unique",
            "C) Ensuring data types are consistent",
            "D) Maintaining multiple indexes on the same table"
        ]
    },
    {
        numb: 14,
        question: "In the relational model, what is the primary function of a schema?",
        answer: "B) To define the structure of the database",
        options: [
            "A) To store data",
            "B) To define the structure of the database",
            "C) To retrieve data from the database",
            "D) To manage concurrent access"
        ]
    },
    {
        numb: 15,
        question: "Which of the following can violate referential integrity?",
        answer: "B) Inserting a child record without a corresponding parent record",
        options: [
            "A) Deleting a child record when the parent record exists",
            "B) Inserting a child record without a corresponding parent record",
            "C) Updating a primary key with a null value",
            "D) Creating a foreign key"
        ]
    },
    {
        numb: 16,
        question: "A tuple is also known as:",
        answer: "A) A record",
        options: [
            "A) A record",
            "B) A column",
            "C) A constraint",
            "D) A database schema"
        ]
    },
    {
        numb: 17,
        question: "What does a candidate key represent in a relation?",
        answer: "A) A minimal super key",
        options: [
            "A) A minimal super key",
            "B) A primary key that references another table",
            "C) A key used to define constraints",
            "D) An index used for sorting"
        ]
    },
    {
        numb: 18,
        question: "What is the difference between a super key and a candidate key?",
        answer: "B) A candidate key is always a super key, but a super key is not necessarily a candidate key",
        options: [
            "A) Super keys contain minimal attributes, while candidate keys contain extra attributes",
            "B) A candidate key is always a super key, but a super key is not necessarily a candidate key",
            "C) A candidate key is always used as a primary key",
            "D) Candidate keys reference foreign keys in another table"
        ]
    },
    {
        numb: 19,
        question: "What is the primary function of a database constraint?",
        answer: "B) To enforce rules on data that must always be true",
        options: [
            "A) To define how data is physically stored",
            "B) To enforce rules on data that must always be true",
            "C) To index data for faster retrieval",
            "D) To backup data"
        ]
    },
    {
        numb: 20,
        question: "The domain of an attribute refers to:",
        answer: "B) The type and range of values allowed for the attribute",
        options: [
            "A) The set of operations allowed on the data",
            "B) The type and range of values allowed for the attribute",
            "C) The relationship between two tables",
            "D) The primary key of the relation"
        ]
    },
    {
        numb: 21,
        question: "In the relational model, attributes are represented as:",
        answer: "A) Columns",
        options: [
            "A) Columns",
            "B) Rows",
            "C) Constraints",
            "D) Relations"
        ]
    },
    {
        numb: 22,
        question: "Which of the following operations can modify the state of a relation in a database?",
        answer: "C) Inserting a tuple",
        options: [
            "A) Retrieving data",
            "B) Querying data",
            "C) Inserting a tuple",
            "D) Creating a schema"
        ]
    },
    {
        numb: 23,
        question: "Which integrity constraint is used to ensure the validity of data across tables?",
        answer: "A) Referential integrity",
        options: [
            "A) Referential integrity",
            "B) Entity integrity",
            "C) Domain integrity",
            "D) Null constraint"
        ]
    },
    {
        numb: 24,
        question: "A composite key is:",
        answer: "B) A key with multiple attributes that together uniquely identify a tuple",
        options: [
            "A) A foreign key with multiple attributes",
            "B) A key with multiple attributes that together uniquely identify a tuple",
            "C) A candidate key",
            "D) A key used in domain constraints"
        ]
    },
    {
        numb: 25,
        question: "Which of the following statements is true about null values in relational databases?",
        answer: "B) A null value indicates the absence of a value",
        options: [
            "A) A null value is equivalent to a zero",
            "B) A null value indicates the absence of a value",
            "C) Null values cannot be used in primary keys",
            "D) Null values are allowed in all attributes"
        ]
    },
    {
        numb: 26,
        question: "Which of the following relational operations retrieves information from a database?",
        answer: "C) Select",
        options: [
            "A) Insert",
            "B) Update",
            "C) Select",
            "D) Delete"
        ]
    },
    {
        numb: 27,
        question: "What is an example of an entity integrity violation?",
        answer: "C) Leaving a primary key field empty",
        options: [
            "A) Entering duplicate primary key values",
            "B) Entering a foreign key value that does not exist in the parent table",
            "C) Leaving a primary key field empty",
            "D) Deleting a parent record without deleting child records"
        ]
    },
    {
        numb: 28,
        question: "Which of the following is a correct representation of a foreign key?",
        answer: "B) A set of attributes that references a primary key in another relation",
        options: [
            "A) A set of attributes that uniquely identifies a tuple in the same relation",
            "B) A set of attributes that references a primary key in another relation",
            "C) A unique identifier in a schema",
            "D) A set of tuples with similar attributes"
        ]
    },
    {
        numb: 29,
        question: "Which relational model integrity constraint is used to maintain the uniqueness of tuples?",
        answer: "A) Key constraint",
        options: [
            "A) Key constraint",
            "B) Referential integrity",
            "C) Domain constraint",
            "D) Super key constraint"
        ]
    },
    {
        numb: 30,
        question: "Which of the following operations cannot be performed on a relational database schema?",
        answer: "A) Insert",
        options: [
            "A) Insert",
            "B) Delete",
            "C) Update",
            "D) Modify"
        ]
    },
    {
        numb: 31,
        question: "Which of the following is NOT a characteristic of a relation in the relational model?",
        answer: "B) Tuples are ordered",
        options: [
            "A) Each tuple is distinct",
            "B) Tuples are ordered",
            "C) Attributes are from the same domain",
            "D) Each relation has a unique name"
        ]
    },
    {
        numb: 32,
        question: "What is the purpose of the 'ON DELETE CASCADE' option in a foreign key constraint?",
        answer: "B) To automatically delete child records when a parent record is deleted",
        options: [
            "A) To prevent deletion of the parent record",
            "B) To automatically delete child records when a parent record is deleted",
            "C) To update all records",
            "D) To ignore foreign key constraints"
        ]
    },
    {
        numb: 33,
        question: "Which of the following is NOT a relational integrity constraint?",
        answer: "D) Primary constraint",
        options: [
            "A) Key constraint",
            "B) Domain constraint",
            "C) Referential integrity",
            "D) Primary constraint"
        ]
    },
    {
        numb: 34,
        question: "What is the default action for a foreign key constraint when a parent record is deleted?",
        answer: "A) NO ACTION",
        options: [
            "A) NO ACTION",
            "B) CASCADE",
            "C) SET NULL",
            "D) SET DEFAULT"
        ]
    },
    {
        numb: 35,
        question: "Which of the following defines a relational database state?",
        answer: "B) The set of all tuples at a specific point in time",
        options: [
            "A) A collection of relations and their schemas",
            "B) The set of all tuples at a specific point in time",
            "C) A set of operations performed on the database",
            "D) A method to visualize the data"
        ]
    },
    {
        numb: 36,
        question: "What does the term 'schema' refer to in a database?",
        answer: "B) A logical description of a database",
        options: [
            "A) The physical storage structure",
            "B) A logical description of a database",
            "C) The data itself",
            "D) A set of queries"
        ]
    },
    {
        numb: 37,
        question: "In a relational database, what is the role of a primary key?",
        answer: "C) To uniquely identify each tuple in a relation",
        options: [
            "A) To allow null values in rows",
            "B) To define a constraint between two tables",
            "C) To uniquely identify each tuple in a relation",
            "D) To establish domain constraints"
        ]
    },
    {
        numb: 38,
        question: "What is the cardinality of a relation?",
        answer: "A) The number of rows in a relation",
        options: [
            "A) The number of rows in a relation",
            "B) The number of columns in a relation",
            "C) The number of attributes in a tuple",
            "D) The number of constraints in a table"
        ]
    },
    {
        numb: 39,
        question: "What happens when a referential integrity constraint is violated?",
        answer: "B) The system raises an error",
        options: [
            "A) The system automatically corrects the violation",
            "B) The system raises an error",
            "C) The tuple is inserted into the child table",
            "D) The schema is modified"
        ]
    },
    {
        numb: 40,
        question: "What is the primary purpose of normalization in relational databases?",
        answer: "B) To reduce data redundancy and maintain data integrity",
        options: [
            "A) To increase data redundancy",
            "B) To reduce data redundancy and maintain data integrity",
            "C) To enhance data security",
            "D) To modify the schema"
        ]
    },
    {
        numb: 41,
        question: "Which of the following constraints ensures that attributes have values from the same domain?",
        answer: "A) Domain constraint",
        options: [
            "A) Domain constraint",
            "B) Key constraint",
            "C) Referential integrity",
            "D) Entity integrity"
        ]
    },
    {
        numb: 42,
        question: "What is a schema construct?",
        answer: "B) An object within the schema, such as a relation or attribute",
        options: [
            "A) An operation that modifies a database",
            "B) An object within the schema, such as a relation or attribute",
            "C) A method to query data",
            "D) A tuple in the relation"
        ]
    },
    {
        numb: 43,
        question: "What is the result of using the 'SET NULL' option in a foreign key constraint?",
        answer: "B) The foreign key is set to null when the parent record is deleted",
        options: [
            "A) The foreign key is deleted",
            "B) The foreign key is set to null when the parent record is deleted",
            "C) The child record is deleted",
            "D) The child record is updated"
        ]
    },
    {
        numb: 44,
        question: "What is the difference between a primary key and a foreign key?",
        answer: "A) A primary key uniquely identifies a record, while a foreign key relates two tables",
        options: [
            "A) A primary key uniquely identifies a record, while a foreign key relates two tables",
            "B) A foreign key is always unique, while a primary key is not",
            "C) A foreign key references a super key",
            "D) A primary key must always have a null value"
        ]
    },
    {
        numb: 45,
        question: "Which of the following is an example of referential integrity violation?",
        answer: "C) Inserting a record into the child table without corresponding parent records",
        options: [
            "A) Inserting a record into the parent table without corresponding records in the child table",
            "B) Updating a record in the child table without updating the parent table",
            "C) Inserting a record into the child table without corresponding parent records",
            "D) Deleting records from the parent table"
        ]
    },
    {
        numb: 46,
        question: "What does the term 'extension' refer to in a relational database?",
        answer: "B) The current set of tuples in a relation",
        options: [
            "A) A schema",
            "B) The current set of tuples in a relation",
            "C) A constraint",
            "D) The set of attributes in a relation"
        ]
    },
    {
        numb: 47,
        question: "What is the difference between a database schema and a database state?",
        answer: "A) A schema describes the structure, while the state describes the data at a specific time",
        options: [
            "A) A schema describes the structure, while the state describes the data at a specific time",
            "B) The schema is dynamic, and the state is static",
            "C) A database state cannot be modified",
            "D) A database schema defines relationships, while the state defines constraints"
        ]
    },
    {
        numb: 48,
        question: "What is the primary purpose of a schema diagram?",
        answer: "B) To represent the database schema, including tables, attributes, and relationships",
        options: [
            "A) To visualize the physical layout of the database",
            "B) To represent the database schema, including tables, attributes, and relationships",
            "C) To show the order of tuples in the database",
            "D) To update the relational database"
        ]
    },
    {
        numb: 49,
        question: "What is a relational database?",
        answer: "B) A collection of related tables",
        options: [
            "A) A collection of related operations",
            "B) A collection of related tables",
            "C) A collection of constraints",
            "D) A method to store files"
        ]
    },
    {
        numb: 50,
        question: "What is a relational integrity constraint?",
        answer: "B) A condition that ensures the accuracy and consistency of data",
        options: [
            "A) A rule that governs the structure of the schema",
            "B) A condition that ensures the accuracy and consistency of data",
            "C) A way to modify the schema",
            "D) A foreign key constraint"
        ]
    }
]