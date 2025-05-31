let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Alright class, we're drowning in data! What's a common cry from users that a data warehouse aims to solve? 😩",
        options: [
            "There's too much structured data.",
            "I can't find the data I need; it's scattered everywhere.",
            "The data is too old to be useful.",
            "Experts are too readily available to get data."
        ],
        answer: "I can't find the data I need; it's scattered everywhere."
        // Concept: Problems data warehouses solve [cite: 4]
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Bill Inmon gave us a classic definition. What's a key aspect of a data warehouse according to him? 🔑",
        options: [
            "A collection of independent, specialized databases.",
            "A system only for current, operational data.",
            "A single, complete, and consistent store of data from various sources.",
            "A temporary storage for raw, unprocessed data."
        ],
        answer: "A single, complete, and consistent store of data from various sources."
        // Concept: Definition of Data Warehouse [cite: 6]
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "We say data warehouses are 'subject-oriented.' What does this mean for how the data is organized? 🎯",
        options: [
            "Organized by the department that created the data.",
            "Organized around key business subjects like sales, product, or customer.",
            "Organized chronologically by when the data was entered.",
            "Organized based on the database software used."
        ],
        answer: "Organized around key business subjects like sales, product, or customer."
        // Concept: Subject-oriented characteristic [cite: 17]
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "What does the 'integration' characteristic of a data warehouse imply about the data from heterogeneous sources? 🤝",
        options: [
            "Data is kept in its original, separate formats.",
            "Only one data source is used at a time.",
            "Data preprocessing is applied to ensure consistency in naming and values.",
            "Integration is handled by the end-user tools, not the warehouse."
        ],
        answer: "Data preprocessing is applied to ensure consistency in naming and values."
        // Concept: Integration characteristic [cite: 21, 22]
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "How does the 'time-variant' nature of a data warehouse differ from an operational database? ⏳",
        options: [
            "Data warehouses only store data for the current week.",
            "Operational databases store historical data, while warehouses store current data.",
            "Data warehouses provide a historical perspective, unlike operational systems focused on current values.",
            "Time is not an important element in data warehouse keys."
        ],
        answer: "Data warehouses provide a historical perspective, unlike operational systems focused on current values."
        // Concept: Time-variant characteristic [cite: 23]
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "What does it mean for data in a data warehouse to be 'nonvolatile'? 🔒",
        options: [
            "Data is constantly being updated and changed by users.",
            "Data, once recorded, cannot be updated and is read-only.",
            "Data is deleted after a short period.",
            "Only volatile, frequently changing data is stored."
        ],
        answer: "Data, once recorded, cannot be updated and is read-only."
        // Concept: Nonvolatile characteristic [cite: 24]
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "Within a data warehouse environment, what is a 'data mart' designed for? 🛒",
        options: [
            "To store all of the enterprise-wide raw data.",
            "To contain a subset of corporate-wide data valuable to a specific group of users.",
            "To manage the operational transactions of the business.",
            "To replace the need for a central data warehouse."
        ],
        answer: "To contain a subset of corporate-wide data valuable to a specific group of users."
        // Concept: Data Mart definition [cite: 29, 30]
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What exactly is 'metadata' in the context of a data warehouse? ℹ️",
        options: [
            "The actual transactional data stored in the warehouse.",
            "A summary of the most frequently queried data.",
            "Information kept about the warehouse, essentially data about the data.",
            "User access logs and security credentials."
        ],
        answer: "Information kept about the warehouse, essentially data about the data."
        // Concept: Metadata definition [cite: 33, 35]
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "If you see a schema with a large central fact table and one table for each dimension, what type of schema are you likely looking at? ⭐",
        options: [
            "Snowflake Schema",
            "Normalized Relational Schema",
            "Star Schema",
            "Fact Constellation Schema"
        ],
        answer: "Star Schema"
        // Concept: Star Schema definition [cite: 46]
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What is a key characteristic of dimension tables in a Snowflake schema compared to a Star schema? ❄️",
        options: [
            "They are always denormalized.",
            "They are normalized, meaning they might be split into additional tables.",
            "They are merged directly into the fact table.",
            "They contain only numerical keys."
        ],
        answer: "They are normalized, meaning they might be split into additional tables."
        // Concept: Snowflake Schema characteristic [cite: 54]
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "When multiple fact tables share dimension tables, creating a 'collection of stars,' what is this schema type called? ✨",
        options: [
            "Star Schema",
            "Snowflake Schema",
            "Fact Constellation (or Galaxy) Schema",
            "Normalized Schema"
        ],
        answer: "Fact Constellation (or Galaxy) Schema"
        // Concept: Fact Constellation Schema [cite: 59]
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "The process of Extract, Transform, and Load (ETL) is fundamental to data warehousing. What does the 'Transform' step generally involve? 🔄",
        options: [
            "Gathering data from multiple sources.",
            "Loading data directly into end-user tools.",
            "Converting data from legacy/source format to warehouse format, including cleaning.",
            "Building indices and partitions on the source systems."
        ],
        answer: "Converting data from legacy/source format to warehouse format, including cleaning."
        // Concept: Transform step in ETL [cite: 73, 75]
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "A data warehouse often uses a multidimensional data model. What structure allows data to be viewed in multiple dimensions? 🧊",
        options: [
            "A flat file",
            "A relational table",
            "A data cube",
            "A transactional log"
        ],
        answer: "A data cube"
        // Concept: Data cube definition [cite: 78]
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "In a data cube model, what are 'dimensions' considered to be? 📏",
        options: [
            "The numerical measures or facts being recorded.",
            "The perspectives or entities with respect to which an organization keeps records.",
            "The summary calculations like sum or average.",
            "The physical storage units for the data."
        ],
        answer: "The perspectives or entities with respect to which an organization keeps records."
        // Concept: Dimensions definition [cite: 79, 87]
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What kind of information does a 'fact table' typically contain in a multidimensional model? 📈",
        options: [
            "Descriptive attributes of the dimensions.",
            "Metadata about the data warehouse schema.",
            "Measures (like dollars_sold) and keys to related dimension tables.",
            "Instructions for data transformation."
        ],
        answer: "Measures (like dollars_sold) and keys to related dimension tables."
        // Concept: Fact table contents [cite: 88, 91]
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What type of systems are known as Online Analytical Processing (OLAP) systems in the context of data warehousing? 📊",
        options: [
            "Systems for day-to-day transactional processing.",
            "Systems that organize and present data in various formats for data analysis and decision making.",
            "Systems for raw data extraction from source systems.",
            "Systems for database administration and backup."
        ],
        answer: "Systems that organize and present data in various formats for data analysis and decision making."
        // Concept: OLAP definition [cite: 114, 116]
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "If an analyst is summarizing data by 'climbing up' a concept hierarchy (e.g., from city to country), what OLAP operation are they performing? 🪜",
        options: [
            "Drill Down (Roll Down)",
            "Slice",
            "Drill Up (Roll Up)",
            "Pivot"
        ],
        answer: "Drill Up (Roll Up)"
        // Concept: Roll Up OLAP operation [cite: 125]
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Conversely, if an analyst moves from a higher-level summary to lower-level detail (e.g., from year to month), what OLAP operation is this? 🔎",
        options: [
            "Drill Up (Roll Up)",
            "Dice",
            "Drill Down (Roll Down)",
            "Consolidate"
        ],
        answer: "Drill Down (Roll Down)"
        // Concept: Drill Down OLAP operation [cite: 124]
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "In data warehouse design, which 'view' allows for the selection of relevant information needed for the warehouse based on overall planning? 🗺️",
        options: [
            "The data source view",
            "The data warehouse view (fact/dimension tables)",
            "The business query view",
            "The top-down view"
        ],
        answer: "The top-down view"
        // Concept: Top-down view in business analysis framework [cite: 140, 144]
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What is the primary focus of Online Transaction Processing (OLTP) systems, as opposed to data warehouse (OLAP) systems? 💼",
        options: [
            "Complex data analysis and decision support.",
            "Historical data storage and trend analysis.",
            "Performing online transactions and query processing for day-to-day operations.",
            "Multidimensional data viewing and summarization."
        ],
        answer: "Performing online transactions and query processing for day-to-day operations."
        // Concept: OLTP definition [cite: 136, 137]
    }
]