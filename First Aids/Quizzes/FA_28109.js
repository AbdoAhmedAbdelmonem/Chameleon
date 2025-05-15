let question = [
    // Multiple Choice Questions (MCQs)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the medical term for low blood sugar?",
        options: [
            "Hyperglycemia",
            "Hypoglycemia",
            "Ketoacidosis",
            "Polydipsia"
        ],
        answer: "Hypoglycemia"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Which of the following is NOT one of the 'three Ps' of diabetes symptoms?",
        options: [
            "Polyuria",
            "Polydipsia",
            "Polyphagia",
            "Polyneuropathy"
        ],
        answer: "Polyneuropathy"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is the normal range for fasting blood glucose?",
        options: [
            "50-70 mg/dL",
            "70-110 mg/dL",
            "120-150 mg/dL",
            "160-200 mg/dL"
        ],
        answer: "70-110 mg/dL"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "Which type of diabetes is characterized by destruction of beta cells in the pancreas?",
        options: [
            "Type 1 Diabetes",
            "Type 2 Diabetes",
            "Gestational Diabetes",
            "Prediabetes"
        ],
        answer: "Type 1 Diabetes"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "What is a common cause of hypoglycemia?",
        options: [
            "Eating too much sugar",
            "Taking too much insulin",
            "Drinking too much water",
            "Lack of exercise"
        ],
        answer: "Taking too much insulin"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Which of the following is a symptom of hypoglycemia?",
        options: [
            "Fruity breath odor",
            "Cold, clammy skin",
            "Extreme thirst",
            "Slow wound healing"
        ],
        answer: "Cold, clammy skin"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the primary treatment for conscious hypoglycemia?",
        options: [
            "Insulin injection",
            "Sugar-free fluids",
            "Fast-acting carbohydrates",
            "Protein-rich foods"
        ],
        answer: "Fast-acting carbohydrates"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "What does DKA stand for?",
        options: [
            "Diabetic Kidney Assessment",
            "Diabetic Ketoacidosis",
            "Diabetes Knowledge Application",
            "Diabetic Ketone Absorption"
        ],
        answer: "Diabetic Ketoacidosis"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "Which of the following is a symptom of hyperglycemia?",
        options: [
            "Shakiness",
            "Frequent urination",
            "Sweating",
            "Hunger"
        ],
        answer: "Frequent urination"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "What should you do for an unconscious person with suspected hypoglycemia?",
        options: [
            "Give them orange juice",
            "Place them in recovery position and call for help",
            "Administer insulin",
            "Have them walk around"
        ],
        answer: "Place them in recovery position and call for help"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is a characteristic breath odor in DKA?",
        options: [
            "Garlic-like",
            "Fruity",
            "Metallic",
            "No odor"
        ],
        answer: "Fruity"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Which of the following can trigger DKA?",
        options: [
            "Missed insulin doses",
            "Drinking too much water",
            "Eating too many vegetables",
            "Getting too much sleep"
        ],
        answer: "Missed insulin doses"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What is the first step in managing any diabetic emergency?",
        options: [
            "Give insulin immediately",
            "Follow emergency action principles",
            "Have the person exercise",
            "Wait to see if symptoms improve"
        ],
        answer: "Follow emergency action principles"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "Which of the following should a person with diabetes carry for emergency hypoglycemia treatment?",
        options: [
            "Insulin syringes",
            "Glucose tablets",
            "Blood pressure medication",
            "Antibiotics"
        ],
        answer: "Glucose tablets"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is a recommended position for an unconscious diabetic person?",
        options: [
            "Sitting upright",
            "Lateral recumbent position",
            "Standing position",
            "Prone position"
        ],
        answer: "Lateral recumbent position"
    },

    // True/False Questions (T/F)
    {
        numb: 16,
        type: "True/False",
        question: "Type 2 diabetes is always insulin-dependent.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 17,
        type: "True/False",
        question: "Hypoglycemia can be caused by skipping meals.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 18,
        type: "True/False",
        question: "The 'three Ps' of diabetes are polyuria, polydipsia, and polyphagia.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 19,
        type: "True/False",
        question: "You should give food or drink to an unconscious person with hypoglycemia.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 20,
        type: "True/False",
        question: "DKA is more common in Type 2 diabetes than Type 1.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 21,
        type: "True/False",
        question: "Cold, clammy skin is a sign of hyperglycemia.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 22,
        type: "True/False",
        question: "People with diabetes should wear medical identification.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 23,
        type: "True/False",
        question: "Exercise can cause hypoglycemia if not properly managed.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 24,
        type: "True/False",
        question: "Hyperglycemia develops more quickly than hypoglycemia.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 25,
        type: "True/False",
        question: "Fruity breath odor is a sign of hypoglycemia.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 26,
        type: "True/False",
        question: "The treatment for conscious hypoglycemia is fast-acting sugar.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 27,
        type: "True/False",
        question: "DKA is characterized by low blood sugar levels.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 28,
        type: "True/False",
        question: "Type 1 diabetes typically develops in adulthood.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 29,
        type: "True/False",
        question: "Shakiness and confusion are signs of hypoglycemia.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 30,
        type: "True/False",
        question: "For hyperglycemia, you should give sugary drinks immediately.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    }
];