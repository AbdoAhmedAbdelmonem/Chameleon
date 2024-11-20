let question = [
    {
        numb: 1,type: "Multiple Choices",
        question: "What is the primary goal of procedural programming?",
        answer: "C) To separate a program into small modules",
        options:[
            "A) To divide a program into objects",
            "B) To create a loop structure",
            "C) To separate a program into small modules",
            "D) To combine all code into one large module"
        ],
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "In procedural programming, what is a \"procedure call\"?",
        answer: "C) Locating specific tasks in procedures to be called by the main program",
        options:[
            "A) A function that ends the program",
            "B) A loop within the main program",
            "C) Locating specific tasks in procedures to be called by the main program",
            "D) An error handling routine"
        ],
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "Which approach to program design involves breaking the program into small modules using a top-down design?",
        answer: "C) Structured Programming",
        options:[
            "A) Object-Oriented Programming",
            "B) Procedural Programming",
            "C) Structured Programming",
            "D) Adaptive Software Development"
        ],
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is the main purpose of using variables in structured programming?",
        answer: "B) To store the current value of data items",
        options:[
            "A) To call external functions",
            "B) To store the current value of data items",
            "C) To create user interfaces",
            "D) To manage program flow"
        ],
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "In Object-Oriented Programming (OOP), what is an \"instance\"?",
        answer: "B) A specific object in a class",
        options:[
            "A) A group of objects",
            "B) A specific object in a class",
            "C) A method that performs an action",
            "D) An attribute of an object"
        ],
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "What describes an object's data in OOP?",
        answer: "C) Attributes",
        options:[
            "A) Methods",
            "B) Variables",
            "C) Attributes",
            "D) Classes"
        ],
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "What programming approach allows for functions to be developed and modified individually?",
        answer: "D) Aspect-Oriented Programming",
        options:[
            "A) Object-Oriented Programming",
            "B) Structured Programming",
            "C) Agile Software Development",
            "D) Aspect-Oriented Programming"
        ],
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "Which development methodology focuses on adapting the program as it is being written?",
        answer: "A) Adaptive Software Development",
        options:[
            "A) Adaptive Software Development",
            "B) Waterfall Development",
            "C) Structured Programming",
            "D) Procedural Programming"
        ],
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "What is the primary goal of Agile Software Development?",
        answer: "B) To create software quickly",
        options:[
            "A) To create software slowly and accurately",
            "B) To create software quickly",
            "C) To develop software in isolation",
            "D) To focus solely on the technical aspects of software"
        ],
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "What is the first phase of the Program Development Life Cycle (PDLC)?",
        answer: "A) Problem Analysis",
        options:[
            "A) Problem Analysis",
            "B) Program Design",
            "C) Coding",
            "D) Testing"
        ],
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "During the Problem Analysis phase of the PDLC, what is developed?",
        answer: "B) Program specifications",
        options:[
            "A) Program code",
            "B) Program specifications",
            "C) Final software package",
            "D) Debugging tools"
        ],
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "What is a flowchart used for in the Program Development Life Cycle?",
        answer: "B) To graphically depict the steps a computer program will take",
        options:[
            "A) To outline the logic of a program",
            "B) To graphically depict the steps a computer program will take",
            "C) To write code in a specific language",
            "D) To manage program variables"
        ],
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "What does pseudocode represent?",
        answer: "D) English-like statements outlining the logic of a program",
        options:[
            "B) Flowchart symbols",
            "B) Flowchart symbols",
            "C) Data storage format",
            "D) English-like statements outlining the logic of a program"
        ],
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "Which of the following is a control structure in programming?",
        answer: "C) Sequence Control Structure",
        options:[
            "A) Pseudocode",
            "B) Flowchart",
            "C) Sequence Control Structure",
            "D) UML Model"
        ],
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "What type of control structure repeats a series of statements until a particular condition is met?",
        answer: "C) Repetition Control Structure",
        options:[
            "A) Sequence Control Structure",
            "B) Selection Control Structure",
            "C) Repetition Control Structure",
            "D) Decision Control Structure"
        ],
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "What principle should be followed to avoid infinite loops in program design?",
        answer: "A) One-Entry-Point/One-Exit-Point Rule",
        options:[
            "A) One-Entry-Point/One-Exit-Point Rule",
            "B) Use GOTO statements",
            "C) Use flowcharts instead of pseudocode",
            "D) Avoid using variables"
        ],
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "What is the purpose of testing the design of a program?",
        answer: "B) To ensure the logic is correct",
        options:[
            "A) To finalize the program specifications",
            "B) To ensure the logic is correct",
            "C) To compile the program code",
            "D) To write the user manual"
        ],
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "What is a major consideration when choosing a programming language?",
        answer: "D) Suitability to the application",
        options:[
            "A) The operating system",
            "B) The popularity of the language",
            "C) The color of the code editor",
            "D) Suitability to the application"
        ],
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "What is source code?",
        answer: "C) The computer program before it is compiled",
        options:[
            "A) The final executable program",
            "B) The comments in a program",
            "C) The computer program before it is compiled",
            "D) The error messages generated during compilation"
        ],
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "What is the purpose of coding standards?",
        answer: "B) To standardize programming and make it easier to maintain",
        options:[
            "A) To make programs more difficult to read",
            "B) To standardize programming and make it easier to maintain",
            "C) To hide the logic from other programmers",
            "D) To ensure compatibility with older systems"
        ],
    },
    {
        numb: 21,type: "Multiple Choices",
        question: "What is reusable code?",
        answer: "A) Code segments that can be used multiple times with minor modifications",
        options:[
            "A) Code segments that can be used multiple times with minor modifications",
            "B) Code that is error-prone and needs frequent updates",
            "C) Code that is written in a low-level language",
            "D) Code that is specific to one platform"
        ],
    },
    {
        numb: 22,type: "Multiple Choices",
        question: "What is the process of ensuring a program is free of errors and works as intended?",
        answer: "B) Debugging",
        options:[
            "A) Coding",
            "B) Debugging",
            "C) Designing",
            "D) Documenting"
        ],
    },
    {
        numb: 23,type: "Multiple Choices",
        question: "What is a compiler?",
        answer: "A) A language translator that converts an entire program into machine language before executing it",
        options:[
            "A) A language translator that converts an entire program into machine language before executing it",
            "B) A tool used for drawing flowcharts",
            "C) A method to control program flow",
            "D) A type of programming language"
        ],
    },
    {
        numb: 24,type: "Multiple Choices",
        question: "What is the role of an interpreter?",
        answer: "C) It translates one line of code at a time",
        options:[
            "A) It compiles the entire program at once",
            "B) It converts assembly language into machine language",
            "C) It translates one line of code at a time",
            "D) It manages memory allocation"
        ],
    },
    {
        numb: 25,type: "Multiple Choices",
        question: "What is a run-time error?",
        answer: "B) An error that occurs when the program is running",
        options:[
            "A) An error in the source code that prevents compilation",
            "B) An error that occurs when the program is running",
            "C) A logic error that produces incorrect results",
            "D) An error in the flowchart"
        ],
    },
    {
        numb:26 ,type: "Multiple Choices",
        question: "What is an alpha test?",
        answer: "D) An internal on-site test",
        options:[
            "A) An external test conducted by users",
            "B) A test of the documentation quality",
            "C) A test of the flowchart logic",
            "D) An internal on-site test"
        ],
    },
    {
        numb: 27,type: "Multiple Choices",
        question: "What is the final phase of the Program Development Life Cycle?",
        answer: "C) Implementation and Maintenance",
        options:[
            "A) Coding",
            "B) Debugging",
            "C) Implementation and Maintenance",
            "D) Problem Analysis"
        ],
    },
    {
        numb: 28,type: "Multiple Choices",
        question: "What is Application Lifecycle Management (ALM)?",
        answer: "B) Tools for creating and managing an application during its entire lifecycle",
        options:[
            "A) A method for writing code",
            "B) Tools for creating and managing an application during its entire lifecycle",
            "C) A type of programming language",
            "D) A testing technique"
        ],
    },
    {
        numb: 29,type: "Multiple Choices",
        question: "What is the purpose of an Integrated Development Environment (IDE)?",
        answer: "D) To provide a set of programming tools for writing software applications",
        options:[
            "A) To create flowcharts",
            "B) To manage hardware resources",
            "C) To translate code into machine language",
            "D) To provide a set of programming tools for writing software applications"
        ],
    },
    {
        numb: 30,type: "Multiple Choices",
        question: "What is the role of an API in programming?",
        answer: "B) To help applications interface with a particular operating system",
        options:[
            "A) To create user interfaces",
            "B) To help applications interface with a particular operating system",
            "C) To manage program flow",
            "D) To test program code"
        ],
    },
    {
        numb: 31,type: "Multiple Choices",
        question: "What is machine language?",
        answer: "A) A language using 1s and 0s",
        options:[
            "A) A language using 1s and 0s",
            "B) A high-level programming language",
            "C) An object-oriented language",
            "D) A language designed for web development"
        ],
    },
    {
        numb: 32,type: "Multiple Choices",
        question: "Which generation of programming languages includes FORTRAN and COBOL?",
        answer: "C) Third generation",
        options:[
            "A) First generation",
            "B) Second generation",
            "C) Third generation",
            "D) Fourth generation"
        ],
    },
    {
        numb: 33,type: "Multiple Choices",
        question: "What is the main advantage of fourth-generation languages (4GLs)?",
        answer: "A) They are closer to natural languages and easier to work with",
        options:[
            "A) They are closer to natural languages and easier to work with",
            "B) They are faster to execute",
            "C) They require less memory",
            "D) They are machine-dependent"
        ],
    },
    {
        numb: 34,type: "Multiple Choices",
        question: "Which programming language is commonly used for scientific applications?",
        answer: "B) FORTRAN",
        options:[
            "A) COBOL",
            "B) FORTRAN",
            "C) BASIC",
            "D) Visual Basic"
        ],
    },
    {
        numb: 35,type: "Multiple Choices",
        question: "What is the main use of COBOL?",
        answer: "B) Business data processing",
        options:[
            "A) Web development",
            "B) Business data processing",
            "C) Graphic design",
            "D) Game development"
        ],
    },
    {
        numb: 36,type: "Multiple Choices",
        question: "What is a microprocessor?",
        answer: "C) The central processing unit (CPU) of a microcomputer",
        options:[
            "A) A high-level programming language",
            "B) A type of computer memory",
            "C) The central processing unit (CPU) of a microcomputer",
            "D) A tool used in software development"
        ],
    },
    {
        numb: 37,type: "Multiple Choices",
        question: "What is the function of an operating system?",
        answer: "B) To manage computer hardware and software resources",
        options:[
            "A) To provide a way to write code",
            "B) To manage computer hardware and software resources",
            "C) To connect to the internet",
            "D) To debug applications"
        ],
    },
    {
        numb: 38,type: "Multiple Choices",
        question: "What is a GUI?",
        answer: "B) Graphical User Interface",
        options:[
            "A) General User Instruction",
            "B) Graphical User Interface",
            "C) Global Utility Interface",
            "D) General Utility Interface"
        ],
    },
    {
        numb: 39,type: "Multiple Choices",
        question: "What is the purpose of system software?",
        answer: "D) All of the above",
        options:[
            "A) To run application software",
            "B) To manage system resources",
            "C) To provide security",
            "D) All of the above"
        ],
    },
    {
        numb: 40,type: "Multiple Choices",
        question: "What is the role of application software?",
        answer: "B) To perform specific tasks for users",
        options:[
            "A) To manage the computer’s hardware",
            "B) To perform specific tasks for users",
            "C) To connect to other computers",
            "D) To manage system security"
        ],
    },
    {
        numb: 41,type: "Multiple Choices",
        question: "What type of computer is known for handling large-scale data processing and transaction processing?",
        answer: "C) Mainframe",
        options:[
            "A) Microcomputer",
            "B) Minicomputer",
            "C) Mainframe",
            "D) Supercomputer"
        ],
    },
    {
        numb: 42,type: "Multiple Choices",
        question: "What is a supercomputer primarily used for?",
        answer: "C) Complex computations like weather forecasting",
        options:[
            "A) Business data processing",
            "B) General computing tasks",
            "C) Complex computations like weather forecasting",
            "D) Office applications"
        ],
    },
    {
        numb: 43,type: "Multiple Choices",
        question: "What is the primary function of a minicomputer?",
        answer: "D) Supporting small to medium-sized organizations",
        options:[
            "A) General business applications",
            "B) High-performance computing",
            "C) Handling bulk data processing",
            "D) Supporting small to medium-sized organizations"
        ],
    },
    {
        numb:44 ,type: "Multiple Choices",
        question: "What is another name for microcomputers?",
        answer: "D) Minicomputers",
        options:[
            "A) Mainframes",
            "B) Personal Computers (PCs)",
            "C) Supercomputers",
            "D) Minicomputers"
        ],
    },
    {
        numb: 45,type: "Multiple Choices",
        question: "Which of the following is a characteristic of mainframe computers?",
        answer: "C) Used for bulk data processing",
        options:[
            "A) High-level personal use",
            "B) Cost-effective for small businesses",
            "C) Used for bulk data processing",
            "D) Portable and lightweight"
        ],
    },
    {
        numb:46 ,type: "Multiple Choices",
        question: "What is the key feature of supercomputers?",
        answer: "B) High processing power for complex tasks",
        options:[
            "A) Portability",
            "B) High processing power for complex tasks",
            "C) General office applications",
            "D) Low cost"
        ],
    },
    {
        numb: 47,type: "Multiple Choices",
        question: "What is a central theme in the evolution of computing?",
        answer: "B) Transition from complex hardware to software-driven processes",
        options:[
            "A) Increased reliance on manual data entry",
            "B) Transition from complex hardware to software-driven processes",
            "C) Elimination of all forms of computers",
            "D) Focus on single-task machines"
        ],
    },
    {
        numb: 48,type: "Multiple Choices",
        question: "Which generation of computers is associated with microprocessors?",
        answer: "D) Fourth generation",
        options:[
            "A) First generation",
            "B) Second generation",
            "C) Third generation",
            "D) Fourth generation"
        ],
    },
    {
        numb: 49,type: "Multiple Choices",
        question: "Which of the following is a major function of an operating system?",
        answer: "A) Executing user applications",
        options:[
            "A) Executing user applications",
            "B) Writing code",
            "C) Managing web servers",
            "D) Handling graphics design"
        ],
    },
    {
        numb: 50,type: "Multiple Choices",
        question: "What is a significant trend in the evolution of software?",
        answer: "B) Increased focus on user-friendly interfaces",
        options:[
            "A) Decreased complexity",
            "B) Increased focus on user-friendly interfaces",
            "C) Focus on hardware development",
            "D) Standardization of code across all platforms"
        ],
    },
]
