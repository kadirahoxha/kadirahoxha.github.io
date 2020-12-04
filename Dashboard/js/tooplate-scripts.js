const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              
            }
          }
        ]
      }
    };

    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

     configLine = {
      type: "line", 
      data: {
        labels: [
          "Qershor",
          "Korrik",
          "Gusht",
          "Shtator",
          "Tetor",
          "Nëntor",
          "Dhjetor"
        ],
        datasets: [
          {
            
          
            label: "Fitimi/muaj (1000€)",
            data: [20, 25, 20.5, 30, 25, 25.5, 32],
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            lineTension: 0.1
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: ""
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

     configBar = {
      type: "bar",
      data: {
        labels: ["Dardan Gashi", "Anda Krasniqi", "Rita Hoxha", "Dren Syla", "Dea Gashi", "Art Mehmeti"],
        datasets: [
          {
            label: "Performanca (1-10)",
            data: [9, 9, 6, 8, 2, 7],
            backgroundColor: [
              "#2B6C95",
              "#2B6C95",
              "#2B6C95",
              "#2B6C95",
              "#2B6C95",
              "#2B6C95"
            ],
            borderColor: [
              "#11486B",
              "#11486B",
              "#11486B",
              "#11486B",
              "#11486B",
              "#11486B"
              
            ],
            borderWidth: 1
          }
        ]
      },
      options: optionsBar
    };


    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    ctxPie = document.getElementById("pieChart").getContext("2d");
    optionsPie = {
      responsive: true,
      maintainAspectRatio: false
    };

    configPie = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [3,4],
            backgroundColor: [
              window.chartColors.yellow,
              window.chartColors.red
            ],
            label: "Gjinia e punëtorëve"
          }
        ],
        labels: ["Meshkuj", "Femra"]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateChartOptions() {
  if ($(window).width() < width_threshold) {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = false;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = false;
    }
  } else {
    if (optionsLine) {
      optionsLine.maintainAspectRatio = true;
    }
    if (optionsBar) {
      optionsBar.maintainAspectRatio = true;
    }
  }
}

function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}

function reloadPage() {
  setTimeout(function() {
    window.location.reload();
  }); // Reload the page so that charts will display correctly
}

function drawCalendar() {
  if ($("#calendar").length) {
    $("#calendar").fullCalendar({
      height: 400,
      events: [
        {
          title: "Takim",
          start: "2020-12-05",
          end: "2020-12-05"
        },
        {
          title: "Promcioni",
          start: "2021-01-05",
          end: "2021-02-05"
        },
        {
          title: "Takim",
          start: "2020-12-10",
          end: "2020-12-10"
        },
        {
          title: "Rekrutimi",
          start: "2020-12-18"
        },
        {
          title: "Company Trip",
          start: "2018-10-25",
		  end: "2018-10-27"
        },
        {
          title: "Review",
          start: "2018-11-12"
        },
        {
          title: "Plan",
          start: "2018-11-18"
        }
      ],
      eventColor: "rgba(54, 162, 235, 0.4)"
    });
  }
}
