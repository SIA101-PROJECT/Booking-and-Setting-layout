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
    document.body.style.background = "#0f172a";
    document.body.style.color = "#fff";
  }
});
