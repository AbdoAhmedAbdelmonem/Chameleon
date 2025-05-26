let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary characteristic of distributed storage systems in cloud computing?",
        options: [
            "Data is stored on a single server",
            "Data is confined to one physical location",
            "Data is stored across a network of machines",
            "Data cannot be accessed remotely"
        ],
        answer: "Data is stored across a network of machines"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which Amazon storage service offers industry-leading durability of 99.999999999%?",
        options: [
            "Amazon EC2",
            "Amazon S3",
            "Amazon RDS",
            "Amazon DynamoDB"
        ],
        answer: "Amazon S3"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "How does Amazon S3 organize data?",
        options: [
            "Into tables",
            "Into buckets",
            "Into clusters",
            "Into queues"
        ],
        answer: "Into buckets"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which Google Cloud Storage class has no minimum storage duration?",
        options: [
            "Nearline",
            "Coldline",
            "Standard",
            "Archive"
        ],
        answer: "Standard"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is a key feature of Google Cloud Storage?",
        options: [
            "Weak consistency model",
            "Strong consistency model",
            "No redundancy",
            "Single-region storage only"
        ],
        answer: "Strong consistency model"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which Azure storage service is optimized for unstructured data?",
        options: [
            "Azure SQL Database",
            "Azure Blob Storage",
            "Azure Table Storage",
            "Azure Queue Storage"
        ],
        answer: "Azure Blob Storage"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "Which access tier in Azure Blob Storage is most cost-effective for infrequently accessed data?",
        options: [
            "Hot",
            "Cool",
            "Archive",
            "Premium"
        ],
        answer: "Archive"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which distributed file system is designed for batch processing with MapReduce?",
        options: [
            "Ceph",
            "Lustre",
            "HDFS",
            "NFS"
        ],
        answer: "HDFS"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the default replication strategy in HDFS?",
        options: [
            "No replication",
            "Replicate data across nodes",
            "Store single copy in central server",
            "Replicate only metadata"
        ],
        answer: "Replicate data across nodes"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Which algorithm does Ceph use for data placement?",
        options: [
            "MapReduce",
            "CRUSH",
            "SHA-256",
            "B-tree"
        ],
        answer: "CRUSH"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Where is the Lustre file system commonly used?",
        options: [
            "Small business applications",
            "Supercomputing environments",
            "Mobile apps",
            "Single-server deployments"
        ],
        answer: "Supercomputing environments"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which of these is a fully managed NoSQL database service?",
        options: [
            "Amazon DynamoDB",
            "MySQL",
            "PostgreSQL",
            "Oracle Database"
        ],
        answer: "Amazon DynamoDB"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What architecture does Apache Cassandra use?",
        options: [
            "Master-slave",
            "Peer-to-peer",
            "Centralized",
            "Hierarchical"
        ],
        answer: "Peer-to-peer"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What type of database is MongoDB Atlas?",
        options: [
            "Relational",
            "Document-based NoSQL",
            "Graph",
            "Time-series"
        ],
        answer: "Document-based NoSQL"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Which consistency model guarantees all users see the same data at the same time?",
        options: [
            "Eventual consistency",
            "Strong consistency",
            "Causal consistency",
            "Weak consistency"
        ],
        answer: "Strong consistency"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What is eventual consistency?",
        options: [
            "Immediate consistency across all nodes",
            "Updates propagate through the system over time",
            "Only the master node has consistent data",
            "No replication occurs"
        ],
        answer: "Updates propagate through the system over time"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "Which replication strategy allows multiple nodes to handle writes?",
        options: [
            "Master-slave replication",
            "Multi-master replication",
            "Single-node replication",
            "No replication"
        ],
        answer: "Multi-master replication"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What is Google BigQuery?",
        options: [
            "A NoSQL database",
            "A serverless data warehouse",
            "A block storage service",
            "A message queue system"
        ],
        answer: "A serverless data warehouse"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "How does Snowflake achieve elastic scalability?",
        options: [
            "By using only one compute node",
            "By separating compute and storage",
            "By limiting concurrent workloads",
            "By avoiding cloud integration"
        ],
        answer: "By separating compute and storage"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What storage technology does Amazon Redshift use for high performance?",
        options: [
            "Row-based storage",
            "Columnar storage",
            "Document storage",
            "Key-value storage"
        ],
        answer: "Columnar storage"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "Which service is used for real-time data streaming?",
        options: [
            "Apache Kafka",
            "Amazon S3",
            "Google Cloud Storage",
            "Azure Blob Storage"
        ],
        answer: "Apache Kafka"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "What is a typical use case for real-time data processing?",
        options: [
            "Long-term archival",
            "Fraud detection",
            "Static website hosting",
            "Batch processing"
        ],
        answer: "Fraud detection"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "Which disaster recovery strategy involves fully active redundant systems?",
        options: [
            "Cold standby",
            "Warm standby",
            "Hot standby",
            "No standby"
        ],
        answer: "Hot standby"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "What encryption standard is commonly used for data at rest in cloud storage?",
        options: [
            "AES-128",
            "AES-256",
            "RSA-2048",
            "DES"
        ],
        answer: "AES-256"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "What does POSIX compliance in Lustre ensure?",
        options: [
            "Hardware independence",
            "Operating system compatibility",
            "Cloud provider lock-in",
            "Reduced performance"
        ],
        answer: "Operating system compatibility"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which feature allows DynamoDB to achieve single-digit millisecond latency?",
        options: [
            "DAX (DynamoDB Accelerator)",
            "S3 integration",
            "Batch processing",
            "Columnar storage"
        ],
        answer: "DAX (DynamoDB Accelerator)"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What is the primary advantage of Ceph's architecture?",
        options: [
            "Requires central metadata server",
            "Provides object, block and file storage in one platform",
            "Only works with structured data",
            "Limited to small-scale deployments"
        ],
        answer: "Provides object, block and file storage in one platform"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which capability does immutable storage provide?",
        options: [
            "Automatic data deletion",
            "Prevention of ransomware attacks",
            "Frequent data modification",
            "Reduced security"
        ],
        answer: "Prevention of ransomware attacks"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What is a key feature of MongoDB Atlas?",
        options: [
            "Only supports single-region deployments",
            "Manual backups only",
            "Supports sharding for horizontal scaling",
            "No monitoring tools"
        ],
        answer: "Supports sharding for horizontal scaling"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which compliance standard is mentioned for cloud storage security?",
        options: [
            "PCI DSS",
            "GDPR",
            "ISO 9001",
            "All of the above"
        ],
        answer: "All of the above"
    }
];