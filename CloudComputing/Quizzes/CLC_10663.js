let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary purpose of virtualization in cloud computing?",
        options: [
            "To increase physical hardware requirements",
            "To create virtual instances of physical resources for better utilization",
            "To eliminate the need for operating systems",
            "To reduce network bandwidth"
        ],
        answer: "To create virtual instances of physical resources for better utilization"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which of the following is NOT a type of virtualization?",
        options: [
            "Storage Virtualization",
            "Network Virtualization",
            "Server Virtualization",
            "Processor Virtualization"
        ],
        answer: "Processor Virtualization"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "Whatis a key benefit of server virtualization",
        options: [
            "Increased hardware costs",
            "Improved resource utilization",
            "Reduced scalability",
            "Limited disaster recovery"
        ],
        answer: "Improved resource utilization"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which network virtualization technology improves security through segmentation?",
        options: [
            "VLANs",
            "RAID",
            "SSD",
            "BIOS"
        ],
        answer: "VLANs"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What component sits between physical hardware and virtual machines to manage resource allocation?",
        options: [
            "Operating System",
            "Hypervisor",
            "BIOS",
            "Middleware"
        ],
        answer: "Hypervisor"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of the following is a Type 1 (Bare Metal) hypervisor?",
        options: [
            "VMware Workstation",
            "Oracle VirtualBox",
            "VMware ESXi",
            "Windows Subsystem for Linux"
        ],
        answer: "VMware ESXi"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the main advantage of Type 1 hypervisors over Type 2 hypervisors?",
        options: [
            "They run on top of an existing OS",
            "They are easier to install",
            "They provide better performance and security",
            "They support more guest operating systems"
        ],
        answer: "They provide better performance and security"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which of the following is NOT a feature of VMware ESXi?",
        options: [
            "Requires a host operating system",
            "Runs directly on host hardware",
            "Uses minimal space",
            "Provides high performance virtualization"
        ],
        answer: "Requires a host operating system"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the primary function of a hypervisor in cloud computing?",
        options: [
            "To replace physical servers entirely",
            "To enable multitenancy and manage resource allocation",
            "To provide internet connectivity",
            "To develop cloud applications"
        ],
        answer: "To enable multitenancy and manage resource allocation"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Which security risk occurs when an attacker breaks out of a VM to access the hypervisor?",
        options: [
            "Phishing attack",
            "DDoS attack",
            "VM Escape attack",
            "SQL injection"
        ],
        answer: "VM Escape attack"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is the main security concern with hypervisor vulnerabilities?",
        options: [
            "They can potentially compromise all VMs on a host",
            "They can only affect one VM",
            "They are easy to detect and patch",
            "They don't affect cloud environments"
        ],
        answer: "They can potentially compromise all VMs on a host"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which of the following is NOT a consequence of successful VM escape attacks?",
        options: [
            "Data theft from neighboring VMs",
            "Improved VM performance",
            "Compromise of the underlying hypervisor",
            "Full system control by attackers"
        ],
        answer: "Improved VM performance"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What is resource contention in virtualization?",
        options: [
            "When VMs peacefully share resources",
            "When there are too many physical resources available",
            "When VMs compete for limited resources causing performance issues",
            "When resources are permanently assigned to one VM"
        ],
        answer: "When VMs compete for limited resources causing performance issues"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which hardware feature enhances virtualization security by providing CPU-level support?",
        options: [
            "VT-x",
            "USB 3.0",
            "VT-d",
            "HDMI"
        ],
        answer: "VT-x"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What does VT-d technology enable in virtualization?",
        options: [
            "Direct passthrough of devices to VMs",
            "Better graphics performance",
            "Increased network bandwidth",
            "Larger storage capacity"
        ],
        answer: "Direct passthrough of devices to VMs"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which company developed AMD-V technology?",
        options: [
            "Intel",
            "AMD",
            "Microsoft",
            "IBM"
        ],
        answer: "AMD"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is the primary purpose of VM hardening?",
        options: [
            "To make VMs physically stronger",
            "To increase VM size",
            "To apply security best practices to VMs",
            "To reduce the number of VMs"
        ],
        answer: "To apply security best practices to VMs"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Which of the following is NOT a VM monitoring and management practice?",
        options: [
            "Continuous monitoring",
            "VM hardening",
            "Disabling all security features",
            "Snapshot and backup management"
        ],
        answer: "Disabling all security features"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What is the benefit of implementing resource quotas in virtualization?",
        options: [
            "To prevent over-allocation of resources",
            "To eliminate all security risks",
            "To make VMs run faster than physical servers",
            "To reduce the need for hypervisors"
        ],
        answer: "To prevent over-allocation of resources"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Which of the following is an open-source Type 1 hypervisor?",
        options: [
            "VMware ESXi",
            "Microsoft Hyper-V",
            "Xen",
            "Oracle VirtualBox"
        ],
        answer: "Xen"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is the main advantage of using dedicated hardware for sensitive workloads?",
        options: [
            "Eliminates risks associated with multitenancy",
            "Reduces virtualization capabilities",
            "Increases costs without benefits",
            "Makes systems less secure"
        ],
        answer: "Eliminates risks associated with multitenancy"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Which virtualization security measure helps detect anomalies in VM activities?",
        options: [
            "Logging and auditing",
            "Removing all firewalls",
            "Sharing admin credentials",
            "Disabling all updates"
        ],
        answer: "Logging and auditing"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What type of attack exploits shared hardware resources to infer sensitive information?",
        options: [
            "Phishing attack",
            "Side-channel attack",
            "Brute force attack",
            "Dictionary attack"
        ],
        answer: "Side-channel attack"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Which of the following is NOT a job of the Linux kernel mentioned in the lecture?",
        options: [
            "Memory management",
            "Process management",
            "Device drivers",
            "Cloud service provisioning"
        ],
        answer: "Cloud service provisioning"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "What is KVM (Kernel-based Virtual Machine)?",
        options: [
            "A Windows virtualization technology",
            "A Linux kernel module that enables virtualization",
            "A type of computer hardware",
            "A cloud storage service"
        ],
        answer: "A Linux kernel module that enables virtualization"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which security strategy involves reducing the hypervisor's codebase?",
        options: [
            "Maximizing the attack surface",
            "Minimizing the attack surface",
            "Disabling all security features",
            "Sharing resources indiscriminately"
        ],
        answer: "Minimizing the attack surface"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What is the primary risk of inadequate network isolation in virtualization?",
        options: [
            "Improved performance",
            "Eavesdropping between VMs",
            "Reduced storage capacity",
            "Faster processing speeds"
        ],
        answer: "Eavesdropping between VMs"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which of the following best describes the concept of multitenancy in virtualization?",
        options: [
            "Multiple users sharing the same physical resources",
            "Each user having dedicated physical hardware",
            "Eliminating all virtual machines",
            "Using only one operating system"
        ],
        answer: "Multiple users sharing the same physical resources"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What is the main purpose of regular hypervisor patching?",
        options: [
            "To increase hardware costs",
            "To address known vulnerabilities",
            "To reduce virtualization capabilities",
            "To make systems slower"
        ],
        answer: "To address known vulnerabilities"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which of the following is a key conclusion about virtualization security?",
        options: [
            "Virtualization eliminates all security risks",
            "Security challenges must be addressed to protect cloud environments",
            "Hypervisors don't need any security measures",
            "Physical servers are always less secure than virtual ones"
        ],
        answer: "Security challenges must be addressed to protect cloud environments"
    }
];