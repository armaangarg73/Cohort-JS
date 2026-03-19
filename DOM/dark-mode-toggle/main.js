const btn = document.getElementById("toggle-button");
btn.addEventListener("click" , () => {
    document.body.classList.toggle("dark")

if(document.body.classList.contains("dark")) {
    
   btn.innerText = "Toggle Light Mode";
  } else {
    btn.innerText = "Toggle Dark Mode";
  }

});
