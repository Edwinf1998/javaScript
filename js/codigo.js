//se ingresa un numero entero, mostrar su raiz cuadrada
//proceso en clase de como generar un proceso matematico con print


//let numero2;//
 //let numero;//
//numero=prompt("Ingrese un numero")
//let raiz=numero**(1/2);
//document.write("La raiz de "+raiz)

//***********************************************************


//**********************ejercicio dejado por el proce*************#1************************

// se ingresa 3 notas de un estudiante, mostrar el puntaje y el promedio de dicho alumno

// let nota;
// let nota2;
// let nota3;



// nota=Number (prompt("ingresa numero"));
// nota2=Number (prompt("ingresa numero"));
// nota3=Number (prompt("ingresa numero"));

// let suma = Number(nota + nota2 + nota3);
// let promedio = Number((suma)/3);


// document.write("Las Notas son: "+nota+" + "+nota2+" + "+nota3+" = "+suma+" dando el promedio de Nota: "+promedio)


//**********************ejercicio dejado por el proce*************#1************************


/* let n=9;
let a=5;
document.write (n+a+"" ); */


/*let IG =0.18;

let N=prompt("Digite su Nombre");
let A=prompt("Digite su Apellido");

let p1=prompt("Primer producto");
let p2=prompt("Segundo producto");
let p3=prompt("Tercer producto");
let p4=prompt("Cuarto producto");
let p5=prompt("Quinto producto");

pre1=parseFloat(prompt("Precio de "+p1));
pre2=parseFloat(prompt("Precio de "+p2));
pre3=parseFloat(prompt("Precio de "+p3));
pre4=parseFloat(prompt("Precio de "+p4));
pre5=parseFloat(prompt("Precio de "+p5));

sum=pre1+pre2+pre3+pre4+pre5

resultIGV=sum*IG
TOT=resultIGV+sum

document.write("<h1>"+"la Empresa KREA"+"</h1>"); //empresa
document.write("Nuestro cliente "+N+" "+A+" realiza la compra de: "+"<p>"); 

document.write(p1+" = "+pre1+"<br>");
document.write(p2+" = "+pre2+"<br>");
document.write(p3+" = "+pre3+"<br>");
document.write(p4+" = "+pre4+"<br>");
document.write(p5+" = "+pre5+"<p>");

document.write("El IGV es "+resultIGV+" y subtotal "+sum+ " dando como pago total "+TOT);*/


/*
let variable=true;
let variable2=true;

document.write(variable && variable2) */



//se tiene un numero, saber si es positivo

/* let num=8;

if(num>0){
    alert("Es positivo");                               //funcion simple solo hace la primera alert
}else{
    alert("Es negativo")                                //funcion doble si no es positivo arroja el segundo
}

let num==0;

if(num==0){
    alert("Es neutro");                               //funcion simple solo hace la primera alert
}else if(num>0){
    alert("Es positivo");                               //funcion doble si no es positivo arroja el segundo
}else(num<0){
    alert("es negativo");                               // anidaas una secuencia con un digito demas
}
 */


//se ingresa 3 noras de un alumno, mostrar el promedio y si esta apronado o desa..


/* 
let not1;
let not2;
let not3;

not1=parseFloat(prompt("Ingrese la primera nota"));
not2=parseFloat(prompt("Ingrese la primera nota"));
not3=parseFloat(prompt("Ingrese la primera nota"));

let prom=(not1+not2+not3)/3;

if(prom>=13){
    document.write(`El promedio es ${prom}  y ud. esta Aprobado`);
}else{
    document.write(`El promedio es ${prom}  y ud. esta Desaprobado`);
} */


//se ingresa 3 noras de un alumno, mostrar el promedio y si su primedio es 17 a 20  q salga excelente , si esta en 13 y 16 salga regular y si es meno a 13 desaprobado.
//EJERCICIO

/* 
let not1;
let not2;
let not3;

not1=parseFloat(prompt("Ingrese la primera nota"));
not2=parseFloat(prompt("Ingrese la primera nota"));
not3=parseFloat(prompt("Ingrese la primera nota"));

let prom=(not1+not2+not3)/3;

if(prom>=17 & prom<=20){
    document.write(`El promedio es ${prom}  y ud. esta Excelente`);
}else if(prom>=13 && prom<=16){
    document.write(`El promedio es ${prom}  y ud. esta Regular`);
}else if(prom<13){
    document.write(`El promedio es ${prom}  y ud. esta Desaprobaado`);
}else{
    document.write(`datos incorrectos`);
}

//EJERCICIO
 */
//se agregra su no figura fuera del 20
//else{
//    document.write(`datos incorrectos`);
//}



/* for( let i=1;i<=6;i++){
    document.write("<h"+i+">hola etiqueta</h"+i+">");            //forma largar
    document.write(`<h${i}>hola etiqueta</h${i}>`);             //forma corta
} */



/* 
for( let i=2;i<=20;i++){
    document.write(i++);                    //manera propia numero solo pares hasta el 20
}

for(let i=2;i<=20; i+=2){
    document.write(i+"<br>");               //manera del profe
}


for(let i=2;i<=20; i+=2){
    document.write(i+"<br>");               //manera del profe
    if(i==15){
        break;                             // se generar para romper el bucle y termine en 15
    }
}

for(let i=2;i<=20; i+=2){
    document.write(i+"<br>");               //manera del profe
    if(i==15){
        continue;                           // evalua el numero asignado para omitirlo
    }
}
 */

/* let k=3;
while(k<=30){
    document.write(k+"<br>");     // se genera multiplos de 3 hasta el 30  WHILE
    k+=3;
}
 */


// let k=0;

// do{
//     document.write("Iteraccion con Do While<br>");      //genera repetir 10 veces con DO WHILE
//     k++;
// }while(k> 10);


/* let k=0;
let acum=0;
do{
    acum=acum+k;                    //genera la suma de 1 al 20 brindado el numero total 
    k++
}while(k<20);

document.write(acum); */
////////////////////////////////////////////////////////////////////////////////////////////////
/* //FUNCION SIN ARGUMENTOS

function saludar(){
    alert("Bienvenido a las funciones");        
}                                               //genera saludo solo poniendo saludar llama

saludar();

/////////////////////////////////////////////////////////////////////////////////////////////////
//FUNCION CON ARGUMENTOS
function saludar2(nombre){
    alert("Bienvenido a las funciones "+ nombre);
}                           //genera saludo solo poniendo saludar llama pero con un nombre
//se puede agregar antes de saludar2 let nom=prompt("ingresar noimbre"); y donde va juan
// poner nom de lo que pide para que pueda poner un nombre al alazar

saludar2("Juan");           
/////////////////////////////////////////////////////////////////////////////////////////////
 */
/* function multiplica(numero1,numero2){
    let n1=numero1;
    let n2=numero2;
                                     //funcion normal para multiplicar
    let multi=n1*n2;
    return multi;                   //genera multiplicar 2 # en un resultado con return
}

alert(multiplica(8,5));
***********************************************************
let multiplica = function (numero1,numero2){
    let n1=numero1;
    let n2=numero2;
                                //funcion anonima para multiplicar se agrega el let
    let multi=n1*n2;
    return multi;                   //genera multiplicar 2 # en un resultado con return
}

alert(multiplica(8,5));
 */
//////////////////////////////////////////////////////////////////////////////////////////

/* function sumar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum= num1+num2;
    document.getElementById("resp").innerHTML= sum;
}

function resta(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum= num1-num2;
    document.getElementById("resp").innerHTML= sum;
}

function multiplicar(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum= num1*num2;
    document.getElementById("resp").innerHTML= sum;
}

function divide(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum= num1/num2 ;
    document.getElementById("resp").innerHTML= sum;
}
function potencia(){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let sum= ("La potencia de "+num1+" es: "+(num1)**2 +" y la potencia de "+num2+" es: "+(num2)**2);
    document.getElementById("resp").innerHTML= sum;
}

function limpiar(){
    document.getElementById ("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("resp").innerHTML="";
}

function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena= fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
}
document.getElementById("fecha").innerHTML= muestraFecha();

function muestraHora(){
    let hora;
    hora=new Date();
    let cadena=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    return cadena;
}
document.getElementById("hora").innerHTML= muestraHora(); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
/* function muestraFecha(){
    let fecha;
    fecha=new Date();
    let cadena= fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
    return cadena;
}
document.getElementById("fecha").innerHTML= muestraFecha();

function multiplicar(){
    let A=parseFloat(document.getElementById("num1").value);
    let B=parseFloat(document.getElementById("num2").value);
    let C=parseFloat(document.getElementById("num3").value);
    let soluc1= (-B+Math.sqrt(Math.pow (B,2)-4*A*C))/(2*A);
    let soluc2= (-B-Math.sqrt(Math.pow (B,2)-4*A*C))/(2*A);

    document.getElementById("resp").innerHTML= soluc1;
    document.getElementById("resp2").innerHTML= soluc2;

    
}

function LIMP(){
    document.getElementById ("num1").value="";
    document.getElementById ("num2").value="";
    document.getElementById ("num3").value="";
    document.getElementById ("resp").innerHTML="";
    document.getElementById ("resp2").innerHTML="";
}
function muestraHora(){
    let hora;
    hora=new Date();
    let cadena=hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
    return cadena;
}
document.getElementById("hora").innerHTML=muestraHora();



function multiplicar(){
    let A=parseFloat(document.getElementById("num1").value);
    let B=parseFloat(document.getElementById("num2").value);
    let C=parseFloat(document.getElementById("num3").value);
    calc2grado(A,B,C);

function calc2grado(a,b,c){
    discriminante= Math.pow(b,2)-4*a*c;
    }

} */

/* 
function multiplicar(){
    let A=parseFloat(document.getElementById("num1").value);
    let B=parseFloat(document.getElementById("num2").value);
    let C=parseFloat(document.getElementById("num3").value);
    let soluc1= (((-1*B)+(Math.sqrt(Math.pow (B,2))-(4*A*C))))/(2*A);
    let soluc2= (((-1*B)-(Math.sqrt(Math.pow (B,2))-(4*A*C))))/(2*A);

    document.getElementById("resp").innerHTML= soluc1;
    document.getElementById("resp2").innerHTML= soluc2;
} */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EJERCICIO DE ARRAYS

/* let ciudad=["Lima","Arequipa","Trujillo"];
console.log(ciudad);                //GENERA EN LA WEB LOS ELEMENTOS PARA CORROBORAR
document.write(ciudad+ "<br>");         //IMPRIME LOS VALORES DE CIUDAD
document.write(ciudad.length+"<br>");       // CUENTAS LOS VALORES E IMPRIME

// ciudad[3]="Lambayeque";   hace que al indicar ello elimine la posicion 3 y sea reemplazado por lamb.

document.write(ciudad[1]+"<br>");  */          // IMPRIME TRUJILLO COMO POSICION 2

//ciudad.push("Cuzco","Puno");
//document.write(ciudad+ "<br>");             //genera el aumento de la nueva ciudad al final
//document.write(ciudad.push());           // parecido a length contando valores pero con lo agregado      

//ciudad.pop();                          //genera la eliminacion del ultimo valoro
//document.write(ciudad+ "<br>");         // impre los valores menos el ultimo por eliminacion
//document.write(ciudad.pop()+ "<br>");             // otra funcion no borra sino muestra el ultimo valor

//ciudad.unshift("Piura");    //añade el valor piura al inicio 
//document.write(ciudad);     //Imprime piura y los demas valores 

//ciudad.shift();                 // hace la eliminacion del primer elemento que es lima dejando ARE,TRUJI
//ocument.write(ciudad);

//********************************************************************************************** */
//let numeros=[];   //Otra forma de crear array sin valores tipo #

/* numeros[0]=8;
numeros[1]=2;
numeros[2]=45;
numeros[3]=1;
numeros[4]=9; */


/* document.write(numeros+"<br>");     //imprime los valores acorde a las posiciciones
numeros.sort();             //pero al poner la variable sort  al imprimir lo ordena de < a > los numeros
document.write(numeros+"<br>");  //generando el orden tmbien de orden alfabetico respetando si MAYUS O MINIS.


const fc=function(a,b){             // la funcion genera que el 45 sea reconocido como numero 
    return a-b;
}
numeros.sort(fc);
document.write(numeros); */



///////////////////////////////////////////////////////////////////////////////////////////////////7
/* let numeros=[];

for(let i=0;i<6;i++){
    numeros[i]=prompt("Ingrese numeros:");
}

const fc=function(a,b){           //todo ello genera te piden # 6 digitos ascendiente y lo convierte 
                        /// en  numero de orden de < a >
    return a-b;
}
numeros.sort(fc);
document.write(numeros); */
//////////////////////////////////////////////////////////////////////////////////////////////777777777777
//********************************************************************************************** */

/* let numeros=[];

let num=prompt("¿Cuantos valores deseas ingresar a la ARRAY?");
// se agrega una variable antes para solicitar un valor prederminado de cuantos # digitar
for(let i=0;i<num;i++){ //se reemplaza para que solo te solicite cuantos# deseas
    numeros[i]=prompt("Ingrese numeros:");
}

document.write(numeros+"<br>"); // imprime tal cual ingreses los numeros 


const fc=function(a,b){          
    return a-b;
}
numeros.sort(fc);               //hace que imprima en orden de < a >
document.write(numeros); */

//********************************************************************************************** */

function cargarEjemplo(){
    document.getElementById("numerosEjem").value="6,99,56,15,68";
}

function reiniciar(){
    location.reload();
}

function calcular(){
    let valores_array=document.getElementById("numerosEjem").value.split(/,/);

    let mayor= -Infinity;
    let menor= +Infinity;
    let suma=0;
    let promediar=0;
//suma
for(let i=0; i<valores_array.length;i++){
    suma=parseInt(valores_array[i])+suma;
}


//mayor
for(let i=0; i<valores_array.length;i++){
    if(parseInt(valores_array[i])>mayor) mayor=valores_array[i];

}
//menor
for(let i=0; i<valores_array.length;i++){
    if(parseInt(valores_array[i])<menor) menor=valores_array[i];

}

document.getElementById("Resultado").innerHTML="La suma es: "+suma+"<br>"+"El mayor numero es: "+mayor+"<br>"+"El mayor numero es: "+menor+"<br>"+"El promedio numero es: "+promediar;

}

//************************************************************************************************* */

let frases=["Solo sé que nada sé","El que la persigue la consigue","Dime con quien andas y te dire quien eres","El que estudia triunfa"];
let indice=0;
    function muestraFrase(){
        indice++;
        if(indice>=frases.length){            //SI 1 ES > A 4 (INDICE = 0+1, FRASE= 4)
        indice=0;
        }  
    // linea para imprimir en html apartado frase la variable frase y que cambie solo con indice        
       document.getElementById("frases").innerHTML=frases[indice];
}
//para llamar la frase no importa el orden ya q es una funcion
//nueva funcion especial para llamar ala func. y en cuanto tiempo q trabaja 1s= 1000milisegu.
setInterval(muestraFrase,2000);
//*************************************************************************************** */

//hora avanzado
setInterval(actualizarHora,1000);

function muestraHora(){
    let TIEMPO;
    TIEMPO=new Date();
    let cadena=TIEMPO.getHours()+":"+TIEMPO.getMinutes()+":"+TIEMPO.getSeconds();
    return cadena; 
}
function actualizarHora(){
    document.getElementById("hora").innerHTML=muestraHora();
}

//*************************************************************************************** *///*************************************************************************************** */

/* let colores=[];

//  document.getElementById("listaC").innerHTML="<li>"+nom+"</li>"; modo normal

function agregaColor(evt){      //nom captura el la varie volores generandoi un valor
    evt.preventDefault();


    let nom=document.getElementById("colores").value;

    if(nom==""){//si nom es vacio que indique
        alert("El campo no puede estar vacio");// esta aalerta si esta vacio
        //si caso contrario 
    }else if(!existeNombre(nom)){
        let opcion ="<li>"+nom+"</li>";
        let lista=document.getElementById("listaC");

        lista.innerHTML+=opcion;
        colores.push(nom);  //la variable colores recibe al final con push nom
    }else{
        alert("El colore existe");
    }
}
//una funcion para ayudar a mejorar la busqueda
function existeNombre(nombre){
    //busca nombre en la array
    //recorre la array para recibir elemento y lo coloca en la const elente...
    for(let i=0;i<colores.length;i++){  //si no es igual da la alert pero si tiene valor figura
        const elemento=colores[i];
        if(elemento.trim().toLoweCase()===nombre.trim().toLoweCase()){
            return true;
        }
    }
    return false;
} */


let colores=[];

function agregaColor(evt){
    evt.preventDefault();

    let nom=document.getElementById("colores").value;

    if(nom==""){
        alert("El campo no puede estar vacio");
    }else if(!existeNombre(nom)){
        let opcion ="<li>"+nom+"</li>";
        let lista=document.getElementById("listaC");
        lista.innerHTML+=opcion;colores.push(nom);
    }else{alert("El color existe");
}
}
function existeNombre(nombre){
    //busca nombre
    for(let i=0;i<colores.length;i++){
        const elemento=colores[i];
        if(elemento.trim().toLowerCase()===nombre.trim().toLowerCase()){
            return true;
        }
    }return false;
}

//////////*********************************************************************************** */
//CRONOMETRO


let horas = 0;
let minutos = 0;
let segundos = 0;
let centesimas = 0;

function inicio () {
	CONTROLAR = setInterval(cronometro,10);
	document.getElementById("INIC").disabled = false;
	document.getElementById("PAR").disabled = false;
	document.getElementById("CONT").disabled = false;
	document.getElementById("REINIC").disabled = false;
}
function parar () {
	clearInterval(CONTROLAR);
	document.getElementById("PAR").disabled = false;
	document.getElementById("CONT").disabled = false;
}
function reinicio () {
	clearInterval(CONTROLAR);
    Horas.innerHTML = "00";
    Minutos.innerHTML = ":00";
    Segundos.innerHTML = ":00";
	Centesimas.innerHTML = ":00";
	document.getElementById("INIC").disabled = false;
	document.getElementById("PAR").disabled = false;
	document.getElementById("CONT").disabled = false;
	document.getElementById("REINIC").disabled = false;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}