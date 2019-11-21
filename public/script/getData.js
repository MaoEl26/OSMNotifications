$(document).ready(function () {
    cargarTabla();
});
function cargarTabla() {
    var post = $.post("../controller/getData.php", // Script que se ejecuta en el servidor    	                       
    responseQuery // Función que se ejecuta cuando el servidor responde
    );
}
function responseQuery(r) {
    var arr = JSON.parse(r);
    console.log(arr);
    var table = document.getElementById("tablePoint");
    var new_tbody = document.createElement('tbody');
    table.replaceChild(new_tbody, table.tBodies[0]);
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        var row = new_tbody.insertRow();
        var des = row.insertCell(0);
        var lat = row.insertCell(1);
        var lon = row.insertCell(2);
        des.appendChild(document.createTextNode(value[0]));
        lat.appendChild(document.createTextNode(value[1]));
        lon.appendChild(document.createTextNode(value[2]));
    }
    ;
}
//# sourceMappingURL=getData.js.map