let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Which of the following is NOT one of the three dominant cloud service providers?",
        options: [
            "Amazon Web Services (AWS)",
            "Microsoft Azure",
            "Google Cloud Platform (GCP)",
            "IBM Cloud"
        ],
        answer: "IBM Cloud"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "What year was AWS launched?",
        options: [
            "2002",
            "2004",
            "2006",
            "2008"
        ],
        answer: "2006"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "Which AWS service provides serverless computing capabilities?",
        options: [
            "EC2",
            "Lambda",
            "S3",
            "RDS"
        ],
        answer: "Lambda"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "What is the primary strength of Microsoft Azure?",
        options: [
            "Big data analytics",
            "Integration with Microsoft's software ecosystem",
            "Container orchestration",
            "Machine learning services"
        ],
        answer: "Integration with Microsoft's software ecosystem"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "Which Google Cloud service is specifically designed for data analytics?",
        options: [
            "Compute Engine",
            "BigQuery",
            "Cloud Storage",
            "Cloud Spanner"
        ],
        answer: "BigQuery"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "What is the main advantage of containerized applications?",
        options: [
            "They require more resources than virtual machines",
            "They can run on any host operating system without modification",
            "They are limited to specific cloud providers",
            "They are more expensive to deploy"
        ],
        answer: "They can run on any host operating system without modification"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "Which layer of cloud architecture includes hypervisors and virtual machines?",
        options: [
            "Infrastructure Layer",
            "Virtualization Layer",
            "Platform Layer",
            "Application Layer"
        ],
        answer: "Virtualization Layer"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What is the purpose of middleware in cloud architecture?",
        options: [
            "To provide physical hardware components",
            "To enable communication and data management between applications",
            "To serve as the user interface",
            "To replace the need for databases"
        ],
        answer: "To enable communication and data management between applications"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the difference between a region and an availability zone in cloud infrastructure?",
        options: [
            "A region is a single data center, while an availability zone contains multiple regions",
            "A region is a geographic area with multiple data centers, while an availability zone is one or more discrete data centers within a region",
            "They are the same thing with different names",
            "An availability zone is larger than a region"
        ],
        answer: "A region is a geographic area with multiple data centers, while an availability zone is one or more discrete data centers within a region"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What is the primary goal of resource management in the cloud?",
        options: [
            "To allocate as many resources as possible to each application",
            "To allocate and optimize computing resources to meet application demands efficiently",
            "To limit resource usage to reduce costs regardless of performance",
            "To manually adjust resources on a daily basis"
        ],
        answer: "To allocate and optimize computing resources to meet application demands efficiently"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which of the following is NOT a benefit of multi-tenancy in cloud computing?",
        options: [
            "Cost savings through shared infrastructure",
            "Security and isolation between tenants",
            "Dedicated physical hardware for each tenant",
            "Scalability of resources"
        ],
        answer: "Dedicated physical hardware for each tenant"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What is the main difference between vertical and horizontal scaling?",
        options: [
            "Vertical scaling adds more instances, while horizontal scaling increases capacity of existing instances",
            "Vertical scaling increases capacity of existing instances, while horizontal scaling adds more instances",
            "They are identical concepts with different names",
            "Vertical scaling is for storage, while horizontal scaling is for compute"
        ],
        answer: "Vertical scaling increases capacity of existing instances, while horizontal scaling adds more instances"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Which AWS service would you use to automatically adjust the number of EC2 instances based on demand?",
        options: [
            "AWS CloudWatch",
            "AWS Auto Scaling",
            "AWS Lambda",
            "AWS Elastic Beanstalk"
        ],
        answer: "AWS Auto Scaling"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What is the primary purpose of a Virtual Private Cloud (VPC)?",
        options: [
            "To provide a publicly accessible network for all cloud resources",
            "To create a logically isolated section of the cloud for launching resources",
            "To replace physical data centers entirely",
            "To limit cloud usage to specific geographic regions"
        ],
        answer: "To create a logically isolated section of the cloud for launching resources"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the main characteristic of Infrastructure as Code (IaC) tools like Terraform?",
        options: [
            "They require manual configuration of each resource",
            "They use declarative configuration files to define and provision resources",
            "They are only compatible with specific programming languages",
            "They cannot be version controlled"
        ],
        answer: "They use declarative configuration files to define and provision resources"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What is the smallest deployable unit in Kubernetes?",
        options: [
            "Node",
            "Cluster",
            "Pod",
            "Container"
        ],
        answer: "Pod"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "Which of the following best describes edge computing?",
        options: [
            "Processing data in centralized cloud data centers",
            "Bringing computation and data storage closer to the source of data generation",
            "Using only virtual machines for all computing needs",
            "A type of load balancing technique"
        ],
        answer: "Bringing computation and data storage closer to the source of data generation"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What is the main difference between edge computing and fog computing?",
        options: [
            "Edge computing happens at the device level, while fog computing happens at intermediate points between devices and the cloud",
            "They are exactly the same concept",
            "Fog computing only works with AWS services",
            "Edge computing requires more bandwidth than fog computing"
        ],
        answer: "Edge computing happens at the device level, while fog computing happens at intermediate points between devices and the cloud"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Which Azure service provides serverless computing capabilities?",
        options: [
            "Azure Virtual Machines",
            "Azure Functions",
            "Azure Blob Storage",
            "Azure SQL Database"
        ],
        answer: "Azure Functions"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What is the primary benefit of using an Application Load Balancer (ALB) versus a Network Load Balancer (NLB)?",
        options: [
            "ALB operates at the transport layer (Layer 4)",
            "ALB is ideal for HTTP/HTTPS traffic at the application layer (Layer 7)",
            "ALB is less secure than NLB",
            "ALB cannot handle TCP traffic"
        ],
        answer: "ALB is ideal for HTTP/HTTPS traffic at the application layer (Layer 7)"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "Which of the following is NOT a typical characteristic of modern cloud data centers?",
        options: [
            "Designed for high availability and scalability",
            "Distributed across multiple geographic regions",
            "Using renewable energy sources",
            "Located in a single physical location for easier management"
        ],
        answer: "Located in a single physical location for easier management"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "What is the primary purpose of declarative configuration management?",
        options: [
            "To manually configure each resource individually",
            "To declare a desired state and let the system automatically achieve it",
            "To eliminate the need for version control",
            "To make infrastructure changes more difficult to track"
        ],
        answer: "To declare a desired state and let the system automatically achieve it"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "Which GCP service is an open-source machine learning framework developed by Google?",
        options: [
            "BigQuery",
            "TensorFlow",
            "Cloud Spanner",
            "Compute Engine"
        ],
        answer: "TensorFlow"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "What is the main advantage of using containers over virtual machines?",
        options: [
            "Containers provide stronger isolation between applications",
            "Containers are more lightweight and have faster deployment times",
            "Containers require a full operating system for each instance",
            "Containers are more suitable for legacy applications"
        ],
        answer: "Containers are more lightweight and have faster deployment times"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Which AWS service provides automated image and video analysis capabilities?",
        options: [
            "SageMaker",
            "Rekognition",
            "EC2",
            "S3"
        ],
        answer: "Rekognition"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "What is the primary purpose of a subnet in cloud networking?",
        options: [
            "To connect different cloud providers together",
            "To segment resources within a VPC for security and performance",
            "To replace the need for firewalls",
            "To limit access to only certain geographic regions"
        ],
        answer: "To segment resources within a VPC for security and performance"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "Which of the following is NOT a typical use case for edge computing?",
        options: [
            "IoT devices",
            "Real-time analytics",
            "Autonomous vehicles",
            "Legacy mainframe systems"
        ],
        answer: "Legacy mainframe systems"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "What is the primary benefit of using Terraform for cloud resource management?",
        options: [
            "It allows for manual configuration of each resource",
            "It provides version control, repeatability, and consistency in resource provisioning",
            "It only works with a single cloud provider",
            "It cannot be integrated with existing development workflows"
        ],
        answer: "It provides version control, repeatability, and consistency in resource provisioning"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "Which Azure service provides a NoSQL database solution?",
        options: [
            "Azure SQL Database",
            "Azure Cosmos DB",
            "Azure Blob Storage",
            "Azure Files"
        ],
        answer: "Azure Cosmos DB"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "What is the primary purpose of cloud service orchestration tools?",
        options: [
            "To manually manage each cloud resource individually",
            "To automate the deployment and management of complex cloud environments",
            "To limit the scalability of cloud applications",
            "To increase the cost of cloud operations"
        ],
        answer: "To automate the deployment and management of complex cloud environments"
    }
];