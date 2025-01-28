import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Componente Login: Maneja el formulario de inicio de sesión.
 * @returns {JSX.Element} Formulario de login.
 */
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  /**
   * Maneja el evento de inicio de sesión.
   * @param {Event} e - Evento del formulario.
   */
  const handleLogin = (e) => {
    e.preventDefault();
    // Validación básica (puedes mejorarla)
    if (username === "usuario" && password === "contraseña") {
      navigate("/home"); // Redirige a la página de inicio
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión Techcol</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Iniciar Sesión
        </button>
      </form>
      <div className="card">
        {/* [Image of Medicamento 1] */}
        <h3>Datos Acceso</h3>
        <p>Usuario: usuario.</p>
        <p>contraseña: contraseña</p>
      </div>
    </div>
  );
};

export default Login;
