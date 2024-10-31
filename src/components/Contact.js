// src/Contact.js
import React from "react";

function Contact() {
  return (
    <div>
      <h1>Kontakt</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Nachricht:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Senden</button>
      </form>
    </div>
  );
}

export default Contact;
