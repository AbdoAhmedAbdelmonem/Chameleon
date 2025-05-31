let question = [
    {
        numb: 1,
        type: "Multiple Choices",
        question: "If Genetic Algorithms were a reality TV show based on survival, Darwin's Principle of Natural Selection would be the main rule. What's the tagline for that rule? 📺",
        options: [
            "Everyone gets a trophy.",
            "Randomly pick the winner.",
            "Select The Best, Discard The Rest.",
            "The oldest contestant wins."
        ],
        answer: "Select The Best, Discard The Rest."
        // Concept: Basic idea of Natural Selection [cite: 6, 54]
    },
    {
        numb: 2,
        type: "Multiple Choices",
        question: "Imagine GAs are master impersonators. Which fundamental biological process are they expertly mimicking? 🎭",
        options: [
            "Photosynthesis",
            "Digestion",
            "Evolution",
            "Hibernation"
        ],
        answer: "Evolution"
        // Concept: GA definition [cite: 4, 52]
    },
    {
        numb: 3,
        type: "Multiple Choices",
        question: "In our GA 'simulation of life,' what's the term for a single candidate solution, representing its unique genetic makeup? 🧬",
        options: [
            "A habitat",
            "A species",
            "A chromosome",
            "An ecosystem"
        ],
        answer: "A chromosome"
        // Concept: Chromosome definition [cite: 14, 62]
    },
    {
        numb: 4,
        type: "Multiple Choices",
        question: "If a 'chromosome' in a GA is like a complex blueprint for a solution, what are the individual sections or specifications within that blueprint called? 📜",
        options: [
            "Mutations",
            "Genes",
            "Populations",
            "Fitness scores"
        ],
        answer: "Genes"
        // Concept: Chromosome structure [cite: 14, 62]
    },
    {
        numb: 5,
        type: "Multiple Choices",
        question: "To kickstart our GA's evolutionary journey for any given problem, what two essential components MUST we define first? 🛠️",
        options: [
            "The programming language and the hardware.",
            "A mutation rate and a population size.",
            "A genetic representation of solutions and a fitness function.",
            "The desired outcome and the number of generations."
        ],
        answer: "A genetic representation of solutions and a fitness function."
        // Concept: GA Requirements [cite: 16, 64]
    },
    {
        numb: 6,
        type: "Multiple Choices",
        question: "Think of the 'fitness function' as the strict judge in our GA's 'survival of the fittest' competition. What is its primary duty? ⚖️",
        options: [
            "To randomly select solutions for mating.",
            "To create new chromosomes through crossover.",
            "To measure the quality of a represented solution.",
            "To introduce mutations into the population."
        ],
        answer: "To measure the quality of a represented solution."
        // Concept: Fitness function purpose [cite: 20, 68]
    },
    {
        numb: 7,
        type: "Multiple Choices",
        question: "When we perform 'selection' in GAs, deciding who gets to 'pass on their genes,' what fundamental principle are we applying from natural selection? 🌱",
        options: [
            "Ensuring all solutions reproduce equally.",
            "Favoring solutions with better fitness to contribute to the next generation.",
            "Introducing entirely new random solutions.",
            "Stopping the algorithm if a perfect solution isn't found quickly."
        ],
        answer: "Favoring solutions with better fitness to contribute to the next generation."
        // Concept: Selection mechanism [cite: 27, 75]
    },
    {
        numb: 8,
        type: "Multiple Choices",
        question: "The 'crossover' operator in GAs is like a genetic matchmaking service. What's its main goal when creating new 'offspring' solutions? 💑",
        options: [
            "To make exact copies of the best parent solutions.",
            "To introduce small, random changes within a single solution.",
            "To combine parts of two parent solutions to form new solutions.",
            "To eliminate the weakest solutions from the population."
        ],
        answer: "To combine parts of two parent solutions to form new solutions."
        // Concept: Crossover operator [cite: 14, 28, 62, 81]
    },
    {
        numb: 9,
        type: "Multiple Choices",
        question: "What is the key role of the 'mutation' operator, especially considering it introduces random alterations to a chromosome's genes? 🎲",
        options: [
            "To ensure only the fittest solutions survive.",
            "To combine traits from two parents.",
            "To maintain genetic diversity and explore new solution areas.",
            "To always improve a solution's fitness."
        ],
        answer: "To maintain genetic diversity and explore new solution areas."
        // Concept: Mutation operator [cite: 14, 30, 62, 82]
    },
    {
        numb: 10,
        type: "Multiple Choices",
        question: "Remember our giraffe example? If 'slightly longer necks' started as a random genetic change, this shows that mutations can sometimes be...? 🦒",
        options: [
            "Always harmful",
            "Completely predictable",
            "Beneficial for survival and propagation",
            "Only occurring in plants"
        ],
        answer: "Beneficial for survival and propagation"
        // Concept: Beneficial mutations [cite: 9, 10, 57, 58]
    },
    {
        numb: 11,
        type: "Multiple Choices",
        question: "When designing the 'genetic makeup' (representation) for our solutions, why is a fixed-size structure often preferred, particularly for the crossover operation? 🤔",
        options: [
            "It guarantees finding the optimal solution faster.",
            "It makes the fitness function easier to define.",
            "Its parts are easily aligned, simplifying crossover.",
            "It prevents any mutations from occurring."
        ],
        answer: "Its parts are easily aligned, simplifying crossover."
        // Concept: Representation properties [cite: 17, 65]
    },
    {
        numb: 12,
        type: "Multiple Choices",
        question: "Genetic Algorithms are not just a random walk in the park; they are sophisticated techniques. This makes them a powerful approach for which kind of tasks? 🧠",
        options: [
            "Simple data entry",
            "Manual record keeping",
            "Search and optimization",
            "Basic arithmetic calculations"
        ],
        answer: "Search and optimization"
        // Concept: GA as search/optimization technique [cite: 4, 52]
    },
    {
        numb: 13,
        type: "Multiple Choices",
        question: "If our GA diligently searches and finds a 'pretty good' solution, but not necessarily the absolute best one possible, it might have settled in a...? 🏞️",
        options: [
            "Global optimum",
            "Guaranteed perfect solution",
            "Sub-optimal solution / local minimum",
            "Fitness landscape peak"
        ],
        answer: "Sub-optimal solution / local minimum"
        // Concept: Limitation - local minimum [cite: 47, 95]
    },
    {
        numb: 14,
        type: "Multiple Choices",
        question: "One of the hurdles in using GAs is that not every real-world problem can be easily translated into the GA framework. This points to which inherent limitation? 🧩",
        options: [
            "GAs are too slow for modern computers.",
            "Not all problems can be effectively put into a GA formulation.",
            "GAs only work for problems with visual solutions.",
            "GAs require perfect, noise-free data."
        ],
        answer: "Not all problems can be effectively put into a GA formulation."
        // Concept: Limitation - formulation difficulty [cite: 47, 95]
    },
    {
        numb: 15,
        type: "Multiple Choices",
        question: "The whole iterative GA process – evaluating, selecting, crossing over, and mutating – is fundamentally driving the population towards what goal regarding the solutions? 🏆",
        options: [
            "Increasing randomness",
            "Achieving better (higher fitness) solutions over generations",
            "Maintaining a static population",
            "Simplifying the problem"
        ],
        answer: "Achieving better (higher fitness) solutions over generations"
        // Concept: Optimization goal
    },
    {
        numb: 16,
        type: "Multiple Choices",
        question: "In the grand evolutionary play staged by a GA, what does the 'initial population' essentially represent? 🎬",
        options: [
            "The final, optimal solutions.",
            "The set of rules for genetic operators.",
            "The first generation of randomly generated or seeded candidate solutions.",
            "The fitness criteria for the problem."
        ],
        answer: "The first generation of randomly generated or seeded candidate solutions."
        // Concept: Initialization [cite: 23, 71]
    },
    {
        numb: 17,
        type: "Multiple Choices",
        question: "If a GA is employed for 'inductive learning,' such as discovering rules from data, it's essentially applying its evolutionary toolkit to what kind of task? 📚",
        options: [
            "Database administration",
            "Network routing optimization",
            "Supervised or unsupervised data mining tasks",
            "Real-time system control"
        ],
        answer: "Supervised or unsupervised data mining tasks"
        // Concept: Genetic learning operators context [cite: 32, 80]
    },
    {
        numb: 18,
        type: "Multiple Choices",
        question: "While typical GAs might use string-like chromosomes, if our solutions were represented as complex, branching structures, we'd be venturing into the territory of...? 🌳",
        options: [
            "Standard bit-string GAs",
            "Real-number GAs",
            "Genetic Programming",
            "Permutation-based GAs"
        ],
        answer: "Genetic Programming"
        // Concept: Tree-like representations in Genetic Programming [cite: 19, 67]
    },
    {
        numb: 19,
        type: "Multiple Choices",
        question: "A common misconception! Does a Genetic Algorithm always, without fail, find the absolute best (global optimal) solution to a problem? 🎯",
        options: [
            "Yes, it's mathematically guaranteed.",
            "No, it does not guarantee an optimal solution and can settle for sub-optimal ones.",
            "Yes, but only if the population size is extremely large.",
            "No, because it doesn't use a fitness function."
        ],
        answer: "No, it does not guarantee an optimal solution and can settle for sub-optimal ones."
        // Concept: Limitation - no guarantee of optimality [cite: 47, 95]
    },
    {
        numb: 20,
        type: "Multiple Choices",
        question: "What key trait makes Genetic Algorithms effective across varied fields like scheduling, engineering design, and behavior simulation? 🚀",
        options: [
            "Simple, linear problems with few variables.",
            "Problems requiring strict adherence to predefined rules.",
            "Complex optimization and search problems.",
            "Tasks that need exact, analytical solutions."
        ],
        answer: "Complex optimization and search problems."
        // Concept: Application scope and problem type [cite: 48, 96]
    }
]