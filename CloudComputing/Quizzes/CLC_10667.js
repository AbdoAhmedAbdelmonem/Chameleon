let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary focus of cloud performance management?",
        options: [
            "Only reducing costs",
            "Only increasing resource allocation",
            "Balancing efficiency, speed, and cost",
            "Ignoring user experience"
        ],
        answer: "Balancing efficiency, speed, and cost"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which of the following is NOT a key compute metric for cloud performance?",
        options: [
            "CPU utilization",
            "Memory usage",
            "Disk color",
            "Response time"
        ],
        answer: "Disk color"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What does IOPS measure in storage performance?",
        options: [
            "Input/Output Operations Per Second",
            "Internet Operation Protocol Standard",
            "Internal Optical Processing Speed",
            "Integrated Output Performance System"
        ],
        answer: "Input/Output Operations Per Second"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which AWS service provides performance monitoring and alarms?",
        options: [
            "AWS S3",
            "Amazon CloudWatch",
            "AWS Lambda",
            "Amazon EC2"
        ],
        answer: "Amazon CloudWatch"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is the purpose of synthetic monitoring?",
        options: [
            "To analyze system logs",
            "To simulate user interactions and test availability",
            "To measure CPU temperature",
            "To encrypt data at rest"
        ],
        answer: "To simulate user interactions and test availability"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which technique helps identify slow code paths in applications?",
        options: [
            "Tracing and profiling",
            "Data encryption",
            "Network segmentation",
            "Load balancing"
        ],
        answer: "Tracing and profiling"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is a common cause of unexpected cloud costs?",
        options: [
            "Overprovisioning resources",
            "Using only free tier services",
            "Disabling all monitoring",
            "Manual scaling only"
        ],
        answer: "Overprovisioning resources"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which cost optimization strategy involves matching instance types to workload requirements?",
        options: [
            "Right-sizing resources",
            "Always using the largest instances",
            "Never reviewing resource usage",
            "Disabling auto-scaling"
        ],
        answer: "Right-sizing resources"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the main benefit of using spot instances?",
        options: [
            "Guaranteed availability",
            "Reduced costs for fault-tolerant workloads",
            "Higher performance than on-demand instances",
            "Simpler management than reserved instances"
        ],
        answer: "Reduced costs for fault-tolerant workloads"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Which AWS tool helps analyze spending trends?",
        options: [
            "AWS Cost Explorer",
            "Amazon S3",
            "AWS IAM",
            "Amazon VPC"
        ],
        answer: "AWS Cost Explorer"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is the primary purpose of auto-scaling in cloud computing?",
        options: [
            "To manually adjust resources weekly",
            "To maintain fixed resource allocation regardless of demand",
            "To dynamically adjust resources based on workload changes",
            "To reduce security monitoring"
        ],
        answer: "To dynamically adjust resources based on workload changes"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which scaling method adds or removes virtual machines?",
        options: [
            "Vertical scaling",
            "Horizontal scaling",
            "Diagonal scaling",
            "Static scaling"
        ],
        answer: "Horizontal scaling"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What does target tracking scaling maintain?",
        options: [
            "A fixed number of instances",
            "A specific metric value like CPU utilization",
            "Constant network bandwidth",
            "Identical instance types"
        ],
        answer: "A specific metric value like CPU utilization"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which AWS service manages auto-scaling groups?",
        options: [
            "AWS ASG (Auto Scaling Groups)",
            "Amazon SQS",
            "AWS CloudFormation",
            "Amazon RDS"
        ],
        answer: "AWS ASG (Auto Scaling Groups)"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is 'thrashing' in auto-scaling?",
        options: [
            "Frequent scaling up and down",
            "Complete system failure",
            "Data corruption",
            "Network congestion"
        ],
        answer: "Frequent scaling up and down"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which tool is commonly used for load testing web applications?",
        options: [
            "Apache JMeter",
            "fio",
            "Iperf",
            "Phoronix Test Suite"
        ],
        answer: "Apache JMeter"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What does YCSB benchmark evaluate?",
        options: [
            "NoSQL databases",
            "Network switches",
            "Storage devices only",
            "CPU clock speeds"
        ],
        answer: "NoSQL databases"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Which performance tuning technique helps distribute static content globally?",
        options: [
            "Content Delivery Networks (CDNs)",
            "Database indexing",
            "Vertical scaling",
            "TCP/IP optimization"
        ],
        answer: "Content Delivery Networks (CDNs)"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What is a common solution for reducing cold starts in serverless functions?",
        options: [
            "Provisioned concurrency",
            "Disabling all logging",
            "Using only large memory configurations",
            "Running functions continuously"
        ],
        answer: "Provisioned concurrency"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Which caching solution is mentioned for database performance?",
        options: [
            "Redis",
            "MySQL",
            "PostgreSQL",
            "MongoDB"
        ],
        answer: "Redis"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is the purpose of distributed tracing in microservices?",
        options: [
            "To increase costs",
            "To identify performance bottlenecks across services",
            "To reduce security",
            "To eliminate logging"
        ],
        answer: "To identify performance bottlenecks across services"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Which Azure service provides comprehensive monitoring capabilities?",
        options: [
            "Azure Monitor",
            "Azure Blob Storage",
            "Azure Functions",
            "Azure VPN"
        ],
        answer: "Azure Monitor"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What is the main advantage of predictive scaling?",
        options: [
            "It reacts only after issues occur",
            "It uses machine learning to anticipate load changes",
            "It maintains fixed capacity",
            "It ignores historical patterns"
        ],
        answer: "It uses machine learning to anticipate load changes"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Which storage class is most cost-effective for archival data?",
        options: [
            "AWS S3 Standard",
            "AWS S3 Glacier",
            "AWS S3 Intelligent-Tiering",
            "AWS EBS gp3"
        ],
        answer: "AWS S3 Glacier"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "What does vertical scaling involve?",
        options: [
            "Adding more instances",
            "Increasing resources of existing instances",
            "Distributing load geographically",
            "Reducing security measures"
        ],
        answer: "Increasing resources of existing instances"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which tool measures network bandwidth?",
        options: [
            "Iperf",
            "fio",
            "JMeter",
            "Phoronix"
        ],
        answer: "Iperf"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What is the benefit of resource scheduling?",
        options: [
            "Automating shutdown of unused services during off-peak hours",
            "Keeping all resources running 24/7",
            "Ignoring cost considerations",
            "Manual resource allocation only"
        ],
        answer: "Automating shutdown of unused services during off-peak hours"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which Google Cloud service provides monitoring capabilities?",
        options: [
            "Google Cloud Operations Suite",
            "Google BigQuery",
            "Google Cloud Storage",
            "Google Compute Engine"
        ],
        answer: "Google Cloud Operations Suite"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What is the purpose of step scaling?",
        options: [
            "To make capacity changes in predefined increments",
            "To maintain constant capacity",
            "To ignore performance metrics",
            "To reduce monitoring frequency"
        ],
        answer: "To make capacity changes in predefined increments"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which technique helps optimize database performance?",
        options: [
            "Query optimization and indexing",
            "Disabling all indexes",
            "Running all queries sequentially",
            "Ignoring query execution plans"
        ],
        answer: "Query optimization and indexing"
    }
];