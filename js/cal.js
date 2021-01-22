
document.addEventListener('DOMContentLoaded', function() {
  let calendarEl = document.querySelector('#calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'dayGridMonth,timeGridWeek,timeGridDay,list',
      center: 'title',
      end: 'prev,next'
    }
  });

  calendar.render();
});

