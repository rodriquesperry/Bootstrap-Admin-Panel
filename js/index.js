
document.querySelector('.sideMenuToggler').addEventListener('click', function() {
  const sidenav = document.querySelector('.sidenav');
  if (sidenav.style.display === "none") {
    sidenav.style.display = "block";
  } else {
    sidenav.style.display = "none";
  }
});

let doughnut = document.getElementById('projectStatusChart').getContext('2d');
let doughnutChart = new Chart(doughnut, {
  type: 'doughnut',
  data: {
    labels: ['Current', 'Overdue', 'Complete'],
    datasets: [{
      data: ['89', '33', '15'],
      backgroundColor: [
          'rgba(0, 255,0,.5)',
          'rgba(255,0, 0, 0.5)',
          'rgba(255, 206, 86, 0.5)'
      ],
      borderColor: [
          'rgba(0, 255, 0, 1)',
          'rgba(255,0, 0, 1)',
          'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
     
  }]
},
options: {
  cutoutPercentage: 85,
  legend: {
    display: false
  }
}
});
