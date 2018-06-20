// document.querySelector('.main-header__responsive-icon').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// document.querySelector('.main-header__overlay').addEventListener('click', function(){
//     document.querySelector('.main-header').classList.toggle('main-header--open');
// });

// profile drop-down menu
// $(".nav-bar__profile").hover(function () {
// 	$(".profile-drop-down").removeClass("is-hidden");
// });
// $(".container-fluid").hover(function () {
// 	if (!$(".profile-drop-down").hasClass("is-hidden")) {
// 		$(".profile-drop-down").addClass("is-hidden");
// 	}
// });

// notifications drop down
// $('.notifications').hover(
// 	() => {
// 		$('.popup__container').removeClass('is-hidden');
// 	}
// );

// $(".container-fluid").hover(function () {
// 	if (!$(".popup__container").hasClass("is-hidden")) {
// 		$(".popup__container").addClass("is-hidden");
// 	}
// });


// stars rate

if ($(".rateYo").length > 0) {
  $(".rateYo").rateYo({
    rating: 4,
    numStars: 5,
    normalFill: "#ddd",
    ratedFill: "#fc1298",
    fullStar: true,
    starWidth: "20px",
    spacing: "8px"

  });
}

function kFormatter(num) {
  if (num == null)
    return num;

  var formattedNum = null;
  if ((num > 999 && num <= 999999) || (num < -999 && num >= -999999))
    formattedNum = parseFloat(num / 1000).toFixed(1) + ' k';
  else if ((num > 999999 && num <= 999999999 || num < -999999 && num >= -999999999))
    formattedNum = parseFloat(num / 1000000).toFixed(1) + ' M';
  else if ((num > 999999999 || num < -999999999))
    formattedNum = parseFloat(num / 1000000000).toFixed(1) + ' bi';
  else
    formattedNum = parseFloat(num).toFixed(1);
  return formattedNum;
}


// spline chart

if ($("#myChart").length > 0) {

  var ctx = document.getElementById('myChart').getContext('2d');
  var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
  purple_orange_gradient.addColorStop(0, '#fc1298');
  purple_orange_gradient.addColorStop(1, '#175eb6');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    data: {
      labels: ['jan 02', 'jan 04', 'jan 06', 'jan 08', 'jan 10', 'jan 12', 'jan 14', 'jan 16', 'jan 18', 'jan 20', 'jan 22', 'jan'],
      datasets: [{
        backgroundColor: purple_orange_gradient,
        hoverBackgroundColor: purple_orange_gradient,
        fill: true,
        data: [0, 4, 2, 6, 4, 3, 2, 4, 5, 2, 3, 0],
      }]
    },
    // Configuration options go here
    options: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltips: {
        mode: 'index',
        intersect: false,
        backgroundColor: '#555',
        titleFontColor: "#eee",
        titleFontFamily: "'Roboto', sans-serif",
        titleFontStyle: 'normal',
        titleMarginBottom: 8,
        titleFontSize: 11,
        bodySpacing: 5,
        bodyFontColor: '#eee',
        bodyFontFamily: "'Roboto', sans-serif",
        bodyFontSize: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.08)',
        caretSize: 0,
        xPadding: 10,
        yPadding: 10,
        cornerRadius: 2,
    },
      responsive: true,
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            callback: function (value, index, values) {
              return 'EGP ' + kFormatter(value);
            },
            fontSize: 10,
            fontColor: "#333",
          },
        }]
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });


}


// doughnut chart
if ($("#myChart2").length > 0) {

  var ctx2 = document.getElementById('myChart2').getContext('2d');
  var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'doughnut',

    type: 'doughnut',
    data: {
      datasets: [{
        data: [75, 25],
        backgroundColor: [
          '#17acf8',
          '#9b9b9b',
        ],
      }],
      labels: [
        'Cancelled Bookings',
        'Confrimed Bookings',
      ],
    },
    options: {
      cutoutPercentage: '80',
      responsive: true,
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: false,
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });


}


var iconShow = document.getElementById("iconVisibl"),
  iconHide = document.getElementById("iconHidden");
function showPassword() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
    iconShow.classList.add("is-hidden");
    iconHide.classList.remove("is-hidden");
  } else {
    x.type = "password";
    iconShow.classList.remove("is-hidden");
    iconHide.classList.add("is-hidden");
  }
}


function openSearchBox() {
  $('.search-box').addClass('is-open');
  $('.search-box__input').focus();
}

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    if ($(".search-box__input").val() == '') {
      $(".search-box").removeClass("is-open");
    }
    if ($('.appointment-popup-is-open').length > 0) {
      closePopUp();
    }
  }
});

$(document).mouseup(function (e) {
  if (!$(".search-box").is(e.target) // if the target of the click isn't the container...
    &&
    $(".search-box").has(e.target).length === 0 // ... nor a descendant of the container
    &&
    $(".search-box__input").val() == '') {
    $(".search-box").removeClass("is-open");
  }
  if ($('.appointment-popup-is-open').length > 0
    &&
    !$('.appointment-popup').is(e.target)
    &&
    $(".appointment-popup").has(e.target).length === 0) {
    closePopUp();
  }
});


// calender initialization
let events = [{
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-10T03:00:00',
    end: '2018-06-10T03:30:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-05T12:30:00',
    end: '2018-06-05T13:00:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-05T14:00:00',
    end: '2018-06-05T14:30:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-13T13:30:00',
    end: '2018-06-13T14:00:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-13T15:00:00',
    end: '2018-06-13T15:30:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-13T20:30:00',
    end: '2018-06-13T21:00:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-13T17:30:00',
    end: '2018-06-13T18:00:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-13T19:00:00',
    end: '2018-06-13T19:30:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-01T10:00:00',
    end: '2018-06-01T10:30:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-01T11:00:00',
    end: '2018-06-01T11:30:00'
  },
  {
    title: 'Appointment',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-01T07:30:00',
    end: '2018-06-01T08:00:00'
  },
  {
    title: 'Appt.',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-15T09:30:00',
    end: '2018-06-15T10:00:00'
  },
  {
    title: 'Appt.',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-15T09:30:00',
    end: '2018-06-15T10:00:00'
  },
  {
    title: 'Appt.',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-15T09:30:00',
    end: '2018-06-15T10:00:00'
  },
  {
    title: 'Iyad Mohamed',
    tel: '+201036675965',
    procedure: 'Procedure',
    start: '2018-06-04T07:30',
    end: '2018-06-04T08:00'
  }
], eventStart, eventEnd, eventStartTime, eventEndTime, eventBackground;
if ($('#calendar').length > 0) {
  $('#calendar').fullCalendar({
    titleFormate: {
      month: 'MMMM yyyy', // September 2009
      week: "MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}", // Sep 7 - 13 2009
      day: 'dddd, MMM d, yyyy' // Tuesday, Sep 8, 2009
    },

    eventSources: [{
      events: events,
      backgroundColor: '#fc1299',
      textColor: '#fff'
    }],
    eventLimit: true,
    // eventLimitClick: 'day',
    views: {
      month: {
        eventLimit: 4
      }
    },
    displayEventTime: false,
    header: {
      left: 'prev,next',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,list'
    },
    editable: true,
    selectable: true,
    select: function(start, end, allDay) {
      if ($('#calendar').fullCalendar('getView').name === 'month') {
        eventStart = moment(start).format() + 'T';
        eventEnd = moment(start).format() + 'T';
      } else {
        eventStart = moment(start).format('YYYY-MM-DD hh:mm');
        eventEnd = moment(end).format('YYYY-MM-DD hh:mm');
      }
      $('.modal').modal('show');
   },
   eventMouseover: function(event, jsEvent, view){
     $(jsEvent.currentTarget).append(`<div class="tooltip tooltip--open">
     <div class="tooltip__header">${event.title}</div>
     <div class="tooltip__content">
         <p>${event.tel}</p>
         <p>${event.procedure}</p>
     </div>
   </div>`);
   $('.tooltip').addClass('tooltip--open');
   },
   eventMouseout: function(event, jsEvent, view) {
     $(jsEvent.currentTarget).children('.tooltip').remove();
   },

    eventClick: function(calEvent, jsEvent, view) {
      eventBackground = $(this).css('background-color');
      $(this).css('background-color','#175eb6');
      let today = $('#calendar').fullCalendar('getDate');
      if (today.format('YYYY-MM-DD') === moment(calEvent.start).format('YYYY-MM-DD')) {
        $('.today-event').addClass('appointment-popup-is-open');
        $('body').addClass('is-not-overflowed');
      } else {
        $('.future-event').addClass('appointment-popup-is-open');
        $('body').addClass('is-not-overflowed');
      }
    },

    allDaySlot: false,
    slotEventOverlap: false,
  });

  $('.filter-link').click(() => {
    $('.filter-model').addClass('filter-show');
  }
  );
}

// add events dynamically
$('.modal-footer__add-event').click(
  ()=> {
    let addedEvent;
    if ($('#calendar').fullCalendar('getView').name === 'month') {
      eventStart = eventStart + $('.event-start-time').val().slice(0, 5);
      eventEnd = eventEnd + $('.event-end-time').val().slice(0, 5);
    }
    addedEvent = {
      title: 'Appointment',
      start: eventStart,
      end: eventEnd,
      textColor: '#fff',
      backgroundColor: '#0595ff',
    };
    events.push(addedEvent);
    $('#calendar').fullCalendar('renderEvent', addedEvent);
  }
);

function closePopUp() {
  $('.fc-event').filter(function() {
    if($(this).css("background-color") === 'rgb(23, 94, 182)'){
      $(this).css('background-color', eventBackground);
    }
  });
  $('.appointment-popup').removeClass('appointment-popup-is-open');
  $('body').removeClass('is-not-overflowed');
}


// notification responsive

if ($("#open-noti").length > 0) {

  $("#open-noti").click(function () {
    $(".popup__container").toggleClass("pop-animate");
  });

}
var editCard = $("#cloneAddressPanel").html();
function cloneAddressPanel(elem) {
  $(elem).parents(".panel").after(editCard);
}
