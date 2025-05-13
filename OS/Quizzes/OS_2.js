let question = [
    // Lecture 2 (Computing Systems and Processors)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What are the three main components of any computing system?",
        options: [
            "Processor, Memory, I/O",
            "CPU, GPU, DSP",
            "ALU, CU, RF",
            "Hardware, OS, Applications"
        ],
        answer: "Processor, Memory, I/O"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which type of computing system can run multiple applications on the same hardware?",
        options: [
            "Specific purpose",
            "Embedded system",
            "BareMetal system",
            "General purpose",
        ],
        answer: "General purpose"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is an example of a specific purpose computing system?",
        options: [
            "Laptop",
            "Smartphone",
            "Refrigerator",
            "Server"
        ],
        answer: "Refrigerator"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "What does MPU stand for?",
        options: [
            "Microprocessor Unit",
            "Memory Processing Unit",
            "Main Processing Unit",
            "Multiprocessor Unit"
        ],
        answer: "Microprocessor Unit"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What replaced vacuum tubes in modern processors?",
        options: [
            "Capacitors",
            "Resistors",
            "Diodes",
            "Transistors",
        ],
        answer: "Transistors"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which processor is considered the 'master' in a computing system?",
        options: [
            "GPU",
            "CPU",
            "DSP",
            "MCU"
        ],
        answer: "CPU"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the difference between MPU and MCU?",
        options: [
            "MPU is faster than MCU",
            "MPU is used only in specific purpose systems",
            "MCU includes processor, memory and I/O on a single chip",
            "MCU doesn't have memory"
        ],
        answer: "MCU includes processor, memory and I/O on a single chip"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which secondary processor specializes in graphics operations?",
        options: [
            "DSP",
            "GPU",
            "MCU",
            "ALU"
        ],
        answer: "GPU"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the purpose of a DSP?",
        options: [
            "Perform complex computations",
            "Handle graphics rendering",
            "Manage system memory",
            "Control I/O devices"
        ],
        answer: "Perform complex computations"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What are the three main components inside a microprocessor?",
        options: [
            "CPU, GPU, DSP",
            "Processor, Memory, I/O",
            "ALU, CU, RF",
            "ROM, RAM, Cache",
        ],
        answer: "ALU, CU, RF"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What does ALU stand for?",
        options: [
            "Arithmetic and Logic Unit",
            "Address and Location Unit",
            "Application and Load Unit",
            "Advanced Logic Unit"
        ],
        answer: "Arithmetic and Logic Unit"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What is the name for a high-performance MCU that includes GPU and DSP?",
        options: [
            "MPU",
            "SoC (System on Chip)",
            "CPU",
            "FPU"
        ],
        answer: "SoC (System on Chip)"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Which type of software runs directly on hardware without an OS?",
        options: [
            "OS Applications",
            "Embedded Linux",
            "Android Apps",
            "BareMetal SW",
        ],
        answer: "BareMetal SW"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What is an example of a system that uses BareMetal software?",
        options: [
            "Arduino kit",
            "Android smartphone",
            "Linux server",
            "Windows PC"
        ],
        answer: "Arduino kit"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "How many ECUs (Electronic Control Units) might a car contain?",
        options: [
            "1-5",
            "10-20",
            "At least 200",
            "Only 1 main ECU"
        ],
        answer: "At least 200"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What are the three main stages of the instruction life cycle?",
        options: [
            "Load, Run, Stop",
            "Fetch, Decode, Execute",
            "Read, Process, Write",
            "Start, Process, End"
        ],
        answer: "Fetch, Decode, Execute"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "Which component fetches instructions from memory?",
        options: [
            "CU (Control Unit)",
            "ALU",
            "Register Files",
            "GPU"
        ],
        answer: "CU (Control Unit)"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What happens to the program counter after an instruction is fetched?",
        options: [
            "It resets to zero",
            "It decrements by 1",
            "It becomes invalid",
            "It increments by 1",
        ],
        answer: "It increments by 1"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Where is the fetched instruction temporarily stored?",
        options: [
            "Accumulator",
            "Instruction Register (IR)",
            "Program Counter",
            "Memory Buffer"
        ],
        answer: "Instruction Register (IR)"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What two pieces of information are needed to decode an instruction?",
        options: [
            "Instruction Set and Format",
            "CPU speed and memory size",
            "Register size and bus width",
            "Op-code and operand only"
        ],
        answer: "Instruction Set and Format"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "Where are the results of ALU operations typically stored?",
        options: [
            "In main memory",
            "In cache memory",
            "In register files",
            "In I/O buffers"
        ],
        answer: "In register files"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "Why do different microprocessors require different assembly languages?",
        options: [
            "Because they have different clock speeds",
            "Because they use different voltages",
            "Because they have different instruction sets",
            "Because they have different physical sizes"
        ],
        answer: "Because they have different instruction sets"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What are the two main types of Instruction Set Architecture (ISA)?",
        options: [
            "32-bit and 64-bit",
            "RISC and CISC",
            "Harvard and Von Neumann",
            "Serial and Parallel"
        ],
        answer: "RISC and CISC"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Which ISA type typically has fewer instructions but requires a stronger compiler?",
        options: [
            "CISC",
            "RISC",
            "Both require equally strong compilers",
            "Neither requires a compiler"
        ],
        answer: "RISC"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Where is the Instruction Decoder (ID) typically found?",
        options: [
            "In the ALU",
            "In the Control Unit (CU)",
            "In register files",
            "In cache memory"
        ],
        answer: "In the Control Unit (CU)"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which manufacturing method for Instruction Decoders is faster but more expensive?",
        options: [
            "Memory-Mapped",
            "Both are equally fast",
            "Neither is used in modern processors",
            "Hard-Wired",
        ],
        answer: "Hard-Wired"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "Which type of ISA is more commonly used in embedded systems?",
        options: [
            "CISC",
            "RISC",
            "Both equally",
            "Neither"
        ],
        answer: "RISC"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "What is the advantage of CISC architecture?",
        options: [
            "Requires less complex compilers",
            "Has fewer instructions",
            "Is cheaper to manufacture",
            "Uses less power"
        ],
        answer: "Requires less complex compilers"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "How does a Memory-Mapped Instruction Decoder work?",
        options: [
            "Through logic gates",
            "Through parallel processing",
            "Using quantum computing",
            "By searching for instructions in memory",
        ],
        answer: "By searching for instructions in memory"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Why is RISC often preferred for embedded systems?",
        options: [
            "It needs fewer instructions",
            "It requires more instructions",
            "It's more expensive",
            "It's slower"
        ],
        answer: "It needs fewer instructions"
    }
];