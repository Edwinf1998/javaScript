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





let IG =0.18;

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

result=sum*IG

document.write("<h1>"+"la Empresa KREA"+"</h1>"); //empresa
document.write("Nuestro cliente "+N+" "+A+" realiza la compra de: "+"<p>"); 

document.write(p1+" = "+pre1+"<br>");
document.write(p2+" = "+pre2+"<br>");
document.write(p3+" = "+pre3+"<br>");
document.write(p4+" = "+pre4+"<br>");
document.write(p5+" = "+pre5+"<p>");

document.write("Total a pagar "+sum+" con un IGV de "+result);





