function displayChart() {
    let titleString = "";
    if(chartX.length == 0) titleString = "No data found!";

    if(myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById('currencyChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartX,
            
            datasets: [{
                label: 'Currency Rate', 
                
                data: chartY,
                backgroundColor: 'rgba(154.5, 0, 0, 0.2)',
                borderColor: 'rgba(154.5, 0, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: titleString,
                fontSize: 20
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}