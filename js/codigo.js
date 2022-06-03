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
alert("EL EJERCICIO NO EJECUTA CORRECTAMENTE")

let fijo = 0.20;
let claro = 0.40;
let movistar = 0.60;
let entel = 1.00;

let operador=prompt("DIGITE LA 1ra LETRA DEL OPERADOR A ELIGER: fijo - claro - movistar - entel");
let min=parseFloat(prompt("¿Cuantos minutos desea Consumir?"));


a= fijo *min
b= claro *min
c= movistar *min
d= entel *min

tot=operador*(a,b,c,d);

if(tot=a){
    document.write(`Costo por realizar llamada a FIJO es ${tot} centimos`);
}else if(tot=b){
    document.write(`Costo por realizar llamada a CALRO es ${tot} centimos`);
}else if(tot=c){
    document.write(`Costo por realizar llamada a MOVISTAR es ${tot} centimos`);
}else if(tot=d){
    document.write(`Costo por realizar llamada a ENTEL es ${tot} centimos`);
}else{
    document.write(`ERROR`);
}
