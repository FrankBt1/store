// Selecciona el elemento de navegación por su ID
const navSelector = document.getElementById("nav");

// Define la variable options para guardar un array de objetos con los datos de los botones de navegación
const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Productos", linkTo: "./products.html" },
  { title: "Contacto", linkTo: "./contact.html" },
  { title: "Mis compras", linkTo: "./purchases.html" },
];

// Itera sobre cada objeto en options para crear las opciones de navegación dinámicamente
for (let option of options) {
  // Crea un elemento <li> para cada opción de navegación
  const listItem = document.createElement("li");

  // Crea un elemento <a> dentro del <li> para el enlace de navegación
  const anchor = document.createElement("a");
  anchor.textContent = option.title;
  anchor.href = option.linkTo;

  // Agrega el enlace <a> al elemento <li>
  listItem.appendChild(anchor);

  // Agrega el elemento <li> al elemento de navegación <ul>
  navSelector.querySelector("ul").appendChild(listItem);

  const footerSelector = document.getElementById("footer");

  const options = [
    {
      title: "Ofertas de la semana",
      linkTo: "./outlet.html",
      opts: ["Laptops", "Audífonos", "Auriculares"],
    },
    {
      title: "Como comprar",
      linkTo: "./how.html",
      opts: ["Formas de pago", "Envios", "Devoluciones"],
    },
    {
      title: "Costos y tarifas",
      linkTo: "./taxs.html",
      opts: ["Impuestos", "Facturación"],
    },
    {
      title: "Mis pedidos",
      linkTo: "./orders.html",
      opts: ["Pedir nuevamente", "Lista de deseos"],
    },
    {
      title: "Garantía de entrega",
      linkTo: "./warranty.html",
      opts: [],
    },
  ];
}
