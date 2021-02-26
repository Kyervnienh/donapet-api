// usuario.js

/** Clase que representa a un usuario */
class Usuario {
    constructor(id_usuario, nombre, edad, correo, telefono, direccion, ocupacion, rol) {
        this.id_usuario = id_usuario; // número de indenficación del usuario
        this.nombre = nombre; // nombre del usuario
        this.edad = edad; // edad del usuario
        this.correo = correo; // correo electronico
        this.telefono = telefono; // número de telefono
        this.direccion = direccion; // direccion del usuario
        this.ocupacion = ocupacion; // ocupacion del usuario
        this.rol = rol; // rol del usuario (donador, admin)
    }

    // Metodos del donador

    consultarOrganizaciones(){
        // Consulta todas las organizaciones disponibles para donar
    }

    agregarDonacion(){
        // Agrega una donación a la institución de su preferencia
    }

    consultarDonaciones(){
        // Consulta las donaciones que el usuario ha realizado
    }

    cancelarDonacion(){
        // Cancela la donación
    }

    modificarDonacion(){
        // Modifica la donación
    }

    // Metodos del administrador

    agregarOrganizacion(){
        // Agrega una nueva organizacion
    }

    modificarOrganizacion(){
        // Modifica una organizacion existente
    }

    eliminarOrganizacion(){
        // Elimina una organizacion existente
    }

    aprobarSolicitud(){
        // Aprueba solicitudes de donacion
    }
}