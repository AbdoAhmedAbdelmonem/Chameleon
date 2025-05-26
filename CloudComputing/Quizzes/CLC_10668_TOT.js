let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "When did cloud computing become mainstream?",
        options: [
            "1990s",
            "2000s",
            "2010s",
            "1980s"
        ],
        answer: "2010s"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which is NOT a key characteristic of cloud computing?",
        options: [
            "On-demand self-service",
            "Dedicated hardware leasing",
            "Broad network access",
            "Rapid elasticity"
        ],
        answer: "Dedicated hardware leasing"
    },
    {
        numb: 3,
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
        numb: 4,
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
        numb: 5,
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
        numb: 6,
        type: "Multiple Choices",
        question: "What is the primary goal of cloud security?",
        options: [
            "To increase cloud computing costs",
            "To ensure confidentiality, integrity, and availability of cloud data and services",
            "To limit cloud adoption",
            "To reduce computing performance"
        ],
        answer: "To ensure confidentiality, integrity, and availability of cloud data and services"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "Which threat modeling framework is quantitative and suitable for mature security practices?",
        options: [
            "STRIDE",
            "DREAD",
            "PASTA",
            "NIST"
        ],
        answer: "DREAD"
    },
    {
        numb: 8,
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
        numb: 9,
        type: "Multiple Choices",
        question: "Which service model provides virtualized computing resources over the internet?",
        options: [
            "SaaS",
            "IaaS",
            "PaaS",
            "FaaS"
        ],
        answer: "IaaS"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "A healthcare organization uses a cloud shared by other hospitals. This is a:",
        options: [
            "Public cloud",
            "Private cloud",
            "Hybrid cloud",
            "Community cloud"
        ],
        answer: "Community cloud"
    },
    {
        numb: 11,
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
        numb: 12,
        type: "Multiple Choices",
        question: "Netflix's migration to AWS is an example of cloud adoption driven by:",
        options: [
            "Cost reduction",
            "Scalability",
            "Regulatory compliance",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Which is the oldest major cloud provider?",
        options: [
            "AWS",
            "Azure",
            "Google Cloud",
            "IBM Cloud"
        ],
        answer: "AWS"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "AWS's geographic regions contain multiple:",
        options: [
            "Edge locations",
            "Availability Zones",
            "Virtual Private Clouds",
            "Content Delivery Networks"
        ],
        answer: "Availability Zones"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Vertical scaling refers to:",
        options: [
            "Adding more instances",
            "Increasing CPU/RAM of an instance",
            "Distributing traffic across servers",
            "Migrating to hybrid cloud"
        ],
        answer: "Increasing CPU/RAM of an instance"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Auto-scaling primarily addresses:",
        options: [
            "Security breaches",
            "Variable workloads",
            "Data redundancy",
            "Network latency"
        ],
        answer: "Variable workloads"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "A VPC component that filters traffic is a:",
        options: [
            "Subnet",
            "Route table",
            "Security group",
            "Internet Gateway"
        ],
        answer: "Security group"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Terraform is used for:",
        options: [
            "Container orchestration",
            "Infrastructure as Code",
            "Load balancing",
            "Virtual machine monitoring"
        ],
        answer: "Infrastructure as Code"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Edge computing reduces latency by processing data:",
        options: [
            "In centralized data centers",
            "At the network periphery",
            "On hybrid clouds",
            "Via community clouds"
        ],
        answer: "At the network periphery"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Type 1 hypervisors run directly on:",
        options: [
            "Host OS",
            "Bare-metal hardware",
            "Containers",
            "PaaS environments"
        ],
        answer: "Bare-metal hardware"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "Docker is an example of:",
        options: [
            "Virtualization",
            "Containerization",
            "Bare-metal hypervisor",
            "Fog computing"
        ],
        answer: "Containerization"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Containers have lower performance overhead than VMs because they:",
        options: [
            "Use full OS isolation",
            "Share the host OS kernel",
            "Require more storage",
            "Depend on Type 2 hypervisors"
        ],
        answer: "Share the host OS kernel"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "Which is a Type 1 hypervisor?",
        options: [
            "VMware Workstation",
            "Oracle VirtualBox",
            "KVM",
            "Docker"
        ],
        answer: "KVM"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Fog computing operates:",
        options: [
            "Between edge devices and the cloud",
            "Only on public clouds",
            "Within SaaS applications",
            "Exclusively for community clouds"
        ],
        answer: "Between edge devices and the cloud"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Kubernetes manages:",
        options: [
            "Virtual machines",
            "Containerized applications",
            "Load balancers",
            "Firewall rules"
        ],
        answer: "Containerized applications"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "A hybrid cloud combines:",
        options: [
            "Public and private clouds",
            "IaaS and PaaS",
            "Community and edge computing",
            "SaaS and FaaS"
        ],
        answer: "Public and private clouds"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "Optimizing virtualization performance involves:",
        options: [
            "Increasing hypervisor overhead",
            "Using nested virtualization",
            "Allocating excess resources",
            "Right-sizing VMs"
        ],
        answer: "Right-sizing VMs"
    },
    {
        numb: 28,
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
        numb: 29,
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
        numb: 30,
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
        numb: 31,
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
        numb: 32,
        type: "Multiple Choices",
        question: "What type of data is Azure Blob Storage optimized for?",
        options: [
            "Structured data only",
            "Unstructured data like text and binary data",
            "Real-time streaming data",
            "Relational database data"
        ],
        answer: "Unstructured data like text and binary data"
    },
    {
        numb: 33,
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
        numb: 34,
        type: "Multiple Choices",
        question: "What algorithm does Ceph use for data placement?",
        options: [
            "MapReduce",
            "CRUSH",
            "SHA-256",
            "B-tree"
        ],
        answer: "CRUSH"
    },
    {
        numb: 35,
        type: "Multiple Choices",
        question: "What is MongoDB Atlas?",
        options: [
            "A distributed file system",
            "A managed NoSQL database service",
            "A data warehousing solution",
            "A streaming platform"
        ],
        answer: "A managed NoSQL database service"
    },
    {
        numb: 36,
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
        numb: 37,
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
        numb: 38,
        type: "Multiple Choices",
        question: "Which service is used for real-time data streaming?",
        options: [
            "Apache Kafka",
            "Amazon Redshift",
            "HDFS",
            "MongoDB Atlas"
        ],
        answer: "Apache Kafka"
    },
    {
        numb: 39,
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
        numb: 40,
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
        numb: 41,
        type: "Multiple Choices",
        question: "Which of the following is NOT a common cloud security threat?",
        options: [
            "Misconfigured storage buckets",
            "Data breaches",
            "Automatic software updates",
            "Account hijacking"
        ],
        answer: "Automatic software updates"
    },
    {
        numb: 42,
        type: "Multiple Choices",
        question: "What does the 'D' in DREAD stand for?",
        options: [
            "Detection",
            "Damage",
            "Defense",
            "Data"
        ],
        answer: "Damage"
    },
    {
        numb: 43,
        type: "Multiple Choices",
        question: "What is the first step in the PASTA framework?",
        options: [
            "Threat Analysis",
            "Define Objectives",
            "Modeling and Simulation",
            "Risk Impact Analysis"
        ],
        answer: "Define Objectives"
    },
    {
        numb: 44,
        type: "Multiple Choices",
        question: "What does the principle of least privilege mean in IAM?",
        options: [
            "Users should have maximum access rights",
            "Users should have no access rights",
            "Users should have only the minimum access required",
            "Access rights should never be reviewed"
        ],
        answer: "Users should have only the minimum access required"
    },
    {
        numb: 45,
        type: "Multiple Choices",
        question: "Which regulation protects personal data of EU citizens?",
        options: [
            "HIPAA",
            "GDPR",
            "PCI-DSS",
            "SOC 2"
        ],
        answer: "GDPR"
    },
    {
        numb: 46,
        type: "Multiple Choices",
        question: "What does CSPM stand for in cloud security?",
        options: [
            "Cloud Service Provider Management",
            "Cloud Security Posture Management",
            "Cloud System Performance Monitoring",
            "Cloud Storage Protection Mechanism"
        ],
        answer: "Cloud Security Posture Management"
    },
    {
        numb: 47,
        type: "Multiple Choices",
        question: "What is the first phase in the incident response lifecycle?",
        options: [
            "Detection",
            "Preparation",
            "Containment",
            "Eradication"
        ],
        answer: "Preparation"
    },
    {
        numb: 48,
        type: "Multiple Choices",
        question: "Which practice involves embedding security early in the development process?",
        options: [
            "Shift-Right Security",
            "Shift-Left Security",
            "Bottom-Up Security",
            "Top-Down Security"
        ],
        answer: "Shift-Left Security"
    },
    {
        numb: 49,
        type: "Multiple Choices",
        question: "What is the core principle of Zero Trust architecture?",
        options: [
            "Trust all internal network traffic",
            "Assume breach and verify explicitly",
            "Grant broad access privileges",
            "Disable all authentication measures"
        ],
        answer: "Assume breach and verify explicitly"
    },
    {
        numb: 50,
        type: "Multiple Choices",
        question: "Which technique is used in Zero Trust to limit lateral movement in networks?",
        options: [
            "Micro-segmentation",
            "Open network policies",
            "Shared credentials",
            "Disabled logging"
        ],
        answer: "Micro-segmentation"
    }
];