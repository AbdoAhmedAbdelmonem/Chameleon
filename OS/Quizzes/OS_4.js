let question= [
    // Lecture 4 (Cache Memory and Interrupts)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What type of memory is typically used for cache?",
        options: [
            "DRAM",
            "SRAM",
            "Flash",
            "ROM"
        ],
        answer: "SRAM"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Why is cache memory placed between the CPU and main memory?",
        options: [
            "To bridge the speed gap between CPU and RAM",
            "To increase storage capacity",
            "To reduce power consumption",
            "To provide permanent storage"
        ],
        answer: "To bridge the speed gap between CPU and RAM"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is it called when the CPU finds the data it needs in the cache?",
        options: [
            "Cache miss",
            "Cache overflow",
            "Cache hit",
            "Cache flush"
        ],
        answer: "Cache hit"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which cache level is typically the fastest?",
        options: [
            "L1",
            "L2",
            "L3",
            "All are equally fast"
        ],
        answer: "L1"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What problem occurs when multiple caches contain different values for the same memory location?",
        options: [
            "Cache overflow",
            "Cache coherence problem",
            "Cache fragmentation",
            "Cache starvation"
        ],
        answer: "Cache coherence problem"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "What is the correct order of memory speed from fastest to slowest?",
        options: [
            "Cache → Registers → RAM → HDD",
            "Registers → Cache → RAM → HDD",
            "RAM → Cache → Registers → HDD",
            "HDD → RAM → Cache → Registers"
        ],
        answer: "Registers → Cache → RAM → HDD"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the main component of a core in a microprocessor?",
        options: [
            "ALU, CU, Registers, Cache",
            "RAM, ROM, Cache, BUS",
            "HDD, SSD, Flash, EEPROM",
            "Interrupt controller, DMA, Timer"
        ],
        answer: "ALU, CU, Registers, Cache"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Why does cache memory typically fetch adjacent addresses along with the requested address?",
        options: [
            "To increase cache size",
            "To test memory reliability",
            "To balance power consumption",
            "Because of spatial locality principle",
        ],
        answer: "Because of spatial locality principle"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is an interrupt in computing?",
        options: [
            "A temporary break in program execution to handle urgent tasks",
            "A permanent system halt",
            "A type of memory error",
            "A cache management technique"
        ],
        answer: "A temporary break in program execution to handle urgent tasks"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What is the main advantage of interrupts over polling?",
        options: [
            "Higher memory usage",
            "More efficient CPU utilization",
            "Simpler hardware design",
            "Faster clock speeds"
        ],
        answer: "More efficient CPU utilization"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is stored in the interrupt vector table?",
        options: [
            "Memory addresses of interrupt service routines",
            "Cache coherence protocols",
            "CPU register values",
            "Disk storage locations"
        ],
        answer: "Memory addresses of interrupt service routines"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which type of interrupt cannot be disabled?",
        options: [
            "Maskable interrupt",
            "Timer interrupt",
            "Software interrupt",
            "Non-maskable interrupt",
        ],
        answer: "Non-maskable interrupt"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What happens during context switching when an interrupt occurs?",
        options: [
            "The cache is cleared",
            "The main memory is refreshed",
            "The processor state is saved before executing ISR",
            "The clock speed is increased"
        ],
        answer: "The processor state is saved before executing ISR"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which of these is a characteristic of a good Interrupt Service Routine (ISR)?",
        options: [
            "Short and fast execution",
            "Long execution time",
            "Contains blocking operations",
            "Disables all other interrupts permanently"
        ],
        answer: "Short and fast execution"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is interrupt nesting?",
        options: [
            "When interrupts are disabled completely",
            "When higher-priority interrupts can preempt lower-priority ISRs",
            "When multiple interrupts share the same ISR",
            "When interrupts are processed in batches"
        ],
        answer: "When higher-priority interrupts can preempt lower-priority ISRs"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "Which component is typically responsible for managing interrupt priorities?",
        options: [
            "ALU",
            "Cache memory",
            "Hard disk controller",
            "Interrupt controller",
        ],
        answer: "Interrupt controller"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is the purpose of masking interrupts?",
        options: [
            "To selectively disable certain interrupts",
            "To permanently disable all interrupts",
            "To increase interrupt processing speed",
            "To clear the interrupt vector table"
        ],
        answer: "To selectively disable certain interrupts"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "Which of these would typically trigger a non-maskable interrupt?",
        options: [
            "Keyboard input",
            "Mouse movement",
            "Power failure",
            "Network packet arrival"
        ],
        answer: "Power failure"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "What is the main difference between L1 and L2 cache?",
        options: [
            "L1 is smaller but faster than L2",
            "L1 is larger but slower than L2",
            "L1 uses DRAM while L2 uses SRAM",
            "There is no practical difference"
        ],
        answer: "L1 is smaller but faster than L2"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What happens when a cache miss occurs?",
        options: [
            "The system crashes",
            "The CPU stops executing instructions",
            "The required data is fetched from main memory",
            "The cache is cleared completely"
        ],
        answer: "The required data is fetched from main memory"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "Which of these is NOT a typical component of cache memory?",
        options: [
            "SRAM cells",
            "Cache controller",
            "Tag memory",
            "Floating gate transistors"
        ],
        answer: "Floating gate transistors"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "What is the primary purpose of a cache controller?",
        options: [
            "To manage data transfer between cache and main memory",
            "To execute arithmetic operations",
            "To handle interrupt requests",
            "To control power management"
        ],
        answer: "To manage data transfer between cache and main memory"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "Which technique helps maintain consistency between multiple caches?",
        options: [
            "Cache flushing",
            "Cache coherence protocols",
            "Interrupt masking",
            "Polling"
        ],
        answer: "Cache coherence protocols"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "What is the main disadvantage of SRAM compared to DRAM?",
        options: [
            "Slower access time",
            "Higher cost per bit",
            "Volatility",
            "Larger physical size"
        ],
        answer: "Higher cost per bit"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "Which of these would be a poor choice to implement in an ISR?",
        options: [
            "Setting a flag variable",
            "Reading a sensor value",
            "Performing complex calculations",
            "Incrementing a counter"
        ],
        answer: "Performing complex calculations"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "What is the purpose of the program counter during interrupt handling?",
        options: [
            "It stores the address to return to after the ISR",
            "It counts the number of interrupts",
            "It prioritizes interrupt requests",
            "It clears the cache"
        ],
        answer: "It stores the address to return to after the ISR"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "Which of these best describes the relationship between cache levels?",
        options: [
            "L1 is private to each core, L2/L3 may be shared",
            "All levels are shared equally by all cores",
            "L3 is the smallest and fastest",
            "There is typically only one cache level"
        ],
        answer: "L1 is private to each core, L2/L3 may be shared"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "What is the typical trigger for a maskable interrupt?",
        options: [
            "Hardware failure",
            "Timer expiration",
            "Power loss",
            "Memory corruption"
        ],
        answer: "Timer expiration"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "Why might a system disable interrupts during certain operations?",
        options: [
            "To prevent interrupt overload",
            "To protect critical sections of code",
            "To reduce power consumption",
            "To increase clock speed"
        ],
        answer: "To protect critical sections of code"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "What is the primary benefit of having multiple cache levels?",
        options: [
            "To provide redundancy in case of failure",
            "To simplify programming models",
            "To balance speed and size/cost tradeoffs",
            "To eliminate the need for main memory"
        ],
        answer: "To balance speed and size/cost tradeoffs"
    }
];