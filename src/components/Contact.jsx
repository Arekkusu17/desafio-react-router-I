import React, { useState } from "react";
import ErrorBanner from "./Error";
import swal from 'sweetalert';

const Contact = () => {

  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "" || description.trim() === "") {
      setError("Rellena todos los campos!");
      return;
    } else {
      setError("")
      swal("¡Se ha enviado tu consulta!", "Nos pondremos en contacto para ayudarte.", "success")
    }
  }


  return (
    <section className="contact-page">
      <div className="container">
        <h1>Cuentanos, ¿en que te podemos ayudar 💭?</h1>
        <form onSubmit={handleSubmit} className="form-group">
          <div className="mb-3">
            <h4 className="form-label">Correo:</h4>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <h4 className="form-label">Descripción:</h4>
            <textarea onChange={(e) => setDescription(e.target.value)} value={description} className="form-control description-box" id="descInput" />
          </div>
          {error !== "" ? <ErrorBanner message={error} /> : null}
          <button type="submit" className="btn btn-danger">Enviar</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
