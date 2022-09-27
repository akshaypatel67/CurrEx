let currencyList = "<option value=''>Select Currency</option>";
let lastData = data[Object.keys(data).length - 1];

let currencyList1;
let currencyList2;
let unit1;

function getExchangeRate() {
    if(currencyList1.value == "" || currencyList2.value == "") return;

    let units = document.getElementById("unit1").value;

    document.getElementById("unit2").value = (parseFloat(units) * parseFloat(lastData[currencyList2.value]) / parseFloat(lastData[currencyList1.value]));
}

currencyList1 = document.getElementById("currencyList1");
currencyList1.addEventListener("change", getExchangeRate);

currencyList2 = document.getElementById("currencyList2");
currencyList2.addEventListener("change", getExchangeRate);

unit1 = document.getElementById("unit1");
unit1.addEventListener("input", getExchangeRate);

for (var key of Object.keys(lastData)) {
    if(key == "1Date" || key == "" || lastData[key] == null) continue;

    currencyList += "<option value='" + key + "'>" + key +"</option>";
}

document.getElementById("currencyList1").innerHTML = currencyList;
document.getElementById("currencyList2").innerHTML = currencyList;