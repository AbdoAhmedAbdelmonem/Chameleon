let question = [
    {
        numb: 1,type: "Multiple Choices",
        question: "Which relationship allows one object instance to cause another to perform an action on its behalf?",
        answer: "B) Association",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 2,type: "Multiple Choices",
        question: "Which of the following best describes aggregation?",
        answer: "B) A 'has-a' relationship with independent lifecycle",
        options: [
            "A) A 'uses-a' relationship with strong ownership",
            "B) A 'has-a' relationship with independent lifecycle",
            "C) A 'is-a' relationship with weak ownership",
            "D) A 'part-of' relationship with dependent lifecycle"
        ]
    },
    {
        numb: 3,type: "Multiple Choices",
        question: "In which relationship is the lifecycle of the contained object strictly dependent on the container object?",
        answer: "D) Composition",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 4,type: "Multiple Choices",
        question: "What is the primary difference between aggregation and composition?",
        answer: "C) Aggregation allows the contained object to exist independently, while composition does not.",
        options: [
            "A) Aggregation implies ownership, while composition does not.",
            "B) Composition allows shared ownership, while aggregation does not.",
            "C) Aggregation allows the contained object to exist independently, while composition does not.",
            "D) Composition implies a 'uses-a' relationship, while aggregation does not."
        ]
    },
    {
        numb: 5,type: "Multiple Choices",
        question: "Which of the following is true about association?",
        answer: "C) It allows one object to use another without implying ownership.",
        options: [
            "A) It always involves a bidirectional relationship.",
            "B) It defines a 'has-a' relationship with strict ownership.",
            "C) It allows one object to use another without implying ownership.",
            "D) It always requires the use of inheritance."
        ]
    },
    {
        numb: 6,type: "Multiple Choices",
        question: "What type of relationship is depicted when a 'Car' class has an 'Engine' class instance and the engine cannot exist without the car?",
        answer: "C) Composition",
        options: [
            "A) Association",
            "B) Aggregation",
            "C) Composition",
            "D) Inheritance"
        ]
    },
    {
        numb: 7,type: "Multiple Choices",
        question: "Which relationship is demonstrated by the statement 'A department has professors'?",
        answer: "C) Aggregation",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 8,type: "Multiple Choices",
        question: "In the context of object-oriented programming, what does a 'uses-a' relationship imply?",
        answer: "D) Association",
        options: [
            "A) Aggregation",
            "B) Composition",
            "C) Inheritance",
            "D) Association"
        ]
    },
    {
        numb: 9,type: "Multiple Choices",
        question: "If a 'Person' class contains a reference to a 'Lawyer' class, what type of relationship is this an example of?",
        answer: "D) Association",
        options: [
            "A) Composition",
            "B) Inheritance",
            "C) Aggregation",
            "D) Association"
        ]
    },
    {
        numb: 10,type: "Multiple Choices",
        question: "Which relationship is the weakest form of a 'has-a' relationship?",
        answer: "C) Aggregation",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 11,type: "Multiple Choices",
        question: "What keyword is commonly used in Java to denote an inheritance relationship?",
        answer: "A) extends",
        options: [
            "A) extends",
            "B) implements",
            "C) includes",
            "D) uses"
        ]
    },
    {
        numb: 12,type: "Multiple Choices",
        question: "In which relationship can the contained object exist independently of the container object?",
        answer: "C) Aggregation",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 13,type: "Multiple Choices",
        question: "Which of the following is NOT true about composition?",
        answer: "D) It allows the contained object to be shared among multiple containers.",
        options: [
            "A) It implies strong ownership.",
            "B) The contained object cannot exist independently.",
            "C) It defines a 'part-of' relationship.",
            "D) It allows the contained object to be shared among multiple containers."
        ]
    },
    {
        numb: 14,type: "Multiple Choices",
        question: "Which relationship is depicted by the statement 'A student has an address'?",
        answer: "D) Composition",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 15,type: "Multiple Choices",
        question: "What type of relationship is demonstrated by the statement 'A customer purchases a book'?",
        answer: "B) Association",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 16,type: "Multiple Choices",
        question: "Which of the following best describes composition?",
        answer: "B) A 'has-a' relationship with dependent lifecycle.",
        options: [
            "A) A 'has-a' relationship where the parts can exist independently.",
            "B) A 'has-a' relationship with dependent lifecycle.",
            "C) A 'uses-a' relationship with strong ownership.",
            "D) A 'is-a' relationship with weak ownership."
        ]
    },
    {
        numb: 17,type: "Multiple Choices",
        question: "What type of relationship is depicted when a 'House' class has a 'Room' class instance and the room cannot exist without the house?",
        answer: "C) Composition",
        options: [
            "A) Association",
            "B) Aggregation",
            "C) Composition",
            "D) Inheritance"
        ]
    },
    {
        numb: 18,type: "Multiple Choices",
        question: "Which relationship is demonstrated by the statement 'A company has employees'?",
        answer: "C) Aggregation",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 19,type: "Multiple Choices",
        question: "In which relationship is one class considered a part of another class?",
        answer: "D) Composition",
        options: [
            "A) Inheritance",
            "B) Association",
            "C) Aggregation",
            "D) Composition"
        ]
    },
    {
        numb: 20,type: "Multiple Choices",
        question: "If an 'Order' class contains a reference to a 'Product' class and the product can exist without the order, what type of relationship is this?",
        answer: "B) Aggregation",
        options: [
            "A) Association",
            "B) Aggregation",
            "C) Composition",
            "D) Inheritance"
        ]
    },
];