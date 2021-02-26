/** Clase que representa una organización */

class Organizacion {
  constructor(
    id_organizacion,
    nombre,
    direccion,
    telefono,
    representante,
    correo
  ) {
    this.id_organizacion = id_organizacion; // número de indentificación de la organización
    this.nombre = nombre; // nombre de la organización
    this.direccion = direccion; // dirección
    this.telefono = telefono; // número de telefono
    this.representante = representante; // representante de la organización
    this.correo = correo; // correo electrónico
  }
}
