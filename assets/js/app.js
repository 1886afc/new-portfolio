const CHART = document.getElementById("barChart");

Chart.defaults.global.defaultFontColor = 'gray';
var barChart = new Chart (CHART, {
    type: 'bar',
    data: {
        labels: ["JavaScript", "CSS", "HTML", "NODE.js", "MySQL", "PHP"],
        datasets: [{
            label: 'XP Skill %',
            data: [60, 50, 60, 30, 25, 15],
            backgroundColor: [
                'rgba(152, 7, 5, 0.5)',
                'rgba(175, 183, 4, 0.5)',
                'rgba(22, 145, 53, 0.5)',
                'rgba(8, 45, 113, 0.5)',
                'rgba(113, 8, 45, 0.5)',
                'rgba(206, 83, 7, 0.5)'

            ],
            // borderColor: [
            //     'rgba(#613232)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            //
            // ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    callback: function (value, index, values) {
                        return 'XP ' + value + '%';
                    },
                    maxTicksLimit: 10,
                    suggestedMax: 100
                },
                gridLines: {
                    color: "grey"
                }
            }]
        },
        legend: {
            labels: {

            }
        }
    }
});