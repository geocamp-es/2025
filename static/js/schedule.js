document.addEventListener("DOMContentLoaded", function() {
  const scheduleItems = document.querySelectorAll(".schedule li");
  const now = new Date();

  scheduleItems.forEach((item) => {
    const timeEl = item.querySelector("time");
    if (!timeEl) return;
    const startTime = new Date(timeEl.getAttribute("datetime"));

    // Format and display HH:MM
    const hours = String(startTime.getHours()).padStart(2, "0");
    const minutes = String(startTime.getMinutes()).padStart(2, "0");
    timeEl.textContent = `${hours}:${minutes}`;

    // Get duration from session-duration attribute (default 60 minutes if missing)
    const durationMinutes = parseInt(item.getAttribute("session-duration")) || 60;

    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

    // Add 'live' class if current time is within start and end time
    if (now >= startTime && now < endTime) {
      item.classList.add("live");
    } else {
      item.classList.remove("live");
    }
  });
});
