function limpiar(){
    document.getElementById("miFormulario").reset();
}

function sumar(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    // alert("el resultado es: " + parseInt(num1+num2));
    document.getElementById("elresultado").innerText=num1+num2;
}

function restar(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
   
    document.getElementById("elresultado").innerText=num1-num2;
}

function multiplicar(){
    let num1 = parseInt(document.getElementById("valor1").value);
    let num2 = parseInt(document.getElementById("valor2").value);
    
    document.getElementById("elresultado").innerText=num1*num2;
}

// function dividir(){
//     let num1 = parseInt(document.getElementById("valor1").value);
//     let num2 = parseInt(document.getElementById("valor2").value);
    
//     document.getElementById("elresultado").innerText=num1/num2;
// }


let dividir=() => {
     let num1 = parseInt(document.getElementById("valor1").value);
     let num2 = parseInt(document.getElementById("valor2").value);
    
     document.getElementById("elresultado").innerText=num1/num2;
}