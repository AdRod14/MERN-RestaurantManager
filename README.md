# MERN-RestaurantManager

![Proyecto en acción](https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) <!-- Puedes agregar una imagen o un GIF de tu proyecto aquí -->

## Contenido
- [Instrucciones de Uso](#Instalación)
- [Ejecutar Proyecto]( #Ejecución)
- [Licencia](#Licencia)

## Descripción General del Proyecto

MERN-RestaurantManager es una plataforma  diseñada para gestionar eficientemente las operaciones y servicios de un restaurante. Con un enfoque en la facilitación de creación de menús y un registro de cuentas rápido, este sistema proporciona una interfaz intuitiva para optimizar la administración restaurantera.

## Funcionalidades Específicas

- Gestión de cuentas de clientes: Creación, lectura, edición y eliminación de cuentas de clientes.
- Gestión de menú de restaurantes: Creación, lectura y edición de menús.
- Interfaz de usuario: Admin & guest layout.
- Búsqueda de cuentas de clientes: Se permite consultar la información de cuentas pasadas, utilizando cómo parámetros de búsqueda la fecha y número de mesa.
- Generación de recibos: Generación de recibos de cuentas de clientes.

## Recursos/Tecnologías Utilizadas

- NodeJS: Entorno de ejecución de JavaScript del lado del servidor.
- npm: Sistema de gestión de paquetes para Node.js. Permite a los desarrolladores instalar, compartir y gestionar dependencias de software en sus proyectos. 
- Express: Marco de aplicación web para Node.js. Proporciona una capa adicional de abstracción sobre Node.js, simplificando el manejo de rutas, peticiones HTTP y respuestas.
- React: Biblioteca de JavaScript utilizada para construir interfaces de usuario interactivas y de una sola página (SPA). 
- MongoDB: Sistema de gestión de bases de datos NoSQL que utiliza un modelo de documento para almacenar datos.
- Mongoose: Biblioteca de modelado de objetos para MongoDB y Node.js.
- Tailwind: Framework de utilidades de CSS que simplifica el desarrollo web al proporcionar clases predefinidas para estilos comunes.


## Instalación

#### Clonar el repositorio

En la carpeta donde vas a almacenar el proyecto ejecuta el siguiente comando (GNU/Linux o MacOS):
```
git clone https://github.com/AdRod14/MERN-WebHotelManager.git
```

#### Dependencias

Asegurate de tener instalado una versión de Node.js reciente, actualmente estamos trabajando con la versión 21.5.0:
```
node --version
```
En caso de no contar con Node.js puedes instalarlo de acuerdo a tu distribución.

Una vez que tengas Node.js ubicate en el directorio MERN-RestaurantManager y ejecuta los siguientes comandos:
```
cd backend/
npm install package.json
```
```
cd ../frontend/
npm install package.json
```
#### MongoDB Atlas
Este proyecto utiliza MongoDB Atlas, para que funcione correctamente asegurate de tener una cuenta activada. En la carpeta backend crea un archivo .env y agrega el siguiente código:

```
cd ../backend/
touch .env
```
adentro del archivo .env pega el siguiente código:
```
PORT=4000
MONGO_URI= <tu link de conexión con la base de datos>
```
Finalmente guarda el archivo.

## Ejecutar Proyecto

Para ejecutar el proyecto, desde la carpeta de backend ejecuta el siguiente comando:
```
npm run dev
```
Luego cambia a la carpeta de frontend y ejecuta este segundo comando:
```
npm start
```

## Contribuciones

Si deseas contribuir a este proyecto, ¡estamos abiertos a colaboraciones! Puedes enviar pull requests o informar sobre problemas (issues) que encuentres.

## Licencia

Este proyecto está bajo la Licencia MIT, lo que significa que es de código abierto y puedes utilizarlo, modificarlo y distribuirlo libremente. A continuación, se proporciona un resumen de los términos de la Licencia MIT en la siguiente pestaña.
