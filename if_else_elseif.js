//Programa que te ayuda a indentificar como funciona un IF y un Else

function testeoNumero(a) {
    //fuction  es unobjeto de primera clase
    let resultado;
    //let sirve para declarar variables limitando su alcance
    if (a > 0) {
    resultado = 'Positivo';
    } else {
    resultado = 'No positivo';
    }
    return resultado;
    //return sirve para que nos regrese la respuesta del número que se haya solicitado siendo + o -
}

//En el console.log podemos variar el número en consola ehemplo: -1, 5, -3, 10
console.log(testeoNumero(-1));





//Programa que te ayuda a indentificar como funciona un IF,ELSE IF y ELSE

var edad = 19; //Cambia la edad y verás como cada respuesta se coloca en un IF después intenta con ELSE IF y por último con un ELSE

if(edad ===18){
    console.log("Indica que tienes justo los 18 años")
}else if(edad>18){
    console.log("Indica que puedes tener 18 o más años")
}else{
    console.log ("Indica que no tienes 18 años......por lo tanto eres menor de edad");
}