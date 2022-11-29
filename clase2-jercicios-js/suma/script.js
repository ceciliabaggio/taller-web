
function calcular() {
    // recuperar los valores de la página
    // sumarlos
    // agregarlos en la página en el lugar adecuado
    var ele1 = document.getElementById("op1").value;
    var ele2 = document.getElementById("op2").value;
    document.getElementById("resultado").innerText = parseInt(ele1) + parseInt(ele2);

}