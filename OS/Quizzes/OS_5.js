let question = [
    // Lecture 5 (Processes and Scheduling)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is a process in an operating system?",
        options: [
            "A hardware component",
            "A program in execution",
            "A memory chip",
            "A type of interrupt"
        ],
        answer: "A program in execution"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which section of a process's memory contains global variables?",
        options: [
            "Text",
            "Data",
            "Heap",
            "Stack"
        ],
        answer: "Data"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What does the heap section of a process memory store?",
        options: [
            "Executable code",
            "Dynamically allocated memory",
            "Function call data",
            "Processor registers"
        ],
        answer: "Dynamically allocated memory"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which process state indicates that the process is currently being executed by the CPU?",
        options: [
            "New",
            "Ready",
            "Running",
            "Waiting"
        ],
        answer: "Running"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is the full form of PCB in operating systems?",
        options: [
            "Process Communication Block",
            "Program Control Block",
            "Process Control Block",
            "Processor Cache Buffer"
        ],
        answer: "Process Control Block"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of the following is NOT typically stored in a PCB?",
        options: [
            "Process state",
            "Program counter",
            "User password",
            "CPU registers"
        ],
        answer: "User password"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What information does the program counter store in a PCB?",
        options: [
            "Memory limits of the process",
            "Next instruction to execute",
            "List of open files",
            "Process priority"
        ],
        answer: "Next instruction to execute"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What is the degree of multiprogramming?",
        options: [
            "Number of CPU cores",
            "Number of processes in memory",
            "Size of the cache",
            "Clock speed of the processor"
        ],
        answer: "Number of processes in memory"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "An I/O-bound process typically spends most of its time:",
        options: [
            "Performing calculations",
            "Waiting for input/output operations",
            "Accessing cache memory",
            "Executing kernel code"
        ],
        answer: "Waiting for input/output operations"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "A CPU-bound process is characterized by:",
        options: [
            "Frequent I/O requests",
            "Long computation periods",
            "Small memory footprint",
            "Low priority"
        ],
        answer: "Long computation periods"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Where are processes placed when they are ready to execute but waiting for CPU time?",
        options: [
            "Wait queue",
            "Ready queue",
            "Termination queue",
            "I/O queue"
        ],
        answer: "Ready queue"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which queue holds processes waiting for an I/O operation to complete?",
        options: [
            "Ready queue",
            "Wait queue",
            "Execution queue",
            "Priority queue"
        ],
        answer: "Wait queue"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What happens when a process moves from the Running state to the Waiting state?",
        options: [
            "It is terminated",
            "It completes execution",
            "It requests an I/O operation",
            "It is scheduled immediately"
        ],
        answer: "It requests an I/O operation"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which component is responsible for moving processes between Ready and Running states?",
        options: [
            "Memory manager",
            "I/O scheduler",
            "CPU scheduler",
            "Interrupt handler"
        ],
        answer: "CPU scheduler"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the purpose of context switching?",
        options: [
            "To allocate more memory to a process",
            "To save the state of one process and load another",
            "To increase CPU clock speed",
            "To manage disk partitions"
        ],
        answer: "To save the state of one process and load another"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which of the following is NOT part of the process context saved during a context switch?",
        options: [
            "Program counter",
            "CPU registers",
            "Process state",
            "Hard disk contents"
        ],
        answer: "Hard disk contents"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What happens to a process when it is in the New state?",
        options: [
            "It is being created",
            "It is executing",
            "It is waiting for I/O",
            "It has finished execution"
        ],
        answer: "It is being created"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Which state does a process enter after it has finished execution?",
        options: [
            "Ready",
            "Running",
            "Terminated",
            "Waiting"
        ],
        answer: "Terminated"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What is the main purpose of the process scheduler?",
        options: [
            "To allocate memory to processes",
            "To select which process runs next on the CPU",
            "To handle hardware interrupts",
            "To manage file systems"
        ],
        answer: "To select which process runs next on the CPU"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "Which of the following is a characteristic of short-term scheduling?",
        options: [
            "Occurs when a process is created",
            "Determines which jobs are brought into memory",
            "Selects from ready processes to execute next",
            "Manages processes waiting for I/O"
        ],
        answer: "Selects from ready processes to execute next"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is the primary difference between a program and a process?",
        options: [
            "A program is passive, a process is active",
            "A program uses more memory",
            "A process is stored on disk",
            "A program has a PCB"
        ],
        answer: "A program is passive, a process is active"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Which of the following would cause a process to move from Running to Ready state?",
        options: [
            "I/O request",
            "Process termination",
            "Time slice expiration",
            "Memory allocation"
        ],
        answer: "Time slice expiration"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What is stored in the text section of a process's memory?",
        options: [
            "Global variables",
            "Executable code",
            "Dynamic memory allocations",
            "Function call stack"
        ],
        answer: "Executable code"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Which of the following grows downward in memory?",
        options: [
            "Text section",
            "Data section",
            "Heap",
            "Stack"
        ],
        answer: "Stack"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "What prevents the stack and heap from overlapping in memory?",
        options: [
            "The compiler",
            "The operating system",
            "The CPU hardware",
            "The programmer"
        ],
        answer: "The operating system"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which component of the PCB contains information about memory allocation?",
        options: [
            "Process state",
            "Program counter",
            "Memory-management information",
            "Accounting information"
        ],
        answer: "Memory-management information"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What type of information is stored in the accounting field of a PCB?",
        options: [
            "CPU time used",
            "Program instructions",
            "I/O device details",
            "Stack pointers"
        ],
        answer: "CPU time used"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which of the following would be found in the I/O status information of a PCB?",
        options: [
            "List of open files",
            "Process priority",
            "Memory limits",
            "Program counter value"
        ],
        answer: "List of open files"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What happens when a process forks a new process?",
        options: [
            "The original process terminates",
            "A new PCB is created",
            "Memory is deallocated",
            "The CPU clock speed increases"
        ],
        answer: "A new PCB is created"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which scheduling queue would contain processes waiting for a child process to terminate?",
        options: [
            "Ready queue",
            "I/O queue",
            "Child termination queue",
            "Interrupt queue"
        ],
        answer: "Child termination queue"
    }
];