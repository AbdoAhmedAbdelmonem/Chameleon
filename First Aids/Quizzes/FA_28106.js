let question = [
    // Multiple Choice Questions (MCQs)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is a fracture?",
        options: [
            "A tear in a muscle",
            "A crack or break in a bone",
            "A dislocation of a joint",
            "A sprain of a ligament"
        ],
        answer: "A crack or break in a bone"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which type of fracture involves an open wound where the bone pierces the skin?",
        options: [
            "Closed fracture",
            "Greenstick fracture",
            "Compound fracture",
            "Comminuted fracture"
        ],
        answer: "Compound fracture"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is the primary purpose of splinting a fracture?",
        options: [
            "To heal the bone faster",
            "To prevent movement and further injury",
            "To reduce pain permanently",
            "To replace the bone into its correct position"
        ],
        answer: "To prevent movement and further injury"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which of the following is a symptom of a fracture?",
        options: [
            "Mild itching",
            "Severe pain and swelling",
            "Increased joint flexibility",
            "Warmth without tenderness"
        ],
        answer: "Severe pain and swelling"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What should you do first when treating a closed fracture?",
        options: [
            "Straighten the broken bone",
            "Apply heat to the area",
            "Assess for life-threatening conditions like bleeding",
            "Massage the injured area"
        ],
        answer: "Assess for life-threatening conditions like bleeding"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of the following is NOT a type of joint?",
        options: [
            "Hinge joint",
            "Ball and socket joint",
            "Tendon joint",
            "Pivot joint"
        ],
        answer: "Tendon joint"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the correct first aid for a sprain?",
        options: [
            "Apply heat immediately",
            "Use the RICE method (Rest, Ice, Compression, Elevation)",
            "Move the joint vigorously to prevent stiffness",
            "Massage the area to reduce swelling"
        ],
        answer: "Use the RICE method (Rest, Ice, Compression, Elevation)"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What is a dislocation?",
        options: [
            "A break in the bone",
            "A tear in a ligament",
            "A bone out of its normal joint position",
            "A muscle strain"
        ],
        answer: "A bone out of its normal joint position"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Which of the following should you avoid when treating a fracture?",
        options: [
            "Immobilizing the injured area",
            "Giving the victim food or drink",
            "Elevating the injured limb",
            "Covering an open wound with a sterile dressing"
        ],
        answer: "Giving the victim food or drink"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What is crepitus in the context of a fracture?",
        options: [
            "A type of splint",
            "A grating sensation or sound from broken bone ends",
            "A symptom of shock",
            "A method of reducing swelling"
        ],
        answer: "A grating sensation or sound from broken bone ends"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "Which of the following is a common cause of fractures in older adults?",
        options: [
            "Osteoporosis",
            "Excessive exercise",
            "High protein diet",
            "Lack of sunlight"
        ],
        answer: "Osteoporosis"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What should you do if you suspect a spinal fracture?",
        options: [
            "Move the victim immediately to a comfortable position",
            "Keep the victim still and support the head/neck",
            "Massage the spine to relieve pain",
            "Ask the victim to sit up slowly"
        ],
        answer: "Keep the victim still and support the head/neck"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "Which of the following is a sign of shock in a fracture victim?",
        options: [
            "Warm, dry skin",
            "Rapid, strong pulse",
            "Cold, clammy skin",
            "High blood pressure"
        ],
        answer: "Cold, clammy skin"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "What is the first step in the RICE procedure for sprains?",
        options: [
            "Apply compression",
            "Rest the injured part",
            "Elevate the limb",
            "Apply ice"
        ],
        answer: "Rest the injured part"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "Which bone is most likely to be affected in a dislocated shoulder?",
        options: [
            "Femur",
            "Humerus",
            "Tibia",
            "Radius"
        ],
        answer: "Humerus"
    },

    // True/False Questions (T/F)
    {
        numb: 16,
        type: "True/False",
        question: "A closed fracture does not break the skin.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 17,
        type: "True/False",
        question: "You should try to realign a dislocated bone back into its socket.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 18,
        type: "True/False",
        question: "Swelling and deformity are common signs of a fracture.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 19,
        type: "True/False",
        question: "Applying ice directly to the skin is recommended for fracture pain relief.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 20,
        type: "True/False",
        question: "All fractures require surgical intervention.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 21,
        type: "True/False",
        question: "A strain involves the stretching or tearing of a muscle or tendon.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 22,
        type: "True/False",
        question: "Crepitus refers to the sound of bones rubbing together in a fracture.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 23,
        type: "True/False",
        question: "Elevating a fractured limb can help reduce swelling.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 24,
        type: "True/False",
        question: "Osteoporosis increases the risk of fractures.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 25,
        type: "True/False",
        question: "Massaging the area of a fracture can help speed up healing.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 26,
        type: "True/False",
        question: "A sprain involves the tearing of ligaments at a joint.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 27,
        type: "True/False",
        question: "You should remove rings or bracelets from an injured limb to prevent complications from swelling.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 28,
        type: "True/False",
        question: "Shock is a potential complication of severe fractures.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 29,
        type: "True/False",
        question: "The RICE method is used for treating fractures.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 30,
        type: "True/False",
        question: "A greenstick fracture is common in children due to their flexible bones.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    }
];