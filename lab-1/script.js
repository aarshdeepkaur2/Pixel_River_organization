document.addEventListener("DOMContentLoaded", () => {
    const directorySection = document.querySelector(".directory");
  
    for (let dept in employees) {
      const deptDiv = document.createElement("div");
      deptDiv.classList.add("department");
  
      const deptHeader = document.createElement("h4");
      deptHeader.textContent = dept;
      deptDiv.appendChild(deptHeader);
  
      const ul = document.createElement("ul");
      employees[dept].forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
      });
  
      deptDiv.appendChild(ul);
      directorySection.appendChild(deptDiv);
    }
  
    // Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();
  });
  