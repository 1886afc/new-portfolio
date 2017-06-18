const CHART = document.getElementById("barChart");
console.log(CHART);

var barChart = new Chart (CHART, {
    type: 'bar',
    data: {
        labels: ["JavaScript", "CSS", "HTML", "NODE.js", "MySQL", "PHP"],
        datasets: [{
            label: 'XP',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(152, 7, 5, 0.7)',
                'rgba(175, 183, 4, 0.7)',
                'rgba(22, 145, 53, 0.7)',
                'rgba(8, 45, 113, 0.8)',
                'rgba(113, 8, 45, 0.8)',
                'rgba(206, 83, 7, 0.8)'
            ],
            borderColor: [
                'rgba(#613232)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});