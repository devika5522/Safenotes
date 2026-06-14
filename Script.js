const PIN = "1234";

const unlockBtn = document.getElementById("unlockBtn");
const saveBtn = document.getElementById("saveBtn");

unlockBtn.addEventListener("click", function () {
  const pin = document.getElementById("pinInput").value;

  if (pin === PIN) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("app").style.display = "block";
    loadNotes();
  } else {
    document.getElementById("message").textContent = "Wrong PIN";
  }
});

saveBtn.addEventListener("click", function () {
  const input = document.getElementById("noteInput");

  if (input.value.trim() === "") return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(input.value);

  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  loadNotes();
});

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const list = document.getElementById("notesList");

  list.innerHTML = "";

  notes.forEach(function(note) {
    const li = document.createElement("li");
    li.textContent = note;
    list.appendChild(li);
  });
}
