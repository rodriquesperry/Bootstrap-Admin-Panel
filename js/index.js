let subTogglers = document.querySelectorAll('.subToggler');
let menuItem = document.querySelectorAll('.menu-item');


document.querySelector('.sideMenuToggler').addEventListener('click', function() {
  const sidenav = document.querySelector('.sidenav');
  if (sidenav.style.display === "none") {
    sidenav.style.display = "block";
  } else {
    sidenav.style.display = "none";
  }
});


menuItem.forEach(element => {
  element.addEventListener('click', (e) => {
    $(function() {
      $('.collapse').collapse('hide');
    });
    alert('Fix to make right arrow rotate down and up on click');
  });
});

subTogglers.forEach(element => {
  element.addEventListener('click', (e) => { 
    element.classList.toggle('rotate');
    $(function() {
      $('.collapse').collapse('hide');
    }); 
  });
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

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let today = new Date();
let currMonth = today.getMonth();
let currYear = today.getFullYear();
let monthName = months[currMonth];
let selectMonth = document.querySelector('#month');

showCalendar(currMonth, currYear);

let monthAndYear = document.querySelector('#monthAndYear');
monthAndYear.innerHTML = `${monthName} ${currYear}`;


function showCalendar(month, year) {
  let fisrtDay = (new Date(year, month)).getDay();
  
  tbody = document.querySelector('#calBody');
  tbody.innerHTML = '';

  let date = 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < fisrtDay) {
        let cell = document.createElement('td');
        cellText = document.createTextNode('');
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
          cell = document.createElement('td');
          cellText = document.createTextNode(date);
          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.classList.add('bg-danger');
          }
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
      }
    }
    tbody.appendChild(row);
  }
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }
}

let nextMonth = document.querySelector('.nextMonth');
nextMonth.addEventListener('click', () => {
  currYear = (currMonth === 11) ? currYear + 1 : currYear;
  currMonth = (currMonth + 1) % 12;
  monthName = months[currMonth];
  showCalendar(currMonth, currYear);
  monthAndYear.innerHTML = `${monthName} ${currYear}`;

});

let previousMonth = document.querySelector('.prevMonth');
previousMonth.addEventListener('click',() => {
  currYear = (currMonth === 0) ? currYear - 1 : currYear;
  currMonth = (currMonth === 0) ? 11 : currMonth -1;
  monthName = months[currMonth];
  showCalendar(currMonth, currYear);
  monthAndYear.innerHTML = `${monthName} ${currYear}`;
}
)
;