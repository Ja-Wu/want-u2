let processes = [];
processes.push({ id: 1, priority: 5, arrivalTime: 0, executionTime: 10 });
processes.push({ id: 2, priority: 3, arrivalTime: 2, executionTime: 5 });
processes.push({ id: 3, priority: 1, arrivalTime: 8, executionTime: 8 });
processes.push({ id: 4, priority: 1, arrivalTime: 5, executionTime: 4 });
processes.forEach(pro => {console.log(pro)})

time = 1;
while(processes.length > 0){
    min_prio = 100;
    to_execute = 0;
    for(let i=0; i<processes.length; i++){
        pr = processes[i];
        if(pr.arrivalTime < time){
            if(pr.priority < min_prio){
                min_prio = pr.priority;
                to_execute = i;
            }
        }
    }
    processes[to_execute].executionTime--;
    if(processes[to_execute].executionTime == 0){
        console.log(processes[to_execute].id + " finished")
        processes.splice(to_execute, 1);
    }
    time++;
}