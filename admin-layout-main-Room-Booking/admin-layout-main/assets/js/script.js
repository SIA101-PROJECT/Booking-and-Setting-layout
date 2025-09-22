   
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const bodyContainer = document.querySelector('.body-container');
    sidebar.classList.toggle('collapsed');
    bodyContainer.classList.toggle('collapsed');
    }
const appearanceSelect = document.querySelector("select");

appearanceSelect.addEventListener("change", (e) => {
  if (e.target.value === "Light") {
    document.body.style.background = "#f8fafc";
    document.body.style.color = "#000";
  } else {
    document.body.style.background = "#1a1d47";
    document.body.style.color = "#fff";
  }
});

document.querySelector(".filters input")?.addEventListener("keyup", function() {
  let filter = this.value.toLowerCase();
  let rows = document.querySelectorAll("#booking-table tbody tr");
  
  rows.forEach(row => {
    let text = row.textContent.toLowerCase();
    row.style.display = text.includes(filter) ? "" : "none";
  });
});

document.querySelector(".filters select")?.addEventListener("change", function() {
  let selected = this.value.toLowerCase();
  let rows = document.querySelectorAll("#booking-table tbody tr");

  rows.forEach(row => {
    let status = row.querySelector("td:nth-child(7)")?.textContent.toLowerCase();
    if (selected === "all" || status.includes(selected)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});


  