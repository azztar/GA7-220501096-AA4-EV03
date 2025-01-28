import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Menú falso */}
      <nav className="menu">
        <ul>
          <li>TECHCOL</li>
          <li>Categorías</li>
          <li>Ofertas</li>
          <li>Contacto</li>
        </ul>
      </nav>

      <h2>Bienvenido TECHCOL</h2>
      <p>Explora nuestro catálogo de medicamentos disponibles.</p>

      {/* Sección de cards */}
      <div className="card-container">
        {/* Card 1 */}
        <div className="card">
          {/* [Image of Medicamento 1] */}
          <h3>Medicamento 1</h3>
          <p>Descripción breve del medicamento 1.</p>
          <p>Precio: $XX.XX</p>
          <button>Agregar al carrito</button>
        </div>

        {/* Card 2 */}
        <div className="card">
          {/* [Image of Medicamento 2] */}
          <h3>Medicamento 2</h3>
          <p>Descripción breve del medicamento 2.</p>
          <p>Precio: $YY.YY</p>
          <button>Agregar al carrito</button>
        </div>

        {/* Card 3 */}
        <div className="card">
          {/* [Image of Medicamento 3] */}
          <h3>Medicamento 3</h3>
          <p>Descripción breve del medicamento 3.</p>
          <p>Precio: $ZZ.ZZ</p>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
