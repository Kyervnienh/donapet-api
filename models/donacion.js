/** Clase que representa una donacion */
class Donacion {
    constructor(id_donacion, id_donador, id_organizacion, cantidad, status) {
      this.id_donacion = id_donacion; // número de indentificación de la donacion
      this.id_donador = id_donador; // número de indentificación del donador
      this.id_organizacion = id_organizacion; // número de indentificación de la organización
      this.cantidad = cantidad; // cantidad de la donación
      this.status = status; // estado de la donacion
    }
}

module.exports = Donacion;