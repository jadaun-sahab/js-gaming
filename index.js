var MenuItem = document.getElementById("MenuItem");

MenuItem.style.display = "none";

function menutoggle() {
  if (MenuItem.style.display == "none") MenuItem.style.display = "block";
  else {
    MenuItem.style.display = "none";
  }
}
