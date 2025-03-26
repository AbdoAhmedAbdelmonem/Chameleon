let question = [
    //
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What are the three types of buses in a processor system?",
        options: [
            "Data, Address, Control",
            "Input, Output, Processing",
            "Serial, Parallel, Hybrid",
            "Primary, Secondary, Cache"
        ],
        answer: "Data, Address, Control"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which bus determines the memory location for read/write operations?",
        options: [
            "Data Bus",
            "Address Bus",
            "Control Bus",
            "System Bus"
        ],
        answer: "Address Bus"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What are the three main categories of memory?",
        options: [
            "Volatile, Non-Volatile, Hybrid",
            "RAM, ROM, Cache",
            "SRAM, DRAM, Flash",
            "Primary, Secondary, Virtual"
        ],
        answer: "Volatile, Non-Volatile, Hybrid"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which type of RAM uses capacitors to store data?",
        options: [
            "SRAM",
            "NVRAM",
            "Flash",
            "DRAM",
        ],
        answer: "DRAM"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is the main problem with DRAM that requires a refresh circuit?",
        options: [
            "Capacitors lose charge over time",
            "Transistors overheat",
            "Flip-flops reset randomly",
            "Address lines degrade"
        ],
        answer: "Capacitors lose charge over time"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which memory type uses flip-flops to store data?",
        options: [
            "DRAM",
            "SRAM",
            "PROM",
            "EPROM"
        ],
        answer: "SRAM"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the main advantage of SRAM over DRAM?",
        options: [
            "Lower cost",
            "Higher density",
            "Faster access",
            "Smaller physical size"
        ],
        answer: "Faster access"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which component has higher priority for memory access in DRAM systems?",
        options: [
            "Refreshment Circuit",
            "CPU",
            "GPU",
            "I/O Controller"
        ],
        answer: "Refreshment Circuit"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What does a D Flip-Flop store?",
        options: [
            "One byte of data",
            "One bit of data",
            "One word of data",
            "One memory address"
        ],
        answer: "One bit of data"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "When does a D Flip-Flop update its stored value?",
        options: [
            "Continuously",
            "When power is applied",
            "Only at clock edges",
            "During refresh cycles"
        ],
        answer: "Only at clock edges"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which type of ROM can be programmed only once at the factory?",
        options: [
            "Mask Programmable ROM",
            "EPROM",
            "PROM",
            "E²PROM"
        ],
        answer: "Mask Programmable ROM"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What technology is commonly used in non-volatile memory like Flash?",
        options: [
            "Bipolar Transistors",
            "Capacitors",
            "Floating Gate MOSFETs",
            "Resistors"
        ],
        answer: "Floating Gate MOSFETs"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "How is data erased in EPROM?",
        options: [
            "Using ultraviolet light",
            "Using electricity",
            "Using magnetic fields",
            "By heating the chip"
        ],
        answer: "Using ultraviolet light"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What is the main disadvantage of EPROM?",
        options: [
            "High power consumption",
            "Slow access time",
            "Large physical size",
            "Susceptibility to radiation",
        ],
        answer: "Susceptibility to radiation"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Which type of ROM uses fuses that can be burned by the user?",
        options: [
            "Mask ROM",
            "PROM",
            "EPROM",
            "E²PROM"
        ],
        answer: "PROM"
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "What does E²PROM stand for?",
        options: [
            "Electrically Erasable Programmable ROM",
            "Enhanced Erasable Programmable ROM",
            "Extended Erasable Programmable ROM",
            "Embedded Erasable Programmable ROM"
        ],
        answer: "Electrically Erasable Programmable ROM"
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "What is the access method for E²PROM?",
        options: [
            "Block access",
            "Byte access",
            "Word access",
            "Page access"
        ],
        answer: "Byte access"
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "What is the typical Maximum endurance of E²PROM until our current time?",
        options: [
            "1,000 cycles",
            "1,000,000 cycles",
            "100,000 cycles",
            "10,000 cycles",
        ],
        answer: "1,000,000 cycles"
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "Which hybrid memory type offers block-level access?",
        options: [
            "E²PROM",
            "Flash",
            "NVRAM",
            "SRAM"
        ],
        answer: "Flash"
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What is the main advantage of Flash memory over E²PROM?",
        options: [
            "Lower cost per bit",
            "Higher endurance",
            "Byte-level access",
            "Faster erase times"
        ],
        answer: "Lower cost per bit"
    },
    {
        numb: 21,
        type: "Multiple Choices",
        question: "What is the typical Minimum endurance of Flash memory?",
        options: [
            "1,000 cycles",
            "10,000 cycles",
            "100,000 cycles",
            "1,000,000 cycles"
        ],
        answer: "10,000 cycles"
    },
    {
        numb: 22,
        type: "Multiple Choices",
        question: "What is NVRAM typically composed of?",
        options: [
            "DRAM + Battery",
            "Flash + Capacitor",
            "SRAM + Battery",
            "ROM + Transistor"
        ],
        answer: "SRAM + Battery"
    },
    {
        numb: 23,
        type: "Multiple Choices",
        question: "What is the main advantage of NVRAM?",
        options: [
            "Non-volatile RAM",
            "High density",
            "Low cost",
            "Slow access time"
        ],
        answer: "Non-volatile RAM"
    },
    {
        numb: 24,
        type: "Multiple Choices",
        question: "Which memory type would be most suitable for BIOS chips?",
        options: [
            "DRAM",
            "SRAM",
            "Flash",
            "Mask Programmable ROM",
        ],
        answer: "Mask Programmable ROM"
    },
    {
        numb: 25,
        type: "Multiple Choices",
        question: "What happens to data in DRAM when power is removed?",
        options: [
            "It is saved to flash",
            "It is lost",
            "It is retained indefinitely",
            "It is compressed"
        ],
        answer: "It is lost"
    },
    {
        numb: 26,
        type: "Multiple Choices",
        question: "Which memory type is commonly used in SSDs?",
        options: [
            "DRAM",
            "SRAM",
            "Flash",
            "EPROM"
        ],
        answer: "Flash"
    },
    {
        numb: 27,
        type: "Multiple Choices",
        question: "What is the main disadvantage of SRAM?",
        options: [
            "High cost",
            "Slow speed",
            "Volatility",
            "Large physical size"
        ],
        answer: "High cost"
    },
    {
        numb: 28,
        type: "Multiple Choices",
        question: "Which memory type is typically used for CPU caches?",
        options: [
            "DRAM",
            "SRAM",
            "Flash",
            "EPROM"
        ],
        answer: "SRAM"
    },
    {
        numb: 29,
        type: "Multiple Choices",
        question: "What determines whether a MOSFET in ROM conducts current?",
        options: [
            "The charge on the floating gate",
            "The temperature of the chip",
            "The clock speed",
            "The voltage on the data bus"
        ],
        answer: "The charge on the floating gate"
    },
    {
        numb: 30,
        type: "Multiple Choices",
        question: "Which memory type combines the speed of RAM with the persistence of ROM?",
        options: [
            "DRAM",
            "SRAM",
            "PROM",
            "NVRAM",
        ],
        answer: "NVRAM"
    }
];