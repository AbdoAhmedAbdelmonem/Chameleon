let question = [
    // Multiple Choice Questions (MCQs)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary definition of shock?",
        options: [
            "A state of organ hypo-perfusion leading to cellular dysfunction",
            "A sudden increase in blood pressure",
            "A condition caused by excessive blood flow to tissues",
            "A type of allergic reaction"
        ],
        answer: "A state of organ hypo-perfusion leading to cellular dysfunction"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which of the following is the most common type of shock in emergency situations?",
        options: [
            "Cardiogenic shock",
            "Hypovolemic shock",
            "Anaphylactic shock",
            "Neurogenic shock"
        ],
        answer: "Hypovolemic shock"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is the main cause of cardiogenic shock?",
        options: [
            "Severe allergic reaction",
            "Failure of the heart to pump effectively",
            "Loss of blood volume",
            "Spinal cord injury"
        ],
        answer: "Failure of the heart to pump effectively"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which type of shock is caused by a severe allergic reaction?",
        options: [
            "Septic shock",
            "Anaphylactic shock",
            "Neurogenic shock",
            "Hypovolemic shock"
        ],
        answer: "Anaphylactic shock"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is a key symptom of hypovolemic shock?",
        options: [
            "Warm, dry skin",
            "Slow, strong pulse",
            "Rapid, weak pulse",
            "Increased blood pressure"
        ],
        answer: "Rapid, weak pulse"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which mnemonic is used to remember the signs and symptoms of shock?",
        options: [
            "ABCDE",
            "TVC ARCUBE",
            "RICE",
            "DRS ABC"
        ],
        answer: "TVC ARCUBE"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the first step in treating hypovolemic shock?",
        options: [
            "Elevate the feet slightly",
            "Give the victim fluids to drink",
            "Apply heat to the victim's body",
            "Massage the victim's limbs"
        ],
        answer: "Elevate the feet slightly"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "Which of the following is a sign of septic shock?",
        options: [
            "Hypothermia",
            "Fever (Hyperthermia)",
            "Slow, deep respirations",
            "High blood pressure"
        ],
        answer: "Fever (Hyperthermia)"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What should you avoid doing when treating a victim in shock?",
        options: [
            "Keeping the victim warm",
            "Elevating the victim's legs",
            "Giving the victim fluids to drink",
            "Loosening tight clothing"
        ],
        answer: "Giving the victim fluids to drink"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Which type of shock is characterized by widespread vasodilation due to histamine release?",
        options: [
            "Cardiogenic shock",
            "Anaphylactic shock",
            "Neurogenic shock",
            "Septic shock"
        ],
        answer: "Anaphylactic shock"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is a common symptom of neurogenic shock?",
        options: [
            "High blood pressure",
            "Loss of body temperature control",
            "Warm, dry skin",
            "Rapid, strong pulse"
        ],
        answer: "Loss of body temperature control"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which of the following is NOT a sign of shock?",
        options: [
            "Cool, moist skin",
            "Rapid and weak pulse",
            "Increased blood pressure",
            "Altered mental state"
        ],
        answer: "Increased blood pressure"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What is the primary goal of first aid for shock?",
        options: [
            "To restore blood volume and improve tissue perfusion",
            "To induce vomiting",
            "To lower the victim's body temperature",
            "To immobilize the victim completely"
        ],
        answer: "To restore blood volume and improve tissue perfusion"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which type of shock results from severe infection leading to organ failure?",
        options: [
            "Hypovolemic shock",
            "Septic shock",
            "Cardiogenic shock",
            "Neurogenic shock"
        ],
        answer: "Septic shock"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What should you do if a victim in shock has a head injury?",
        options: [
            "Elevate the feet slightly",
            "Keep the head lower than the body",
            "Avoid elevating the feet",
            "Give the victim fluids immediately"
        ],
        answer: "Avoid elevating the feet"
    },

    // True/False Questions (T/F)
    {
        numb: 16,
        type: "True/False",
        question: "Shock is a condition where there is adequate blood flow to the body's tissues.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 17,
        type: "True/False",
        question: "Hypovolemic shock is caused by excessive blood loss or fluid loss.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 18,
        type: "True/False",
        question: "Anaphylactic shock is caused by a severe allergic reaction and can lead to throat swelling.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 19,
        type: "True/False",
        question: "Neurogenic shock is caused by excessive blood volume.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 20,
        type: "True/False",
        question: "Septic shock is characterized by fever and widespread infection.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 21,
        type: "True/False",
        question: "Elevating the legs is contraindicated in cases of head injury.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 22,
        type: "True/False",
        question: "Giving fluids to a victim in shock is always recommended.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 23,
        type: "True/False",
        question: "Cool, moist skin is a common sign of shock.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 24,
        type: "True/False",
        question: "Cardiogenic shock occurs when the heart fails to pump blood effectively.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 25,
        type: "True/False",
        question: "The mnemonic 'TVC ARCUBE' is used to remember the signs of shock.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 26,
        type: "True/False",
        question: "Keeping the victim warm is not important in treating shock.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 27,
        type: "True/False",
        question: "Shock can lead to organ failure if not treated promptly.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 28,
        type: "True/False",
        question: "Neurogenic shock is caused by damage to the spinal cord.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 29,
        type: "True/False",
        question: "Rapid, strong pulse is a typical sign of shock.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 30,
        type: "True/False",
        question: "First aid for shock includes ensuring a patent airway.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    }
];