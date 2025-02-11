const question = [
    {
        number: 1,type: "Multiple Choices",
        question: "Which of the following is true about abstract classes in Java?",
        options: [
            "A) They cannot have any methods.",
            "B) They cannot be instantiated.",
            "C) They must have at least one abstract method.",
            "D) They cannot be extended.",
        ],
        answer: "B) They cannot be instantiated.",
    },
    {
        number: 2,type: "Multiple Choices",
        question: "What is an abstract method?",
        options: [
            "A) A method that has no body and must be implemented by subclasses",
            "B) A method that has a body but can be overridden",
            "C) A method that cannot be overridden",
            "D) A method that is static",
        ],
        answer: "A) A method that has no body and must be implemented by subclasses",
    },
    {
        number: 3,type: "Multiple Choices",
        question: "Which of the following can be defined in an abstract class?",
        options: [
            "A) Only abstract methods",
            "B) Only concrete methods",
            "C) Both abstract and concrete methods",
            "D) Only fields"
        ],
        answer: "C) Both abstract and concrete methods"
    },
    {
        number: 4,type: "Multiple Choices",
        question: "Which OOP concept emphasizes the separation of an object’s interface from its implementation?",
        options: [
            "A) Inheritance",
            "B) Polymorphism",
            "C) Abstraction",
            "D) Encapsulation"
        ],
        answer: "C) Abstraction"
    },
    {
        number: 5,type: "Multiple Choices",
        question: "Which of the following statements about abstract classes is true?",
        options: [
            "A) An abstract class can be instantiated.",
            "B) An abstract class cannot be instantiated.",
            "C) An abstract class cannot have any methods.",
            "D) An abstract class must contain only abstract methods."
        ],
        answer: "B) An abstract class cannot be instantiated."
    },
    {
        number: 6,type: "Multiple Choices",
        question: "What keyword is used to define an abstract class in Java?",
        options: [
            "A) interface",
            "B) extends",
            "C) abstract",
            "D) implements"
        ],
        answer: "C) abstract"
    },
    {
        number: 7,type: "Multiple Choices",
        question: "What must a subclass do when it inherits an abstract class with abstract methods?",
        options: [
            "A) Nothing",
            "B) Override the abstract methods",
            "C) Instantiate the abstract class",
            "D) Define new methods"
        ],
        answer: "B) Override the abstract methods"
    },
    {
        number: 8,type: "Multiple Choices",
        question: "What is the syntax for defining an abstract method in Java?",
        options: [
            "A) public void methodName();",
            "B) public abstract void methodName();",
            "C) public abstract methodName();",
            "D) abstract public void methodName();"
        ],
        answer: "B) public abstract void methodName();"
    },
    {
        number: 9,type: "Multiple Choices",
        question: "What will happen if a subclass does not override an abstract method from its superclass?",
        options: [
            "A) The program will run with warnings.",
            "B) The program will compile but throw an exception at runtime.",
            "C) The program will fail to compile.",
            "D) The abstract method will be ignored."
        ],
        answer: "C) The program will fail to compile.",
    },
    {
        number: 10,type: "Multiple Choices",
        question: "Which of the following is not allowed in an abstract class?",
        options: [
            "A) Defining abstract methods",
            "B) Defining concrete methods",
            "C) Instantiating the abstract class",
            "D) Defining constructors"
        ],
        answer: "C) Instantiating the abstract class"
    },
    {
        number: 11,type: "Multiple Choices",
        question: "Which of the following statements about interfaces is true?",
        options: [
            "A) Interfaces can be instantiated.",
            "B) Interfaces can contain only abstract methods.",
            "C) A class can implement multiple interfaces.",
            "D) An interface can implement another interface."
        ],
        answer: "C) A class can implement multiple interfaces."
    },
    {
        number: 12,type: "Multiple Choices",
        question: "How do you define an interface in Java?",
        options: [
            "A) public class InterfaceName {}",
            "B) public interface InterfaceName {}",
            "C) public abstract class InterfaceName {}",
            "D) public implements InterfaceName {}"
        ],
        answer: "B) public interface InterfaceName {}"
    },
    {
        number: 13,type: "Multiple Choices",
        question: "What keyword is used to implement an interface in a class?",
        options: [
            "A) extends",
            "B) implements",
            "C) interface",
            "D) inherit"
        ],
        answer: "B) implements"
    },
    {
        number: 14,type: "Multiple Choices",
        question: "Which of the following can an interface contain?",
        options: [
            "A) Concrete methods",
            "B) Static methods with a body",
            "C) Abstract methods",
            "D) Both b and c"
        ],
        answer: "D) Both b and c"
    },
    {
        number: 15,type: "Multiple Choices",
        question: "If a class implements an interface, what must it do?",
        options: [
            "A) Define the methods declared in the interface",
            "B) Inherit the methods from the interface",
            "C) Instantiate the interface",
            "D) Override the interface itself"
        ],
        answer: "A) Define the methods declared in the interface"
    },
    {
        number: 16,type: "Multiple Choices",
        question: "Which of the following is true about fields in interfaces?",
        options: [
            "A) They are implicitly static and final.",
            "B) They can be private.",
            "C) They can be initialized in the interface.",
            "D) Both a and c"
        ],
        answer: "A) They are implicitly static and final."
    },
    {
        number: 17,type: "Multiple Choices",
        question: "What is the purpose of an interface in Java?",
        options: [
            "A) To provide default method implementations",
            "B) To specify behavior that other classes must implement form it",
            "C) To define a class hierarchy",
            "D) To instantiate objects"
        ],
        answer: "B) To specify behavior that other classes must implement form it"
    },
    {
        number: 18,type: "Multiple Choices",
        question: "Which of the following is the correct way to implement multiple interfaces in a class?",
        options: [
            "A) public class ClassName extends Interface1, Interface2",
            "B) public class ClassName implements Interface1, Interface2",
            "C) public class ClassName extends Interface1 implements Interface2",
            "D) public class ClassName implements Interface1 extends Interface2"
        ],
        answer: "B) public class ClassName implements Interface1, Interface2"
    },
    {
        number: 19,type: "Multiple Choices",
        question: "Which access modifier is allowed for methods in an interface?",
        options: [
            "A) private",
            "B) protected",
            "C) public",
            "D) Any access modifier"
        ],
        answer: "C) public"
    },
    {
        number: 20,type: "Multiple Choices",
        question: "When a class implements an interface, what must it do?",
        options: [
            "A) Implement all the methods declared in the interface",
            "B) Extend the interface",
            "C) Declare itself as abstract",
            "D) Provide a constructor matching the interface"
        ],
        answer: "A) Implement all the methods declared in the interface"
    },
    {
        number: 21,type: "Multiple Choices",
        question: "Which keyword is used to inherit an interface in another interface?",
        options: [
            "A) extends",
            "B) implements",
            "C) interface",
            "D) inherits"
        ],
        answer: "A) extends"
    },
    {
        number: 22,type: "Multiple Choices",
        question: "Which of the following is true about an interface with fields?",
        options: [
            "A) Fields in an interface are always static and final.",
            "B) Fields in an interface are always private.",
            "C) Fields in an interface are always protected.",
            "D) Fields in an interface can be changed."
        ],
        answer: "A) Fields in an interface are always static and final."
    },
    {
        number: 23,type: "Multiple Choices",
        question: "What is the term used for a class that provides concrete implementations for all abstract methods of an interface?",
        options: [
            "A) Abstract class",
            "B) Implementing class",
            "C) Extending class",
            "D) Superclass"
        ],
        answer: "B) Implementing class"
    },
    {
        number: 24,type: "Multiple Choices",
        question: "Which of the following is a valid interface declaration?",
        options: [
            "A) public interface Example { void method(); }",
            "B) public interface Example { public void method() {}; }",
            "C) public interface Example { private void method(); }",
            "D) public interface Example { protected void method(); }"
        ],
        answer: "A) public interface Example { void method(); }"
    },
    {
        number: 25,type: "Multiple Choices",
        question: "In Java, an interface can extend:",
        options: [
            "A) Multiple classes",
            "B) A single class",
            "C) Multiple interfaces",
            "D) A single interface"
        ],
        answer: "C) Multiple interfaces"
    },
    {
        number: 26,type: "Multiple Choices",
        question: "What is the purpose of an interface in Java?",
        options: [
            "A) To provide a way to inherit multiple classes",
            "B) To implement a concrete class",
            "C) To define a contract that must be followed by any implementing class",
            "D) To declare fields"
        ],
        answer: "C) To define a contract that must be followed by any implementing class"
    },
    {
        number: 27,type: "Multiple Choices",
        question: "What does the final keyword indicate when used with a class?",
        options: [
            "A) The class cannot have any fields.",
            "B) The class cannot be instantiated.",
            "C) The class cannot be inherited.",
            "D) The class cannot have methods."
        ],
        answer: "C) The class cannot be inherited."
    },
    {
        number: 28,type: "Multiple Choices",
        question: "Which keyword is used to define an interface in Java?",
        options: [
            "A) interface",
            "B) implements",
            "C) extends",
            "D) abstract"
        ],
        answer: "A) interface"
    },
    {
        number: 29,type: "Multiple Choices",
        question: "Can a class implement an interface partially and still compile in Java?",
        options: [
            "A) Yes, but the class must be declared abstract.",
            "B) Yes, but the class will generate a warning.",
            "C) No, a class must implement all methods declared in the interface.",
            "D) Yes, but the unimplemented methods will throw an exception."
        ],
        answer: "A) Yes, but the class must be declared abstract."
    },
    {
        number: 30,type: "Multiple Choices",
        question: "Which of the following statements about multiple inheritance in Java through interfaces is true?",
        options: [
            "A) Java does not support multiple inheritance through interfaces.",
            "B) A class can implement multiple interfaces and hence achieve multiple inheritance.",
            "C) A class can only implement one interface at a time.",
            "D) Interfaces cannot be used to achieve multiple inheritance."
        ],
        answer: "B) A class can implement multiple interfaces and hence achieve multiple inheritance."
    }
];