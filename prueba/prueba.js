
/*const a =[]
const b =["frutas", 1, 2,3, false, "hola mundo",["A","B","C"] ]
console.log(a);
console.log(b);
console.log(b[5]);
console.log(b[6][2]);*/


//OBJETOS
/*dentro de un objeto de las variables se le van a llamar
 atributos/propiedades  y alas funciones se les llaman metodos*/
/*const frank = {
  nombre:"Frank",
  apellido:"Bautista",
  edad:12,
  pasatiempos: ["jugar","drogarse","irse de parranda con preciosas"],
  soltero:true,
  contactos:{
    email:"frankbautistahuacho@gmail.com",
    movil:"51 965822542"
  },
  saludar: function(){
    console.log(`Hola :)`)

  },

  decirMiNombre:function(){
   console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`);
  }
}

console.log(frank["nombre"]);
console.log(frank.pasatiempos);
console.log(frank.pasatiempos[2]);
console.log(frank.contactos.email);
frank.saludar();
frank.decirMiNombre();

//llama a todas las llaves que se encuetren dentro del objeto
console.log(Object.keys(frank));
//llama a todo los valores que se encuentran dentro del objeto
console.log(Object.values(frank));
//sirve para buscar las llaves o valores de un objeto
console.log(frank.hasOwnProperty("nombre"));
console.log(frank.hasOwnProperty("años"));*/




/*OPERADORES*/
/*Aritmeticos:+-* /%(). */

/*let a = 5+(5-10)*3;
let modulo = 5%2 // devuelve el residuo 
console.log(a);
console.log(modulo);*/


/*RELACIONAES
>, <, >=, <=, ==, ===, !=, !== */

/*console.log(8 > 9);
console.log(8 < 9);
console.log(8 >= 9);
console.log(8 <= 9);// comprueba si el valor es menor o igual*/


/* 
= 1 igual asignacion de variable
== 2 iguales comparacion de valores
===3 iguales comparacion de varoles y tipo de dato sea (string boleean o nummer)
*/

/*console.log(7==7);
console.log("7"==7);
console.log("7"===7);*/



/*INCREMENTO DECREMENTO*/
let i = 1;

/*i = i + 2; //= 3*/
/*i += 3; //=4*/
/*i/= 3; //= 0.3333
console.log(i);*/



/*OPERADOR IF, ELSE IF, ELSE,*/ 
/*
Déjame mimir 0hrs - 5hrs
Buenos días 6hrs - 11hrs
Buenas tardes 12hrs - 17hrs
Buenas noches 18hrs - 23 hrs*/
let hora = 4
if (hora >= 0 && hora <=5){
  console.log("Déjame mimir");
  
}else if (hora >= 6 && hora <=11){
  console.log("Buenos días");
}else if (hora >=12 && hora <= 17){
  console.log("Buenas tardes");
}else {
  console.log("Buenas noches");
}






/*OPERADOR TERNARIO (condición) ? verdadero : falso*/
let edad = 18;
console.log("operador ternario");
let eresMayor = (edad >= 18)
?"Eres mayor de edad"
:"Eres menor de edad";
console.log(eresMayor);


/*SWITCH - CASE */
/*
Domingo: 0
Lunes: 1
Martes: 2
Mieroles: 3
Jueves: 4
Viernes: 5
Sabado: 7*/


let dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  case 4:
    nombreDia = "Jueves";
    break;
  case 5:
    nombreDia = "Viernes";
    break;
  case 6:
    nombreDia = "Sábado";
    break;
  case 7:
    nombreDia = "Domingo";
    break;
  default:
    nombreDia = "Día inválido";
}

console.log(`Hoy es ${nombreDia}` );





















/*const frutas = ["Pera", "Manzana", "Uva"]


frutas.push("higo")
console.log(frutas);

frutas.pop();
console.log(frutas);




frutas.forEach (function (elemento, index){
    console.log(`<li id="${index}">${elemento}</li>`);
})

i= 2;
//i++; console.log(i);

i--;
console.log(i);


console.log(("9"=== 9)|| (9 === 9));




function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"*/
  