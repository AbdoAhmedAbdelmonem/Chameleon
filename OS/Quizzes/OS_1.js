let question = [
    // Lecture 1 (Introduction to Operating Systems)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary role of an operating system?",
        options: [
            "To design computer hardware",
            "To act as an intermediary between users and hardware",
            "To replace application programs",
            "To manufacture computer components"
        ],
        answer: "To act as an intermediary between users and hardware"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which of the following is NOT a goal of an operating system?",
        options: [
            "Maximize hardware cost",
            "Execute user programs easily",
            "Use hardware efficiently",
            "Make the system convenient to use"
        ],
        answer: "Maximize hardware cost"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "The four components of a computer system are:",
        options: [
            "CPU, GPU, RAM, ROM",
            "Monitor, Keyboard, Mouse, Printer",
            "Kernel, Firmware, BIOS, Cache",
            "Hardware, OS, Application Programs, Users",
        ],
        answer: "Hardware, OS, Application Programs, Users"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which component directly controls hardware resources?",
        options: [
            "Operating System",
            "Application Programs",
            "Users",
            "Compiler"
        ],
        answer: "Operating System"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What does the term 'resource allocator' refer to in OS?",
        options: [
            "A program that designs hardware",
            "A tool for internet browsing",
            "A type of application software",
            "Manages and allocates system resources efficiently",
        ],
        answer: "Manages and allocates system resources efficiently"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "The program that runs at all times in the computer is called:",
        options: [
            "Application Software",
            "Compiler",
            "Kernel",
            "Web Browser"
        ],
        answer: "Kernel"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the role of a bootstrap program?",
        options: [
            "To shut down the computer",
            "To load the OS kernel at startup",
            "To delete user files",
            "To run application programs"
        ],
        answer: "To load the OS kernel at startup"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Where is the bootstrap program typically stored?",
        options: [
            "Hard Disk",
            "RAM",
            "ROM/EPROM (Firmware)",
            "Cache"
        ],
        answer: "ROM/EPROM (Firmware)"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What happens when a device controller finishes an I/O operation?",
        options: [
            "It sends an interrupt to the CPU",
            "It shuts down the computer",
            "It deletes system files",
            "It stops the OS kernel"
        ],
        answer: "It sends an interrupt to the CPU"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Which of the following is a software-generated interrupt?",
        options: [
            "Hardware Failure",
            "Power Outage",
            "BIOS Error",
            "Trap/Exception"
        ],
        answer: "Trap/Exception"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is an interrupt vector?",
        options: [
            "A type of computer virus",
            "A table storing addresses of interrupt service routines",
            "A hardware component",
            "A backup storage device"
        ],
        answer: "A table storing addresses of interrupt service routines"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which type of computer system must keep all users happy due to shared resources?",
        options: [
            "Workstation",
            "Embedded System",
            "Laptop",
            "Mainframe",
        ],
        answer: "Mainframe"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Handheld computers are optimized for:",
        options: [
            "High resource utilization",
            "Usability and battery life",
            "Large storage capacity",
            "Complex computations",
        ],
        answer: "Usability and battery life"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which of the following is NOT managed by the OS?",
        options: [
            "Memory",
            "CPU",
            "Application Execution",
            "Manufacturing hardware",
        ],
        answer: "Manufacturing hardware"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the main purpose of an OS in a dedicated system like a workstation?",
        options: [
            "To maximize resource sharing",
            "To reduce hardware cost",
            "To provide convenience and performance",
            "To eliminate user interaction"
        ],
        answer: "To provide convenience and performance"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which component defines how system resources are used to solve computing problems?",
        options: [
            "Application Programs",
            "Hardware",
            "Operating System",
            "Firmware"
        ],
        answer: "Application Programs"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is a common feature of embedded operating systems?",
        options: [
            "High user interaction",
            "No or minimal user interface",
            "Large display screens",
            "Frequent software updates"
        ],
        answer: "No or minimal user interface"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What does the OS protect against in its role as a 'control program'?",
        options: [
            "Hardware manufacturing defects",
            "Internet connectivity issues",
            "User privacy settings",
            "Errors and improper computer use",
        ],
        answer: "Errors and improper computer use"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "The term 'firmware' refers to:",
        options: [
            "Software stored in ROM/EPROM",
            "A type of application software",
            "A cloud-based service",
            "A user interface component"
        ],
        answer: "Software stored in ROM/EPROM"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Which of the following executes concurrently with the CPU?",
        options: [
            "Application Programs",
            "I/O Devices",
            "Operating System Kernel",
            "Bootstrap Program"
        ],
        answer: "I/O Devices"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is the primary function of a device controller?",
        options: [
            "To replace the CPU",
            "To manage a specific hardware device",
            "To run user applications",
            "To design new hardware"
        ],
        answer: "To manage a specific hardware device"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Which of the following is NOT a type of computing environment mentioned?",
        options: [
            "Mainframe",
            "Workstation",
            "Quantum Computer",
            "Handheld Computer"
        ],
        answer: "Quantum Computer"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What triggers an interrupt in a computer system?",
        options: [
            "A user logging in",
            "An application being installed",
            "The OS shutting down",
            "A device controller completing an operation",
        ],
        answer: "A device controller completing an operation"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "The operating system is primarily:",
        options: [
            "Interrupt-driven",
            "User-driven",
            "Hardware-driven",
            "Network-driven"
        ],
        answer: "Interrupt-driven"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "What is stored in the device controller's local buffer?",
        options: [
            "OS Kernel",
            "User passwords",
            "Application source code",
            "Data being transferred to/from the device",
        ],
        answer: "Data being transferred to/from the device"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which of the following is a system program?",
        options: [
            "Web Browser",
            "Word Processor",
            "Compiler",
            "Video Game"
        ],
        answer: "Compiler"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What does the OS ensure in terms of resource allocation?",
        options: [
            "Only one user accesses resources at a time",
            "Resources are used efficiently and fairly",
            "Hardware remains unused",
            "Applications control hardware directly"
        ],
        answer: "Resources are used efficiently and fairly"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which of the following is an example of an open-source OS?",
        options: [
            "Windows",
            "macOS",
            "Linux",
            "iOS"
        ],
        answer: "Linux"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What is the first program loaded when a computer starts?",
        options: [
            "Kernel",
            "Bootstrap Program",
            "Application Software",
            "Device Driver"
        ],
        answer: "Bootstrap Program"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which of the following best describes an OS kernel?",
        options: [
            "A temporary storage space",
            "A type of hardware",
            "The core program always running on the computer",
            "A user application"
        ],
        answer: "The core program always running on the computer"
    }
];