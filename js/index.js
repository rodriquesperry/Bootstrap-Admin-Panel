
document.querySelector('.sideMenuToggler').addEventListener('click', function() {
  const sidenav = document.querySelector('.sidenav');
  if (sidenav.style.display === "none") {
    sidenav.style.display = "block";
  } else {
    sidenav.style.display = "none";
  }
});


