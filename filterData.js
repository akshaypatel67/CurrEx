function filterData() {
    chartX = [];
    chartY = [];

    currentCurrency = dropDown.value;
    currentDate = new Date(sDate.value);
    currentDate.setHours(0);
    currentDate.setMinutes(0);

    let mx = Number.MIN_SAFE_INTEGER;
    let mn = Number.MAX_SAFE_INTEGER;
    let mxDate = null;
    let mnDate = null;

    data.forEach((element) => {
        let elementDate = new Date(element["1Date"]);
        if(elementDate >= currentDate && elementDate <= addDays(currentDate, dayCount[currentRange])) {
            if(element[currentCurrency] != null) {
                chartX.push(element["1Date"]);
                chartY.push(element[currentCurrency]);

                if(element[currentCurrency] > mx) {
                    mx = element[currentCurrency];
                    mxDate = elementDate;
                }

                if(element[currentCurrency] < mn) {
                    mn = element[currentCurrency];
                    mnDate = elementDate;
                }
            }
        }
    });

    let minMaxString = ""

    let minMax = document.getElementById("minmaxinfo");
    if(mxDate != null) {
        let mxdate = ' (' + mxDate.getFullYear()+' - '+(mxDate.getMonth()+1)+' - '+mxDate.getDate() + ')';
        minMaxString = "Max Currency Rate: " + (mx == Number.MIN_SAFE_INTEGER ? "-" : mx + mxdate) + "<br><br>";

        let mndate = ' (' + mnDate.getFullYear()+' - '+(mnDate.getMonth()+1)+' - '+mnDate.getDate() + ')';
        minMaxString += "Min Currency Rate: " + (mn == Number.MAX_SAFE_INTEGER ? "-" : mn + mndate) + "\n";
        
    } else {
        minMaxString = "Max Currency Rate: - <br><br>";
        minMaxString += "Min Currency Rate: - <br><br>";
    }

    minMax.innerHTML = minMaxString;
    
    displayChart();
}