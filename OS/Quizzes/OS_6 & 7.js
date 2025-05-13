let question = [
    // CPU Scheduling (Lectures 6 & 7)
    {
        numb: 1,
        type: "CPU SCHD",
        question: "What is the primary role of the CPU scheduler?",
        options: [
            "To allocate memory to processes",
            "To select processes from the ready queue for CPU execution",
            "To manage file systems",
            "To handle hardware interrupts"
        ],
        answer: "To select processes from the ready queue for CPU execution"
    },
    {
        numb: 2,
        type: "CPU SCHD",
        question: "What is a context switch in CPU scheduling?",
        options: [
            "Changing the CPU's clock speed",
            "Switching between user and kernel modes",
            "Saving the state of one process and loading another",
            "Allocating more cache memory"
        ],
        answer: "Saving the state of one process and loading another"
    },
    {
        numb: 3,
        type: "CPU SCHD",
        question: "Which of the following is NOT stored in the PCB during a context switch?",
        options: [
            "Program counter",
            "CPU registers",
            "Process state",
            "Hard disk contents"
        ],
        answer: "Hard disk contents"
    },
    {
        numb: 4,
        type: "CPU SCHD",
        question: "What is the main disadvantage of context switching?",
        options: [
            "It reduces CPU utilization",
            "It increases memory fragmentation",
            "It is pure overhead (no useful work done)",
            "It corrupts the ready queue"
        ],
        answer: "It is pure overhead (no useful work done)"
    },
    {
        numb: 5,
        type: "CPU SCHD",
        question: "In CPU scheduling, what is a CPU burst?",
        options: [
            "A hardware failure",
            "A period when the process uses the CPU",
            "An I/O operation",
            "A cache miss"
        ],
        answer: "A period when the process uses the CPU"
    },
    {
        numb: 6,
        type: "CPU SCHD",
        question: "Which scheduling criterion measures the percentage of time the CPU is busy?",
        options: [
            "Throughput",
            "Turnaround time",
            "CPU utilization",
            "Response time"
        ],
        answer: "CPU utilization"
    },
    {
        numb: 7,
        type: "CPU SCHD",
        question: "What is the key characteristic of FCFS scheduling?",
        options: [
            "Prioritizes short jobs",
            "Processes are served in arrival order",
            "Uses dynamic time quanta",
            "Preempts running processes"
        ],
        answer: "Processes are served in arrival order"
    },
    {
        numb: 8,
        type: "CPU SCHD",
        question: "Which scheduling algorithm minimizes average waiting time by executing the shortest job next?",
        options: [
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First (SJF)",
            "Multilevel Queue"
        ],
        answer: "Shortest Job First (SJF)"
    },
    {
        numb: 9,
        type: "CPU SCHD",
        question: "What is the main drawback of SJF scheduling?",
        options: [
            "High context-switch overhead",
            "Difficulty in predicting burst times",
            "Starvation of long processes",
            "All of the above"
        ],
        answer: "All of the above"
    },
    {
        numb: 10,
        type: "CPU SCHD",
        question: "How does preemptive SJF (SRTF) differ from non-preemptive SJF?",
        options: [
            "It allows longer jobs to complete first",
            "It can interrupt a running job if a shorter job arrives",
            "It uses fixed time quanta",
            "It ignores burst times"
        ],
        answer: "It can interrupt a running job if a shorter job arrives"
    },
    {
        numb: 11,
        type: "CPU SCHD",
        question: "What is the primary advantage of Round Robin scheduling?",
        options: [
            "Minimizes average waiting time",
            "Ensures fairness among processes",
            "Prioritizes I/O-bound processes",
            "Eliminates context switches"
        ],
        answer: "Ensures fairness among processes"
    },
    {
        numb: 12,
        type: "CPU SCHD",
        question: "In Round Robin scheduling, what happens if the time quantum is too large?",
        options: [
            "It degenerates to FCFS",
            "Context switches increase",
            "Starvation occurs",
            "CPU utilization drops"
        ],
        answer: "It degenerates to FCFS"
    },
    {
        numb: 13,
        type: "CPU SCHD",
        question: "What is a major problem with priority scheduling?",
        options: [
            "High context-switch overhead",
            "Indefinite blocking (starvation) of low-priority processes",
            "Difficulty in setting priorities",
            "All of the above"
        ],
        answer: "Indefinite blocking (starvation) of low-priority processes"
    },
    {
        numb: 14,
        type: "CPU SCHD",
        question: "What is 'aging' in priority scheduling?",
        options: [
            "Reducing priority over time",
            "Gradually increasing priority of waiting processes",
            "Ignoring old processes",
            "A hardware failure mode"
        ],
        answer: "Gradually increasing priority of waiting processes"
    },
    {
        numb: 15,
        type: "CPU SCHD",
        question: "Which metric measures the time from process submission to completion?",
        options: [
            "Response time",
            "Waiting time",
            "Turnaround time",
            "Throughput"
        ],
        answer: "Turnaround time"
    },
    {
        numb: 16,
        type: "CPU SCHD",
        question: "What is dispatch latency?",
        options: [
            "Time to save a process state",
            "Time for the dispatcher to stop one process and start another",
            "Delay in I/O operations",
            "CPU idle time"
        ],
        answer: "Time for the dispatcher to stop one process and start another"
    },
    {
        numb: 17,
        type: "CPU SCHD",
        question: "Which scheduling algorithm combines priority and round-robin?",
        options: [
            "Multilevel Queue",
            "FCFS",
            "SRTF",
            "Priority with RR for equal-priority processes"
        ],
        answer: "Priority with RR for equal-priority processes"
    },
    {
        numb: 18,
        type: "CPU SCHD",
        question: "What is throughput in CPU scheduling?",
        options: [
            "CPU busy percentage",
            "Number of processes completed per unit time",
            "Average waiting time",
            "Time quantum size"
        ],
        answer: "Number of processes completed per unit time"
    },
    {
        numb: 19,
        type: "CPU SCHD",
        question: "Which process state transition occurs when a process is preempted?",
        options: [
            "Running → Ready",
            "Ready → Waiting",
            "New → Running",
            "Waiting → Terminated"
        ],
        answer: "Running → Ready"
    },
    {
        numb: 20,
        type: "CPU SCHD",
        question: "What is the main goal of multiprogramming in CPU scheduling?",
        options: [
            "To maximize CPU utilization",
            "To minimize memory usage",
            "To eliminate context switches",
            "To prioritize system processes"
        ],
        answer: "To maximize CPU utilization"
    },
    // Additional questions...
    {
        numb: 21,
        type: "CPU SCHD",
        question: "In a Gantt chart for FCFS, if P1 (burst=24) runs before P2 (burst=3), what is P2's waiting time?",
        options: [
            "0",
            "3",
            "24",
            "27"
        ],
        answer: "24"
    },
    {
        numb: 22,
        type: "CPU SCHD",
        question: "Which algorithm would choose Process B (burst=3) over Process A (burst=10) if both arrive simultaneously?",
        options: [
            "FCFS",
            "SJF",
            "Round Robin",
            "Priority (where A has higher priority)"
        ],
        answer: "SJF"
    },
    {
        numb: 23,
        type: "CPU SCHD",
        question: "What happens in SRTF when a new process arrives with a shorter burst than the remaining time of the running process?",
        options: [
            "The new process waits",
            "The running process is preempted",
            "Both processes share the CPU",
            "The scheduler ignores the new process"
        ],
        answer: "The running process is preempted"
    },
    {
        numb: 24,
        type: "CPU SCHD",
        question: "If the time quantum in Round Robin is set to 1ms and context-switch time is 0.1ms, what is the overhead percentage?",
        options: [
            "1%",
            "9%",
            "10%",
            "50%"
        ],
        answer: "9%"
    },
    {
        numb: 25,
        type: "CPU SCHD",
        question: "Which scheduling algorithm is most suitable for interactive systems?",
        options: [
            "FCFS",
            "SJF",
            "Round Robin",
            "Priority (without aging)"
        ],
        answer: "Round Robin"
    },
    {
        numb: 26,
        type: "CPU SCHD",
        question: "What is the primary purpose of a time quantum in Round Robin?",
        options: [
            "To prioritize I/O-bound processes",
            "To limit how long a process runs before being preempted",
            "To reduce context-switch overhead",
            "To calculate burst times"
        ],
        answer: "To limit how long a process runs before being preempted"
    },
    {
        numb: 27,
        type: "CPU SCHD",
        question: "Which of these is an example of an internally defined priority?",
        options: [
            "Process importance set by users",
            "Memory requirements of the process",
            "Department funding the process",
            "Political factors"
        ],
        answer: "Memory requirements of the process"
    },
    {
        numb: 28,
        type: "CPU SCHD",
        question: "In priority scheduling, what ensures low-priority processes eventually execute?",
        options: [
            "Time quanta",
            "Aging",
            "Non-preemption",
            "Fixed priorities"
        ],
        answer: "Aging"
    },
    {
        numb: 29,
        type: "CPU SCHD",
        question: "What metric is most critical for interactive systems?",
        options: [
            "Turnaround time",
            "Response time",
            "Throughput",
            "CPU utilization"
        ],
        answer: "Response time"
    },
    {
        numb: 30,
        type: "CPU SCHD",
        question: "Which scheduling algorithm is non-preemptive by default?",
        options: [
            "Round Robin",
            "SRTF",
            "FCFS",
            "Priority (with aging)"
        ],
        answer: "FCFS"
    }
];