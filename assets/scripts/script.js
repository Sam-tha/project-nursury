function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const greet = document.getElementById("greet");
const hour = new Date().getHours();

if (hour < 12) {
  greet.innerHTML = "Good Morning";
} else if (hour >= 12 && hour < 18) {
  greet.innerHTML = "Good Afternoon";
} else if (hour >= 18 && hour <= 24) {
  greet.innerHTML = "Good Evening";
}
