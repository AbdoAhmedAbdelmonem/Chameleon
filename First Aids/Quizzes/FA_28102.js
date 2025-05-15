let question = [
    // Multiple Choice Questions (MCQs)
    {
        numb: 1,
        type: "Multiple Choices",
        question: "What is the primary goal of CPR?",
        options: [
            "To diagnose heart conditions",
            "To restart the heart and support life",
            "To replace professional medical care",
            "To perform surgery"
        ],
        answer: "To restart the heart and support life"
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "What are the two main components of CPR?",
        options: [
            "Bandaging and splinting",
            "Chest compressions and rescue breaths",
            "Medication administration and defibrillation",
            "Injection and oxygen therapy"
        ],
        answer: "Chest compressions and rescue breaths"
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "What is the correct compression-to-breath ratio for adult CPR?",
        options: [
            "15 compressions to 2 breaths",
            "30 compressions to 2 breaths",
            "5 compressions to 1 breath",
            "10 compressions to 1 breath"
        ],
        answer: "30 compressions to 2 breaths"
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "What is the first step in the DRS ABC sequence?",
        options: [
            "Check for response",
            "Call for help",
            "Check for danger",
            "Check airways"
        ],
        answer: "Check for danger"
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "Where should you place your hands for chest compressions?",
        options: [
            "On the victim's abdomen",
            "On the victim's left side",
            "On the lower half of the breastbone (sternum)",
            "On the victim's back"
        ],
        answer: "On the lower half of the breastbone (sternum)"
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "What is the recommended rate for chest compressions per minute?",
        options: [
            "60-80 compressions",
            "80-100 compressions",
            "100-120 compressions",
            "120-140 compressions"
        ],
        answer: "100-120 compressions"
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "What is the correct depth for chest compressions in adults?",
        options: [
            "1-2 cm",
            "3-4 cm",
            "5-6 cm",
            "7-8 cm"
        ],
        answer: "5-6 cm"
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "When should you stop performing CPR?",
        options: [
            "When you get tired",
            "When the victim starts breathing normally",
            "When a defibrillator is ready to use",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is compression-only CPR?",
        options: [
            "CPR without rescue breaths",
            "CPR without chest compressions",
            "CPR using only mouth-to-mouth",
            "CPR using only a defibrillator"
        ],
        answer: "CPR without rescue breaths"
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "How long should each rescue breath last?",
        options: [
            "5 seconds",
            "2 seconds",
            "1 second",
            "10 seconds"
        ],
        answer: "1 second"
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "What is the purpose of tilting the victim's head back during rescue breaths?",
        options: [
            "To make them more comfortable",
            "To open the airway",
            "To check for pulse",
            "To prevent vomiting"
        ],
        answer: "To open the airway"
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "What is a sign of cardiopulmonary arrest in the nervous system?",
        options: [
            "Pupil constriction",
            "Increased consciousness",
            "Pupil dilation",
            "Normal reflexes"
        ],
        answer: "Pupil dilation"
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "What should you do if the victim's chest does not rise during rescue breaths?",
        options: [
            "Give up and wait for help",
            "Increase the force of your breaths",
            "Re-tilt the head and try again",
            "Skip rescue breaths and focus on compressions"
        ],
        answer: "Re-tilt the head and try again"
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "When should a defibrillator be used?",
        options: [
            "Only by medical professionals",
            "Immediately when available",
            "After 10 minutes of CPR",
            "Never during CPR"
        ],
        answer: "Immediately when available"
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "What is the first thing to check in the emergency action sequence?",
        options: [
            "Level of responsiveness",
            "Safety of the environment",
            "Airway",
            "Breathing"
        ],
        answer: "Safety of the environment"
    },

    // True/False Questions (T/F)
    {
        numb: 16,
        type: "True/False",
        question: "CPR can prevent brain damage by maintaining blood circulation.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 17,
        type: "True/False",
        question: "The correct hand position for chest compressions is on the upper half of the sternum.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 18,
        type: "True/False",
        question: "You should lean on the victim's chest between compressions to maintain pressure.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 19,
        type: "True/False",
        question: "Rescue breaths should last for about one second each.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 20,
        type: "True/False",
        question: "Compression-only CPR is not effective and should never be used.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 21,
        type: "True/False",
        question: "The first step in CPR is to check for responsiveness.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 22,
        type: "True/False",
        question: "You should stop CPR as soon as the victim shows any sign of movement.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 23,
        type: "True/False",
        question: "The correct compression depth for adults is 5-6 cm.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 24,
        type: "True/False",
        question: "You should perform CPR even if the scene is unsafe.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 25,
        type: "True/False",
        question: "The DRS ABC sequence starts with checking the airway.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 26,
        type: "True/False",
        question: "Brain damage becomes irreversible after 8-10 minutes of cardiopulmonary arrest.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 27,
        type: "True/False",
        question: "You should pinch the victim's nose shut when giving rescue breaths.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    },
    {
        numb: 28,
        type: "True/False",
        question: "CPR is only effective when performed by medical professionals.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 29,
        type: "True/False",
        question: "The correct rate for chest compressions is 60-80 per minute.",
        options: [
            "True",
            "False"
        ],
        answer: "False"
    },
    {
        numb: 30,
        type: "True/False",
        question: "A defibrillator should be used as soon as it becomes available.",
        options: [
            "True",
            "False"
        ],
        answer: "True"
    }
];