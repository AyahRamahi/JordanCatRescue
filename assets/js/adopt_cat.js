function submit () {
    form = document.getElementsByTagName("form");

    newRow = document.createElement("tr");
    for(var i=0; i<=4; i++){
        newData = document.createElement("td");
        newData.innerHTML = form[0][i].value;
        newRow.appendChild(newData);
    }
    
    tableBody = document.getElementsByTagName("table")[0];
    tableBody.insertRow();
    tableBody.appendChild(newRow);
}