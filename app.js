const navButtons = document.querySelectorAll("[data-view]");
const views = {
  operation: document.getElementById("operationView"),
  director: document.getElementById("directorView"),
  ceo: document.getElementById("ceoView")
};
const titles = {
  operation: "院舍電子白板 Dashboard",
  director: "Professional Dashboard",
  ceo: "KPI Dashboard"
};

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    Object.values(views).forEach(view => view.classList.remove("active"));
    const selected = button.dataset.view;
    views[selected].classList.add("active");
    document.getElementById("viewTitle").textContent = titles[selected];
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelectorAll(".tabs button").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tabs button").forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
  });
});

document.getElementById("refreshBtn").addEventListener("click", () => {
  const button = document.getElementById("refreshBtn");
  button.textContent = "更新中…";
  button.disabled = true;
  setTimeout(() => {
    const now = new Date();
    document.getElementById("updatedAt").textContent =
      new Intl.DateTimeFormat("zh-HK", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(now);
    button.textContent = "⟳ 重新整理";
    button.disabled = false;
  }, 600);
});
