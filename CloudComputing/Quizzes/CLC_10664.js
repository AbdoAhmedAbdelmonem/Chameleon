let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the foundation of modern cloud computing that enables simultaneous execution of computations?",
        options: [
            "Serial computing",
            "Parallel computing",
            "Quantum computing",
            "Edge computing"
        ],
        answer: "Parallel computing"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which parallelism model involves executing different tasks simultaneously across different computing units?",
        options: [
            "Data parallelism",
            "Task parallelism",
            "Pipeline parallelism",
            "Vector parallelism"
        ],
        answer: "Task parallelism"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "In data parallelism, what happens to the operation being performed?",
        options: [
            "Different operations are performed on the same data",
            "The same operation is performed on subsets of data",
            "Operations are performed sequentially",
            "No operations are performed on the data"
        ],
        answer: "The same operation is performed on subsets of data"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "What are the two main phases of the MapReduce programming model?",
        options: [
            "Sort and Merge",
            "Map and Reduce",
            "Split and Combine",
            "Read and Write"
        ],
        answer: "Map and Reduce"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "Which component of Hadoop provides fault-tolerant storage?",
        options: [
            "YARN",
            "HDFS",
            "MapReduce API",
            "Spark"
        ],
        answer: "HDFS"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "What is the primary limitation of Hadoop's MapReduce?",
        options: [
            "Lack of scalability",
            "Batch-processing nature",
            "Inability to handle large datasets",
            "No fault tolerance"
        ],
        answer: "Batch-processing nature"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the key advantage of Apache Spark over Hadoop?",
        options: [
            "Disk-based processing",
            "In-memory computation",
            "Single-node execution",
            "No fault tolerance"
        ],
        answer: "In-memory computation"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What does RDD stand for in Apache Spark?",
        options: [
            "Random Distributed Data",
            "Resilient Distributed Dataset",
            "Redundant Data Distribution",
            "Rapid Data Deployment"
        ],
        answer: "Resilient Distributed Dataset"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Which Spark component enables graph computation?",
        options: [
            "Spark SQL",
            "Spark Streaming",
            "GraphX",
            "MLlib"
        ],
        answer: "GraphX"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What is the main characteristic of serverless computing?",
        options: [
            "Requires manual server management",
            "Developers manage underlying infrastructure",
            "Code runs without managing infrastructure",
            "Only works with virtual machines"
        ],
        answer: "Code runs without managing infrastructure"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which of these is a Function-as-a-Service (FaaS) provider?",
        options: [
            "AWS EC2",
            "AWS Lambda",
            "Google Compute Engine",
            "Azure Virtual Machines"
        ],
        answer: "AWS Lambda"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What is the primary benefit of automatic scaling in serverless computing?",
        options: [
            "Higher costs during peak times",
            "Resources adjust based on demand",
            "Fixed resource allocation",
            "Manual intervention required"
        ],
        answer: "Resources adjust based on demand"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What architectural style decomposes applications into small, independent services?",
        options: [
            "Monolithic architecture",
            "Microservices architecture",
            "Client-server architecture",
            "Peer-to-peer architecture"
        ],
        answer: "Microservices architecture"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which technology is used to package applications and dependencies into lightweight containers?",
        options: [
            "VirtualBox",
            "Docker",
            "VMware",
            "Hyper-V"
        ],
        answer: "Docker"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the primary purpose of Kubernetes?",
        options: [
            "Virtual machine management",
            "Container orchestration",
            "Network routing",
            "Database administration"
        ],
        answer: "Container orchestration"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What is a service mesh primarily used for in cloud-native applications?",
        options: [
            "Adding security and observability features",
            "Replacing containers",
            "Managing physical servers",
            "Eliminating microservices"
        ],
        answer: "Adding security and observability features"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "How is a service mesh typically implemented?",
        options: [
            "As a single centralized proxy",
            "As network proxies deployed alongside application code",
            "As a replacement for Kubernetes",
            "As a physical network device"
        ],
        answer: "As network proxies deployed alongside application code"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What is the data plane in a service mesh architecture?",
        options: [
            "The proxies that handle communication between services",
            "The user interface for managing services",
            "The physical network infrastructure",
            "The database layer"
        ],
        answer: "The proxies that handle communication between services"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What computing paradigm responds to events like API calls or file uploads?",
        options: [
            "Batch computing",
            "Event-driven computing",
            "Serial computing",
            "Grid computing"
        ],
        answer: "Event-driven computing"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Which technology facilitates asynchronous event processing?",
        options: [
            "Relational databases",
            "Message queues",
            "Block storage",
            "CPU caches"
        ],
        answer: "Message queues"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is an example of an event-driven FaaS scenario?",
        options: [
            "AWS Lambda triggering from an S3 upload",
            "Scheduled batch job running at midnight",
            "Manual server restart",
            "Static website hosting"
        ],
        answer: "AWS Lambda triggering from an S3 upload"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Which technology enables real-time data analytics in event-driven architectures?",
        options: [
            "Apache Hadoop",
            "Batch processing",
            "Stream processing",
            "ETL pipelines"
        ],
        answer: "Stream processing"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What is the primary advantage of event-driven architectures?",
        options: [
            "Improved responsiveness and efficiency",
            "Higher hardware costs",
            "Slower processing times",
            "Increased manual intervention"
        ],
        answer: "Improved responsiveness and efficiency"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "What does DAG stand for in Apache Spark?",
        options: [
            "Data Access Gateway",
            "Directed Acyclic Graph",
            "Distributed Application Group",
            "Dynamic Allocation Gateway"
        ],
        answer: "Directed Acyclic Graph"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Which Spark component provides machine learning capabilities?",
        options: [
            "Spark SQL",
            "Spark Streaming",
            "GraphX",
            "MLlib",
        ],
        answer: "MLlib"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "What is the primary benefit of containerization in cloud-native development?",
        options: [
            "Increased hardware dependency",
            "Portability and consistency across environments",
            "Larger application footprint",
            "Slower deployment times"
        ],
        answer: "Portability and consistency across environments"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What is the main purpose of CI/CD pipelines in cloud-native development?",
        options: [
            "Manual software deployment",
            "Automating software delivery",
            "Increasing development time",
            "Reducing testing"
        ],
        answer: "Automating software delivery"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which of these is NOT a characteristic of cloud-native applications?",
        options: [
            "Scalability",
            "Resilience",
            "Tight coupling",
            "Optimization for cloud platforms"
        ],
        answer: "Tight coupling"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What is the primary advantage of pipeline parallelism?",
        options: [
            "Sequential processing of stages",
            "Output of one stage serves as input to the next",
            "Independent processing of unrelated tasks",
            "Single-threaded execution"
        ],
        answer: "Output of one stage serves as input to the next"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which technology is mentioned as enhancing communication between microservices?",
        options: [
            "Service mesh",
            "Virtual machines",
            "Bare metal servers",
            "Traditional monoliths"
        ],
        answer: "Service mesh"
    }
];