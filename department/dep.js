const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");
const content4 = document.getElementById("content4");

button1.addEventListener("click", function() {
  content1.classList.remove("hidden");
  content2.classList.add("hidden");
  content3.classList.add("hidden");
  content4.classList.add("hidden");
});

button2.addEventListener("click", function() {
  content1.classList.add("hidden");
  content2.classList.remove("hidden");
  content3.classList.add("hidden");
  content4.classList.add("hidden");
});

button3.addEventListener("click", function() {
  content1.classList.add("hidden");
  content2.classList.add("hidden");
  content3.classList.remove("hidden");
  content4.classList.add("hidden");
});
button4.addEventListener("click", function() {
    content1.classList.add("hidden");
    content2.classList.add("hidden");
    content3.classList.add("hidden");
    content4.classList.remove("hidden");
  });
  function toggle() {
    var x = document.getElementsByClassName("hidden")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
