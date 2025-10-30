const productos = [
  {
    nombre: 'Godzilla Evolved',
    descripcion: 'Figura articulada con detalles precisos...',
    precio: 2724,
    imagen: 'godzillash'
  },
  {
    nombre: 'Shimo',
    descripcion: 'De la película "Godzilla x Kong: The New Empire"',
    precio: 5299,
    imagen: 'shimosh'
  },
  {
    nombre: 'Suko & Mothra',
    descripcion: 'Incluye soportes para mostrar las figuras volando.',
    precio: 2299,
    imagen: 'mothrash'
  },
  {
    nombre: 'Kong (2024)',
    descripcion: 'Con su icónica hacha y detalles de batalla.',
    precio: 1532,
    imagen: 'kongsh'
  }
];

const catalogo = document.getElementById('catalogo');

function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';

  const imagen = document.createElement('img');
  imagen.src = `imagenes/${producto.imagen}.jpg`;
  imagen.alt = producto.nombre;

  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;

  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;

  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = `$${producto.precio.toFixed(2)}`;

  const boton = document.createElement('button');
  boton.className = 'btn-comprar';
  boton.textContent = 'Comprar';

  card.append(imagen, titulo, descripcion, precio, boton);
  return card;
}

function renderizarCatalogo() {
  catalogo.innerHTML = '';
  productos.forEach(producto => {
    catalogo.appendChild(crearTarjetaProducto(producto));
  });
}

window.onload = renderizarCatalogo;
