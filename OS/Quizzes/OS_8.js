let question = [
    // Lecture 8 (Deadlocks)
    {
        numb: 1,
        type: "Deadlock",
        question: "What is a deadlock in an operating system?",
        options: [
            "A process completing execution successfully",
            "A set of blocked processes each holding resources and waiting for others",
            "A memory allocation error",
            "A CPU scheduling algorithm"
        ],
        answer: "A set of blocked processes each holding resources and waiting for others"
    },
    {
        numb: 2,
        type: "Deadlock",
        question: "Which of the following is NOT a Coffman condition for deadlock?",
        options: [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Priority Inheritance"
        ],
        answer: "Priority Inheritance"
    },
    {
        numb: 3,
        type: "Deadlock",
        question: "What does the 'Mutual Exclusion' condition state?",
        options: [
            "Resources must be shareable among processes",
            "Only one process can use a resource at a time",
            "Processes must release resources voluntarily",
            "Resources can be forcibly taken from processes"
        ],
        answer: "Only one process can use a resource at a time"
    },
    {
        numb: 4,
        type: "Deadlock",
        question: "In the 'Hold and Wait' condition, a process must:",
        options: [
            "Release all resources before requesting new ones",
            "Hold at least one resource while waiting for others",
            "Share all resources with other processes",
            "Preempt resources from other processes"
        ],
        answer: "Hold at least one resource while waiting for others"
    },
    {
        numb: 5,
        type: "Deadlock",
        question: "What does 'No Preemption' imply in deadlock conditions?",
        options: [
            "Resources can be taken from processes forcibly",
            "Processes must release resources voluntarily",
            "Resources are allocated randomly",
            "Processes have fixed priorities"
        ],
        answer: "Processes must release resources voluntarily"
    },
    {
        numb: 6,
        type: "Deadlock",
        question: "Which condition describes a circular chain of waiting processes?",
        options: [
            "Mutual Exclusion",
            "Hold and Wait",
            "No Preemption",
            "Circular Wait"
        ],
        answer: "Circular Wait"
    },
    {
        numb: 7,
        type: "Deadlock",
        question: "How can the 'Mutual Exclusion' condition be prevented?",
        options: [
            "By allowing resource sharing where possible",
            "By forcing processes to release resources",
            "By numbering resources",
            "By terminating processes"
        ],
        answer: "By allowing resource sharing where possible"
    },
    {
        numb: 8,
        type: "Deadlock",
        question: "What is the drawback of preventing 'Hold and Wait' by requiring all resources upfront?",
        options: [
            "Increased system efficiency",
            "Low resource utilization",
            "Elimination of deadlocks",
            "Faster process execution"
        ],
        answer: "Low resource utilization"
    },
    {
        numb: 9,
        type: "Deadlock",
        question: "How can 'No Preemption' be addressed to prevent deadlocks?",
        options: [
            "By allowing the system to forcibly take resources",
            "By making resources shareable",
            "By imposing resource numbering",
            "By ignoring deadlocks"
        ],
        answer: "By allowing the system to forcibly take resources"
    },
    {
        numb: 10,
        type: "Deadlock",
        question: "What is the purpose of resource ordering to prevent 'Circular Wait'?",
        options: [
            "To allow random resource requests",
            "To enforce requests in increasing order of resource numbers",
            "To prioritize I/O-bound processes",
            "To reduce context switches"
        ],
        answer: "To enforce requests in increasing order of resource numbers"
    },
    {
        numb: 11,
        type: "Deadlock",
        question: "Which deadlock handling strategy is most restrictive?",
        options: [
            "Prevention",
            "Avoidance",
            "Detection and Recovery",
            "Ignoring deadlocks"
        ],
        answer: "Prevention"
    },
    {
        numb: 12,
        type: "Deadlock",
        question: "What is a 'safe state' in deadlock avoidance?",
        options: [
            "A state where deadlocks are inevitable",
            "A state where the system can allocate resources without risking deadlock",
            "A state where all resources are free",
            "A state where processes are terminated"
        ],
        answer: "A state where the system can allocate resources without risking deadlock"
    },
    {
        numb: 13,
        type: "Deadlock",
        question: "Which algorithm is used for deadlock avoidance?",
        options: [
            "Round Robin",
            "Banker's Algorithm",
            "FCFS",
            "Priority Scheduling"
        ],
        answer: "Banker's Algorithm"
    },
    {
        numb: 14,
        type: "Deadlock",
        question: "What does the Banker's Algorithm require to work?",
        options: [
            "Process priorities",
            "Maximum resource needs of processes in advance",
            "Random resource allocation",
            "Preemption of all resources"
        ],
        answer: "Maximum resource needs of processes in advance"
    },
    {
        numb: 15,
        type: "Deadlock",
        question: "In deadlock detection, what confirms a deadlock for single-instance resources?",
        options: [
            "A cycle in the Resource Allocation Graph",
            "High CPU utilization",
            "Low memory usage",
            "Process termination"
        ],
        answer: "A cycle in the Resource Allocation Graph"
    },
    {
        numb: 16,
        type: "Deadlock",
        question: "How can a system recover from deadlock using process termination?",
        options: [
            "By aborting all deadlocked processes",
            "By increasing resource limits",
            "By ignoring the deadlock",
            "By restarting the CPU"
        ],
        answer: "By aborting all deadlocked processes"
    },
    {
        numb: 17,
        type: "Deadlock",
        question: "What is a drawback of process termination for deadlock recovery?",
        options: [
            "Improved system performance",
            "Loss of process progress",
            "Reduced overhead",
            "Automatic resource sharing"
        ],
        answer: "Loss of process progress"
    },
    {
        numb: 18,
        type: "Deadlock",
        question: "What is resource preemption in deadlock recovery?",
        options: [
            "Forcibly taking resources from processes",
            "Allocating infinite resources",
            "Ignoring resource requests",
            "Sharing all resources equally"
        ],
        answer: "Forcibly taking resources from processes"
    },
    {
        numb: 19,
        type: "Deadlock",
        question: "Which system commonly uses deadlock detection and recovery?",
        options: [
            "Databases",
            "Calculators",
            "Text editors",
            "Media players"
        ],
        answer: "Databases"
    },
    {
        numb: 20,
        type: "Deadlock",
        question: "What is a challenge in resource preemption?",
        options: [
            "Selecting which process/resources to preempt",
            "Increasing system speed",
            "Eliminating all deadlocks permanently",
            "Reducing memory usage"
        ],
        answer: "Selecting which process/resources to preempt"
    },
    {
        numb: 21,
        type: "Deadlock",
        question: "Which real-world system is prone to deadlocks due to transactional locks?",
        options: [
            "Database systems",
            "Web browsers",
            "Music players",
            "Screen savers"
        ],
        answer: "Database systems"
    },
    {
        numb: 22,
        type: "Deadlock",
        question: "In distributed systems, why is deadlock detection harder?",
        options: [
            "Due to centralized control",
            "Because of the lack of resources",
            "Due to distributed state management",
            "Because processes are faster"
        ],
        answer: "Due to distributed state management"
    },
    {
        numb: 23,
        type: "Deadlock",
        question: "What is a wait-for graph used for?",
        options: [
            "CPU scheduling",
            "Deadlock detection",
            "Memory allocation",
            "File system management"
        ],
        answer: "Deadlock detection"
    },
    {
        numb: 24,
        type: "Deadlock",
        question: "Which deadlock handling strategy is least restrictive?",
        options: [
            "Prevention",
            "Avoidance",
            "Detection and Recovery",
            "All are equally restrictive"
        ],
        answer: "Detection and Recovery"
    },
    {
        numb: 25,
        type: "Deadlock",
        question: "What is the main goal of deadlock prevention?",
        options: [
            "To eliminate at least one Coffman condition",
            "To allow deadlocks to occur",
            "To ignore resource allocation",
            "To maximize CPU utilization"
        ],
        answer: "To eliminate at least one Coffman condition"
    },
    {
        numb: 26,
        type: "Deadlock",
        question: "Why might an OS choose to ignore deadlocks?",
        options: [
            "Deadlocks are impossible",
            "The cost of handling is higher than the impact of deadlocks",
            "Users prefer deadlocked systems",
            "It improves performance"
        ],
        answer: "The cost of handling is higher than the impact of deadlocks"
    },
    {
        numb: 27,
        type: "Deadlock",
        question: "Which condition is violated if resources are shareable?",
        options: [
            "Hold and Wait",
            "No Preemption",
            "Mutual Exclusion",
            "Circular Wait"
        ],
        answer: "Mutual Exclusion"
    },
    {
        numb: 28,
        type: "Deadlock",
        question: "What is a practical limitation of deadlock prevention?",
        options: [
            "It guarantees 100% deadlock-free operation",
            "It often reduces system efficiency",
            "It requires no resource management",
            "It works perfectly for all resource types"
        ],
        answer: "It often reduces system efficiency"
    },
    {
        numb: 29,
        type: "Deadlock",
        question: "In the Banker's Algorithm, what does 'safe sequence' ensure?",
        options: [
            "Deadlock is inevitable",
            "All processes can complete without deadlock",
            "Resources are always preempted",
            "Processes have fixed priorities"
        ],
        answer: "All processes can complete without deadlock"
    },
    {
        numb: 30,
        type: "Deadlock",
        question: "Which deadlock recovery method is least disruptive?",
        options: [
            "Aborting all deadlocked processes",
            "Preempting resources from one process at a time",
            "Restarting the entire system",
            "Ignoring the deadlock indefinitely"
        ],
        answer: "Preempting resources from one process at a time"
    }
];