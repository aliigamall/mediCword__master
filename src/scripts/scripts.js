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


// $("#rateYo").rateYo({
//   rating    : 2,
//   numStars: 10,
//   spacing   : "5px",
//   normalFill: "#ddd",
//   ratedFill  : "#fc1298",
//   fullStar: true

//   });


// var randomScalingFactor = function() {
// 	return Math.ceil(Math.random() * 10.0) * Math.pow(10, Math.ceil(Math.random() * 5));
// };

// var config = {
// 	type: 'line',
// 	data: {
// 		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// 		datasets: [{
// 			label: 'My First dataset',
// 			backgroundColor: 'red',
// 			borderColor: 'red',
// 			fill: false,
// 			data: [3, 4, 34, 2, 34, 60, 46],
// 		}, {
// 			label: 'My Second dataset',
// 			backgroundColor: window.chartColors.blue,
// 			borderColor: window.chartColors.blue,
// 			fill: false,
// 			data: [0, 10, 5, 2, 20, 30, 45],
// 		}]
// 	},
// 	options: {
// 		responsive: true,
// 		title: {
// 			display: true,
// 			text: 'Chart.js Line Chart - Logarithmic'
// 		},
// 		scales: {
// 			xAxes: [{
// 				display: true,
// 			}],
// 			yAxes: [{
// 				display: true,
// 				type: 'logarithmic',
// 			}]
// 		}
// 	}
// };


// spline chart

if($("#myChart").length > 0) {

	var ctx = document.getElementById('myChart').getContext('2d');
	var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 600);
			purple_orange_gradient.addColorStop(0, '#fc1298');
			purple_orange_gradient.addColorStop(1, '#175eb6');
var chart = new Chart(ctx, {
    // The type of chart we want to create
		type: 'line',
		
		data: {
			labels: ['jan 02', 'jan 04', 'jan 06', 'jan 08', 'jan 10', 'jan 12', 'jan 14' , 'jan 16', 'jan 18', 'jan 20', 'jan 22', 'jan'],
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
			responsive: true,
			scales: {
				xAxes: [{
					stacked: false,
				}],
			},
			animation: {
				animateScale: true,
				animateRotate: true
			}
		}
});


}
	

// doughnut chart
if($("#myChart2").length > 0) {

	var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
		type: 'doughnut',
		
		type: 'doughnut',
		data: {
			datasets: [{
				data:[75 ,25],
				backgroundColor: [
					'#17acf8',
					'#9b9b9b',
				],
			}],
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





function showPassword() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
  $('.password__eye-icon').toggleClass('fa-eye fa-eye-slash');
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
    if ($('.appointment-popup-open').length > 0) {
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
  if ($('.appointment-popup-open').length > 0
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
    start: '2018-06-10T03:00:00',
    end: '2018-06-10T03:30:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-05T12:30:00',
    end: '2018-06-05T13:00:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-05T14:00:00',
    end: '2018-06-05T14:30:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-13T13:30:00',
    end: '2018-06-13T14:00:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-13T15:00:00',
    end: '2018-06-13T15:30:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-13T20:30:00',
    end: '2018-06-13T21:00:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-13T17:30:00',
    end: '2018-06-13T18:00:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-13T19:00:00',
    end: '2018-06-13T19:30:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-01T10:00:00',
    end: '2018-06-01T10:30:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-01T11:00:00',
    end: '2018-06-01T11:30:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-01T07:30:00',
    end: '2018-06-01T08:00:00'
  },
  {
    title: 'Appt.',
    start: '2018-06-15T09:30:00',
    end: '2018-06-15T10:00:00'
  },
  {
    title: 'Appt.',
    start: '2018-06-15T09:30:00',
    end: '2018-06-15T10:00:00'
  },
  {
    title: 'Appt.',
    start: '2018-06-15T09:30:00',
    end: '2018-06-15T10:00:00'
  },
  {
    title: 'Appointment',
    start: '2018-06-04T07:30:00',
    end: '2018-06-04T08:00:00'
  }
];
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
    // dayClick: function (date, jsEvent, view) {
    //   $('.modal').modal('show');
    // },
    eventClick: function(calEvent, jsEvent, view) {
      $(this).css('background-color','#175eb6');
      let today = $('#calendar').fullCalendar('getDate');
      if (today.format('YYYY-MM-DD') === moment(calEvent.start).format('YYYY-MM-DD')){
        $('.today-event').addClass('appointment-popup-open');
      } else {
        $('.future-event').addClass('appointment-popup-open');
      }
    },

    allDaySlot: false,
    slotEventOverlap:false, 
  });

  $('.filter-link').click(
    () => {
      $('.filter-model').addClass('filter-show');
    }
  );
}

function closePopUp() {
  $('.fc-event').filter(function() {
    if($(this).css("background-color") === 'rgb(23, 94, 182)'){
      $(this).css('background-color', '#fc1299');
    }
});
  $('.appointment-popup').removeClass('appointment-popup-open');
}
