export class MensajeError {
  nombre;
  email;
  asunto;
  mensajes;

  constructor(nombre, email, asunto, mensajes) {
    this.nombre = nombre;
    this.email = email;
    this.asunto = asunto;
    this.mensajes = mensajes;
  }
}
