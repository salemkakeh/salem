let menu_button = document.getElementById("menu-button");

function change_status () {
  let menu = document.getElementById("menu");
  menu.classList.toggle("active");
  console.log("true");
}

menu_button.addEventListener("click" , change_status);