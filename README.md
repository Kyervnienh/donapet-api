<h1 align="center">Donapet API</h1>


## Proposito Principal de la API

El propósito  principal del proyecto es desarrollar una API (Application Programming Interface) que permita
a un usuario “donador” realizar donativos a diferentes organizaciones que protegen a los animales y promueven el trato ético hacia ellos y sobretodo velar por su vida y salud.

Cuando un usuario quiera hacer un donativo, este podra elegir la organización y cantidad que desee donar. Además de modificar los datos de su donación e incluso cancelar la donación.


## Historias de Usuario

### Usuario donador
1. Como usuario "donador" requiero agregar un donativo a una organización.
2. Como usuario "donador" requiero modificar los datos de mi donativo.
3. Como usuario "donador" requiero poder cancelar mi donativo.
4. Como usuario "donador" requiero consultar todos mis donativos.
5. Como usuario quiero ver todas las organizaciones a las que se puede hacer un donativo.

### Usuario Administrador

1. Como administrador requiero agregar nuevas organizaciones
2. Como administrador requiero modificar información de las organizaciones.
3. Como administrador requiero eliminar alguna organización.
4. Como administrador requiero consultar las solicitudes de donación para  verificar y aceptarlas.

## ¿Qué tipos de usuarios tendrá nuestro sistema?

Usuario “DONADOR”: Este realizará las donaciones a las diferentes organizaciones disponibles.

Usuario “ADMINISTRADOR”: Este aprobará las solicitudes de donación y registrará a las diferentes organizaciones.


## ¿Qué acciones puede realizar cada usuario?

### DONADOR:  

- Realizar una nueva donación a la organización que el usuario elija.
- Consultar el listado de organizaciones disponibles.
- Modificar los datos de su solicitud de donación.
- Cancelar su donación.
- Consultar todos los donativos que ha hecho.

### ADMINISTRADOR: 
 
- Registrar organizaciones disponibles para recibir donativos.
- Modificar información de las organizaciones.
- Eliminar información de las organizaciones.
- Consultar las solicitudes de donativos, verificarlas  y aprobarlas.
 
## Entidades Principales 

En la siguiente imagen se representa graficamente las entidades principales que se identificaron en el proyecto.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/entidades.png" alt="entidades" width="50%" height="50%" />
    <p></p>
</div>

Para representar los atributos de cada entidad creamos un diagrama de Entidad-Relación, el cual nos permite representar los atributos que tendran nuestras entidades definidas en la imagen anterior como las relaciones que habrá entre ellas. 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/entidad_ralacion.png" alt="entidad relacion" width="100%" height="70%" />
    <p></p>
</div>

## Modelo Relacional

Para facilitar el diseño conceptual de nuestra base de datos realizamos el modelo relacional de nuestro proyecto.

El modelo relacional conciste en un grupo de tablas que representan los datos y relaciones que existen entre ellos.

Cada tabla del modelo relacional se compone  de columnas  que representan los atributos de la entidas y filas que representan registros o truplas.

En el modelo relacional siempre existe un identificador único, llamado llave primaria que ayudan a establecer las relaciones en nuestras tablas.

En el siguiente diagrama mostramos el modelo de entidadrelacion de nuestro proyecto: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/modelo_relacional.png" alt="entidad relacion" width="100%" height="70%" />
    <p></p>
</div>

<h2 align="center">Desarrollo del Proyecto</h2>

[Donapet API](https://donapet.herokuapp.com/v1) lo desarrollamos utilizando diferentes tecnologías que a continuación describimos.


- :bulb: **NodeJs**: es un entorno de ejecución de JavaScript back-end, multiplataforma y de código abierto que se ejecuta en el motor V8 y ejecuta código JavaScript fuera de un navegador web. 

NodeJs nos permitio definir la base de nuestro proyecto, es decir el entorno de desarrollo de nuestra API,asi como definir los endpoint de nuestra api.

Es decir, definimos nuestros: controllers,modelos y rutas por cada entidad.

Para ello fue necesario utilizar los siguientes paquetes de npm.

```bash
npm install express body-parser cors
```
y nodemon, el cual nos sirvio para agilizar el desarrollo, ya que recarga nuestro server de manera automática.

```bash
npm install -g nodemon
```

- :scroll: **MySql**: Es un sistema para gestionar bases de datos que cuenta con una amplia popularidad.

La cual nos ayudo a crear nuestra base de datos y cada una de las tablas necesarias, utilizando comandos como:

```bash
create database restaurante;

use restaurante;

CREATE TABLE *nombre_tabla*(*atributo1 tipo* [*restricción*], *atributo2...);*
```


- :art: **Postman**: es un cliente de API popular que facilita a los desarrolladores crear, compartir, probar y documentar API.

El cual nos ayudo a realizar las peticiones a nuestra base de datos.

- :gear: **Heroku**: es una plataforma que nos permite saltarnos muchos pasos de configuración de arquitectura y lanzar una aplicación en sencillos pasos.


- :gear: **Sequelize**:  es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.

Para ello fue necesario utilizar los siguientes paquetes de npm.

```bash
npm install --save sequelize
```
y

```bash
npm install --save mysql2
```

## Uso de la API

A continuación ejemplicamos un poco sobre de la API y sus diferentes funcionalidades.

Tomaremos como ejemplo un par de las historias de usuario.

#### Ejemplo 1

- Como usuario "donador" requiero agregar un donativo a una organización.

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **POST** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/donaciones** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman2.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

3. En el apartado de Body de postman agregamos la siguiente estructura (formato JSON) de nuestra solicitud de resgitro de una nueva donacion:

```bash
{
    "id_usuario": 1,
    "id_organizacion": 4,
    "cantidad": "18928",
    "estatus": "EN PROCESO"
}
```
Es importante aclarar que no es necesario agregar el id de nuestra donación ya que este se va autoincrementando.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesPOST.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

4. Enviar la petición con el boton azul y de no existir errores se obtendrá la un codigo 200 y el cuerpo de lo que acabamos de agregar.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/modelo_relacional.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

#### Ejemplo 2

- Como administrador requiero consultar las solicitudes de donación para verificar y aceptarlas.

En este ejemplo solo hariamos la consulta de todas las donaciones, para modificar la misma sera cambiar la ruta por: 

**/donaciones/id** además de cambiar el REQUEST al metodo **PUT**.

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **GET** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/donaciones** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesGET.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

3. Al ser una petición get en este caso no necesitamos enviar un body por lo cual, una vez de hacer el paso anterior solo será necesario enviar la solicitud y de no existir errores se obtendrá la un codigo 200 y el cuerpo de lo que acabamos de agregar.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesGETResult.png" alt="entidad relacion" width="100%" height="70%" />
    <p></p>
</div>

#### Ejemplo 3

- Como usuario "donador" requiero modificar los datos de mi donativo.

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **PUT** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/donaciones/id** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesPUT.png" alt="entidad relacion" width="100%" height="70%" />
    <p></p>
</div>


3. En el apartado de Body de postman agregamos la siguiente estructura con los datos que queremos modificar de dicha donación en formato JSON:

```bash
{
    "id_usuario": 1,
    "id_organizacion": 5,
    "cantidad": "100",
    "estatus": "EN PROCESO"
}
```
En este caso cambiamos el estatus y la organización a la cual se hara la donación (del ejemplo 2).


<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/develop/src/assets/PUTDONACIONES.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

4. Enviar la petición con el boton azul y de no existir errores se obtendrá la un codigo 200 yun mensaje de "OK", como se muestra a continuación.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/develop/src/assets/PUTRESULT.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

#### Ejemplo 4

- Como usuario "donador" requiero poder cancelar mi donativo.

Pasos: 

1. Abrir Postman y crear un nuevo REQUEST.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/postman1.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>

2. Crear una nueva solicitud **DELETE** agregar la ruta de la API (https://donapet.herokuapp.com/v1) y agregar **/donaciones/id** como se muestra a continuación: 

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/feat/README/src/assets/donacionesDelete.png" alt="entidad relacion" width="100%" height="100%" />
    <p></p>
</div>

3. Al ser una petición **PUT** en este caso no necesitamos enviar un body por lo cual, una vez de hacer el paso anterior solo será necesario enviar la solicitud y de no existir errores se obtendrá la un codigo 200 y un mensaje de "OK".

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/develop/src/assets/DELETERESULT.png" alt="entidad relacion" width="50%" height="70%" />
    <p></p>
</div>


**Nota:** en los ejemplos se muestra la ruta http://localhost:3000/v1/donaciones/ ya que se estaba probando de manera local, pero esta se debe cambiar por la siguiente ruta: https://donapet.herokuapp.com/v1


### Anotaciones:

Endpoint para la la tabla Usuarios:

- **GET** https://donapet.herokuapp.com/v1/usuarios/
- **POST** https://donapet.herokuapp.com/v1/usuarios/
- **PUT** https://donapet.herokuapp.com/v1/usuarios/id
- **DELETE** https://donapet.herokuapp.com/v1/usuarios/id


Endpoint para la la tabla Organizaciones:

- **GET** https://donapet.herokuapp.com/v1/organizaciones/
- **POST** https://donapet.herokuapp.com/v1/organizaciones/
- **PUT** https://donapet.herokuapp.com/v1/organizaciones/id
- **DELETE** https://donapet.herokuapp.com/v1/organizaciones/id



## Desarrolladores


| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/Kyervnienh)</br>Kevin Henry López Vázquez| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="Firefox" width="24px" height="24px" />](https://github.com/JesrigPineda)</br>Jesrig Soid Pineda Salinas| [<img src="https://raw.githubusercontent.com/raquellvazquez/to-do/develop/src/assets/boy.png" alt="Chrome" width="24px" height="24px" />](https://github.com/raquellvazquez)</br>Laura Raquel Vazquez Sanchez| </br> ||
| --- | --- | --- | --- | --- |
| kevin.kyervnienh@gmail.com |  Js.pineda.sa@gmail.com| raquelskrats@gmail.com |

<br>

## Swagger

Para documentar nuestra API utilizamos la herramienta de Swager.

Para poder visualizar la documentación solo es necesario entrar al siguiente enlace: https://donapet.herokuapp.com/api-docs.

<div align="center">
    <br>
    <img src="https://raw.githubusercontent.com/Kyervnienh/donapet-api/main/src/assets/swaggers.png" width="50%" height="70%" />
    <p></p>
</div>



<p align="center">THANK YOU FOR USING DONAPET API</p>
