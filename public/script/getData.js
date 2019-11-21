$(document).ready(function () {
    cargarTabla();
});
function cargarTabla() {
    var post = $.post("../controller/getData.php", // Script que se ejecuta en el servidor    	                       
    responseQuery // Función que se ejecuta cuando el servidor responde
    );
}
function responseQuery(r) {
    var jsonArr = JSON.parse(r);
    var table = document.getElementById("tablePoint");
    var new_tbody = document.createElement('tbody');
    table.replaceChild(new_tbody, table.tBodies[0]);
    for (var i = 0; i < jsonArr.length; i++) {
        var value = jsonArr[i];
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