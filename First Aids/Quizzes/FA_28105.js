let question = [
    // Multiple Choice Questions (MCQs)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "Which layer of the skin is affected in a first-degree burn?",
        options: [
            "Epidermis only",
            "Dermis and subcutaneous tissue",
            "Muscle layer",
            "All skin layers"
        ],
        answer: "Epidermis only"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "What is the primary cause of a thermal burn?",
        options: [
            "Exposure to chemicals",
            "Contact with hot objects or liquids",
            "Electric shock",
            "Radiation from X-rays"
        ],
        answer: "Contact with hot objects or liquids"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "Which of the following is a characteristic of a third-degree burn?",
        options: [
            "Pain and redness",
            "Blisters and swelling",
            "Destruction of full skin thickness",
            "Hyperesthesia (tingling)"
        ],
        answer: "Destruction of full skin thickness"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "What is the first step in treating a chemical burn?",
        options: [
            "Apply ointment",
            "Flush with water for 20 minutes",
            "Cover with a bandage",
            "Break blisters"
        ],
        answer: "Flush with water for 20 minutes"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "According to the 'Rule of Nines,' what percentage is assigned to each arm in an adult?",
        options: [
            "9%",
            "18%",
            "4.5%",
            "36%"
        ],
        answer: "9%"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of the following should NOT be applied to a burn?",
        options: [
            "Cold water",
            "Sterile bandage",
            "Butter or ointments",
            "Aloe vera gel"
        ],
        answer: "Butter or ointments"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is a key complication of severe burns?",
        options: [
            "Improved mobility",
            "Shock due to fluid loss",
            "Decreased pain sensitivity",
            "Faster healing"
        ],
        answer: "Shock due to fluid loss"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "How should you cool a thermal burn?",
        options: [
            "Apply ice directly",
            "Use running cold water for 10 minutes",
            "Cover with a warm blanket",
            "Rub the burned area"
        ],
        answer: "Use running cold water for 10 minutes"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Which type of burn requires immediate hospitalization regardless of size?",
        options: [
            "First-degree sunburn",
            "Second-degree burn on the leg",
            "Third-degree burn",
            "Small chemical burn"
        ],
        answer: "Third-degree burn"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What should you do if someone's clothes catch fire?",
        options: [
            "Pour water on them",
            "Roll them on the ground",
            "Run to get help",
            "Cover them with a plastic sheet"
        ],
        answer: "Roll them on the ground"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which of the following is a sign of an electrical burn?",
        options: [
            "Visible skin damage only",
            "Internal damage (e.g., cardiac arrest)",
            "Mild redness and itching",
            "No risk of complications"
        ],
        answer: "Internal damage (e.g., cardiac arrest)"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What is the primary goal of burn first aid?",
        options: [
            "To pop blisters for faster healing",
            "To prevent infection and relieve pain",
            "To apply heat to the burned area",
            "To ignore minor burns"
        ],
        answer: "To prevent infection and relieve pain"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Which of the following burns requires rinsing for at least 20 minutes?",
        options: [
            "Thermal burn",
            "Chemical burn",
            "Sunburn",
            "Electrical burn"
        ],
        answer: "Chemical burn"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What should you do for a sunburn?",
        options: [
            "Apply hot compresses",
            "Drink warm fluids",
            "Use aloe vera gel",
            "Scratch the affected area"
        ],
        answer: "Use aloe vera gel"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Which body part burned would require immediate medical attention?",
        options: [
            "Back (large area)",
            "Face",
            "Lower leg (small area)",
            "Upper arm (minor burn)"
        ],
        answer: "Face"
    },

    // True/False Questions (T/F)
    {
        numb: 16,
        type: "True/False",
        question: "First-degree burns are the most severe type of burn.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 17,
        type: "True/False",
        question: "The 'Rule of Nines' is used to estimate the extent of burns.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 18,
        type: "True/False",
        question: "You should break blisters to relieve pain in a second-degree burn.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 19,
        type: "True/False",
        question: "Electrical burns always show visible damage on the skin.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 20,
        type: "True/False",
        question: "Cold water should be used to cool a thermal burn for at least 10 minutes.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 21,
        type: "True/False",
        question: "Chemical burns require immediate flushing with water for 5 minutes.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 22,
        type: "True/False",
        question: "Third-degree burns are often painless due to nerve damage.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 23,
        type: "True/False",
        question: "Sunburn can only occur on sunny days.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 24,
        type: "True/False",
        question: "For electrical burns, you should immediately touch the victim to pull them away from the power source.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 25,
        type: "True/False",
        question: "Applying butter to a burn helps soothe the pain.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 26,
        type: "True/False",
        question: "A second-degree burn involves blisters and partial-thickness skin damage.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 27,
        type: "True/False",
        question: "Inhalation injury is a potential complication of burns.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 28,
        type: "True/False",
        question: "For chemical burns to the eyes, rinse for at least 10-15 minutes.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 29,
        type: "True/False",
        question: "All burns require professional medical treatment.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 30,
        type: "True/False",
        question: "Shock is a common complication of severe burns due to fluid loss.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    }
];
