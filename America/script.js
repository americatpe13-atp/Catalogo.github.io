/*Cargar la información del televisor dentro de un array llamado productos*/
const productos = [
    {
      nombre: 'BLACKPINK - SQUARE UP"',
      descripción: 'BLACKPINK - SQUARE UP [Pink ver.] (1st Mini Album)',
      precio: 1345.28,
      imagen: 'Album 1.jpeg'
    },
    {
      nombre: '"BlackPink The Album"',
      descripción: ' CD + Booklet (96 P) + Postcard Set + Credits Sheet',
      precio: 899.99,
      imagen: 'Album 2.jpeg'
    },
    {
      nombre: 'JVALBUM BORN PINK X BLACKPINK"',
      descripción: ' 2º álbum, versión box set, CD + póster + libro de fotos + cancionero tipo acordeón + tarjeta fotográfica grande ',
      precio: 879.00,
      imagen: 'Album 3.jpeg'
    },
    {
      nombre: ' miniálbum de Blackpink [Kill This Love]',
      descripción: ' Paquete de CD, fotolibro, tarjeta fotográfica, póster plegado con beneficio, juego de pegatinas decorativas adicionales',
      precio: 949.99,
      imagen: 'Album 4.jpeg'
    }
  ];
 
/*crear las tarjetas mediante la función crearTarjetaProducto*/
const catalogo = document.getElementById('catalogo');


function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';


  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;


  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;


  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;


  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = '$' + producto.precio.toFixed(2);


  const boton = document.createElement('button');
  boton.className = 'btn-comparar';
  boton.textContent = 'Comprar';


  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);


  return card;
}
/*3. Mediante una función llamada renderizarCatalogo se encargará de tomar todos los datos de tus
productos y dibujarlos (o renderizarlos) como tarjetas HTML dentro del contenedor principal de tu
página.Utilizando un bucle para procesar cada producto individualmente y agregarlo al catálogo.*/


function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
 
/*4. por ultimo se llamara a la función renderizarCatalogo para cargar la pagina*/
window.onload = renderizarCatalogo;


