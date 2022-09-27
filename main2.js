let currentCurrency = "Indian rupee   (INR)";
let currentDate = new Date("01-01-2022");
let currentRange = 4;
let dayCount = [0, 6, 29, 89, 364];

let currencySet = [];
let chartX = [];
let chartY = [];
var myChart;

let dropDown = document.getElementById("currencyList");
dropDown.addEventListener("change", filterData);

let dbtn = document.getElementById("btnDaily");
dbtn.addEventListener("click", () => {
    currentRange = 0;
    filterData();
});

let wbtn = document.getElementById("btnWeekly");
wbtn.addEventListener("click", () => {
    currentRange = 1;
    filterData();
});

let mbtn = document.getElementById("btnMonthly");
mbtn.addEventListener("click", () => {
    currentRange = 2;
    filterData();
});

let qbtn = document.getElementById("btnQuaterly");
qbtn.addEventListener("click", () => {
    currentRange = 3;
    filterData();
});

let ybtn = document.getElementById("btnYearly");
ybtn.addEventListener("click", () => {
    currentRange = 4;
    filterData();
});

let sDate = document.getElementById("selectedDate");
sDate.addEventListener("change", filterData);


function addDays(originalDate, days){
    cloneDate = new Date(originalDate.valueOf());
    cloneDate.setDate(cloneDate.getDate() + days);
    return cloneDate;
}


data.forEach(element => {
    for (var key of Object.keys(element)) {
        if(key != "1Date")
            currencySet.push(key);
    }
});
currencySet = [...new Set(currencySet)];

let currencyList = "<option value=''>Select Currency 2</option>";

currencySet.forEach((currency) => {
    if(currency == "Indian rupee   (INR)") currencyList += "<option value='" + currency + "' selected>" + currency +"</option>"
    else currencyList += "<option value='" + currency + "'>" + currency +"</option>"
});

document.getElementById("currencyList").innerHTML = currencyList;



