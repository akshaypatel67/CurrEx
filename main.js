let currencyCode = new Map();
let currencyName = new Map();

google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);


function drawTable() {
    for (var key of Object.keys(data[Object.keys(data).length - 1])) {
        let code = "";
        let flag = false;
        let name = ""

        for(let i=0; i<key.length - 1; i++) {
            if(flag == true) {
                code += key[i];
            }

            if(key[i] == '(') flag = true;

            if(flag == false) {
                name += key[i];
            }
        }
        currencyCode.set(key, code);
        currencyName.set(key, name);
    }

    var tableRows = new google.visualization.DataTable();
    tableRows.addColumn('string', 'Currency Name');
    tableRows.addColumn('string', 'Currency Code($)');
    tableRows.addColumn('string', 'Current Rate');

    let lastData = data[Object.keys(data).length - 1];

    let rate = [];
    let code = [];
    let name = [];
    let x = 0;

    for (var key of Object.keys(lastData)) {
        rate.push(lastData[key] == null ? "-" : lastData[key].toString());
    }
    rate.shift();
    name.shift();
    code.shift();
    

    let idx = 0;

    for (var key of Object.keys(lastData)) {
        if(key == "1Date" || key == "") continue;

        tableRows.addRows([
            [ currencyName.get(key),   currencyCode.get(key), rate[idx]]
        ]);
        idx++;
    }

    var table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(tableRows, {showRowNumber: true, width: '100%', height: '100%'});
}
