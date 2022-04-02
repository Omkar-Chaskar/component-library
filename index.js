const btn = document.querySelector("#btn");
const snackbar = document.querySelector(".snackbar"); 

btn.addEventListener("click", function clickHandler(){
  snackbar.style.display = "block";
  setTimeout(hideSnackbar, 5000);
  function hideSnackbar(){
   snackbar.style.display = "none"; 
  }
});