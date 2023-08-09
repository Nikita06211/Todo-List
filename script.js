function updateList() {
    const input = document.getElementById("footerInput");
    const task = input.value.trim();
    if (task) {
      let taskIndex = parseInt(localStorage.getItem("taskIndex")) || 1;
      let taskKey = "task " + taskIndex;
  
      localStorage.setItem(taskKey, task);
      taskIndex++;
      localStorage.setItem("taskIndex", taskIndex);
  
      input.value = "";
      updateTaskList();
    }
  }
  
  function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
  
    // Create a grid container to hold the cards
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("card-grid"); // Add a class for styling
  
    for (let i = 0; i < parseInt(localStorage.getItem("taskIndex")) || 0; i++) {
      let taskKey = "task " + i;
      let task = localStorage.getItem(taskKey);
  
      if (task) {
        const div = document.createElement("div");
        div.classList.add("card", "text-bg-light", "shadow-lg", "p-3", "mb-5", "rounded");
  
        const div1 = document.createElement("div");
        div1.classList.add("card-header", "bg-transparent", "text-center");
        div1.textContent = "TASK";
  
        const div2 = document.createElement("div");
        div2.classList.add("card-body", "text-info");
  
        const h5 = document.createElement("h5");
        h5.classList.add("card-title", "text-center");
        h5.textContent = task;
        h5.style.color = "darkcyan";
        h5.style.fontFamily = "monospace";
  
        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-outline-info", "float-end");
        btn.textContent = "Delete";
        btn.style.backgroundColor = "darkcyan";
  
        btn.addEventListener("click", function() {
          localStorage.removeItem(taskKey);
          updateTaskList();
        });
  
        div2.appendChild(h5);
        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(btn);
  
        // Append the card to the grid container
        gridContainer.appendChild(div);
      }
    }
  
    // Append the grid container to the taskList
    taskList.appendChild(gridContainer);
  }
  
  updateTaskList();
  