// Define the data structures
let processes = [];
processes.push({ id: 1, priority: 5, arrivalTime: 0, executionTime: 10 });
processes.push({ id: 2, priority: 3, arrivalTime: 2, executionTime: 5 });
processes.push({ id: 3, priority: 1, arrivalTime: 5, executionTime: 8 });
// Add more processes as needed

let queues = [];

queues.push([]); // Add an empty queue for the highest priority processes
queues.push([]); // Add an empty queue for the next priority processes
queues.push([]); // Add an empty queue for the lowest priority processes
// Add the processes to the appropriate queues based on their priority
processes.forEach(function(process) {
  if (process.priority === 5) {
    queues[0].push(process);
  } else if (process.priority === 3) {
    queues[1].push(process);
  } else {
    queues[2].push(process);
  }
});

// Define the scheduling algorithm
// Example FCFS scheduling algorithm
function schedule() {
    // Check if there are any processes waiting in the first queue
    if (queues[0].length > 0) {
      // Select the first process in the queue
      let process = queues[0].shift();
      // Update the process state
      process.state = "running";
      // Execute the process for its burst time
      setTimeout(function() {
        // Update the process state
        process.state = "terminated";
        // Add the process to the list of completed processes
        completedProcesses.push(process);
      }, process.burstTime);
    }
  }
  

// Define the animation loop
function animate() {
    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the queues and processes
    queues.forEach(function(queue, index) {
      context.fillText("Queue " + index, 10, (index + 1) * 50);
      queue.forEach(function(process, i) {
        context.fillText(process.id, 50 + i * 50, (index + 1) * 50);
      });
    });
    processes.forEach(function(process) {
      context.fillText(process.id, process.x, process.y);
    });
  }
  
  // Define the animation loop interval
  let intervalId;
  
  // Add event listeners to the buttons
  document.getElementById("start").addEventListener("click", function() {
    // Start the simulation by running the animation loop
    intervalId = setInterval(function() {
      // Call the scheduling algorithm
      schedule();
      // Call the animation function
      animate();
    }, 1000);
  });
  
  document.getElementById("stop").addEventListener("click", function() {
    // Stop the simulation by pausing the animation loop
    clearInterval(intervalId);
  });
  
  document.getElementById("reset").addEventListener("click", function() {
    // Reset the simulation by clearing the canvas and data structures
    clearInterval(intervalId);
    context.clearRect(0, 0, canvas.width, canvas.height);
    processes = [];
    queues = [];
  });
  
