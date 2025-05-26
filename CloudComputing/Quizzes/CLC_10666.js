let question = [
    {
        numb: 1,
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
        numb: 2,
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
        numb: 3,
        type: "Multiple Choices",
        question: "What does the STRIDE framework stand for?",
        options: [
            "Security, Trust, Reliability, Integrity, Defense, Encryption",
            "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege",
            "System, Threat, Risk, Incident, Defense, Evaluation",
            "Storage, Transmission, Recovery, Identification, Detection, Encryption"
        ],
        answer: "Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege"
    },
    {
        numb: 4,
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
        numb: 5,
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
        numb: 6,
        type: "Multiple Choices",
        question: "Which framework follows a seven-step methodology for threat modeling?",
        options: [
            "STRIDE",
            "DREAD",
            "PASTA",
            "NIST"
        ],
        answer: "PASTA"
    },
    {
        numb: 7,
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
        numb: 8,
        type: "Multiple Choices",
        question: "Which of the following is a component of Identity and Access Management (IAM)?",
        options: [
            "Data encryption",
            "Authentication",
            "Network segmentation",
            "Vulnerability scanning"
        ],
        answer: "Authentication"
    },
    {
        numb: 9,
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
        numb: 10,
        type: "Multiple Choices",
        question: "Which of the following is NOT an IAM best practice?",
        options: [
            "Enforce strong password policies",
            "Grant all users admin privileges",
            "Regularly audit permissions",
            "Use temporary credentials for short-lived access"
        ],
        answer: "Grant all users admin privileges"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What encryption standard is commonly used for data at rest in cloud storage?",
        options: [
            "AES-128",
            "AES-256",
            "DES",
            "RSA-2048"
        ],
        answer: "AES-256"
    },
    {
        numb: 12,
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
        numb: 13,
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
        numb: 14,
        type: "Multiple Choices",
        question: "Which tool is used to monitor and enforce security policies across cloud services?",
        options: [
            "CASB",
            "WAF",
            "SIEM",
            "IDS"
        ],
        answer: "CASB"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the purpose of a Web Application Firewall (WAF)?",
        options: [
            "To encrypt all database content",
            "To protect web applications from common exploits",
            "To manage user identities",
            "To scan for vulnerabilities in source code"
        ],
        answer: "To protect web applications from common exploits"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which AWS service provides logging of API calls and user activity?",
        options: [
            "AWS Config",
            "AWS CloudTrail",
            "AWS KMS",
            "AWS GuardDuty"
        ],
        answer: "AWS CloudTrail"
    },
    {
        numb: 17,
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
        numb: 18,
        type: "Multiple Choices",
        question: "What does DevSecOps aim to achieve?",
        options: [
            "Remove all security measures for faster deployment",
            "Integrate security into the DevOps pipeline",
            "Eliminate the need for developers to consider security",
            "Reduce the frequency of software updates"
        ],
        answer: "Integrate security into the DevOps pipeline"
    },
    {
        numb: 19,
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
        numb: 20,
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
        numb: 21,
        type: "Multiple Choices",
        question: "Which technique is used in Zero Trust to limit lateral movement in networks?",
        options: [
            "Micro-segmentation",
            "Open network policies",
            "Shared credentials",
            "Disabled logging"
        ],
        answer: "Micro-segmentation"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "What is the purpose of continuous authentication in Zero Trust?",
        options: [
            "To verify users only once at login",
            "To dynamically verify users and devices throughout a session",
            "To eliminate the need for authentication",
            "To reduce security measures"
        ],
        answer: "To dynamically verify users and devices throughout a session"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "Which of the following is a Zero Trust implementation example?",
        options: [
            "Google BeyondCorp",
            "AWS S3",
            "Azure Blob Storage",
            "Google Cloud Storage"
        ],
        answer: "Google BeyondCorp"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "What type of testing identifies vulnerabilities in running applications?",
        options: [
            "SAST",
            "DAST",
            "Unit testing",
            "Integration testing"
        ],
        answer: "DAST"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Which tool is used for secrets management?",
        options: [
            "Terraform",
            "HashiCorp Vault",
            "Nessus",
            "Splunk"
        ],
        answer: "HashiCorp Vault"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "What does SIEM stand for in security monitoring?",
        options: [
            "Security Information and Event Management",
            "System Integrity and Encryption Module",
            "Secure Internet Exchange Mechanism",
            "Standardized Incident Evaluation Method"
        ],
        answer: "Security Information and Event Management"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "Which AWS service provides threat detection using machine learning?",
        options: [
            "AWS Config",
            "AWS GuardDuty",
            "AWS KMS",
            "AWS IAM"
        ],
        answer: "AWS GuardDuty"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "What is the final phase in the incident response lifecycle?",
        options: [
            "Preparation",
            "Detection",
            "Containment",
            "Post-Incident Review"
        ],
        answer: "Post-Incident Review"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "Which standard assesses controls relevant to security, availability, and confidentiality?",
        options: [
            "GDPR",
            "HIPAA",
            "SOC 2",
            "PCI-DSS"
        ],
        answer: "SOC 2"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "What is the purpose of network segmentation in cloud security?",
        options: [
            "To increase network speed",
            "To isolate workloads and limit attack surfaces",
            "To reduce the need for authentication",
            "To eliminate the need for encryption"
        ],
        answer: "To isolate workloads and limit attack surfaces"
    }
];