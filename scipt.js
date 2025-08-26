const markersDiv = document.getElementById("markers");
const hofbild = document.getElementById("hofbild");

hofbild.addEventListener("click", function(e) {
  const rect = hofbild.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const name = document.getElementById("trailerName").value.trim();
  if (!name) return alert("Trailer-Name eingeben!");

  const marker = document.createElement("div");
  marker.className = "marker";
  marker.style.left = x + "px";
  marker.style.top = y + "px";
  marker.title = name;
  markersDiv.appendChild(marker);
});
